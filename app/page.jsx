import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Highlights from "@/components/Highlights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import "./globals.css";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Highlights />
      <Contact />
      <Footer />
    </main>
  );
}
