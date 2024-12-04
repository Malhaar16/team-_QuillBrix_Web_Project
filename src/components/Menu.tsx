"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  
  // TEMPORARY
  const user = false;

  return (
    <div>
      {/* LONG WAY */}
      {!open ? (
        <Image
          src="/temporary/open.png"
          alt="Open Menu"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
          className="cursor-pointer"
        />
      ) : (
        <Image
          src="/temporary/close.png"
          alt="Close Menu"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
          className="cursor-pointer"
        />
      )}
      
      {open && (
        <div className="bg-black text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link 
              href={item.url} 
              key={item.id} 
              onClick={() => setOpen(false)} 
              className="hover:text-gray-300 transition-colors duration-200"
            >
              {item.title}
            </Link>
          ))}

          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)} className="hover:text-gray-300 transition-colors duration-200">
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)} className="hover:text-gray-300 transition-colors duration-200">
              Orders
            </Link>
          )}

          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;