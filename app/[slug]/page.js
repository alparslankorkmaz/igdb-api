import getSingleGameData from "@/app/lib/getSingleGameData";

export default async function page({ params }) {
  const data = await getSingleGameData(params.slug);

  return (
    <>
      {data.map((game) => {
        return (
          <div>
            <h1>{game.name}</h1>
            <p>{game.storyline}</p>
          </div>
        );
      })}
    </>
  );
}
