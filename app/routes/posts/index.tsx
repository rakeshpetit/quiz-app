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
      <div className="items-center justify-center bg-stone-100">
        <main className="min-h-4/5 relative py-8">
          <ul>
            {posts.map((post) => (
              <li key={post.slug} className="mb-4">
                <Link
                  to={post.slug}
                  className="block w-full cursor-pointer py-1 text-3xl"
                >
                  <div className="flex justify-center">
                    <div className="w-2/3 rounded-lg bg-white p-6 px-12 shadow-lg">
                      <h2 className="mb-2 text-xl font-extrabold leading-tight text-teal-600 lg:text-3xl">
                        {post.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
      <Footer />
    </>
  );
}
