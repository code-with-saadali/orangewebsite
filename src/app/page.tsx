import About from "./_components/About";
import BenefitsSection from "./_components/BenefitsSection";
import BenefitsSection2 from "./_components/BenefitsSection2";
import FAQSection from "./_components/FAQSection";
import Hero from "./_components/Hero";
import LenisScroll from "./_components/LenisScroll";
import Navbar from "./_components/Navbar";
import Product from "./_components/Product";
import Reviews from "./_components/Reviews";
import TestimonialSection from "./_components/TestimonialSection";
import TryZoomSection from "./_components/TryZoomSection";
import TryZoooomForm from "./_components/TryZoooomForm";

export default function Home() {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <Hero />
      <About />
      <div className="sticky top-0 max-md:relative">
        <BenefitsSection />
      </div>
      <BenefitsSection2 />
      <Product />
      <TryZoomSection />
      <TestimonialSection />
      <Reviews />
      <FAQSection />
      <TryZoooomForm />
    </>
  );
}
