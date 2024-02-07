import GameSmall from "./components/GameSmall";
import LandingCarousel from "./components/LandingCarousel";
import ListCard from "./components/ListCard";
import getHighRatedGames from "./lib/getHighRatedGames";
import getPopularGames from "./lib/getPopularGames";

export default async function Home() {
  const highRatedGames = await getHighRatedGames();
  const topTen = highRatedGames.slice(0, 10);
  const popularGames = await getPopularGames();
  const topTenPopular = popularGames.filter((game) => game.cover).slice(0, 10);
  return (
    <main>
      <LandingCarousel />
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-3 md:col-span-1">
          <ListCard listTitle="Top 10 Games">
            <GameSmall topTen={topTen} />
          </ListCard>
        </div>
        <div className="col-span-3 md:col-span-1">
          <ListCard listTitle="Popular Games">
            <GameSmall topTen={topTenPopular} />
          </ListCard>
        </div>
      </div>
    </main>
  );
}
