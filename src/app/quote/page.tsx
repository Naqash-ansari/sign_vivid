import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QuoteWizard from "@/components/QuoteWizard";

export const metadata = {
  title: "Request a Quote | Sign Vivid",
  description: "Choose a sign product family and request a free Sign Vivid offer.",
};

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <main>
        <QuoteWizard />
      </main>
      <Footer />
    </>
  );
}
