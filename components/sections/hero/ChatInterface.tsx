'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import SendIcon from '@mui/icons-material/Send'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import GroupIcon from '@mui/icons-material/Group'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'
import SettingsIcon from '@mui/icons-material/Settings'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import LockIcon from '@mui/icons-material/Lock'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

interface Message {
  id: string
  role: 'assistant' | 'user'
  content: string
}

const WELCOME_MESSAGE =
  'Hola, soy NAIA — la IA consultora de NextFlow. ¿En qué proceso de tu negocio puedo ayudarte hoy?'

const MESSAGE_LIMIT = 10
const STORAGE_KEY = 'naia_count'

function getCount(): number {
  try {
    return parseInt(sessionStorage.getItem(STORAGE_KEY) ?? '0', 10)
  } catch {
    return 0
  }
}

function incrementCount(current: number): number {
  const next = current + 1
  try { sessionStorage.setItem(STORAGE_KEY, String(next)) } catch { /* noop */ }
  return next
}

const CHIPS = [
  { id: 'ecommerce', label: 'Automatizar e-commerce',       Icon: ShoppingCartIcon },
  { id: 'sales',     label: 'Agente de ventas IA',           Icon: GroupIcon },
  { id: 'support',   label: 'Soporte 24/7 con IA',           Icon: HeadsetMicIcon },
  { id: 'internal',  label: 'Automatizar procesos internos',  Icon: SettingsIcon },
]

function NaiaAvatar() {
  return (
    <div
      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #7C3AED, #C026D3)',
        boxShadow: '0 0 14px rgba(139,92,246,0.55)',
      }}
    >
      <SmartToyIcon sx={{ fontSize: 13 }} className="text-white" />
    </div>
  )
}

function UserAvatar() {
  return (
    <div
      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
      style={{ background: 'rgba(71,85,105,0.6)', border: '1px solid rgba(100,116,139,0.3)' }}
    >
      <span className="text-[9px] font-bold text-slate-300 tracking-tight">TÚ</span>
    </div>
  )
}

