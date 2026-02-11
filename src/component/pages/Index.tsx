import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import CommunitySection from "@/components/CommunitySection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DestinationsSection />
      <CommunitySection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Index;
