import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

export default function HomePage() {
  return (
    <div className="text-center mt-0 mb-12 text-white">
      <div className="relative mx-auto mb-6"></div>
      <Portfolio />
      <Contact />
    </div>
  );
}
