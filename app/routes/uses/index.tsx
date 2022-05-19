import { marked } from "marked";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import Footer from "~/components/footer";
import Header from "~/components/header";
import Uses from "./uses";

export type UsesLoaderData = { html: string };

export function headers() {
  return {
    "Cache-Control": "max-age=900, s-maxage=3600, public",
  };
}

export const loader: LoaderFunction = async ({ params }) => {
  const data = await fetch(
    "https://raw.githubusercontent.com/rakeshpetit/rak-remix-blog/main/markdowns/uses.md"
  ).then((res) => res.text());
  const html = marked(data);
  return json<UsesLoaderData>({ html });
};

export default function Index() {
  const { html } = useLoaderData() as UsesLoaderData;

  return (
    <>
      <Header />
      <main className="relative min-h-almost bg-sky-50 sm:flex sm:items-center sm:justify-center">
        <Uses html={html} />
      </main>
      <Footer />
    </>
  );
}
