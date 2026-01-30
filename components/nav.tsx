import { nav_links } from "@/data/nav-links";
import { cn } from "@/lib/utils";

export function Nav({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  <ul className={cn("flex w-fit list-none", className)} {...props}>
    {nav_links.map(({ id, label, href }) => (
      <li
        key={id}
        className="cursor-pointer text-sm font-medium transition-colors duration-200 text-primary/60 hover:text-primary tracking-tight"
      >
        <a
          href={href}
          aria-label={`navigate to ${label}`}
          className="px-4 py-2"
        >
          {label}
        </a>
      </li>
    ))}
  </ul>;
}
