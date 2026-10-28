import { defineConfig, loadEnv, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import nodemailer from 'nodemailer'

function contactApiPlugin(env: Record<string, string>): Plugin {
  const gmailUser = env.GMAIL_USER || 'bhushangavhane06@gmail.com';
  const rawPass = env.GMAIL_APP_PASSWORD || 'fffp xsof upih lcaf';
  const gmailPass = rawPass.replace(/\s+/g, '');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  return {
    name: 'contact-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        // Set CORS headers
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if (req.method === 'OPTIONS') {
          res.statusCode = 200;
          res.end();
          return;
        }

        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: 'Method not allowed' }));
          return;
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk.toString();
        });

        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');
            const { name, email, subject, message } = data;

            if (!name || !email || !message) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: false,
                error: 'Name, email, and message are required fields.',
              }));
              return;
            }

            const mailOptions = {
              from: `"Portfolio Contact Form" <${gmailUser}>`,
              replyTo: `"${name}" <${email}>`,
              to: gmailUser,
              subject: `Portfolio Contact: ${subject ? subject : 'New Message from ' + name}`,
              text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'General Inquiry'}\n\nMessage:\n${message}`,
              html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
                  <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 12px; margin-bottom: 20px;">
                    <h2 style="color: #1e293b; margin: 0; font-size: 20px;">New Portfolio Inquiry</h2>
                    <p style="color: #64748b; margin: 4px 0 0 0; font-size: 13px;">Received via Portfolio Contact Form</p>
                  </div>
                  
                  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; width: 100px; font-weight: 600;">Sender:</td>
                      <td style="padding: 8px 0; color: #1e293b; font-weight: bold;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email:</td>
                      <td style="padding: 8px 0; color: #2563eb;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Subject:</td>
                      <td style="padding: 8px 0; color: #1e293b;">${subject || 'General Inquiry / Opportunity'}</td>
                    </tr>
                  </table>

                  <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 6px; margin-bottom: 20px;">
                    <h4 style="margin: 0 0 8px 0; color: #475569; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message Content:</h4>
                    <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                  </div>

                  <div style="border-top: 1px solid #e2e8f0; padding-top: 12px; font-size: 12px; color: #94a3b8; text-align: center;">
                    You can directly reply to this email to respond to ${name}.
                  </div>
                </div>
              `,
            };

            await transporter.sendMail(mailOptions);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              success: true,
              message: 'Email delivered successfully to Bhushan Gavhane!'
            }));
          } catch (err: any) {
            console.error('Contact API error:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              success: false,
              error: err.message || 'Failed to send message via Gmail SMTP.'
            }));
          }
        });
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      contactApiPlugin(env),
    ],
  };
})
