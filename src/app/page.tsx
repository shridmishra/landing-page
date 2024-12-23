import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { LogoTicker } from "@/sections/LogoTicker";

export default function Home() {
  return <div className="font-sora">
    <Header/>
    <Hero/>
    <LogoTicker/>
    <ProductShowcase/>
    <Pricing/>
    <Testimonials/>
    <CallToAction/>
    <Footer/>
  </div>
}
