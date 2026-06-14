import Navbar   from "@/components/Navbar";
import Hero     from "@/components/Hero";
import ConfiguratorPromo from "@/components/ConfiguratorPromo";
import Services from "@/components/Services";
import Work     from "@/components/Work";
import Feedback from "@/components/Feedback";
import Blog from "@/components/Blog";
import About    from "@/components/About";
import Contact  from "@/components/Contact";
import Footer   from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ConfiguratorPromo />
        <Services />
        <Work />
        <Feedback />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
