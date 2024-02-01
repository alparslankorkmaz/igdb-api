import getHighRatedGames from "../lib/getHighRatedGames";
import Game from "../components/Game";

export default async function page() {
  const highRatedGamesData = await getHighRatedGames();
  // console.log(highRatedGamesData);
  return (
    <>
      <div className="flex flex-wrap justify-center gap-5  ">
        {highRatedGamesData.length > 0 &&
          highRatedGamesData.map(({ ...props }) => (
            <Game key={props.id} {...props} />
          ))}
      </div>
    </>
  );
}
