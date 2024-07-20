import Image from "next/image";

export default function Contact() {
  return (
    <div className="mt-6 space-y-4">
      <a href="https://lin.ee/71DhXBN" target="_blank">
        <button className="rounded-lg m-2 p-4 text-black text-xl border border-lime-900 bg-slate-100/60 font-bold hover:bg-slate-100/80 active:bg-white focus:outline-none flex items-center justify-start mx-auto w-full">
          <Image
            src="/icon-line.png"
            alt="Line Official Account ร้านตัดผม Cool cut barbershop"
            width={34}
            height={34}
            priority
            className="mr-4"
          />
          <div className="text-left">
            <p className="text-sm font-medium text-black group-hover:text-slate-500">
              สอบถามเพิ่มเติม/จองตัดผม
            </p>
            <p className="text-sm font-medium group-hover:text-slate-400">
              Line Official Account
            </p>
          </div>
        </button>
      </a>
      <a href="https://m.me/barbershopcoolcut" target="_blank">
        <button className="rounded-lg m-2 p-4 text-black text-xl border border-lime-900 bg-slate-100/60 font-bold hover:bg-slate-100/80 active:bg-white focus:outline-none flex items-center justify-start mx-auto w-full">
          <Image
            src="/icon-messenger.png"
            alt="Messenger"
            width={34}
            height={34}
            priority
            className="mr-4"
          />
          <div className="text-left">
            <p className="text-sm font-medium text-black group-hover:text-slate-500">
              สอบถามเพิ่มเติม/จองตัดผม
            </p>
            <p className="text-sm font-medium group-hover:text-slate-400">
              Messenger
            </p>
          </div>
        </button>
      </a>
      <a href="https://www.facebook.com/barbershopcoolcut" target="_blank">
        <button className="rounded-lg m-2 p-4 text-black text-xl border border-lime-900 bg-slate-100/60 font-bold hover:bg-slate-100/80 active:bg-white focus:outline-none flex items-center justify-start mx-auto w-full">
          <Image
            src="/icon-facebook.png"
            alt="Facebook Fanpage ร้านตัดผม Cool cut barbershop"
            width={34}
            height={34}
            priority
            className="mr-4"
          />
          <div className="text-left">
            <p className="text-sm font-medium text-black group-hover:text-slate-500">
              ร้านตัดผม Cool cut barbershop
            </p>
            <p className="text-sm font-medium group-hover:text-slate-400">
              coolcut barbershop
            </p>
          </div>
        </button>
      </a>
      <a href="https://www.instagram.com/coolcut.barbershop/" target="_blank">
        <button className="rounded-lg m-2 p-4 text-black text-xl border border-lime-900 bg-slate-100/60 font-bold hover:bg-slate-100/80 active:bg-white focus:outline-none flex items-center justify-start mx-auto w-full">
          <Image
            src="/icon-instagram.png"
            alt="IG ร้านตัดผม Cool cut barbershop"
            width={34}
            height={34}
            priority
            className="mr-4"
          />
          <div className="text-left">
            <p className="text-sm font-medium text-black group-hover:text-slate-500">
              ร้านตัดผม Cool cut barbershop
            </p>
            <p className="text-sm font-medium group-hover:text-slate-400">
              @coolcut.barbershop
            </p>
          </div>
        </button>
      </a>
      <a href="https://www.tiktok.com/@coolcut.barbershop/" target="_blank">
        <button className="rounded-lg m-2 p-4 text-black text-xl border border-lime-900 bg-slate-100/60 font-bold hover:bg-slate-100/80 active:bg-white focus:outline-none flex items-center justify-start mx-auto w-full">
          <Image
            src="/icon-tiktok.png"
            alt="TikTok Cool cut barbershop"
            width={34}
            height={34}
            priority
            className="mr-4"
          />
          <div className="text-left">
            <p className="text-sm font-medium text-black group-hover:text-slate-500">
              ร้านตัดผม Cool cut barbershop
            </p>
            <p className="text-sm font-medium group-hover:text-slate-400">
              @coolcut.barbershop
            </p>
          </div>
        </button>
      </a>
    </div>
  );
}
