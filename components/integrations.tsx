import {
  CloudIcon,
  DatabaseIcon,
  HardDriveIcon,
  HashIcon,
  MessageSquareIcon,
} from "lucide-react";
import { Switch } from "./ui/switch";
import Link from "next/link";

export function Integrations() {
  const integrations = [
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
                  <app.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    {app.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{app.desc}</p>
                </div>
              </div>
              <Switch checked={app.active} />
            </div>
          ))}

          <div className="flex items-center justify-center p-4 border-2 border-dashed rounded-lg border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors cursor-pointer gap-2">
            <Link href="#" className="size-4" />
            <span className="text-xs font-medium">Connect new integration</span>
          </div>
        </div>
      </div>
    </div>
  );
}
