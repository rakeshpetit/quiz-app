import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { deleteShort, getShort, Short } from "~/models/short.server";
import invariant from "tiny-invariant";
import { Form, ActionFunction, redirect } from "remix";
import { requireUserId } from "~/session.server";

type LoaderData = {
  short: Short;
};

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);
  const short = await getShort(params.slug);
  invariant(short, `Short not found: ${params.slug}`);
  return json<LoaderData>({ short });
};

export const action: ActionFunction = async ({ request, params }) => {
  await requireUserId(request);
  invariant(params.slug, "slug not found");
  await deleteShort({ slug: params.slug });
  return redirect("/shorts/admin");
};

export default function ShortSlug() {
  const { short } = useLoaderData() as LoaderData;
  return (
    <>
      <main className="relative flex min-h-almost flex-col items-center">
        <p className="mt-4 text-center text-xl text-black lg:text-2xl">
          {short.title}
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
