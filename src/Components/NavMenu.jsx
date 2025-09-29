"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navLinks from "./../constants/navLinks";

const NavMenu = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex gap-5">
      {navLinks.map((navLink) => {
        const isActive =
          pathname === navLink.route ||
          (navLink.route !== "/" && pathname.startsWith(navLink.route));
        return (
          <Link
            key={navLink.route}
            href={navLink.route}
            className={`text-sm hover:text-primary ${
              isActive ? "text-secondary" : ""
            }`}
          >
            {navLink.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavMenu;
