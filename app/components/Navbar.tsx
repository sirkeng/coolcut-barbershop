import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center items-center py-4 bg-emerald-700 text-white fixed top-0 w-full z-10 shadow-lg">
      <div className="flex items-center sm:text-2xl text-lg">
        <Link className="mr-4 md:mr-8 hover:text-gray-200" href="/">
          หน้าแรก
        </Link>
        <Link
          className="mr-4 md:mr-8 hover:text-gray-200"
          target="_blank"
          href="tel:+66652839965"
        >
          โทรจอง
        </Link>
        <Link
          className="hover:text-gray-200"
          target="_blank"
          href="https://goo.gl/maps/7ZWf3r5G5KS1gfAT9"
        >
          ที่ตั้งร้าน
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
