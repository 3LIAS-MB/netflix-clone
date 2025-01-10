"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { NavbarFilmProps } from "./NavbarFilm.types";

export function NavbarFilm(props: NavbarFilmProps) {
  const { titleMovie } = props;
  const router = useRouter();

  const backToHome = () => {
    router.push("/");
  };

  return (
    <nav
      className="fixed z-10 flex items-center gap-2 p-5 cursor-pointer bg-zinc-900/70"
      onClick={backToHome}
    >
      <ArrowLeft className="w-6 h-6" />
      <p>
        Estás viendo: <span className="font-bold">{titleMovie}</span>
      </p>
    </nav>
  );
}
