import About from "./_components/About";
import BenefitsSection from "./_components/BenefitsSection";
import BenefitsSection2 from "./_components/BenefitsSection2";
import Hero from "./_components/Hero";
import LenisScroll from "./_components/LenisScroll";
import Navbar from "./_components/Navbar";
import Product from "./_components/Product";
import TestimonialSection from "./_components/TestimonialSection";
import TryZoomSection from "./_components/TryZoomSection";

export default function Home() {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <Hero />
      <About />
      <div className="sticky top-0">
        <BenefitsSection />
      </div>
      <BenefitsSection2 />
      <Product />
      <TryZoomSection />
      <TestimonialSection/>
    </>
  );
}
