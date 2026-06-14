import LettersConfigurator from "@/components/LettersConfigurator";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Glass Neon Configurator | Sign Vivid",
  description: "Configure your Sign Vivid glass neon style signage.",
};

export default function GlassNeonConfiguratorPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <LettersConfigurator product="glass-neon" />
      </div>
      <Footer />
    </>
  );
}
