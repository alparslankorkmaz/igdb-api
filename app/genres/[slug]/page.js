import getGenreGames from "@/app/lib/getGenreGames";
import Game from "@/app/components/Game";

export default async function page({ params }) {
  const genreData = await getGenreGames(params.slug);
  return (
    <>
      <div className="flex  flex-wrap justify-center gap-5 my-5">
        {genreData.length > 0 &&
          genreData.map(({ ...props }) => (
            <div className="w-52 h-auto" key={props.id}>
              <Game {...props} />
            </div>
          ))}
      </div>
    </>
  );
}
