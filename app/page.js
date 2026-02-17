import AccessibilityToolbar from "./components/AccessibilityToolbar";
import AwardsSection from "./components/AwardsSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Gallery from "./components/Gallery";
import Awards from "./components/Awards";
import AboutUsPage from "./components/AboutUsPage";
import OurDesk from "./components/OurDesk";
import PrincipalDesk from "./components/PrincipalDesk";
import SocialToolbar from "./components/SocialToolbar";
import ScrollToTop from "./components/ScrollToTop";   // ✅ NEW

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />

      <Awards />
      <AwardsSection />

      <AboutUsPage />
      <OurDesk />
      <PrincipalDesk />

      <br />

      <Gallery />

      <Footer />
      <AccessibilityToolbar />
      <SocialToolbar />

      <ScrollToTop />   {/* ✅ NEW */}
    </>
  );
}

