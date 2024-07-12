import Image from "next/image";

export default function HomePage() {
  return (
    <div className="text-center my-12 text-white">
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
      <div className="mt-6 space-y-4">
        <a href="tel:+66652839965" target="_blank">
          <button className="rounded-lg m-2 p-4 text-black text-xl border border-lime-900 bg-slate-100/60 font-bold hover:bg-slate-100/80 active:bg-white focus:outline-none flex items-center justify-start w-full md:w-auto">
            <Image
              src="/phone-icon.png"
              alt="Phone"
              width={34}
              height={34}
              priority
              className="mr-4"
            />
            <div className="text-left">
              <p className="text-sm font-medium text-black group-hover:text-slate-500">
                โทรจอง
              </p>
              <p className="text-sm font-medium group-hover:text-slate-400">
                065-283-9965
              </p>
            </div>
          </button>
        </a>
        <a href="https://m.me/barbershopcoolcut" target="_blank">
          <button className="rounded-lg m-2 p-4 text-black text-xl border border-lime-900 bg-slate-100/60 font-bold hover:bg-slate-100/80 active:bg-white focus:outline-none flex items-center justify-start w-full md:w-auto">
            <Image
              src="/facebook-messenger.png"
              alt="Messenger"
              width={34}
              height={34}
              priority
              className="mr-4"
            />
            <div className="text-left">
              <p className="text-sm font-medium text-black group-hover:text-slate-500">
                สอบถามเพิ่มเติม
              </p>
              <p className="text-sm font-medium group-hover:text-slate-400">
                Messenger
              </p>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}
