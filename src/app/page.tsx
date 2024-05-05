import { posts } from "#site/content";
import PostItem from "@/components/PostItem";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { sortPosts } from "@/lib/post-fns";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 2);
  return (
    <>
      <section className="space-y-6 pb-8 pt-10 md:mt-10 md:pb-12 lg:py-24">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-balance text-3xl font-black sm:text-5xl md:text-6xl lg:text-7xl">
            Hello, I&apos;m Sourav.
          </h1>
          <p className="mx-auto max-w-[42rem] text-balance text-muted-foreground sm:text-xl">
            Welcome to my blog template. Built using tailwind, shadcn, velite
            and Nextjs 14.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:max-w-40",
              )}
            >
              View my blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:max-w-40",
              )}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>

      <section className="container flex max-w-4xl flex-col space-y-6 py-6 lg:py-10">
        <h2 className="text-center text-3xl font-black sm:text-5xl md:text-6xl lg:text-7xl">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                date={post.date}
                // tags={post.tags}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
