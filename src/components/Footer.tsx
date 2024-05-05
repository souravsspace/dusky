import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "@/components/Icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center">
      <main className="mb-6 mt-14 flex flex-row items-center">
        <div className="mb-3 flex space-x-4">
          <Link
            target="_blank"
            rel="noreferrer"
            href="mailto:hello@example.com"
          >
            <span className="sr-only">Mail</span>
            <Mail className="h-6 w-6" />
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.twitter}
          >
            <span className="sr-only">Twitter</span>
            <Icons.twitter className="h-6 w-6" />
          </Link>
          <Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-6 w-6" />
          </Link>
        </div>
        <div className="mb-2 ml-6 flex space-x-2 text-sm text-muted-foreground">
          <a href={siteConfig.links.personalSite} target="_blank">
            {siteConfig.author}
          </a>
        </div>
      </main>
    </footer>
  );
}
