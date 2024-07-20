import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <div className="text-center mt-2 mb-12 text-white">
      <h2 className="sm:text-2xl md:text-3xl font-light tracking-widest">
        EST. 2023
      </h2>
      <h1
        className="text-6xl md:text-8xl font-bold tracking-tighter my-4 shadow-inner"
        style={{ textShadow: "rgba(172, 140, 111, 1) 5px 4px" }}
      >
        COOL CUT
      </h1>
      <h3 className="text-lg font-light">- open daily -</h3>
      <h2 className="text-3xl font-light tracking-widest">BARBER SHOP</h2>
      <Contact />
    </div>
  );
}
