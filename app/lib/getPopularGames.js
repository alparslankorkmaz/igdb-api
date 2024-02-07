export default async function getPopularGames() {
  const res = await fetch("https://api.igdb.com/v4/games/", {
    method: "POST",
    headers: {
      "Client-ID": "wsp6cdy9zulz95dwbf7232a3ountc9",
      Authorization: "Bearer lzkfmk9ga2crj19d6arpxmw9wbopsz",
    },
    body: "limit 20; fields id,name,cover.image_id,slug,rating; where category = 0 & rating_count > 700; sort popularity desc; ",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
