"use server";

import { Resend } from "resend";
import ContactTemplate from "@/components/emails/ContactTemplate";
import React from "react";

// Initialize Resend with the API key from your .env file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const clinic = formData.get("clinic") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return {
        success: false,
        message: "Please fill out all required fields.",
      };
    }

    const { error } = await resend.emails.send({
      from: "PyrexxAI Leads <leads@pyrexxai.com>", // Must be a verified domain in Resend
      to: ["clifford.pyrexxai@gmail.com"], // Your receiving email
      subject: `New AI Integration Inquiry from ${clinic || name}`,
      react: React.createElement(ContactTemplate, {
        name,
        email,
        clinic,
        message,
      }),
    });

    if (error) {
      console.error("Resend API Error:", error);
      return {
        success: false,
        message: "Failed to send the message. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Your inquiry has been securely submitted. We will contact you shortly.",
    };
  } catch (err) {
    console.error("Server Action Error:", err);
    return {
      success: false,
      message: "An unexpected error occurred.",
    };
  }
}