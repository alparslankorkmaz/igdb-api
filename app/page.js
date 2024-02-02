import LandingCarousel from "./components/LandingCarousel";
import Skeleton from "react-loading-skeleton";

export default async function Home() {
  return (
    <>
      <main>
        <LandingCarousel />
      </main>
    </>
  );
}
