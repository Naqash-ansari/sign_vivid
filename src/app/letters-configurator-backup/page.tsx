import LettersConfiguratorBackup from "@/components/LettersConfiguratorBackup";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Letters Configurator (Backup) | Sign Vivid",
  description: "Backup snapshot of the Sign Vivid letters configurator.",
};

export default function LettersConfiguratorBackupPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <LettersConfiguratorBackup product="letters" />
      </div>
      <Footer />
    </>
  );
}
