import getHighRatedGames from "../lib/getHighRatedGames";
import Game from "../components/Game";

export default async function page() {
  const highRatedGamesData = await getHighRatedGames();
  return (
    <>
      <div className="flex flex-col gap-20 my-5 p-5">
        <h1 className="uppercase ">top 100 games</h1>
        {highRatedGamesData.length > 0 &&
          highRatedGamesData.map(({ ...props }, i) => (
            <div className="listed-game-card" key={props.id}>
              <div className="listed-game-number">#{i + 1}</div>
              <div className="md:w-1/6 ">
                <Game {...props} />
              </div>
              <div className="flex flex-col gap-5 md:w-4/6 ">
                <h3>Storyline</h3>
                {props.storyline ? (
                  <p>{props.storyline}</p>
                ) : (
                  <p>Storyline not found...</p>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
