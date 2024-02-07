"use client";
import { useState } from "react";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  const fetchData = (value) => {
    fetch("https://api.igdb.com/v4/games/", {
      method: "POST",
      headers: {
        "Client-ID": "wsp6cdy9zulz95dwbf7232a3ountc9",
        Authorization: "Bearer lzkfmk9ga2crj19d6arpxmw9wbopsz",
      },
      body: `search "${value}"*; limit 10; fields id,name,cover.image_id,slug;`,
    })
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((game) => {
          return (
            value &&
            game &&
            game.name &&
            game.name.toLowerCase().includes(value)
          );
        });
        console.log(results);
      });
  };

  return (
    <div className="flex md:gap-3">
      <input
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 focus:outline-primary md:w-auto"
      />

      <button className="btn btn-circle btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}
