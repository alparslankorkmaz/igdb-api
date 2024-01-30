import Link from "next/link";

export default function Game({ id, name, total_rating, slug }) {
  var totalRating = total_rating;
  var rounded = Math.round(totalRating * 10) / 10;

  return (
    <div key={id} className="flex flex-col gap-5">
      <Link
        href={`/games/${id}`}
        className="flex justify-between gap-10 border p-2"
      >
        {name} <span>{rounded} &#9733;</span>
      </Link>
    </div>
  );
}
