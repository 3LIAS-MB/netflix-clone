"use client"
import { Info, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
// import { useCurrentNetflixUser } from "@/hooks/use-current-user";

export function SliderVideo() {
  // const { changeCurrentUser, currentUser } = useCurrentNetflixUser();
  // console.log(currentUser)
  
  return (
    <div className="relative w-full -[80vw] md:h-[56.25vw] lg:h-[45vw]">
      <video
        autoPlay
        loop
        muted
        className="brightness-50 object-fill w-full h-[80vw] md:h-[56.25vw] lg:h-[45vw]"
        src="/videos/video-trailer-test.mp4"
      />
      <div
        className="flex flex-col justify-end absolute w-full md:w-[36%] px-4 
        md:px-0 md:left-[4%] z-20 top-0 -bottom-7 md:bottom-[36%]
      "
      >
        <div className="pt-24 md:pt-0">
          <h2 className="text-2xl font-bold md:text-5xl lg:text-8xl drop-shadow-xl">
            NETFLIX
          </h2>
          <p className="max-w-md mt-2 text-xs md:text-base">
            Aprende a crear desde cero un clon de Netflix con todas sus
            funciones clave, desdezla gestión de usuarios hasta la reproducción
            de videos, mientras descubres los secretos detrás de una plataforma
            de streaming exitosa.
          </p>
          <div className="flex flex-col gap-4 mt-5 md:flex-row">
            <Button size="lg" variant="secondary">
              <Play className="w-6 h-6 mr-2 fill-black" />
              Reproducir
            </Button>
            <Button size="lg" className="bg-gray-500/50 hover:bg-gray-500/40">
              <Info className="w-6 h-6 mr-2" />
              Más información
            </Button>
          </div>
        </div>
      </div>

      <div
        className="bg-transparent bg-no-repeat bg-contain w-full opacity-100 top-auto h-[14.7vw] 
      -bottom-16 absolute bg-gradient-video
      "
      />
    </div>
  );
}
