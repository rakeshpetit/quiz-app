import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

import { getShorts } from "~/models/short.server";
import { useOptionalUser } from "~/utils";

type LoaderData = {
  shorts: Awaited<ReturnType<typeof getShorts>>;
};

export const loader: LoaderFunction = async () => {
  return json({ shorts: await getShorts() });
};

export default function ShortAdmin() {
  const user = useOptionalUser();
  const { shorts } = useLoaderData() as LoaderData;

  if (!user) {
    return (
      <div className="mx-auto max-w-4xl">
        <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">Nice try!</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
        Shorts Admin
      </h1>
      <div className="grid grid-cols-4 gap-6">
        <nav className="col-span-4 md:col-span-1">
          <ul>
            {shorts.map((short) => (
              <li key={short.slug}>
                <Link to={short.slug} className="text-blue-600 underline">
                  {short.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="col-span-4 md:col-span-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
