'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Send, ShoppingCart, Users, Headphones, Bot } from 'lucide-react'

interface Message {
  id: string
  role: 'naia' | 'user'
  content: string
}

const INITIAL_MESSAGE =
  'Hola, soy NAIA — la IA de NextFlow. Cuéntame: ¿qué proceso de tu negocio quieres automatizar hoy?'

const CHIP_RESPONSES: Record<string, string> = {
  ecommerce:
    'E-commerce es donde más impacto generamos 🛒 Con n8n + IA automatizamos carritos abandonados, actualizaciones de inventario y notificaciones personalizadas. ¿Cuál es tu mayor cuello de botella hoy?',
  sales:
    'Los agentes de ventas IA de NextFlow califican leads automáticamente y agendan reuniones sin intervención humana 🤖 ¿Cuántos leads pierdes por falta de seguimiento?',
  support:
    'Un agente de soporte bien entrenado resuelve el 80% de consultas sin humano. Integramos con WhatsApp, Slack o tu plataforma favorita 💬 ¿Cuántos tickets gestionas al mes?',
}

const DEFAULT_RESPONSES = [
  'Entendido. Con n8n y un agente IA podemos automatizar ese flujo en tiempo récord. ¿Cuántas horas al día te consume hoy?',
  'Ese flujo lo hemos resuelto antes: capturamos el evento, lo procesamos con IA y disparamos la acción correcta. ¿Quieres ver un ejemplo real?',
  'Suena como un caso perfecto para automatización. Hemos ayudado a empresas similares a ahorrar +40 horas semanales. ¿Agendamos una demo de 30 min? 🚀',
  'Perfecto, eso es exactamente lo que hacemos en NextFlow. Escríbenos por WhatsApp y te mostramos el flujo completo en vivo.',
]

