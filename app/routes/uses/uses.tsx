import { UsesLoaderData } from ".";

export default function Uses({ html }: UsesLoaderData) {
  return (
    <section>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Uses</h1>
      <img
        className="max-w-lg md:max-w-2xl xl:max-w-5xl"
        alt="Uses"
        src="https://res.cloudinary.com/dcrbjmmo4/image/upload/v1621104123/IMG_20210419_153903_4.jpg"
      />
      <article className="prose prose-blue prose-headings:font-light prose-h1:mt-8 prose-li:font-mono">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </section>
  );
}
