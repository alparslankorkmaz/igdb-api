import Link from "next/link";
import LandingCarousel from "./components/LandingCarousel";

export default async function Home() {
  return (
    <>
      <div className="h-screen overflow-hidden">
        <LandingCarousel />
      </div>
      <main className="max-w-7xl mx-auto"></main>
    </>
  );
}
