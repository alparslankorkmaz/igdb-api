const baldursgate3 = "/imgs/baldursgate3.webp";
const cyberpunk2077 = "/imgs/cyberpunk2077.webp";
const eldenring = "/imgs/eldenring.webp";
const princeofpersia = "/imgs/princeofpersia.webp";
const tekken8 = "/imgs/tekken8.webp";

import Link from "next/link";
import { SlBadge } from "react-icons/sl";

export default async function LandingCarousel() {
  return (
    <div className="my-10 flex flex-col flex-wrap items-center justify-center gap-10 md:flex-row md:gap-5">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-bold uppercase md:text-4xl">
          editor's pick
        </h1>
        <SlBadge className="size-10 text-primary md:size-16" />
      </div>
      <div className="carousel h-[30rem] w-full rounded-box md:w-[60rem]">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="flex w-full items-end justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(" + baldursgate3 + ")" }}
          >
            <Link className="btn glass z-10 m-3" href="/baldurs-gate-3">
              view game
            </Link>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
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
            className="flex w-full items-end justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(" + cyberpunk2077 + ")" }}
          >
            {" "}
            <Link className="btn glass z-10 m-3" href="/cyberpunk-2077">
              view game
            </Link>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
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
            className="flex w-full items-end justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(" + eldenring + ")" }}
          >
            {" "}
            <Link className="btn glass z-10 m-3" href="/elden-ring">
              view game
            </Link>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
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
            className="flex w-full items-end justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(" + princeofpersia + ")" }}
          >
            {" "}
            <Link
              className="btn glass z-10 m-3"
              href="/prince-of-persia-the-lost-crown"
            >
              view game
            </Link>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
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
            className="flex w-full items-end justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(" + tekken8 + ")" }}
          >
            {" "}
            <Link className="btn glass z-10 m-3" href="/tekken-8">
              view game
            </Link>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
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
