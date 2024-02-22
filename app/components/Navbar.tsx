import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
