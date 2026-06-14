import ConfiguratorSelection from "@/components/ConfiguratorSelection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Configurator | Sign Vivid",
  description: "Choose a Sign Vivid product family and start configuring your signage.",
};

export default function ConfiguratorSelectionPage() {
  return (
    <>
      <Navbar />
      <ConfiguratorSelection />
      <Footer />
    </>
  );
}
