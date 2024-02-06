import getHighRatedGames from "../lib/getHighRatedGames";

import Game from "../components/Game";
import Platforms from "./Platforms";

export default async function HighRatedGames() {
  const highRatedGamesData = await getHighRatedGames();
  return (
    <div className="my-5 flex flex-col gap-20 p-5">
      {highRatedGamesData.length > 0 &&
        highRatedGamesData.map(({ ...props }, i) => (
          <div
            className="flex flex-wrap justify-evenly gap-5 rounded-box border border-neutral p-5 shadow-lg"
            key={props.id}
          >
            <div className="glass flex size-10 shrink-0 grow-0 items-center justify-center rounded-full border p-3 font-bold text-white">
              #{i + 1}
            </div>
            <div className="md:w-1/6 ">
              <Game {...props} />
            </div>
            <div className="flex flex-col gap-5 rounded-box bg-neutral p-3 md:w-4/6 ">
              <h4>Storyline</h4>
              {props.storyline ? (
                <p>{props.storyline}</p>
              ) : (
                <p>Storyline not found...</p>
              )}

              <Platforms platforms={props.platforms} />
            </div>
          </div>
        ))}
    </div>
  );
}
