import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import FrontNavItems from "@/components/navigation/FrontNavItems";
import MobileNavbar from "@/components/navigation/MobileNavbar";
import { ModeToggle } from "@/components/ModeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <FrontNavItems />

        <section className="flex flex-1 items-center justify-end space-x-2">
          <div className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  }),
                  "hidden w-10 px-0 sm:inline-flex",
                )}
              >
                <Icons.gitHub className="size-5" />
                <span className="sr-only">Github</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  }),
                  "hidden w-10 px-0 sm:inline-flex",
                )}
              >
                <Icons.twitter className="size-5" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </div>
        </section>

        <section className="mx-2 sm:mx-0 sm:ml-6">
          <ModeToggle />
        </section>

        <MobileNavbar />
      </div>
    </header>
  );
}
