import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route para manejar el formulario de contacto
 * POST /api/contact
 * Actúa como proxy para enviar datos al webhook de n8n
 * Evita problemas de CORS al hacer la petición desde el servidor
 */
export async function POST(request: NextRequest) {
  try {
    // Obtener datos del formulario
    const body = await request.json();

    // URL del webhook de n8n
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL ||
      'https://nextflow-n8n.uywxlm.easypanel.host/webhook/1686c567-b383-481e-a7b4-cd4c10e9e3ce';

    // Enviar datos al webhook de n8n (server-to-server, no CORS)
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    // Obtener respuesta del webhook
    const data = await response.json();

    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: 'Error al procesar el mensaje' },
        { status: response.status }
      );
    }

    // Retornar respuesta exitosa con el mensaje del webhook
    return NextResponse.json({
      success: true,
      message: data.message || 'Mensaje enviado correctamente',
    });
  } catch (error) {
    console.error('Error en API /api/contact:', error);

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Error al enviar el mensaje'
      },
      { status: 500 }
    );
  }
}

/**
 * Método GET no permitido
 */
export async function GET() {
  return NextResponse.json(
    { message: 'Método no permitido' },
    { status: 405 }
  );
}
