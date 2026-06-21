import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contact } from "@/data/site";

type BookingPayload = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  reason: string;
  meetLink: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookingPayload;
    const { name, email, phone, date, time, reason, meetLink } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !date || !time || !reason?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    const subject = `New Meeting Request from ${name}`;
    const text = [
      "New portfolio meeting request",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Date: ${date}`,
      `Time: ${time}`,
      `Reason: ${reason}`,
      `Google Meet: ${meetLink || contact.googleMeetLink}`,
    ].join("\n");

    const html = `
      <h2>New Meeting Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Reason:</strong> ${reason}</p>
      <p><strong>Google Meet:</strong> <a href="${meetLink || contact.googleMeetLink}">${meetLink || contact.googleMeetLink}</a></p>
    `;

    if (gmailUser && gmailAppPassword) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      });

      await transporter.sendMail({
        from: gmailUser,
        to: contact.email,
        replyTo: email,
        subject,
        text,
        html,
      });

      await transporter.sendMail({
        from: gmailUser,
        to: email,
        subject: "Your meeting request with Rohit Jadhav",
        text: [
          `Hi ${name},`,
          "",
          "Your meeting request has been received.",
          "",
          `Date: ${date}`,
          `Time: ${time}`,
          `Reason: ${reason}`,
          "",
          `Join here: ${meetLink || contact.googleMeetLink}`,
          "",
          "I'll confirm shortly if needed.",
          "",
          "— Rohit Jadhav",
        ].join("\n"),
        html: `
          <p>Hi ${name},</p>
          <p>Your meeting request has been received.</p>
          <p><strong>Date:</strong> ${date}<br/>
          <strong>Time:</strong> ${time}<br/>
          <strong>Reason:</strong> ${reason}</p>
          <p><a href="${meetLink || contact.googleMeetLink}">Join Google Meet</a></p>
          <p>I'll confirm shortly if needed.</p>
          <p>— Rohit Jadhav</p>
        `,
      });
    } else if (process.env.NODE_ENV === "development") {
      console.log("Booking request (email not configured):", text);
    } else {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Add GMAIL_USER and GMAIL_APP_PASSWORD to your environment.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Failed to send booking request." },
      { status: 500 },
    );
  }
}
