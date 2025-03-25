import Hero from "@/components/hero"
import FeaturesSection from "@/components/feature-section"
import FaqSection from "@/components/faq"
import Cta from "../components/cta"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function LandingPage() {
  return (
    <div className="w-auto mx-auto flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto md:px-8">
        <Hero />
        <FeaturesSection />
        <FaqSection />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}