import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false; // Set user status here

  return (
    <div className="h-16 bg-black text-white flex items-center justify-between px-4 border-b-2 border-b-white uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LOGO on LEFT */}
      <div className="flex items-center flex-shrink-0">
        <Link href="/" className="flex items-center">
          <Image
            src="/temporary/quillbrix-logo.png"
            alt="QuillBrix Logo"
            width={75}
            height={90}
            className="mr-3"
          />

        </Link>
      </div>

      {/* CENTER LINKS */}
      <div className="hidden md:flex flex-grow justify-center gap-8">
        <Link href="/" className="text-white hover:text-gray-300">Homepage</Link>
        <Link href="/menu" className="text-white hover:text-gray-300">Menu</Link>
        <Link href="/" className="text-white hover:text-gray-300">Contact</Link>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center">
        {!user ? (
          <Link href="/login" className="text-white hover:text-gray-300">Login</Link>
        ) : (
          <Link href="/orders" className="text-white hover:text-gray-300">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
