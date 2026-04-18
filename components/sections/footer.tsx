import { about_text } from "@/constants";
import { Logo } from "../logo";
import { AppleStoreIcon } from "../icons/apple-store-icon";
import { GooglePlayIcon } from "../icons/google-play-icon";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly items-center gap-8 p-12 ">
        <FooterLogo />

        <FooterSocials />

        <FooterSitemap />

        <FooterBadges />
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <div className="space-y-4">
      <div className="inline-flex gap-2 items-center">
        <Logo className="size-6.5" />
        <span className="text-xl font-medium">Cognify</span>
      </div>
      <p className="text-muted-foreground text-sm text-balance">{about_text}</p>
    </div>
  );
}

function FooterBadges() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold">Download app</h2>
      <div className="flex gap-2">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-lg border-2 border-border/20 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 px-2.5 py-1.5 shadow-[0_26.941px_53.881px_-12.931px_rgba(0,184,219,0.10)]"
        >
          <AppleStoreIcon className="w-30" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-lg border-2 border-border/20 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 px-2.5 py-1.5 shadow-[0_26.941px_53.881px_-12.931px_rgba(0,184,219,0.10)]"
        >
          <GooglePlayIcon className="w-30" />
        </a>
      </div>
    </div>
  );
}

function FooterSitemap() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold">Sitemap</h2>
      <ul className="space-y-2 list-style-none *:text-secondary-foreground/70 *:hover:text-secondary-foreground">
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Docs</a>
        </li>
        <li>
          <a href="#">Solutions</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
      </ul>
    </div>
  );
}

function FooterSocials() {
  return (
    <ul className="list-style-none flex gap-2 *:text-primary/70 *:hover:text-primary *:font-medium *:text-sm">
      <li>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Twitter X
        </a>
      </li>
      <li>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </li>
      <li>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </li>
      <li>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      </li>
    </ul>
  );
}
