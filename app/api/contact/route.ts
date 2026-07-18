import { NextResponse } from "next/server";
import { Resend } from "resend";

// Ensure this route uses the Node.js runtime (Resend SDK requires Node APIs)
export const runtime = "nodejs";

const recipientEmail = process.env.MY_EMAIL || "harshsaini2462@gmail.com";
const senderEmail =
  process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function POST(req: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json(
      {
        success: false,
        message:
          "The contact form is not configured yet. Please email harshsaini2462@gmail.com directly.",
      },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(resendApiKey);

    const { name, email, query, subject, message } = await req.json();
    const finalName = typeof name === "string" ? name.trim() : "";
    const finalEmail = typeof email === "string" ? email.trim() : "";
    const submittedQuery = query || message;
    const finalQuery =
      typeof submittedQuery === "string" ? submittedQuery.trim() : "";
    const finalSubject =
      typeof subject === "string" && subject.trim()
        ? subject.trim()
        : "New portfolio query";

    if (!finalName || !finalEmail || !finalQuery) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Basic email format check to avoid Resend rejections
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(finalEmail)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(finalName);
    const safeEmail = escapeHtml(finalEmail);
    const safeQuery = escapeHtml(finalQuery).replace(/\n/g, "<br />");
    const replyUrl = `mailto:${encodeURIComponent(finalEmail)}?subject=${encodeURIComponent(
      `Re: ${finalSubject}`
    )}`;

    const { error } = await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      replyTo: finalEmail,
      subject: `Portfolio Contact: ${finalSubject}`,
      html: `
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>New Portfolio Contact</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f4f7f5; color: #1f2937; font-family: Arial, Helvetica, sans-serif;">
            <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">New message from ${safeName}</div>
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width: 100%; background-color: #f4f7f5;">
              <tr>
                <td align="center" style="padding: 32px 16px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width: 100%; max-width: 620px; overflow: hidden; border: 1px solid #dce5df; border-top: 5px solid #f59e0b; border-radius: 10px; background-color: #ffffff;">
                    <tr>
                      <td style="padding: 28px 32px; background-color: #1f5a45; color: #ffffff;">
                        <p style="margin: 0 0 8px; color: #d8f3e5; font-size: 12px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase;">Harsh Saini Portfolio</p>
                        <h1 style="margin: 0; color: #ffffff; font-size: 27px; font-weight: 700; line-height: 1.25;">New contact enquiry</h1>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 30px 32px 12px;">
                        <p style="margin: 0; color: #4b5563; font-size: 16px; line-height: 1.6;">A visitor has submitted a message through your portfolio contact form.</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 16px 32px;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width: 100%; border: 1px solid #e5ebe7; border-radius: 8px; background-color: #f8fbf9;">
                          <tr>
                            <td style="padding: 16px 18px 8px; color: #68746d; font-size: 11px; font-weight: 700; letter-spacing: 0.9px; text-transform: uppercase;">Name</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 18px 16px; color: #17251e; font-size: 16px; font-weight: 600; line-height: 1.45; word-break: break-word;">${safeName}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 18px;"><div style="height: 1px; background-color: #e5ebe7; line-height: 1px;">&nbsp;</div></td>
                          </tr>
                          <tr>
                            <td style="padding: 16px 18px 8px; color: #68746d; font-size: 11px; font-weight: 700; letter-spacing: 0.9px; text-transform: uppercase;">Email</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 18px 16px; color: #17251e; font-size: 16px; font-weight: 600; line-height: 1.45; word-break: break-word;"><a href="mailto:${encodeURIComponent(finalEmail)}" style="color: #1f5a45; text-decoration: none;">${safeEmail}</a></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 32px 16px;">
                        <p style="margin: 0 0 10px; color: #68746d; font-size: 11px; font-weight: 700; letter-spacing: 0.9px; text-transform: uppercase;">Message</p>
                        <div style="padding: 18px; border-left: 4px solid #f59e0b; background-color: #fffaf0; color: #374151; font-size: 15px; line-height: 1.7; word-break: break-word;">${safeQuery}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 16px 32px 32px;">
                        <a href="${replyUrl}" style="display: inline-block; padding: 13px 20px; border-radius: 6px; background-color: #1f5a45; color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none;">Reply to ${safeName}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 18px 32px; border-top: 1px solid #e5ebe7; background-color: #fafcfb; color: #7a857f; font-size: 12px; line-height: 1.5;">Sent from the contact form on your portfolio website.</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
      text: `New portfolio contact enquiry\n\nName: ${finalName}\nEmail: ${finalEmail}\n\nMessage:\n${finalQuery}`,
    });

    if (error) {
      console.error("Contact email delivery error:", error);
      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to send your message right now. Please email harshsaini2462@gmail.com directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send your message right now. Please email harshsaini2462@gmail.com directly.",
      },
      { status: 500 }
    );
  }
}
