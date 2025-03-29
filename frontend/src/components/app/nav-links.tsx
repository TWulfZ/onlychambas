"use client";
import { cn } from "@/lib/utils";
import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  User,
  MoreHorizontal,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  name: string;
  avaible?: boolean;
  active?: boolean;
}

const sidebarLinks = [
  { href: "/home", icon: Home, name: "Home", avaible: true},
  { href: "/explore", icon: Search, name: "Explore"},
  { href: "/notifications", icon: Bell, name: "Notifications"},
  { href: "/messages", icon: Mail, name: "Messages"},
  {  href: "/bookmarks", icon: Bookmark, name: "Bookmarks"},
  // { href: "/communities", icon: Users, name: "Communities"},
  { href: `/profile`, icon: User, name: "Profile", avaible: true},
  { href: "/more", icon: MoreHorizontal, name: "More"},
];

const SidebarLink = ({ href, icon, name, active, avaible}: SidebarLinkProps) => {
  const Icon = icon ;
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-4 px-4 py-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors name-xl",
        active && "font-bold",
        !avaible && "cursor-not-allowed"
      )}
      onClick={(e) => !avaible && e.preventDefault()}
    >
      <div className="w-6 h-6">
        <Icon  />
      </div>
      <span className="hidden xl:inline">{name}</span>
    </Link>
  );
}

const NavLinks = () => {
  const pathName = usePathname();

  return (
    <>
      {sidebarLinks.map((link, index) => (
        <SidebarLink key={index} href={link.href} icon={link.icon} name={link.name} active={pathName === link.href} avaible={link.avaible} />
      ))}
    </>
  );
};

export default NavLinks;
