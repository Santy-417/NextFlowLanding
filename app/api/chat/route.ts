import OpenAI from 'openai'

const SYSTEM_PROMPT = `Eres NAIA, la IA consultora de NextFlow, una empresa colombiana especializada en automatizaciones con inteligencia artificial y desarrollo de software a medida.

Tu rol es ayudar a los visitantes a entender cómo NextFlow puede transformar sus negocios. Escucha su caso, haz preguntas inteligentes para entender mejor su situación y explica con claridad cómo la automatización con IA puede resolver sus problemas específicos.

Las áreas en las que NextFlow trabaja:
- Automatizaciones con n8n y flujos de trabajo inteligentes
- Agentes de IA para ventas: calificación de leads, seguimiento automático, agendamiento de reuniones
- Soporte al cliente 24/7 con IA en WhatsApp, Slack y otras plataformas
- Automatización de e-commerce: carritos abandonados, inventario, notificaciones personalizadas
- Procesos internos: facturación, reportes, CRM, flujos administrativos
- Desarrollo web y móvil personalizado

Instrucciones de comportamiento:
- Responde siempre en español, de forma conversacional y amigable
- Sé conciso: máximo 2-3 párrafos por respuesta
- Haz una pregunta al final para entender mejor el negocio del visitante
- Cuando sea el momento apropiado, sugiere agendar una consultoría gratuita de 30 minutos con el equipo de NextFlow
- No inventes estadísticas de clientes específicos ni proyectos concretos
- Enfócate en el valor de negocio, no en detalles técnicos excesivos
- Si el usuario pregunta precios, menciona que depende del alcance y que la mejor forma de saberlo es en la consultoría gratuita`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    if (!process.env.OPENAI_API_KEY) {
      return new Response('OPENAI_API_KEY no configurada', { status: 500 })
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

    const stream = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      stream: true,
      max_tokens: 400,
      temperature: 0.7,
    })

    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content ?? ''
          if (text) controller.enqueue(new TextEncoder().encode(text))
        }
        controller.close()
      },
    })

    return new Response(readable, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  } catch {
    return new Response('Error al conectar con la IA', { status: 500 })
  }
}
