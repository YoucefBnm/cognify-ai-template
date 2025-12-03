"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

const features = [
  {
    id: 0,
    title: "Instant Answers from Your Docs",
    description:
      "Connect existing knowledge (docs, help centers, product specs) and let Cognify return accurate, context-aware answers to customers and agents.",
    benefit: "Reduce average response time and lighten agent load.",
    // icon: Zap,
    component: InstantAnswers,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    id: 1,
    title: "AI-Powered Ticket Triage",
    description:
      "Automatically categorize, prioritize, and route tickets so your team works on what matters most.",
    benefit: "Faster SLAs and lower operational cost.",
    // icon: ListFilter,
    component: TicketTriage,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    id: 2,
    title: "Smart Summaries & Insights",
    description:
      "Turn long conversations and documents into clear summaries and action items.",
    benefit: "Faster decision making and better handoffs.",
    // icon: Sparkles,
    component: SmartSummaries,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    id: 3,
    title: "Seamless Integrations",
    description:
      "Out-of-the-box connectors for Zendesk, Intercom, Salesforce, Slack, Google Drive, and more.",
    benefit: "Keep workflows — just add AI.",
    // icon: Link2,
    component: Integrations,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];
export function TicketTriage() {
  const tickets = [
    {
      id: "T-1024",
      title: "Cannot access production database",
      priority: "high",
      category: "DevOps",
      assignee: "Sarah C.",
      time: "2m ago",
      status: "Routing...",
    },
    {
      id: "T-1023",
      title: "Update billing information for Q4",
      priority: "low",
      category: "Billing",
      assignee: "Finance Bot",
      time: "15m ago",
      status: "Routed",
    },
    {
      id: "T-1022",
      title: "Feature request: Dark mode export",
      priority: "medium",
      category: "Product",
      assignee: "Product Team",
      time: "1h ago",
      status: "Routed",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-background rounded-xl overflow-hidden border shadow-sm">
      <div className="p-4 border-b bg-muted/10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium">Incoming Tickets</span>
        </div>
        <Badge variant="secondary" className="text-xs">
          Live Stream
        </Badge>
      </div>

      <div className="flex-1 p-4 space-y-3 bg-slate-50/50 dark:bg-slate-950/50">
        {tickets.map((ticket, i) => (
          <div
            key={ticket.id}
            className="group bg-white dark:bg-slate-900 border rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between"
            style={{ opacity: 1 - i * 0.2 }} // Fade out older tickets slightly
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-1 w-2 h-2 rounded-full ${
                  ticket.priority === "high"
                    ? "bg-red-500"
                    : ticket.priority === "medium"
                    ? "bg-yellow-500"
                    : "bg-blue-500"
                }`}
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-muted-foreground">
                    {ticket.id}
                  </span>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    {ticket.title}
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-[10px] h-5 px-1.5">
                    {ticket.category}
                  </Badge>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    {/* <Clock className="w-3 h-3" /> {ticket.time} */}
                  </span>
                </div>
              </div>
            </div>

            {/* Routing Animation for first item */}
            <div className="flex flex-col items-end gap-1">
              {i === 0 ? (
                <div className="flex items-center gap-1.5 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                  <div className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  Analyzing...
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <Avatar className="w-6 h-6 border">
                    <AvatarFallback className="text-[10px] bg-slate-100">
                      {ticket.assignee[0]}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    {ticket.assignee}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="flex justify-center pt-2">
          <div className="text-xs text-muted-foreground flex items-center gap-1 opacity-50">
            {/* <ArrowRight className="w-3 h-3" /> */}
            Auto-triage active
          </div>
        </div>
      </div>
    </div>
  );
}
export function SmartSummaries() {
  return (
    <div className="w-full h-full flex flex-col bg-background rounded-xl overflow-hidden border shadow-sm relative">
      {/* Blurred Background Content (The Conversation) */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 p-6 opacity-40 blur-[1px] pointer-events-none flex flex-col gap-4">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-1/3 bg-slate-200 rounded" />
            <div className="h-16 w-3/4 bg-slate-200 rounded" />
          </div>
        </div>
        <div className="flex gap-3 flex-row-reverse">
          <div className="w-8 h-8 rounded-full bg-blue-200" />
          <div className="flex-1 space-y-2 flex flex-col items-end">
            <div className="h-12 w-1/2 bg-blue-100 rounded" />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-1/3 bg-slate-200 rounded" />
            <div className="h-24 w-5/6 bg-slate-200 rounded" />
          </div>
        </div>
      </div>

      {/* The Smart Summary Overlay */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
        <div className="w-full max-w-xs bg-white dark:bg-slate-900 border rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-500">
          <div className="bg-gradient-to-r from-violet-500 to-purple-500 p-3 flex items-center gap-2 text-white">
            {/* <SparklesIcon className="w-4 h-4" /> */}
            <span className="text-sm font-semibold">Conversation Insights</span>
          </div>
          <div className="p-4 space-y-4">
            {/* Summary Section */}
            <div className="space-y-2">
              <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                {/* <FileText className="w-3 h-3" /> Summary */}
              </h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-snug">
                User reported a recurring sync error on the mobile app (v2.4).
                Issue appears to be related to intermittent network
                connectivity.
              </p>
            </div>

            {/* Action Items Section */}
            <div className="space-y-2">
              <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                {/* <ListTodo className="w-3 h-3" />  */}
                Action Items
              </h5>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  {/* <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> */}
                  <span className="text-slate-700 dark:text-slate-300">
                    Ticket created{" "}
                    <span className="text-blue-500 underline decoration-dotted">
                      #BUG-402
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  {/* <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> */}
                  <span className="text-slate-700 dark:text-slate-300">
                    Email troubleshooting guide sent
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function Integrations() {
  const integrations = [
    {
      name: "Slack",
      // icon: Hash,
      color: "bg-emerald-500",
      active: true,
      desc: "Channel alerts & replies",
    },
    {
      name: "Salesforce",
      // icon: Cloud,
      color: "bg-blue-500",
      active: true,
      desc: "CRM data sync",
    },
    {
      name: "Google Drive",
      // icon: HardDrive,
      color: "bg-yellow-500",
      active: true,
      desc: "Knowledge base source",
    },
    {
      name: "Zendesk",
      // icon: MessageSquare,
      color: "bg-green-600",
      active: false,
      desc: "Ticket management",
    },
    {
      name: "Intercom",
      // icon: MessageSquare,
      color: "bg-indigo-500",
      active: false,
      desc: "Customer chat sync",
    },
    {
      name: "Notion",
      // icon: Database,
      color: "bg-slate-800",
      active: false,
      desc: "Wiki import",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-background rounded-xl overflow-hidden border shadow-sm">
      <div className="p-4 border-b bg-muted/10">
        <h3 className="font-medium text-sm">Connected Apps</h3>
      </div>
      <div className="flex-1 p-4 bg-slate-50/50 dark:bg-slate-950/50 overflow-y-auto">
        <div className="grid grid-cols-1 gap-3">
          {integrations.map((app) => (
            <div
              key={app.name}
              className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg ${app.color} flex items-center justify-center text-white shadow-sm`}
                >
                  {/* <app.icon className="w-5 h-5" /> */}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    {app.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{app.desc}</p>
                </div>
              </div>
              {/* <Switch checked={app.active} /> */}
            </div>
          ))}

          <div className="flex items-center justify-center p-4 border-2 border-dashed rounded-lg border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors cursor-pointer gap-2">
            <Link href="#" className="w-4 h-4" />
            <span className="text-xs font-medium">Connect new integration</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export function InstantAnswers() {
  return (
    <div className="w-full h-full flex flex-col bg-background rounded-xl overflow-hidden border shadow-sm">
      {/* Mock Browser Header */}
      <div className="h-10 border-b bg-muted/30 flex items-center px-4 space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500/20" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
        <div className="w-3 h-3 rounded-full bg-green-500/20" />
        <div className="ml-4 h-6 w-64 bg-muted rounded-md text-[10px] flex items-center px-2 text-muted-foreground">
          cognify.ai/agent/chat
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col gap-4 bg-slate-50/50 dark:bg-slate-950/50">
        {/* User Message - Simulates entering first */}
        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-[80%] text-sm shadow-sm"
          >
            How do I configure the SSO for my enterprise team?
          </motion.div>
        </div>

        {/* AI Processing State */}
        <div className="flex items-start gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          >
            <Avatar className="h-8 w-8 border bg-white">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-primary/10 text-primary text-xs">
                AI
              </AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="flex flex-col gap-2 max-w-[90%]">
            {/* Status Text */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.5 }}
              className="flex items-center gap-2 text-xs text-muted-foreground mb-1"
            >
              {/* <Sparkles className="w-3 h-3 text-blue-500 animate-pulse" /> */}
              <span>Scanning Knowledge Base...</span>
            </motion.div>

            {/* Source Cards */}
            <div className="flex gap-2 mb-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2.0 }}
                className="flex items-center gap-2 bg-white dark:bg-slate-900 border px-3 py-1.5 rounded-lg text-xs text-muted-foreground shadow-sm"
              >
                {/* <FileText className="w-3 h-3 text-orange-500" /> */}
                Docs: SSO Setup
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2.3 }}
                className="flex items-center gap-2 bg-white dark:bg-slate-900 border px-3 py-1.5 rounded-lg text-xs text-muted-foreground shadow-sm"
              >
                {/* <FileText className="w-3 h-3 text-blue-500" /> */}
                Guide: Enterprise
              </motion.div>
            </div>

            {/* Final Answer */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5, delay: 3.0, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="bg-white dark:bg-slate-900 border px-4 py-3 rounded-2xl rounded-tl-none text-sm shadow-sm text-slate-700 dark:text-slate-300">
                <p className="leading-relaxed">
                  To configure SSO for your enterprise team, navigate to
                  <span className="font-semibold text-primary mx-1">
                    Settings &gt; Security
                  </span>
                  . You&apos;ll need your Identity Provider (IdP) metadata XML
                  file.
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.8, duration: 0.5 }}
                  className="mt-3 pt-3 border-t flex items-center justify-between"
                >
                  <span className="text-xs text-muted-foreground">
                    Confidence: 98%
                  </span>
                  <Badge
                    variant="outline"
                    className="text-[10px] h-5 text-green-600 border-green-200 bg-green-50"
                  >
                    Verified Source
                  </Badge>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything you need to build a{" "}
            <span className="text-blue-600">smarter support system</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Cognify transforms your customer experience with autonomous agents
            that understand your product as well as you do.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Feature List (Left Side) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={cn(
                  "group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 text-left",
                  activeFeature === index
                    ? "bg-white dark:bg-slate-900 border-blue-600/20 shadow-lg scale-[1.02]"
                    : "bg-transparent border-transparent hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:scale-[1.01]"
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "p-2 rounded-lg shrink-0 transition-colors",
                      activeFeature === index
                        ? feature.bg
                        : "bg-slate-100 dark:bg-slate-800"
                    )}
                  >
                    {/* <feature.icon
                      className={cn(
                        "w-6 h-6",
                        activeFeature === index ? feature.color : "text-slate-500"
                      )}
                    /> */}
                  </div>
                  <div>
                    <h3
                      className={cn(
                        "font-semibold text-lg mb-2",
                        activeFeature === index
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-600 dark:text-slate-400"
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-3">
                      {feature.description}
                    </p>
                    {activeFeature === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2"
                      >
                        <span className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded text-xs">
                          Benefit
                        </span>
                        {feature.benefit}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Preview Area (Right Side) */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="relative aspect-[4/3] lg:aspect-square xl:aspect-[4/3] rounded-3xl border bg-slate-100 dark:bg-slate-900 p-4 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30 pointer-events-none"></div>

              <div className="relative h-full w-full bg-white dark:bg-slate-950 rounded-2xl border shadow-sm overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    {features.map((feature) => {
                      if (feature.id === activeFeature) {
                        const Component = feature.component;
                        return <Component key={feature.id} />;
                      }
                      return null;
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
