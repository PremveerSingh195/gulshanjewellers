// app/page.js
import HeroSlider from "../app/components/HeroSlider";
import FeaturedJewellery from "../app/components/FeaturedJewellery";
import Footer from "../app/components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <FeaturedJewellery />
    </>
  );
}
