import LettersConfigurator from "@/components/LettersConfigurator";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Moss Configurator | Sign Vivid",
  description: "Configure your Sign Vivid moss and plant wall signage.",
};

export default function MossConfiguratorPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <LettersConfigurator product="moss" />
      </div>
      <Footer />
    </>
  );
}
