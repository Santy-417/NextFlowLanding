import nodemailer from 'nodemailer';
import type { ContactFormData } from '@/types/contact.types';

/**
 * Configuración del transporter de Nodemailer
 */
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true para puerto 465, false para otros
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

/**
 * Enviar email de contacto
 */
export const sendContactEmail = async (data: ContactFormData): Promise<void> => {
  const transporter = createTransporter();

  // Email para el equipo de NextFlow
  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.SMTP_USER,
    to: process.env.EMAIL_TO,
    subject: `Nuevo contacto desde la web: ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9fafb;
            }
            .header {
              background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%);
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background-color: white;
              padding: 30px;
              border-radius: 0 0 8px 8px;
            }
            .field {
              margin-bottom: 20px;
            }
            .label {
              font-weight: bold;
              color: #8B5CF6;
              margin-bottom: 5px;
            }
            .value {
              color: #1F2937;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #6B7280;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nuevo Contacto - NextFlow</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nombre:</div>
                <div class="value">${data.name}</div>
              </div>

              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>

              ${data.phone ? `
                <div class="field">
                  <div class="label">Teléfono:</div>
                  <div class="value">${data.phone}</div>
                </div>
              ` : ''}

              ${data.company ? `
                <div class="field">
                  <div class="label">Empresa:</div>
                  <div class="value">${data.company}</div>
                </div>
              ` : ''}

              <div class="field">
                <div class="label">Mensaje:</div>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Este email fue enviado desde el formulario de contacto de NextFlow</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
Nuevo contacto desde la web de NextFlow

Nombre: ${data.name}
Email: ${data.email}
${data.phone ? `Teléfono: ${data.phone}` : ''}
${data.company ? `Empresa: ${data.company}` : ''}

Mensaje:
${data.message}
    `,
  };

  // Email de confirmación para el usuario
  const confirmationMailOptions = {
    from: process.env.EMAIL_FROM || process.env.SMTP_USER,
    to: data.email,
    subject: 'Gracias por contactarnos - NextFlow',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9fafb;
            }
            .header {
              background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%);
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background-color: white;
              padding: 30px;
              border-radius: 0 0 8px 8px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>¡Gracias por contactarnos!</h1>
            </div>
            <div class="content">
              <p>Hola ${data.name},</p>
              <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo en menos de 24 horas.</p>
              <p>Mientras tanto, puedes seguirnos en nuestras redes sociales:</p>
              <p>
                <a href="${process.env.NEXT_PUBLIC_TIKTOK}">TikTok</a> |
                <a href="${process.env.NEXT_PUBLIC_INSTAGRAM}">Instagram</a>
              </p>
              <p>¡Gracias por tu interés en NextFlow!</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  // Enviar ambos emails
  await transporter.sendMail(mailOptions);
  await transporter.sendMail(confirmationMailOptions);
};
