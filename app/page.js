import About from "@/components/sections/About/About";
import Faq from "@/components/sections/Faq/Faq";
import Footer from "@/components/sections/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import Testimonial from "@/components/sections/Testimonial/Testimonial";
import ChooseUs from "@/components/sections/ChooseUs/ChooseUs";
import CTA from "@/components/sections/CTA/CTA";


export default function Home () {
  return (
    <section>
      <Hero/>
      <About/>
      <ChooseUs/>
      <Testimonial/>
      <CTA/>
      <Faq/>
      <Footer/>
    </section>
  )
}
