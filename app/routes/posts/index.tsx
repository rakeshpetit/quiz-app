import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import Footer from "~/components/footer";
import Header from "~/components/header";
import { getPosts } from "~/models/post.server";

type PostsLoaderData = {
  // this is a handy way to say: "posts is whatever type getPosts resolves to"
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader = async () => {
  return json<PostsLoaderData>({
    posts: await getPosts(),
  });
};

export default function Index() {
  const { posts } = useLoaderData() as PostsLoaderData;
  return (
    <>
      <Header />
      <main className="relative h-4/5 bg-stone-100">
        <div className="flex items-center justify-center pt-8">
          <ul>
            {posts.map((post) => (
              <li key={post.slug} className="mb-4">
                <Link
                  to={post.slug}
                  className="block w-full cursor-pointer py-1 text-3xl font-extrabold text-teal-600"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}