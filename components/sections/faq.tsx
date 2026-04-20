import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";
import { SectionHeader } from "../section-header";

export function FAQ() {
  return (
    <div className="px-8 py-16 space-y-8">
      <SectionHeader
        title="Have a question"
        paragraph="Designed to help you streamline your support process, reduce ticket volume, and improve customer satisfaction."
      />

      <Accordion className="md:max-w-3/5 mx-auto ">
        {faqs.map(({ id, question, answer }) => (
          <AccordionItem
            className="mx-auto w-full border-b border-b-background/70 rounded px-6"
            key={id}
            value={id}
          >
            <AccordionTrigger className="text-lg font-medium">
              <h3>{question}</h3>
            </AccordionTrigger>
            <AccordionContent>
              <p>{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
