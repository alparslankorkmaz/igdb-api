import GameSmall from "./components/GameSmall";
import LandingCarousel from "./components/LandingCarousel";
import ListCard from "./components/ListCard";
import getHighRatedGames from "./lib/getHighRatedGames";
import Link from "next/link";

export default async function Home() {
  const highRatedGames = await getHighRatedGames();
  const topTwenty = highRatedGames.slice(0, 10);
  return (
    <main className="p-2">
      <LandingCarousel />
      <ListCard listTitle="Top 10 Games">
        <GameSmall topTwenty={topTwenty} />
      </ListCard>
    </main>
  );
}
