import Hero from "../../components/Hero";
import About from "../../components/About";
import Services from "../../components/Services";
import Portfolio from "../../components/Portfolio";
import Reviews from "../../components/Reviews";
import Contact from "../../components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Reviews />
      <Contact />
    </>
  );
}
