import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import ShopFront from "./components/ShopFront";

export default function HomePage() {
  return (
    <div className="text-center mt-0 mb-12 text-white">
      <ShopFront />
      <Portfolio />
      <Contact />
    </div>
  );
}
