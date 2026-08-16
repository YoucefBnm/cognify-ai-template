"use client";

import { Logo } from "@/components/logo";
import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonLabel,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuItem,
  AnimatedMenuList,
} from "@/components/systaliko-ui/animated-menu";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
  AudioLinesIcon,
  FileTextIcon,
  MicVocalIcon,
  UsersIcon,
} from "lucide-react";
import { Variants } from "motion";
import Link from "next/link";
import React from "react";
import GithubIcon from "../icons/github-icon";
import { useIsScrolled } from "@/hooks/use-is-scrolled";
import { nav_links, nav_socials } from "@/constants";

const variants = {
  open: {
    width: "70vw",
    height: "100vh",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    width: "0vw",
    height: "100vh",
    transition: { duration: 0.75, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
} as Variants;

function HeaderLogo() {
  return (
    <Link className="flex items-center justify-center" href="/">
      <Logo />
    </Link>
  );
}
function DesktopHeaderNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-2xs">
              <li>
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2">
                      <div className="bg-chart-2 text-white p-3.5 rounded ">
                        <AudioLinesIcon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Voice Generation</h3>
                        <p className="text-muted-foreground text-sm">
                          high fidelity audio from text for creators, media, and
                          developers.
                        </p>
                      </div>
                    </Link>
                  }
                />
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2">
                      <div className="bg-accent p-3.5 rounded text-accent-foreground">
                        <MicVocalIcon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Voice Automation</h3>
                        <p className="text-muted-foreground text-sm">
                          real time voice conversations for customer service and
                          business.
                        </p>
                      </div>
                    </Link>
                  }
                />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-2xs">
              <li>
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2">
                      <div className="bg-primary text-primary-foreground p-3.5 rounded ">
                        <FileTextIcon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Blog</h3>
                        <p className="text-muted-foreground text-sm">
                          Latest articles and news from the team.
                        </p>
                      </div>
                    </Link>
                  }
                />
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2">
                      <div className="bg-chart-1 p-3.5 rounded">
                        <UsersIcon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Community</h3>
                        <p className="text-muted-foreground text-sm">
                          Discover our community of developers and creators.
                        </p>
                      </div>
                    </Link>
                  }
                />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={`${navigationMenuTriggerStyle()} bg-transparent`}
            render={<Link href="/docs">Docs</Link>}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
function HeaderCta({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex gap-1", className)} {...props}>
      <Button variant="ghost" size="icon">
        <GithubIcon />
      </Button>
      <Button>Book a demo</Button>
    </div>
  );
}

function HeaderDesktop() {
  const { isScrolled, sentinelRef } = useIsScrolled();
  return (
    <>
      <div
        ref={sentinelRef}
        className="absolute top-0 h-px w-full bg-transparent"
      />
      <header className="fixed z-999 top-4 left-0 w-full flex justify-center">
        <div
          className={`
            flex justify-between 
            transition-all duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)]
            inset-[0_0_auto] p-1 rounded-full
            ${isScrolled ? "w-9/12 backdrop-blur-lg bg-sidebar/60 border shadow-[0_0_0_1px_rgba(0,0,0,0.05)]" : "w-full px-8"}
            `}
        >
          <HeaderLogo />

          <div className="flex items-center gap-8">
            <DesktopHeaderNav />
            <HeaderCta />
          </div>
        </div>
      </header>
    </>
  );
}
function HeaderMobile() {
  const { isScrolled, sentinelRef } = useIsScrolled();

  return (
    <>
      <div
        ref={sentinelRef}
        className="absolute top-2 h-px w-full bg-transparent"
      />
      <header
        className={`fixed w-full px-4 z-999 flex items-center gap-4 justify-between h-14 transition-all duration-300 ${
          isScrolled
            ? "bg-sidebar/60 backdrop-blur-lg shadow-[0_0_0_1px_rgba(0,0,0,0.05)] translate-y-0"
            : "bg-transparent"
        }`}
      >
        <HeaderLogo />

        <AnimatedMenu>
          <AnimatedMenuButton>
            <AnimatedMenuButtonToggleIcon />
            <AnimatedMenuButtonLabel />
          </AnimatedMenuButton>

          <AnimatedMenuList className="ring shadow-2xs ring-ring/10 place-content-center">
            <div className="space-y-0.5 *:transition-blur *:duration-300 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
              {nav_links.map((item, i) => (
                <AnimatedMenuItem key={i} order={i}>
                  <Link
                    className="block border-b px-2.5 py-2 text-sm font-medium"
                    href={item.href}
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                </AnimatedMenuItem>
              ))}
            </div>
          </AnimatedMenuList>
        </AnimatedMenu>
      </header>
    </>
  );
}

export function Header() {
  const isMobile = useIsMobile();
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
}
