import Link from "next/link";
import LandingCarousel from "./components/LandingCarousel";

export default async function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <LandingCarousel />
      </main>
    </>
  );
}
