export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-around p-10 lg:p-32">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
        {`Hola! I'm `}
        <span className="text-blue-600">Rakesh</span>
      </h1>
      <h2 className="text-3xl font-bold md:text-4xl xl:text-5xl">
        I'm passionate about developing compelling mobile experiences and also
        to build web applications.
      </h2>
    </div>
  );
}
