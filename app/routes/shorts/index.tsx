import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import Footer from "~/components/footer";
import Header from "~/components/header";
import { getShorts } from "~/models/short.server";

type LoaderData = {
  shorts: Awaited<ReturnType<typeof getShorts>>;
};

export const loader = async () => {
  return json<LoaderData>({
    shorts: await getShorts(),
  });
};

export default function Index() {
  const { shorts } = useLoaderData() as LoaderData;
  return (
    <>
      <Header />
      <div className="items-center justify-center bg-stone-100">
        <main className="min-h-4/5 relative py-8">
          <ul>
            {shorts.map((short) => (
              <li key={short.slug} className="mb-4">
                <Link
                  to={short.slug}
                  className="block w-full cursor-pointer py-1 text-3xl"
                >
                  <div className="flex justify-center">
                    <div className="w-2/3 rounded-lg bg-white p-6 px-12 shadow-lg">
                      <h2 className="mb-2 text-xl font-extrabold leading-tight text-teal-600 lg:text-3xl">
                        {short.title}
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
