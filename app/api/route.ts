import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    company: z.string().optional(),
    message: z.string().min(10),
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const parsed = contactSchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid input", details: parsed.error.flatten() },
                { status: 400 }
            );
        }

        const { name, email, company, message } = parsed.data;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, // 587 -> false
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const htmlBody = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 24px; background-color: #0f172a; color: #e5e7eb;">
        <div style="max-width: 640px; margin: 0 auto; background: #020617; border-radius: 18px; border: 1px solid #1e293b; padding: 24px;">
          <h2 style="margin: 0 0 16px; font-size: 20px; color: #f9fafb;">
            New Contact Form Submission
          </h2>
          <p style="margin: 0 0 16px; font-size: 14px; color: #94a3b8;">
            You received a new enquiry from your website contact form.
          </p>
          <div style="margin-bottom: 16px; padding: 16px; border-radius: 14px; background: rgba(15,23,42,0.8); border: 1px solid #1f2937;">
            <div style="margin-bottom: 8px;">
              <span style="display:inline-block; width: 90px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color:#64748b;">Name</span>
              <span style="font-size: 14px; color:#e5e7eb;">${name}</span>
            </div>
            <div style="margin-bottom: 8px;">
              <span style="display:inline-block; width: 90px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color:#64748b;">Email</span>
              <span style="font-size: 14px; color:#e5e7eb;">${email}</span>
            </div>
            ${company
                ? `<div style="margin-bottom: 8px;">
                    <span style="display:inline-block; width: 90px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color:#64748b;">Company</span>
                    <span style="font-size: 14px; color:#e5e7eb;">${company}</span>
                  </div>`
                : ""
            }
          </div>

          <div style="margin-top: 16px;">
            <p style="margin: 0 0 6px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color:#64748b;">
              Message
            </p>
            <div style="padding: 14px 16px; border-radius: 14px; background-color: #020617; border: 1px dashed #1f2937;">
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color:#e5e7eb; white-space: pre-wrap;">
                ${message}
              </p>
            </div>
          </div>

          <p style="margin-top: 24px; font-size: 11px; color:#6b7280;">
            Sent from ACV Innovative Technologies website.
          </p>
        </div>
      </div>
    `;

        const textBody = `
New contact form submission

Name:    ${name}
Email:   ${email}
Company: ${company || "-"}

Message:
${message}
    `.trim();

        await transporter.sendMail({
            from: `"ACV Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
            to: "krishnakirrak@gmail.com",
            subject: `New enquiry from ${name}`,
            text: textBody,
            html: htmlBody,
        });

        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error("Error sending contact email:", err);
        return NextResponse.json(
            { error: "Failed to send email", details: err?.message || String(err) },
            { status: 500 }
        );
    }
}