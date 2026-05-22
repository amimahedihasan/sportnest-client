import CtaSection from "@/components/homepage/CtaSection";
import Featured from "@/components/homepage/Featured";
import Hero from "@/components/homepage/Hero";
import PopularSports from "@/components/homepage/PopularSports";
import StatsSection from "@/components/homepage/StatsSection";
import Testimonials from "@/components/homepage/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularSports/>
      <Featured/>
      <StatsSection/>
      <Testimonials/>
      <CtaSection/>
    </div>
  );
}
