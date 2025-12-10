import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Amenities } from "@/components/Amenities";
import { Pricing } from "@/components/Pricing";
import { Availability } from "@/components/Availability";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Amenities />
      <Pricing />
      <Availability />
      <Gallery />
      <Testimonials />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
