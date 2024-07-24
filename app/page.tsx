import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import ShopFront from "./components/ShopFront";
import Reviews from "./components/Reviews";

export default function HomePage() {
  return (
    <div className="text-center mt-0 mb-12 text-white">
      <ShopFront />
      <Portfolio />
      <Reviews />
      <Contact />
    </div>
  );
}
