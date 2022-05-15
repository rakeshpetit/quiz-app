import Footer from "~/components/footer";
import Header from "~/components/header";
import Home from "./home";

export default function Index() {
  return (
    <>
      <Header />
      <main className="relative min-h-almost bg-sky-50 sm:flex sm:items-center sm:justify-center">
        <Home />
      </main>
      <Footer />
    </>
  );
}
