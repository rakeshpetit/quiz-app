import { UsesLoaderData } from ".";

export default function Uses({ html }: UsesLoaderData) {
  return (
    <section>
      <h1 className="my-4 flex justify-center text-4xl font-bold tracking-tight">
        Uses
      </h1>
      <div className="flex flex-wrap justify-center">
        <img
          className="h-auto w-5/6 rounded-full xl:w-3/5"
          alt="Uses"
          src="https://res.cloudinary.com/dcrbjmmo4/image/upload/v1621104123/IMG_20210419_153903_4.jpg"
        />
      </div>
      <div className="flex flex-wrap justify-center">
        <article className="prose prose-blue prose-headings:font-light prose-h1:mt-8 prose-li:font-mono">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </div>
    </section>
  );
}
