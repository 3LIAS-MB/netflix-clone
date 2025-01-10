"use client";

import { Button } from "@/components/ui/button";

import { ActionsButtonsProps } from "./ActionsButtons.types";
import { ChevronDown, Play, ThumbsUp, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLovedFilms } from "@/hooks/use-loved-films";

export function ActionsButtons(props: ActionsButtonsProps) {
  const { movieId, movie, isMyList } = props;
  const { addLovedFilm, removeLovedItem } = useLovedFilms();

  const router = useRouter();

  const onPlayButton = () => {
    router.push(`/movie/${movieId}`);
  };

  const onAddToMyList = () => {
    addLovedFilm(movie);
  };

  const onRemoveFromMyList = () => {
    removeLovedItem(movieId);
  };

  return (
    <div className="flex justify-between mb-5">
      <div className="flex gap-2">
        <Button
          size="icon"
          variant={"ghost"}
          className="flex items-center justify-center rounded-full bg-slate-50 h-7 w-7 "
          onClick={() => onPlayButton()}
        >
          <Play className="w-3 h-3 text-zinc-900 fill-zinc-900" />
        </Button>

        {isMyList ? (
          <Button
            size="icon"
            variant="ghost"
            className="flex items-center justify-center border-2 border-gray-400 rounded-full bg-zinc-900 h-7 w-7"
            onClick={() => onRemoveFromMyList()}
          >
            <X
              width={10}
              height={10}
              className="w-3 h-3 text-slate-50 fill-zinc-900 hover:text-zinc-900"
            />
          </Button>
        ) : (
          <Button
            size="icon"
            variant="ghost"
            className="flex items-center justify-center border-2 border-gray-400 rounded-full bg-zinc-900 h-7 w-7"
            onClick={() => onAddToMyList()}
          >
            <ThumbsUp className="w-3 h-3 text-slate-50 fill-zinc-900" />
          </Button>
        )}
      </div>
      <Button
        size="icon"
        variant="ghost"
        className="flex items-center justify-center border-2 border-gray-400 rounded-full bg-zinc-900 h-7 w-7"
      >
        <ChevronDown className="w-3 h-3 text-slate-50" width={10} height={10} />
      </Button>
    </div>
  );
}
