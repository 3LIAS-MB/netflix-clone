"use client";

import Link from "next/link";
import { BellRing, Search } from "lucide-react";

import { cn } from "@/lib/utils";

import { itemsNavbar } from "@/data/itemsNavbar";
import { useScrollPosition } from "@/hooks/useScrollPosition";

import { SelectorProfile } from "@/components/Shared/SelectorProfile";
import { Logo } from "@/components/Shared/Logo";

import { NavbarDesktopProps } from "./NavbarDesktop.types";

export function NavbarDesktop(props: NavbarDesktopProps) {
  const { users } = props;
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={cn(
        "z-30 left-0 right-0 top-0 h-16 fixed w-full transition-all duration-300",
        scrollPosition > 20 ? "bg-black" : "bg-transparent"
      )}
    >
      <div className="px-[4%] mx-auto h-full">
        <div className="flex items-center justify-between h-full gap-4">
          <div className="flex items-center gap-2">
            <Logo />
            <div className="flex gap-4 ml-10">
              {itemsNavbar.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="transition-all duration-300 hover:text-gray-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Search className="cursor-pointer" />
            <BellRing className="cursor-pointer" />
            <div className="flex items-center gap-2">
              <SelectorProfile users={users} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
