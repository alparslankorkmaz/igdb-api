import getGenreGames from "@/app/lib/getGenreGames";
import Game from "@/app/components/Game";

export default async function page({ params }) {
  const genreData = await getGenreGames(params.slug);
  console.log(genreData[0]);
  return (
    <div className="my-5  flex flex-wrap justify-center gap-5">
      {genreData.length > 0 &&
        genreData.map(({ ...props }) => (
          <div className="h-auto w-52">
            <Game {...props} />
          </div>
        ))}
    </div>
  );
}
