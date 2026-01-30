import {
  CheckCircle2Icon,
  FileTextIcon,
  ListTodoIcon,
  SparklesIcon,
} from "lucide-react";

export function SmartSummaries() {
  return (
    <div className="size-full flex flex-col bg-background rounded-xl overflow-hidden border shadow-sm relative">
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 p-6 opacity-40 blur-[1px] pointer-events-none flex flex-col gap-4">
        <div className="flex gap-3">
          <div className="size-8 rounded-full bg-slate-200" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-1/3 bg-slate-200 rounded" />
            <div className="h-16 w-3/4 bg-slate-200 rounded" />
          </div>
        </div>
        <div className="flex gap-3 flex-row-reverse">
          <div className="size-8 rounded-full bg-blue-200" />
          <div className="flex-1 space-y-2 flex flex-col items-end">
            <div className="h-12 w-1/2 bg-blue-100 rounded" />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="size-8 rounded-full bg-slate-200" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-1/3 bg-slate-200 rounded" />
            <div className="h-24 w-5/6 bg-slate-200 rounded" />
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
        <div className="w-full max-w-xs  border rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-500">
          <div className="bg-linear-to-r from-indigo-500 to-blue-500 p-3 flex items-center gap-2 text-white">
            <SparklesIcon className="size-4" />
            <span className="text-sm font-semibold">Conversation Insights</span>
          </div>
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                <FileTextIcon className="w-3 h-3" /> Summary
              </h5>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-snug">
                User reported a recurring sync error on the mobile app (v2.4).
                Issue appears to be related to intermittent network
                connectivity.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                <ListTodoIcon className="w-3 h-3" />
                Action Items
              </h5>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2Icon className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    Ticket created{" "}
                    <span className="text-blue-500 underline decoration-dotted">
                      #BUG-402
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2Icon className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
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
