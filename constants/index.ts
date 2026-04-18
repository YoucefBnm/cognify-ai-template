import { AiScreen } from "@/components/ai-screen";
import { Integrations } from "@/components/integrations";
import { SmartSummaries } from "@/components/smart-summaries";
import { TicketTirage } from "@/components/ticket-tirage";
import {
  BotMessageSquareIcon,
  BrainCircuitIcon,
  ChartNetworkIcon,
  LightbulbIcon,
  Link2Icon,
  ListFilterIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react";

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

export const features = [
  {
    id: 0,
    title: "Instant Answers from Your Docs",
    description:
      "Connect existing knowledge (docs, help centers, product specs) and let Cognify return accurate, context-aware answers to customers and agents.",
    benefit: "Reduce average response time and lighten agent load.",
    icon: ZapIcon,
    component: AiScreen,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    id: 1,
    title: "AI-Powered Ticket Triage",
    description:
      "Automatically categorize, prioritize, and route tickets so your team works on what matters most.",
    benefit: "Faster SLAs and lower operational cost.",
    icon: ListFilterIcon,
    component: TicketTirage,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    id: 2,
    title: "Smart Summaries & Insights",
    description:
      "Turn long conversations and documents into clear summaries and action items.",
    benefit: "Faster decision making and better handoffs.",
    icon: SparklesIcon,
    component: SmartSummaries,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    id: 3,
    title: "Seamless Integrations",
    description:
      "Out-of-the-box connectors for Zendesk, Intercom, Salesforce, Slack, Google Drive, and more.",
    benefit: "Keep workflows — just add AI.",
    icon: Link2Icon,
    component: Integrations,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export const about_text =
  "Cognify builds AI tools that make knowledge work faster, safer, and more helpful. We believe teams should spend time on impact — not on searching for answers. Our mission: turn scattered documentation and conversations into usable, trusted intelligence.";
