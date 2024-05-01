"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/Icons";
import { navLinks } from "@/config/nav";
import { cn } from "@/lib/utils";

export default function FrontNavItems() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="size-7" />
      </Link>

      <>
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "hidden text-sm font-medium transition-colors hover:text-primary sm:inline-block",
              pathname === href ? "text-foreground" : "text-foreground/60",
            )}
          >
            {label}
          </Link>
        ))}
      </>
    </nav>
  );
}
