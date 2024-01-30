const baldursgate3 = "/imgs/baldursgate3.webp";
const cyberpunk2077 = "/imgs/cyberpunk2077.webp";
const eldenring = "/imgs/eldenring.webp";
const princeofpersia = "/imgs/princeofpersia.webp";
const tekken8 = "/imgs/tekken8.webp";

export default async function LandingCarousel() {
  return (
    <div>
      <div className="opacity-60 w-full carousel rounded-box">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="min-h-screen w-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url(" + baldursgate3 + ")" }}
          ></div>
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
            className="min-h-screen w-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url(" + cyberpunk2077 + ")" }}
          ></div>
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
            className="min-h-screen w-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url(" + eldenring + ")" }}
          ></div>
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
            className="min-h-screen w-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url(" + princeofpersia + ")" }}
          ></div>
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
            className="min-h-screen w-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url(" + tekken8 + ")" }}
          ></div>
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
