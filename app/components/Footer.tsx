import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-transparent text-center p-4 fixed bottom-0 z-10">
      {/* <div className="mb-4">
        <Link
          legacyBehavior
          href="link-to-messenger-chat"
          className="hover:text-gray-200"
        >
          สอบถามเพิ่มเติม
        </Link>{" "}
        |{" "}
        <Link
          legacyBehavior
          href="link-to-booking"
          className="hover:text-gray-200 ml-2"
        >
          จองตัดผม
        </Link>
      </div> */}
      <div className="social-media-icons flex justify-center transition duration-300 transform hover:scale-110">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            target="_blank"
            href="https://www.tiktok.com/@coolcutbarbershop/"
            className="mx-2 hover:text-gray-200"
          >
            <Image src="/icon-tiktok.png" alt="TikTok" width={24} height={24} />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/coolcut.barbershop/"
            className="mx-2 hover:text-gray-200"
          >
            <Image
              src="/icon-instagram.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/barbershopcoolcut/"
            className="mx-2 hover:text-gray-200"
          >
            <Image
              src="/icon-facebook.png"
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
