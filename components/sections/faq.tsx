import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "How long does setup take?",
    answer:
      "Most customers are live within 2–7 days depending on integrations and data volume.",
  },
  {
    id: "faq-5",
    question: "How do I get started?",
    answer:
      "Sign up for a free trial and start building your knowledge base today.",
  },
  {
    id: "faq-2",
    question: "Is my data secure?",
    answer:
      "Absolutly. We offer encryption at rest and in transit, role-based access control, and audit logs. Enterprise plans include VPC/Bring Your Own Key options.",
  },
  {
    id: "faq-3",
    question: "Do you fine-tune models on our data?",
    answer:
      "You control whether private fine-tuning or instruction-tuning is enabled. Defaults prioritize privacy and ephemeral contexts.",
  },
  {
    id: "faq-4",
    question: "What integrations do you support?",
    answer:
      "Zendesk, Intercom, Salesforce, Slack, Google Drive, Confluence, and custom webhooks.",
  },
  {
    id: "faq-6",
    question: "How do I contact you?",
    answer: "Reach out to us at support@cognify.com.",
  },
];

export function FAQ() {
  return (
    <section className="border-y">
      <div className="px-8 md:px-16 py-16 space-y-8">
        <div className="text-center w-4/5 mx-auto space-y-2">
          <h2>
            No question has no answer
          </h2>
          <p className="text-muted-foreground m-auto text-balance max-w-[50ch]">
            Designed to help you streamline your support process, reduce ticket
            volume, and improve customer satisfaction.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map(({ id, question, answer }) => (
              <AccordionItem className="mx-auto md:max-w-3/5 border border-border/50 rounded px-6 bg-popover" key={id} value={id}>
                <AccordionTrigger className="text-xl">
                  <h3>{question}</h3>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  <p>{answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
