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
      <div className="p-16 grid grid-cols-1 grid-rows-auto md:grid-rows-1 md:grid-cols-2 items-start">
        <div className="md:sticky md:top-8 p-8 md:p-20 space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tighter text-balance">
            No question left unanswered
          </h2>
          <p className="text-muted-foreground max-w-[47ch]">
            Cognify is a powerful AI-powered knowledge base that delivers
            intelligent answers to your customers&apos; questions. It&apos;s
            designed to help you streamline your support process, reduce ticket
            volume, and improve customer satisfaction.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map(({ id, question, answer }) => (
              <AccordionItem className="border-none" key={id} value={id}>
                <AccordionTrigger className="pt-4 pr-20 pb-6 pl-0">
                  <h3>{question}</h3>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance pt-4 pr-12 pb-8 pl-0 ">
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
