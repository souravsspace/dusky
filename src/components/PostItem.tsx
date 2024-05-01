import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { formatDate } from "@/lib/formatters";

type Props = {
  slug: string;
  date: string;
  title: string;
  description?: string;
  tags?: string[];
};

export default function PostItem({
  date,
  description,
  slug,
  tags,
  title,
}: Props) {
  return (
    <article className="flex flex-col gap-2 border-b border-border py-3">
      <Link href={"/" + slug}>
        <h2 className="text-2xl font-bold">{title}</h2>
      </Link>

      {/* <section className="flex gap-2"></section> */}
      <h4 className="max-w-none text-muted-foreground">{description}</h4>
      <section className="flex items-center justify-between">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="flex items-center gap-1 text-sm font-medium sm:text-base">
            <Calendar className="size-5" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={"/" + slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read more →
        </Link>
      </section>
    </article>
  );
}
