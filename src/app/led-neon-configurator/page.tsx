import LettersConfigurator from "@/components/LettersConfigurator";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "LED Neon Configurator | Sign Vivid",
  description: "Configure your Sign Vivid LED neon signage.",
};

export default function LedNeonConfiguratorPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <LettersConfigurator product="led-neon" />
      </div>
      <Footer />
    </>
  );
}
