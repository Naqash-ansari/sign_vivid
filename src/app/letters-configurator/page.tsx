import LettersConfigurator from "@/components/LettersConfigurator";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Letters Configurator | Sign Vivid",
  description: "Configure your Sign Vivid letters signage.",
};

export default function LettersConfiguratorPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <LettersConfigurator product="letters" />
      </div>
      <Footer />
    </>
  );
}
