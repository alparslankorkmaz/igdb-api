export default async function getGenreGames(slug) {
  const res = await fetch("https://api.igdb.com/v4/games/", {
    method: "POST",
    headers: {
      "Client-ID": "wsp6cdy9zulz95dwbf7232a3ountc9",
      Authorization: "Bearer lzkfmk9ga2crj19d6arpxmw9wbopsz",
    },
    body: `limit 20; fields id,name,cover.image_id,screenshots.image_id,slug,rating,first_release_date,genres.*,involved_companies.*,platforms; where genres.slug = "${slug}" & category = 0; sort popularity desc;`,
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
