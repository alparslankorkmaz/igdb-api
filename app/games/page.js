import getHighRatedGames from "../lib/getHighRatedGames";
import Game from "../components/Game";

export default async function page() {
  const highRatedGamesData = await getHighRatedGames();

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div>
          {highRatedGamesData.length > 0 &&
            highRatedGamesData.map(({ name, total_rating, id, slug }) => (
              <Game
                slug={slug}
                key={id}
                name={name}
                total_rating={total_rating}
                id={id}
              />
            ))}
        </div>
      </div>
    </>
  );
}
