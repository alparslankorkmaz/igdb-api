export default async function getSingleGameData() {
  const res = await fetch("https://api.igdb.com/v4/games/", {
    method: "POST",
    headers: {
      "Client-ID": "wsp6cdy9zulz95dwbf7232a3ountc9",
      Authorization: "Bearer lzkfmk9ga2crj19d6arpxmw9wbopsz",
    },
    body: "fields name; limit 10;",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
