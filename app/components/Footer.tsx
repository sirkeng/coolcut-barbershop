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
    </footer>
  );
};

export default Footer;
