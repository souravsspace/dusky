"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MLink href="/" className="flex items-center" onOpenChange={setOpen}>
          <Icons.logo className="mr-2 size-5" />
          <span className="font-bold">{siteConfig.name}</span>
        </MLink>

        <div className="mt-3 flex flex-col gap-3">
          <MLink onOpenChange={setOpen} href="/blog">
            Blog
          </MLink>
          <MLink onOpenChange={setOpen} href="/about">
            About
          </MLink>
          <Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            GitHub
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.twitter}
          >
            Twitter
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MLinkProps) {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
