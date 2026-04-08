import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProductsSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
