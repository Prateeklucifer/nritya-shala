"use client";

import { HiBars3 } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Classes",
      href: "/shop",
    },
    {
      name: "Gallery",
      href: "/services",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
    {
      name: "FAQs",
      href: "/faq",
    },
  ];

  function handleHamburger() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-[#8B5CF6] w-full text-white px-4 absolute items-center justify-center md:mt-8 md:w-[80%] md:left-[10%] z-20  rounded-sm md:rounded-md md:container md:px-8">
      <div className="for-mobile flex justify-between items-center py-1 w-full lg:hidden">
        <div className="logo font-semibold text-lg">NrityaShala</div>
        <div className="icon">
          <HiBars3 size={32} />
        </div>
      </div>
      <div className="hidden lg:flex justify-between items-center py-2 w-full">
        <div className="logo font-semibold text-lg lg:text-xl">NrityaShala</div>
        <ul className="flex items-center gap-6">
          {links.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-gray-200 hover:text-white "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
