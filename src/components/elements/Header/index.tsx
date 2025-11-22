"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Reading List", path: "/my-reading-list" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => {
    return typeof window !== "undefined" && window.location.pathname === path || false;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      {/* FULL-WIDTH BACKGROUND */}
      <div className="w-full">
        {/* CENTERED CONTAINER LIKE YOUR SECOND IMAGE */}
        <Navbar
          fluid
          rounded={false}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* LOGO */}
          <NavbarBrand as={Link} href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-black">BlogHub</span>
          </NavbarBrand>

          <NavbarToggle />

          {/* MENU */}
          <NavbarCollapse className="ml-auto flex gap-6">
            {navigation.map((item) => (
              <NavbarLink
                key={item.name}
                as={Link}
                href={item.path}
                active={isActive(item.path)}
                className={`relative px-2 py-1 font-medium text-base 
                  transition-all duration-200 
                  ${
                    isActive(item.path)
                      ? "text-white"
                      : "text-gray-800 hover:text-white"
                  }
                `}
              >
                {item.name}

                {/* ANIMATED UNDERLINE */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full bg-white transition-transform duration-300 origin-left
                    ${
                      isActive(item.path)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                />
              </NavbarLink>
            ))}
          </NavbarCollapse>
        </Navbar>
      </div>
    </header>
  );
}
