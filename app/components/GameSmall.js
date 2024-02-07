import Link from "next/link";
import RatingDisplay from "./RatingDisplay";
export default function GameSmall({ topTen }) {
  return (
    <>
      {topTen.map((game) => {
        return (
          <Link
            href={`/${game.slug}`}
            key={game.id}
            className="flex items-center justify-between gap-5 border-b border-neutral p-3 last:border-none hover:bg-base-300"
          >
            <div className="flex items-center gap-3">
              <img
                loading="lazy"
                src={`https://images.igdb.com/igdb/image/upload/t_cover_small/${game.cover.image_id}.jpg`}
                alt={game.name}
                className="w-10"
              />

              <div>{game.name}</div>
            </div>
            <RatingDisplay rating={game.rating} />
          </Link>
        );
      })}
    </>
  );
}
