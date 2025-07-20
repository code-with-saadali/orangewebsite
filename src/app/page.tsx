import About from "./_components/About";
import BenefitsSection from "./_components/BenefitsSection";
import BenefitsSection2 from "./_components/BenefitsSection2";
import Hero from "./_components/Hero";
import LenisScroll from "./_components/LenisScroll";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <>
    <LenisScroll/>
    <Navbar/>
    <Hero/>
    <About/>
    <BenefitsSection/>
    <BenefitsSection2/>
    </>
  )
}
