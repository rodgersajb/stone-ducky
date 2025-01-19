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
      "We recommend booking 2 weeks in advance of with a pre-ordered items received a week ahead of time.",
  },
  {
    question:
      "What is the maximum number of guests you can accommodate for a group booking?",
    answer: "Our dining room seats 40 comfortably.",
  },
  {
    question: "Is gratuity automatically added for large groups?",
    answer: "There is an 18% gratuity for parties of 12 or more.",
  },
  {
    question: "Is there a private room or semi-private area available?",
    answer:
      "Unfortunately we do not have a private space set up for parties, however groups of 25+ will have a private indoor dining experience.",
  },
  {
    question:
      "Is there a deposit required when booking a large party?",
    answer:
      "Yes, for parties of 15 people there will be a required deposit.",
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
