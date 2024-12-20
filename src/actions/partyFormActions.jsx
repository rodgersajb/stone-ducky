"use server";

import { Resend } from "resend";
import { validateString } from "@/utils/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPartyRequestEmail = async (formData) => {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const senderEmail = formData.get("email");
  const eventDate = formData.get("event-date");
  const totalGuests = formData.get("total-guest");
  const eventTime = formData.get("time");
  const specialRequests = formData.get("special-requests");

  console.log("Catering Form Data:", {
    name,
    phone,
    senderEmail,
    eventDate,
    totalGuests,
    eventTime,
    specialRequests,
  });

  // Validate form data
  if (!validateString(name, 100)) return { error: "Invalid Name" };
  if (!validateString(phone, 20)) return { error: "Invalid Phone Number" };
  if (!validateString(senderEmail, 500)) return { error: "Invalid Email" };
  if (!eventDate) return { error: "Invalid Event Date" };
  if (!totalGuests || isNaN(Number(totalGuests)))
    return { error: "Invalid Guests" };
  if (!validateString(eventTime, 20)) return { error: "Invalid Time" };
  if (!validateString(specialRequests, 1000))
    return { error: "Invalid Requests" };

  try {
    // Send email via Resend
    const response = await resend.emails.send({
      from: "Party Request Form <onboarding@resend.dev>",
      to: "rodgersajbdev@gmail.com",
      subject: "New Party Request Submission",
      reply_to: senderEmail,
      text: `
        You received a new large party request:

        Name: ${name}
        Phone: ${phone}
        Email: ${senderEmail}
        Event Date: ${eventDate}
        Event Time: ${eventTime}
        Total Guests: ${totalGuests}
        Special Requests: ${specialRequests}
      `,
    });

    console.log("Resend Response:", response);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: "Failed to send email" };
  }
};
