import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-2 bg-emerald-700 text-white fixed top-0 w-full z-10 shadow-lg px-4 rounded-b-lg">
      <div className="flex items-center">
        <Link href="/" passHref>
          <Image
            src="/coolcut-barbershop-logo.jpg"
            alt="Cool Cut Barbershop"
            width={40}
            height={40}
            className="cursor-pointer rounded-full"
          />
        </Link>
      </div>
      <div className="flex items-center space-x-4 sm:text-2xl text-lg">
        <Link
          className="hover:text-gray-200"
          target="_blank"
          href="https://goo.gl/maps/7ZWf3r5G5KS1gfAT9"
        >
          Google Map
        </Link>
        <Link
          className="hover:text-gray-200"
          target="_blank"
          href="tel:+66652839965"
        >
          โทรจอง
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
