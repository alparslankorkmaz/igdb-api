export default async function getHighRatedGames() {
  const res = await fetch("https://api.igdb.com/v4/games/", {
    method: "POST",
    headers: {
      "Client-ID": "wsp6cdy9zulz95dwbf7232a3ountc9",
      Authorization: "Bearer lzkfmk9ga2crj19d6arpxmw9wbopsz",
    },
    body: "limit 100; where total_rating > 80; where total_rating_count > 200; fields id,name,slug,total_rating,total_rating_count; sort total_rating desc; ",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
