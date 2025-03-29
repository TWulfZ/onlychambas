import type React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "../icons";
import NavLinks from "./nav-links";
import { user } from "@/dummy-data";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between h-screen sticky top-0 xl:w-64 w-20 px-2">
      <div className="space-y-2 mt-2">
        <div className="p-3">
          <Link href="/" className="text-2xl font-bold">
            <Logo />
          </Link>
        </div>

        <nav className="space-y-1">
          <NavLinks />
        </nav>

        <Button className="bg-primary text-white rounded-full w-full h-12 mt-4 font-bold">
          <span className="hidden xl:inline">Post</span>
          <span className="xl:hidden">+</span>
        </Button>
      </div>

      <div className="mb-4 p-3">
        <div className="flex items-center gap-3 rounded-full p-3 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <img src={user.profile_pic} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="hidden xl:block">
            <p className="font-bold text-sm">Username</p>
            <p className="text-gray-500 text-sm">@username</p>
          </div>
        </div>
      </div>
    </div>
  );
}
