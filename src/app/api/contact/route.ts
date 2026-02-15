import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/** Validação básica dos campos */
function validateBody(body: unknown): {
  name: string;
  email: string;
  subject: string;
  message: string;
} | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  if (
    typeof b.name !== "string" ||
    typeof b.email !== "string" ||
    typeof b.subject !== "string" ||
    typeof b.message !== "string"
  ) {
    return null;
  }
  if (b.name.length < 2 || b.name.length > 100) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email)) return null;
  if (b.subject.length < 5 || b.subject.length > 200) return null;
  if (b.message.length < 20 || b.message.length > 2000) return null;
  return { name: b.name, email: b.email, subject: b.subject, message: b.message };
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Serviço de e-mail não configurado" },
      { status: 503 }
    );
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
  const toEmail = process.env.RESEND_TO_EMAIL;

  if (!toEmail) {
    return NextResponse.json(
      { error: "E-mail de destino não configurado" },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo inválido" }, { status: 400 });
  }

  const data = validateBody(body);
  if (!data) {
    return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
  }

  const html = `
    <h2>Nova mensagem do portfólio</h2>
    <p><strong>De:</strong> ${escapeHtml(data.name)} &lt;${escapeHtml(data.email)}&gt;</p>
    <p><strong>Assunto:</strong> ${escapeHtml(data.subject)}</p>
    <hr />
    <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `[Portfólio] ${data.subject}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Falha ao enviar e-mail" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Erro interno ao enviar mensagem" },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
