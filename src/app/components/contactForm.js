"use client";

import SubmitButton from "./submitButton";
import { useRef } from "react";
import { sendEmail } from "@/actions/actions";
import toast from "react-hot-toast";


export default function ContactForm() {
  const ref = useRef(null);
  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();
        try {
          await sendEmail(formData);
          toast.success("Email sent successfully");
        } catch (error) {
          toast.error("Something went wrong while sending the email");
        }
      }}
      className="w-full flex flex-col gap-4 items-center lg:min-h-[400px]"
    >
      <h2 className="text-4xl text-center">Contact Form</h2>
      <div className="flex flex-col">
        <label htmlFor="name">Name <span className="text-duckyOrange pl-1">*</span></label>
        <input
          className="bg-warmBeige border-b-2 border-duckyOrange pl-2 focus:outline-none focus:border-duckyOrange"
          type="text"
          name="name"
          placeholder="name"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email <span className="text-duckyOrange pl-1">*</span></label>
        <input
          className="bg-warmBeige border-b-2 border-duckyOrange pl-2 focus:outline-none  focus-duckyOrange"
          type="text"
          name="email"
          placeholder="email"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Message<span className="text-duckyOrange pl-1">*</span></label>
        <textarea
          className="bg-warmBeige border-b-2 border-duckyOrange pl-2 focus:outline-none focus-duckyOrange"
          name="message"
          id="message"
          placeholder="message"
        ></textarea>
      </div>
      <div>
        <SubmitButton />
      </div>
    </form>
  );
}
