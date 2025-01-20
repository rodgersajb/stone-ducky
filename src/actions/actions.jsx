"use server";
import { Resend } from "resend";
import { validateString } from "@/utils/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const name = formData.get("name");
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  console.log("Form Data:", { name, senderEmail, message });

  if (!message || typeof message !== "string") {
    return { error: "Invalid Message" };
  }

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid Email" };
  }

  try {
    const response = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "info@stoneducky.ca",
      subject: "New Contact Form Submission",
      reply_to: senderEmail,
      text: `You received a new message:\n\nName: ${name}\nEmail: ${senderEmail}\nMessage: ${message}`,
    });

    console.log("Resend Response:", response);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: "Failed to send email" };
  }
};
