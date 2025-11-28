import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';
import { sendContactEmail } from '@/services/email.service';
import type { ContactApiResponse } from '@/types/contact.types';

/**
 * API Route para manejar el formulario de contacto
 * POST /api/contact
 */
export async function POST(request: NextRequest) {
  try {
    // Obtener datos del body
    const body = await request.json();

    // Validar datos con Zod
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json<ContactApiResponse>(
        {
          success: false,
          message: 'Datos inválidos',
          error: validationResult.error.errors[0]?.message,
        },
        { status: 400 }
      );
    }

    const formData = validationResult.data;

    // Verificar variables de entorno necesarias
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD ||
      !process.env.EMAIL_TO
    ) {
      console.error('Variables de entorno SMTP no configuradas');
      return NextResponse.json<ContactApiResponse>(
        {
          success: false,
          message: 'Configuración de email no disponible',
        },
        { status: 500 }
      );
    }

    // Enviar email
    await sendContactEmail(formData);

    // Respuesta exitosa
    return NextResponse.json<ContactApiResponse>(
      {
        success: true,
        message: 'Mensaje enviado exitosamente',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en API de contacto:', error);

    return NextResponse.json<ContactApiResponse>(
      {
        success: false,
        message: 'Error al enviar el mensaje',
        error: error instanceof Error ? error.message : 'Error desconocido',
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
