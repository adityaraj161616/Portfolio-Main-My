import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // SendGrid integration
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
    const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@adityaraj.dev"
    const TO_EMAIL = "adityaraj1613@gmail.com"

    if (!SENDGRID_API_KEY) {
      console.error("SendGrid API key not configured")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    // SendGrid email payload
    const emailData = {
      personalizations: [
        {
          to: [{ email: TO_EMAIL, name: "Aditya Raj" }],
          subject: `Portfolio Contact: ${subject}`,
        },
      ],
      from: { email: FROM_EMAIL, name: "Portfolio Contact Form" },
      reply_to: { email: email, name: name },
      content: [
        {
          type: "text/html",
          value: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
              <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <h2 style="color: #333; margin-bottom: 20px; border-bottom: 3px solid #8b5cf6; padding-bottom: 10px;">
                  New Contact Form Submission
                </h2>
                
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #8b5cf6; margin-bottom: 5px;">Contact Details:</h3>
                  <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                  <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                  <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #8b5cf6; margin-bottom: 10px;">Message:</h3>
                  <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #8b5cf6;">
                    ${message.replace(/\n/g, "<br>")}
                  </div>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
                  <p>This message was sent from your portfolio contact form.</p>
                  <p>Reply directly to this email to respond to ${name}.</p>
                </div>
              </div>
            </div>
          `,
        },
      ],
    }

    // Send email via SendGrid
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("SendGrid error:", errorData)
      throw new Error("Failed to send email via SendGrid")
    }

    console.log("Email sent successfully via SendGrid")
    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 })
  }
}
