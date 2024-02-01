const baldursgate3 = "/imgs/baldursgate3.webp";
const cyberpunk2077 = "/imgs/cyberpunk2077.webp";
const eldenring = "/imgs/eldenring.webp";
const princeofpersia = "/imgs/princeofpersia.webp";
const tekken8 = "/imgs/tekken8.webp";

import Link from "next/link";
import { SlBadge } from "react-icons/sl";
import searchGame from "../lib/searchGame";

export default async function LandingCarousel() {
  // const data = await searchGame();
  // console.log(data);

  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-0 flex-wrap items-center justify-between my-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold text-3xl md:text-4xl uppercase">
          editor's pick
        </h1>
        <SlBadge className="text-primary size-10 md:size-16" />
      </div>
      <div className="w-full md:w-[60rem] h-[30rem] carousel rounded-box">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex justify-center items-end"
            style={{ backgroundImage: "url(" + baldursgate3 + ")" }}
          >
            <Link className="btn glass z-10 m-3" href="/games/baldurs-gate-3">
              view game
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex justify-center items-end"
            style={{ backgroundImage: "url(" + cyberpunk2077 + ")" }}
          >
            {" "}
            <Link className="btn glass z-10 m-3" href="/games/cyberpunk-2077">
              view game
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex justify-center items-end"
            style={{ backgroundImage: "url(" + eldenring + ")" }}
          >
            {" "}
            <Link className="btn glass z-10 m-3" href="/games/elden-ring">
              view game
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex justify-center items-end"
            style={{ backgroundImage: "url(" + princeofpersia + ")" }}
          >
            {" "}
            <Link
              className="btn glass z-10 m-3"
              href="/games/prince-of-persia-the-lost-crown"
            >
              view game
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex justify-center items-end"
            style={{ backgroundImage: "url(" + tekken8 + ")" }}
          >
            {" "}
            <Link className="btn glass z-10 m-3" href="/games/tekken-8">
              view game
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
