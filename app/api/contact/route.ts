import { NextResponse } from "next/server";
import { Resend } from "resend";

// Ensure this route uses the Node.js runtime (Resend SDK requires Node APIs)
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.MY_EMAIL) {
      return NextResponse.json(
        { success: false, message: "Server misconfigured: missing RESEND_API_KEY or MY_EMAIL" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Basic email format check to avoid Resend rejections
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.MY_EMAIL,
      reply_to: email, // Note: Resend expects snake_case `reply_to`
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Contact API error:", error);
    const message = error?.message || "Failed to send message.";
    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}
