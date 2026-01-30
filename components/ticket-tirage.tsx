import { ArrowRightIcon, ClockIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
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

export function TicketTirage() {
  
  return (
    <div className="size-full flex flex-col  rounded-xl overflow-hidden border shadow-sm">
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
                    <ClockIcon className="w-3 h-3" /> {ticket.time}
                  </span>
                </div>
              </div>
            </div>

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
            <ArrowRightIcon className="size-3" />
            Auto-triage active
          </div>
        </div>
      </div>
    </div>
  );
}
