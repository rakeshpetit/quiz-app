import Footer from "~/components/footer";
import Header from "~/components/header";
import Home from "./home";

export default function Index() {
  return (
    <>
      <Header />
      <main className="relative h-4/5 bg-stone-100">
        <Home />
      </main>
      <Footer />
    </>
  );
}
