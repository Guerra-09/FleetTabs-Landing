import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import Shortcuts from "@/components/Shortcuts";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UseCases />
        <Shortcuts />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
