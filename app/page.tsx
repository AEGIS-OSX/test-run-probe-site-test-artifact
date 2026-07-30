import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-canvas-primary)] text-[var(--color-text-primary)] font-[family-name:var(--font-body)]">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Testimonial />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
