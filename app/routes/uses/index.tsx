import Footer from "~/components/footer";
import Header from "~/components/header";
import Uses from "./uses";

export default function Index() {
  return (
    <>
      <Header />
      <main className="relative min-h-almost bg-sky-50 sm:flex sm:items-center sm:justify-center">
        <Uses />
      </main>
      <Footer />
    </>
  );
}
