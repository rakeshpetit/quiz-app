import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { deletePost, getPost, Post } from "~/models/post.server";
import invariant from "tiny-invariant";
import { Form, ActionFunction, redirect } from "remix";
import { requireUserId } from "~/session.server";

type LoaderData = {
  post: Post;
};

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);
  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);
  return json<LoaderData>({ post });
};

export const action: ActionFunction = async ({ request, params }) => {
  await requireUserId(request);
  invariant(params.slug, "slug not found");
  await deletePost({ slug: params.slug });
  return redirect("/posts/admin");
};

export default function PostSlug() {
  const { post } = useLoaderData() as LoaderData;
  return (
    <>
      <main className="relative flex min-h-almost flex-col items-center">
        <p className="mt-4 text-center text-xl text-black lg:text-2xl">
          {post.title}
        </p>
        <hr className="my-2" />
        <Form method="post">
          <button
            type="submit"
            className="rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
          >
            Delete
          </button>
        </Form>
      </main>
    </>
  );
}
