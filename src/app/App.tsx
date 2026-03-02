import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ProductShowcase } from "./components/ProductShowcase";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <WhyChooseUs />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
