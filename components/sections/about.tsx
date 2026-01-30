import { Button } from "../ui/button";

const achievements = [
  {
    id: "achievement-1",
    title: "200+",
    description: "Trusted by 200+ companies",
  },
  {
    id: "achievement-2",
    title: "SOC2",
    description: "SOC2 Type II ready"
  },
  {
    id: "achievement-3",
    title: "99.9%",
    description: "99.9% uptime SLA",
  },
  {
    id: "achievement-4",
    title: "GDPR",
    description: "GDPR, CCPA compliant"
  }
]
export function About() {
  return (
    <section className="px-20 py-16 space-y-8 border-y">
      <div className="space-y-3">
        <h2>Make knowledge work faster</h2>
        <p className="text-balance text-xl leading-normal text-muted-foreground">              
          Cognify builds AI tools that make knowledge work faster, safer,
          and more helpful. We believe teams should spend time on impact —
          not on searching for answers. Our mission: turn scattered
          documentation and conversations into usable, trusted intelligence.
        </p>
      <Button>Start free trial</Button>

      </div>
      
      <div className="flex flex-wrap">
        {
          achievements.map(({ id, title, description }) => (
            <div key={id} className="md:flex-1 p-4 space-y-3 md:not-first:border-x md:last:border-x-0 md:nth-[3]:border-l-0">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-semibold tracking-tight">
                  {title}
                </h1>
              </div>
              <p className="text-muted-foreground">{description}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
}