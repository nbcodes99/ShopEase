import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const currentPath = usePathname();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop Now", href: "/" },
    { label: "Contact Us", href: "/" },
  ];
  return (
    <nav className="flex items-center justify-evenly p-6 sticky w-full top-0">
      <Link href="/">ShopEase</Link>
      <ul></ul>
    </nav>
  );
}
