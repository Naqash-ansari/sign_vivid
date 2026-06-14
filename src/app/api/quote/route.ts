import nodemailer from "nodemailer";

export const runtime = "nodejs";

const recipient = "naqashansari046@gmail.com";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const fields = {
      selectedProduct: textValue(formData.get("selectedProduct")),
      approxWidth: textValue(formData.get("approxWidth")),
      approxHeight: textValue(formData.get("approxHeight")),
      quantity: textValue(formData.get("quantity")),
      postcode: textValue(formData.get("postcode")),
      projectNotes: textValue(formData.get("projectNotes")),
      designSupport: textValue(formData.get("designSupport")),
      designBrief: textValue(formData.get("designBrief")),
      fullName: textValue(formData.get("fullName")),
      company: textValue(formData.get("company")),
      email: textValue(formData.get("email")),
      phone: textValue(formData.get("phone")),
    };
    const artwork = formData.get("artwork");
    const attachments = [];

    if (artwork instanceof File && artwork.size > 0) {
      attachments.push({
        filename: artwork.name || "artwork-upload",
        content: Buffer.from(await artwork.arrayBuffer()),
        contentType: artwork.type || undefined,
      });
    }

    const transporter = createTransporter();
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipient,
      replyTo: fields.email || undefined,
      subject: `Sign Vivid quote request${fields.selectedProduct ? ` - ${fields.selectedProduct}` : ""}`,
      text: renderPlainText(fields),
      html: renderHtml(fields),
      attachments,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Quote email failed", error);
    return Response.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Quote email could not be sent. Please check SMTP settings.",
      },
      { status: 500 },
    );
  }
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS?.replace(/\s/g, "");

  if (!host || !user || !pass) {
    throw new Error("SMTP settings missing. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM in .env.local.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: { user, pass },
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
    tls: {
      servername: host,
    },
  });
}

function textValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function renderPlainText(fields: Record<string, string>) {
  return Object.entries(labels)
    .map(([key, label]) => `${label}: ${fields[key] || "-"}`)
    .join("\n");
}

function renderHtml(fields: Record<string, string>) {
  const rows = Object.entries(labels)
    .map(
      ([key, label]) =>
        `<tr><td style="padding:8px 12px;font-weight:700;border-bottom:1px solid #eee">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(fields[key] || "-")}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#2d2d2d">
      <h2>New Sign Vivid Quote Request</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px">${rows}</table>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const labels: Record<string, string> = {
  selectedProduct: "Selected product",
  approxWidth: "Approx width",
  approxHeight: "Approx height",
  quantity: "Quantity",
  postcode: "Installation postcode",
  projectNotes: "Project notes",
  designSupport: "Design support",
  designBrief: "Design brief",
  fullName: "Full name",
  company: "Company",
  email: "Email",
  phone: "Phone",
};