const QUICK_CHIPS = [
  { id: 'ecommerce', label: 'Automatizar e-commerce', Icon: ShoppingCart },
  { id: 'sales', label: 'Agentes de ventas', Icon: Users },
  { id: 'support', label: 'Soporte 24/7', Icon: Headphones },
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
      <Bot size={13} className="text-white" />
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
  const shouldReduceMotion = useReducedMotion()
  const [messages, setMessages] = useState<Message[]>([])
  const [displayedText, setDisplayedText] = useState('')
  const [isTypingInitial, setIsTypingInitial] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [isNaiaTyping, setIsNaiaTyping] = useState(false)
  const [chipsVisible, setChipsVisible] = useState(false)
  const [responseIndex, setResponseIndex] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, displayedText, isNaiaTyping, scrollToBottom])

  // Typewriter on mount
  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayedText(INITIAL_MESSAGE)
      setIsTypingInitial(false)
      setMessages([{ id: 'init', role: 'naia', content: INITIAL_MESSAGE }])
      setChipsVisible(true)
      return
    }

    let i = 0
    const timer = setInterval(() => {
      if (i < INITIAL_MESSAGE.length) {
        setDisplayedText(INITIAL_MESSAGE.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        setIsTypingInitial(false)
        setMessages([{ id: 'init', role: 'naia', content: INITIAL_MESSAGE }])
        setTimeout(() => setChipsVisible(true), 280)
      }
    }, 22)

    return () => clearInterval(timer)
  }, [shouldReduceMotion])

  const sendMessage = useCallback(
    (content: string, chipId?: string) => {
      if (!content.trim()) return
      setMessages(prev => [...prev, { id: `u-${Date.now()}`, role: 'user', content }])
      setInputValue('')
      setChipsVisible(false)
      setIsNaiaTyping(true)

      // reset textarea height
      if (textareaRef.current) textareaRef.current.style.height = 'auto'

      setTimeout(
        () => {
          const text = chipId
            ? CHIP_RESPONSES[chipId]
            : DEFAULT_RESPONSES[responseIndex % DEFAULT_RESPONSES.length]
          setMessages(prev => [...prev, { id: `n-${Date.now()}`, role: 'naia', content: text }])
          setIsNaiaTyping(false)
          setResponseIndex(i => i + 1)
        },
        shouldReduceMotion ? 350 : 900 + Math.random() * 500
      )
    },
    [responseIndex, shouldReduceMotion]
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputValue)
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
    e.target.style.height = 'auto'
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`
  }

  const bubbleVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 8, scale: shouldReduceMotion ? 1 : 0.98 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.26, ease: [0.23, 1, 0.32, 1] },
    },
  }

  const isInputDisabled = isNaiaTyping || isTypingInitial

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">

      {/* ── Messages: scrollable, no border ── */}
      <div
        role="log"
        aria-live="polite"
        aria-label="Conversación con NAIA"
        className="flex-1 min-h-0 overflow-y-auto py-2 space-y-4 pr-1 w-full"
        style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(139,92,246,0.2) transparent' }}
      >
        {/* Typewriter bubble */}
        {isTypingInitial && (
          <div className="flex items-start gap-2.5">
            <NaiaAvatar />
            <p
              className="max-w-[88%] text-sm leading-relaxed text-slate-300 pt-1"
            >
              {displayedText}
              <span className="inline-block w-0.5 h-3.5 bg-violet-400 ml-0.5 animate-pulse align-middle" />
            </p>
          </div>
        )}

        <AnimatePresence initial={false}>
          {messages.map(msg => (
            <motion.div
              key={msg.id}
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              {msg.role === 'naia' ? <NaiaAvatar /> : <UserAvatar />}
              <div
                className={`max-w-[88%] text-sm leading-relaxed ${
                  msg.role === 'naia'
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

        {/* Typing indicator */}
        <AnimatePresence>
          {isNaiaTyping && (
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2.5"
            >
              <NaiaAvatar />
              <div className="flex gap-1 pt-1">
                {[0, 1, 2].map(i => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-violet-500"
                    animate={shouldReduceMotion ? {} : { y: [0, -5, 0] }}
                    transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={messagesEndRef} />
      </div>

      {/* ── Quick Chips ── */}
      <AnimatePresence>
        {chipsVisible && messages.length <= 1 && (
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, delay: 0.08 }}
            className="flex-shrink-0 flex flex-wrap gap-2 py-3"
          >
            {QUICK_CHIPS.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => sendMessage(label, id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-violet-300 cursor-pointer"
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
                <Icon size={11} />
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Input: minimal floating bar, no heavy box ── */}
      <div className="flex-shrink-0 pt-2">
        {/* Hairline separator */}
        <div
          className="mb-3"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.3) 40%, rgba(139,92,246,0.3) 60%, transparent 100%)',
          }}
        />

        <form
          onSubmit={handleSubmit}
          className="flex items-end gap-3 rounded-2xl px-4 py-3"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
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
            placeholder="Cuéntame tu caso…"
            aria-label="Escribe tu mensaje a NAIA"
            autoComplete="off"
            rows={1}
            disabled={isInputDisabled}
            className="flex-1 bg-transparent text-sm text-slate-200 placeholder-slate-600 resize-none outline-none min-h-[28px] max-h-[110px] leading-relaxed disabled:opacity-40"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isInputDisabled}
            aria-label="Enviar mensaje"
            className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center disabled:opacity-25 disabled:cursor-not-allowed"
            style={{
              background: 'linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)',
              touchAction: 'manipulation',
              transition: 'opacity 0.15s, transform 0.15s',
            }}
            onMouseEnter={e => {
              if (!e.currentTarget.disabled) e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <Send size={13} className="text-white" />
          </button>
        </form>

        <p className="text-center text-[10px] text-slate-700 mt-2 tracking-wide">
          NAIA · Nextflow AI · Respuestas simuladas
        </p>
      </div>
    </div>
  )
}
