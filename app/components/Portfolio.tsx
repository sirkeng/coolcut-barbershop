import Image from "next/image";

export default function Portfolio() {
  const images = [
    "/portfolio/coolcut-barbershop-barber-cutting-hair1.jpg", // รูปช่างกำลังตัดผม
    "/portfolio/coolcut-barbershop-haircut-style1.jpg", // รูปผลงานตัดผม
    "/portfolio/coolcut-barbershop-barber-cutting-hair2.jpg", // รูปช่างกำลังตัดผม
    "/portfolio/coolcut-barbershop-haircut-style2.jpg", // รูปผลงานตัดผม
    "/portfolio/coolcut-barbershop-haircut-style3.jpg", // รูปผลงานตัดผม
    "/portfolio/coolcut-barbershop-haircut-style4.jpg", // รูปผลงานตัดผม
  ];

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, index) => {
        const imageName = src.split("/").pop();
        const altText = imageName
          ? `Cool Cut Barbershop - ${imageName
              .replace(/-/g, " ")
              .replace(/\.jpg$/, "")}`
          : "Cool Cut Barbershop";

        return (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={src}
              alt={altText}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        );
      })}
    </div>
  );
}
