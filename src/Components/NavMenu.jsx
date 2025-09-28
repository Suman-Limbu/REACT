"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navLinks from "./../constants/navLinks";

const NavMenu = () => {
  const pathName = usePathname();
  return (
    <nav className="hidden md:flex gap-5">
      {navLinks.map((navLink) => (
        <Link href={navLink.route} className="text-sm hover:text-primary">
          {navLink.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
