"use client";

import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import SubmitButton from "@/app/components/submitButton";
import { sendPartyRequestEmail } from "@/actions/partyFormActions";
import toast from "react-hot-toast";

import "react-datepicker/dist/react-datepicker.css";

export default function PartyForm() {
  const ref = useRef(null);
  const [startDate, setStartDate] = useState(new Date());
  const [specialRequests, setSpecialRequests] = useState("");
  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();
        try {
          const response = await sendPartyRequestEmail(formData);
          console.log("Catering Email Response:", response);
          toast.success("Catering Request Sent Successfully");
        } catch (error) {
          toast.error(
            "Something went wrong while sending the catering request"
          );
        }
      }}
      className="flex flex-col w-full items-start justify-center px-2 py-4 gap-4 bg-warmBeige lg:text-xl lg:grid lg:grid-cols-2 lg:grid-rows-[repeat(8,min-content)] lg:place-items-center lg:gap-x-8 lg:px-14"
    >
      <div className="flex flex-col w-full lg:col-span-1 lg:row-span-1">
        <label htmlFor="name">
          Name<span className="text-duckyOrange">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="pl-4 w-full outline-none focus:border-duckyOrange focus:ring-1 focus:ring-duckyOrange focus:rounded"
        />
      </div>

      <div className="flex flex-col w-full lg:col-span-1 lg:row-span-1">
        <label htmlFor="phone">
          Phone/Mobile<span className="text-duckyOrange">*</span>
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Mobile Number"
          className="pl-4 w-full outline-none focus:border-duckyOrange focus:ring-1 focus:ring-duckyOrange focus:rounded"
        />
      </div>

      <div className="flex flex-col w-full lg:col-span-1 lg:row-span-1">
        <label htmlFor="email">
          Email<span className="text-duckyOrange">*</span>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email Address"
          className="pl-4 w-full outline-none focus:border-duckyOrange focus:ring-1 focus:ring-duckyOrange focus:rounded"
        />
      </div>

      <div className="flex flex-col w-full lg:col-span-1 lg:row-span-1">
        <label htmlFor="event-date">
          Requested Event Date<span className="text-duckyOrange">*</span>
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="w-full outline-none focus:border-duckyOrange focus:ring-1 focus:ring-duckyOrange focus:rounded"
        />
        <input
          type="hidden"
          name="event-date"
          value={startDate.toISOString().split("T")[0]}
          className="w-full"
        />
      </div>

      <div className="flex flex-col w-full lg:col-span-1 lg:row-span-1">
        <label htmlFor="total-guest">
          How many guests are in your party?
          <span className="text-duckyOrange">*</span>
        </label>
        <input
          type="number"
          name="total-guest"
          id="total-guest"
          placeholder="20, 40, etc."
          className="w-full pl-4 outline-none focus:border-duckyOrange focus:ring-1 focus:ring-duckyOrange focus:rounded"
        />
      </div>
      <div className="flex flex-col w-full lg:col-span-1 lg:row-span-1">
        <label htmlFor="total-guest">
          What time are you looking for?
          <span className="text-duckyOrange">*</span>
        </label>
        <input
          type="text"
          name="time"
          id="time"
          placeholder="5:00 PM, 7:30 PM, etc."
          className="w-full pl-4 outline-none focus:border-duckyOrange focus:ring-1 focus:ring-duckyOrange focus:rounded"
        />
      </div>

      <div className="flex flex-col w-full lg:col-span-1 lg:row-span-1">
        <label htmlFor="special-requests">
          Special Requests<span className="text-duckyOrange">*</span>
        </label>
        <textarea
          id="special-requests"
          name="special-requests"
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          placeholder="Your Message"
          className="pl-4 w-full outline-none focus:border-duckyOrange focus:ring-1 focus:ring-duckyOrange focus:rounded"
          rows={6}
        />
      </div>

      <div className="lg:col-span-1 lg:row-span-1 w-full md:w-2/3 lg:w-1/2">
        <SubmitButton />
      </div>
    </form>
  );
}
