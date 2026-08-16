import {
  BotMessageSquareIcon,
  BrainCircuitIcon,
  ChartNetworkIcon,
  CloudIcon,
  DatabaseIcon,
  HardDriveIcon,
  HashIcon,
  LightbulbIcon,
  Link2Icon,
  ListFilterIcon,
  LucideIcon,
  MessageSquareIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react";

export const SHADER_COLORS = ["#E0E9F6", "#f5f5f5", "#A0BDE3"] as [
  string,
  string,
  string,
];
export const nav_links: { id: string; label: string; href: string }[] = [
  {
    id: "nav-link-2",
    label: "Products",
    href: "#Products",
  },
  {
    id: "nav-link-1",
    label: "Docs",
    href: "#docs",
  },
  {
    id: "nav-link-3",
    label: "Solutions",
    href: "#solutions",
  },
  {
    id: "nav-link-4",
    label: "Pricing",
    href: "#pricing",
  },
];

export const nav_socials: { id: string; label: string; href: string }[] = [
  {
    id: "nav-social-link-1",
    label: "IG",
    href: "https://instagram.com/cognify.ai",
  },
  {
    id: "nav-nav-social-link-2",
    label: "Linkedin",
    href: "https://www.linkedin.com/company/cognify-ai/",
  },
  {
    id: "nav-nav-social-link-3",
    label: "X",
    href: "https://www.x.com/cognify-ai/",
  },
];

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  featured?: boolean;
  price: { monthly: number; yearly: number } | "custom";
  features: string[];
}
export const pricing_plans: PricingPlan[] = [
  {
    id: "pricing-plan-starter",
    name: "Starter",
    description: "Best for individuals or small teams",
    price: { monthly: 29, yearly: 299 },
    features: [
      "Up to 5 seats",
      "Basic knowledge sync",
      "Live chat suggestions",
      "Email support",
    ],
  },
  {
    id: "pricing-plan-pro",
    name: "Pro",
    description: "Best for medium-sized teams",
    featured: true,
    price: { monthly: 49, yearly: 499 },
    features: [
      "Up to 50 seats",
      "Advanced triage & routing",
      "Integrations with Zendesk & Salesforce",
      "SLA & analytics",
    ],
  },
  {
    id: "pricing-plan-entreprise",
    name: "Entreprise",
    description: "Best for large scale enterprises",
    price: "custom",
    features: [
      "Unlimited seats",
      "Dedicated onboarding",
      "On-prem / VPC options",
      "Compliance & SSO",
    ],
  },
];

export const products_cards = [
  {
    id: "product-chat",
    label: "Coginfy Chat",
    icon: BotMessageSquareIcon,
    description:
      "Conversational assistant that answers customer queries in real-time using your verified knowledge base. It reduces repetitive ticket volume and provides fast, human-like responses that remain consistent with your policies.",
  },
  {
    id: "product-assistant",
    label: "Coginfy Assist",
    icon: BrainCircuitIcon,
    description:
      "AI companion for support and sales agents. It offers real‑time suggested replies, contextual lookup, entity highlighting, and automated ticket summarization to accelerate resolution times and reduce cognitive load.",
  },
  {
    id: "product-insights",
    label: "Coginfy Insights",
    icon: LightbulbIcon,
    description:
      "Intelligence analytics dashboard. It reveals trends, patterns, content gaps, model accuracy, most‑asked topics, and support efficiency metrics — helping you continuously improve your knowledge assets.",
  },
  {
    id: "product-connect",
    label: "Coginfy Connect",
    icon: ChartNetworkIcon,
    description:
      "Integrations hub that makes setup seamless. Connects with support centers, email pipelines, CRMs, internal drives, and custom endpoints so data flows securely and automatically.",
  },
];

export const achievements = [
  {
    id: "achievement-1",
    title: "200+",
    lead: "get task done faster",
    description: "companies trust us",
  },
  {
    id: "achievement-2",
    title: "SOC2",
    lead: "securely manage customer data",
    description: "Type II ready",
  },
  {
    id: "achievement-3",
    title: "99.9%",
    lead: "contractual guarantee",
    description: "uptime SLA",
  },
  {
    id: "achievement-4",
    title: "GDPR",
    lead: "protect personal data",
    description: "and CCPA compliant",
  },
];

export const about_text =
  "Cognify builds AI tools that make knowledge work faster, safer, and more helpful. We believe teams should spend time on impact, not on searching for answers. Our mission: turn scattered documentation and conversations into usable, trusted intelligence.";

export const faqs = [
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

export const INTEGRATIONS_DATA: {
  name: string;
  icon: LucideIcon;
  color: string;
  active: boolean;
  desc: string;
}[] = [
  {
    name: "Slack",
    icon: HashIcon,
    color: "bg-emerald-500",
    active: true,
    desc: "Channel alerts & replies",
  },
  {
    name: "Salesforce",
    icon: CloudIcon,
    color: "bg-blue-500",
    active: true,
    desc: "CRM data sync",
  },
  {
    name: "Google Drive",
    icon: HardDriveIcon,
    color: "bg-yellow-500",
    active: true,
    desc: "Knowledge base source",
  },
  {
    name: "Zendesk",
    icon: MessageSquareIcon,
    color: "bg-green-600",
    active: false,
    desc: "Ticket management",
  },
  {
    name: "Intercom",
    icon: MessageSquareIcon,
    color: "bg-indigo-500",
    active: false,
    desc: "Customer chat sync",
  },
  {
    name: "Notion",
    icon: DatabaseIcon,
    color: "bg-slate-800",
    active: false,
    desc: "Wiki import",
  },
];
