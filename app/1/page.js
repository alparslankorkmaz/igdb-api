import getSingleGameData from "../lib/getSingleGameData";

export default async function Page() {
  const data = await getSingleGameData();

  return (
    <main>
      <h1 className="">
        {data.map((game) => (
          <p>{game.name}</p>
        ))}
      </h1>
    </main>
  );
}
