import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuLinks from "@/components/MenuLinks";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MenuLinks />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
