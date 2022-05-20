import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Footer from "~/components/footer";
import Header from "~/components/header";
import { getPost, Post } from "~/models/post.server";
import invariant from "tiny-invariant";
import { marked } from "marked";

type PostLoaderData = {
  post: Post;
  html: string;
};

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);
  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);
  const data = await fetch(post.markdown).then((res) => res.text());
  const html = marked(data);
  return json<PostLoaderData>({ post, html });
};

export default function PostSlug() {
  const { post, html } = useLoaderData() as PostLoaderData;
  return (
    <>
      <Header />
      <main className="relative min-h-almost sm:flex sm:items-center sm:justify-center">
        <section>
          <h1 className="mt-4 text-center text-3xl text-cyan-700 lg:text-5xl">
            {post.title}
          </h1>
          <article className="prose prose-pink prose-headings:font-bold lg:text-2xl lg:leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