export function ChatInterface() {
  const reduce = useReducedMotion()
  const [messages, setMessages] = useState<Message[]>([
    { id: 'welcome', role: 'assistant', content: WELCOME_MESSAGE },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [streamingText, setStreamingText] = useState('')
  const [chipsVisible, setChipsVisible] = useState(true)
  const [msgCount, setMsgCount] = useState(0)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    setMsgCount(getCount())
  }, [])

  const isBlocked = msgCount >= MESSAGE_LIMIT

  // Scroll interno del contenedor — nunca afecta el scroll de la página
  useEffect(() => {
    const el = messagesContainerRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, streamingText])

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || isStreaming || isBlocked) return

    const userMsg: Message = { id: `u-${Date.now()}`, role: 'user', content: trimmed }
    const nextMessages = [...messages, userMsg]

    setMsgCount(prev => incrementCount(prev))

    setMessages(nextMessages)
    setInputValue('')
    setChipsVisible(false)
    setIsStreaming(true)
    setStreamingText('')

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }

    abortRef.current = new AbortController()

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
        signal: abortRef.current.signal,
      })

      if (!res.ok || !res.body) {
        throw new Error('Error en la respuesta')
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let full = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        full += decoder.decode(value, { stream: true })
        setStreamingText(full)
      }

      setMessages(prev => [
        ...prev,
        { id: `a-${Date.now()}`, role: 'assistant', content: full },
      ])
    } catch (err: unknown) {
      if (err instanceof Error && err.name !== 'AbortError') {
        setMessages(prev => [
          ...prev,
          {
            id: `err-${Date.now()}`,
            role: 'assistant',
            content: 'Hubo un problema al conectar con NAIA. Por favor intenta de nuevo.',
          },
        ])
      }
    } finally {
      setIsStreaming(false)
      setStreamingText('')
    }
  }, [messages, isStreaming])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputValue)
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
    e.target.style.height = 'auto'
    e.target.style.height = `${Math.min(e.target.scrollHeight, 96)}px`
  }

  const bubbleVariants = {
    hidden:  { opacity: 0, y: reduce ? 0 : 8 },
    visible: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.22 } },
  }

  return (
    <div className="flex flex-col h-full w-full">

      {/* ── Messages ── */}
      <div
        ref={messagesContainerRef}
        role="log"
        aria-live="polite"
        aria-label="Conversación con NAIA"
        className="flex-1 min-h-0 overflow-y-auto py-3 space-y-4 pr-1"
        style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(139,92,246,0.2) transparent' }}
      >
        <AnimatePresence initial={false}>
          {messages.map(msg => (
            <motion.div
              key={msg.id}
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              {msg.role === 'assistant' ? <NaiaAvatar /> : <UserAvatar />}
              <div
                className={`max-w-[88%] text-sm leading-relaxed ${
                  msg.role === 'assistant'
                    ? 'text-slate-300 pt-1'
                    : 'px-4 py-2.5 rounded-2xl rounded-tr-sm text-white'
                }`}
                style={
                  msg.role === 'user'
                    ? {
                        background: 'linear-gradient(135deg, rgba(109,40,217,0.7) 0%, rgba(168,85,247,0.7) 100%)',
                        boxShadow: '0 2px 16px rgba(139,92,246,0.2)',
                      }
                    : undefined
                }
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Streaming bubble */}
        {isStreaming && (
          <div className="flex items-start gap-2.5">
            <NaiaAvatar />
            {streamingText ? (
              <p className="max-w-[88%] text-sm leading-relaxed text-slate-300 pt-1">
                {streamingText}
                <span className="inline-block w-0.5 h-3.5 bg-violet-400 ml-0.5 animate-pulse align-middle" />
              </p>
            ) : (
              <div className="flex gap-1 pt-2">
                {[0, 1, 2].map(i => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-violet-500"
                    animate={reduce ? {} : { y: [0, -5, 0] }}
                    transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18 }}
                  />
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* ── Input area ── */}
      <div className="flex-shrink-0 pt-2">
        {/* Hairline separator */}
        <div
          className="mb-3"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.3) 40%, rgba(139,92,246,0.3) 60%, transparent 100%)',
          }}
        />

        {/* Blocked state */}
        {isBlocked && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-3 py-4 px-4 rounded-2xl text-center"
            style={{
              background: 'rgba(139,92,246,0.07)',
              border: '1px solid rgba(139,92,246,0.2)',
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(139,92,246,0.15)' }}
            >
              <LockIcon sx={{ fontSize: 17 }} style={{ color: '#a78bfa' }} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-200 mb-0.5">
                Has llegado al límite de mensajes
              </p>
              <p className="text-xs text-slate-500">
                Agenda una llamada y resolvemos todas tus dudas.
              </p>
            </div>
            <button
              onClick={() => {
                const el = document.getElementById('contact')
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)',
                boxShadow: '0 0 20px rgba(139,92,246,0.35)',
              }}
            >
              <CalendarMonthIcon sx={{ fontSize: 15 }} />
              Agenda tu consultoría gratuita
            </button>
          </motion.div>
        )}

        {/* Pill input */}
        {!isBlocked && <form
          onSubmit={handleSubmit}
          className="flex items-end gap-3 rounded-2xl px-4 py-3"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={handleTextareaChange}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                sendMessage(inputValue)
              }
            }}
            placeholder="Cuéntame sobre tu negocio…"
            aria-label="Escribe tu mensaje a NAIA"
            autoComplete="off"
            rows={1}
            disabled={isStreaming}
            className="flex-1 text-sm resize-none outline-none min-h-[28px] leading-relaxed disabled:opacity-40"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#e2e8f0',
              WebkitBoxShadow: '0 0 0 1000px transparent inset',
              boxShadow: '0 0 0 1000px transparent inset',
              WebkitTextFillColor: '#e2e8f0',
              caretColor: '#a78bfa',
            }}
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isStreaming}
            aria-label="Enviar mensaje"
            className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-150"
            style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)' }}
            onMouseEnter={e => {
              if (!e.currentTarget.disabled) e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <SendIcon sx={{ fontSize: 13 }} className="text-white" />
          </button>
        </form>}

        {/* Suggestion chips */}
        <AnimatePresence>
          {!isBlocked && chipsVisible && (
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -4 }}
              transition={{ duration: 0.2 }}
              className="flex flex-wrap gap-2 mt-3"
            >
              {CHIPS.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => sendMessage(label)}
                  disabled={isStreaming}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-violet-300 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    background: 'rgba(139,92,246,0.07)',
                    border: '1px solid rgba(139,92,246,0.22)',
                    transition: 'background 0.18s, border-color 0.18s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(139,92,246,0.16)'
                    e.currentTarget.style.borderColor = 'rgba(139,92,246,0.45)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(139,92,246,0.07)'
                    e.currentTarget.style.borderColor = 'rgba(139,92,246,0.22)'
                  }}
                >
                  <Icon sx={{ fontSize: 11 }} />
                  {label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center text-[10px] text-slate-700 mt-2 tracking-wide">
          NAIA · NextFlow AI · Respuestas generadas por IA
        </p>
      </div>
    </div>
  )
}
