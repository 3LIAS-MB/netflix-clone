import { Logo } from "@/components/Shared/Logo";

import { NormalMovie } from "./components/NormalMovie";
import { TrendingMovies } from "./components/TrendingMovies";

export default function UploadMoviesPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-zinc-900">
      <Logo />
      <h1 className="my-8 text-2xl font-semibold">
        Sube tus películas favoritas 🤟🏽
      </h1>
      <div className="grid max-w-2xl grid-cols-2 gap-4 mx-auto">
        <NormalMovie />
        <TrendingMovies />
      </div>
    </div>
  );
}
