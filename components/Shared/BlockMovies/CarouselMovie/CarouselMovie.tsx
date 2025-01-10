import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { ActionsButtons } from "./ActionsButtons";
import { ChaptersInfo } from "./ChaptersInfo";

import { CarouselMovieProps } from "./CarouselMovie.types";
import { FilmGenres } from "./FilmGenres";

export function CarouselMovie(props: CarouselMovieProps) {
  const { movies, isMyList } = props;

  return (
    <Carousel className="w-full">
      <CarouselContent className="gap-2 -ml-1 overflow-inherit ">
        {movies.map((movie) => (
          <CarouselItem
            key={movie.id}
            className="relative pl-1 transition delay-300 md:basis-1/2 lg:basis-1/5 group hover:bg-transparent"
          >
            <Card className="relative transition delay-300 cursor-pointer group">
              <CardContent className="relative flex items-center justify-center p-6 border-none rounded-md aspect-video bg-zinc-900">
                <Image
                  src={movie.thumbnailUrl}
                  alt="Image"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-md"
                />
                <div
                  className="opacity-0 absolute top-0 transition-all 
                  duration-300 z-10 invisible sm:visible delay-300
                    w-full bg-zinc-900 rounded-lg scale-0 
                    group-hover:lg:scale-125 group-hover:md:scale-150
                    group-hover:-translate-y-[5vw] group-hover:opacity-100"
                >
                  <Image
                    src={movie.thumbnailUrl}
                    alt="Movie"
                    width={200}
                    height={200}
                    className="object-cover w-full transition-all duration-300 rounded-t-lg shadow-xl cursor-pointer"
                  />
                  <div className="p-2 shadow-lg">
                    <ActionsButtons
                      movieId={movie.id}
                      movie={movie}
                      isMyList={isMyList}
                    />

                    <ChaptersInfo age={movie.age} duration={movie.duration} />

                    <FilmGenres genres={movie.genre} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
