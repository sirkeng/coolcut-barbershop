import Contact from "./components/Contact";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="text-center mt-18 mb-12 text-white">
      <div className="relative mx-auto mb-6">
        <Image
          src="/coolcut-barbershop-logo.jpg"
          alt="Cool Cut Barbershop"
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>
      <Contact />
    </div>
  );
}
