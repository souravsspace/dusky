import { posts } from "#site/content";
import { MdxContent } from "@/components/Mdx";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string[];
  };
};

async function getPostFromParams(params: Props["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<Props["params"][]> {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: Props) {
  const post = await getPostFromParams(params);

  if (!post || !post.isPublished) notFound();
  return (
    <article className="prose dark:prose-invert container mx-auto max-w-3xl py-6">
      <h2 className="mb-2">{post.title}</h2>
      <div className="mb-2 flex gap-2">
        {/* {post.tags?.map((tag) => <Tag tag={tag} key={tag} />)} */}
      </div>

      {post.description ? (
        <p className="mt-0 text-xl text-muted-foreground">{post.description}</p>
      ) : null}

      <hr className="my-4" />
      <MdxContent code={post.body} />
    </article>
  );
}
