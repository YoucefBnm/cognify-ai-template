import { achievements } from "@/constants";
import { SectionHeader } from "../section-header";
import { SectionTitle } from "../section-title";
import { TicketTirage } from "../ticket-tirage";
import { Button } from "../ui/button";

export function SocialProof() {
  return (
    <section className="pb-16 space-y-8">
      <SectionTitle title="Why us" />
      <div className="max-w-6xl px-2 mx-auto space-y-8">
        <div className="flex items-center gap-8 flex-wrap">
          <div className="space-y-6 flex-1">
            <SectionHeader
              title="Make knowledge work faster"
              paragraph="Cognify builds AI tools that make knowledge work faster, safer, and more helpful. We believe teams should spend time on impact not on searching for answers. Our mission: turn scattered documentation and conversations into usable, trusted intelligence."
              className="justify-start text-left items-start"
            />

            <Button>Claim your free credit</Button>
            <div className="flex w-fit flex-wrap gap-2 ">
              {achievements.map((achiev) => (
                <div
                  key={achiev.id}
                  className="relative text-sm bg-card text-card-foreground p-2 w-40 border border-dashed aspect-4/3 place-content-center before:absolute before:size-1.5 before:bg-border before:top-0 before:left-0 before:-translate-y-1/2 before:-translate-x-1/2   after:absolute after:size-1.5 after:bg-border after:top-0 after:right-0 after:-translate-y-1/2 after:translate-x-1/2"
                >
                  <h3 className="font-semibold tabular-nums">{achiev.title}</h3>
                  <span className="text-balance">{achiev.lead}</span>
                  <p className="text-muted-foreground mt-2">
                    {achiev.description}
                  </p>

                  <span className="absolute bottom-0 left-0 size-1.5 bg-border -translate-x-1/2 translate-y-1/2" />
                  <span className="absolute bottom-0 right-0 size-1.5 bg-border translate-x-1/2 translate-y-1/2" />
                </div>
              ))}
            </div>
          </div>

          <TicketTirage className="rounded-md max-w-lg" />
        </div>
      </div>
    </section>
  );
}
