import Link from "next/link";
import React from "react";
import Image from "next/image"; // Import Image component

const Footer = () => {
  return (
    <div className="h-20 p-4 bg-black text-white flex items-center justify-between border-t border-white">
      {/* LOGO on LEFT */}
      <Link href="/" className="flex items-center">
        <Image
          src="/temporary/quillbrix-logo.png" // Path to your logo image
          alt="QuillBrix Logo"
          width={80}
          height={50}
          className="mr-2"
        />
      </Link>
      
      {/* Footer Text */}
      <p className="font-bold text-lg text-center">
        Hope you like the food! All rights reserved by team QuillBrix
      </p>
    </div>
  );
};

export default Footer;
