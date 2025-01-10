"use client";

import dynamic from "next/dynamic";

import { MovieVideoProps } from "./MovieVideo.types";

// react-player es una biblioteca que depende de la API 
// del navegador (por ejemplo, el objeto window). Si
// se ejecuta en el servidor saldría un error.

// { ssr: false } indica que el componente no debe renderizarse
// en el servidor (SSR, Server-Side Rendering).
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export function MovieVideo(props: MovieVideoProps) {
  const { currentMovie } = props;

  return (
    <ReactPlayer
      url={currentMovie}
      loop={true}
      width="100%"
      height="100%"
      playing={true}
      muted={true}
      controls={false}
    />
  );
}
