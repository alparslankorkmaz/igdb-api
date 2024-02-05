import { Suspense } from "react";
import Loading from "./loading";
import HighRatedGames from "../components/HighRatedGames";

export default async function page() {
  return (
    <>
      <h1 className="mt-10 text-center uppercase md:text-start">
        top 100 games
      </h1>
      <Suspense fallback={<Loading />}>
        <HighRatedGames />
      </Suspense>
    </>
  );
}
