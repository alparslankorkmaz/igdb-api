import { Suspense } from "react";
import Loading from "./loading";
import HighRatedGames from "../components/HighRatedGames";

export default async function page() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <HighRatedGames />
      </Suspense>
    </>
  );
}
