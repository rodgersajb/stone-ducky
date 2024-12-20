"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How far in advance should I book for a large party?",
    answer:
      "We recommend booking at least 2-3 weeks in advance for large parties to ensure availability, especially during peak dining times. For special events or holidays, booking even earlier is advised.",
  },
  {
    question:
      "Is there a minimum number of guests required to book a large party?",
    answer:
      "Yes, we typically require a minimum of 8-10 guests for large party bookings, depending on the size of the restaurant and the day of the week. Please contact us for specific requirements.",
  },
  {
    question: "Can I customize the menu for a large party?",
    answer:
      "Yes, we offer options for customized menus, including set menus or family-style dining. Our team can work with you to create a menu that suits your group's preferences and dietary needs.",
  },
  {
    question: "Do you charge a deposit for large party reservations?",
    answer:
      "A deposit may be required for large party bookings to secure the reservation, especially for private rooms or during peak times. The deposit will typically be applied to your final bill.",
  },
  {
    question:
      "What happens if some guests in my large party cancel or don’t show up?",
    answer:
      "We understand that plans can change. We ask that you notify us at least 24 hours in advance if there are any significant changes to your party size. For cancellations or no-shows, a fee may apply depending on the booking terms.",
  },
];

export default function PartyAccordion() {
  return (
    <section className=" w-[95%] lg:w-[75%] m-auto py-10">
        <h2 className="text-center text-4xl">Frequently Asked Questions</h2>
      <Accordion  type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem value={`faq-${index}`} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
