import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center items-center py-4 bg-transparent text-white pt-10">
      <div className="flex items-center sm:text-2xl text-lg">
        {/* Assuming there is a logo to the left of 'Home', you can place it here */}
        {/* <Link href="/" className="text-xl font-bold mr-8 hover:text-gray-200">
          COOL CUT BARBERSHOP
        </Link> */}
        <Link className="mr-4 md:mr-8 hover:text-gray-200" href="/">
          หน้าแรก
        </Link>
        <Link className="mr-4 md:mr-8 hover:text-gray-200" href="/about">
          เกี่ยวกับเรา
        </Link>
        <Link className="mr-4 md:mr-8 hover:text-gray-200" href="/services">
          บริการของเรา
        </Link>
        <Link
          className="hover:text-gray-200"
          target="_blank"
          href="https://maps.app.goo.gl/VjWQQpMc2WTSkXrf7"
        >
          ที่ตั้งร้าน
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
