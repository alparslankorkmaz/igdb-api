import Link from "next/link";
import RatingDisplay from "./RatingDisplay";

export default function Game({ ...props }) {
  return (
    <div class="relative overflow-hidden hover:scale-105 duration-200">
      {/* ICY GLASS BG IMAGE */}
      <img
        src={`https://images.igdb.com/igdb/image/upload/t_cover_small_2x/${props.cover.image_id}.jpg`}
        alt={props.name}
        className="absolute object-cover w-full pt-7 -z-10 blur-md"
      />

      <div key={props.id} className="flex flex-col">
        <Link href={`/${props.slug}`}>
          <img
            src={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${props.cover.image_id}.jpg`}
            alt={props.name}
          />
        </Link>

        <div className="">
          <div className="flex flex-col justify-around h-36 p-2">
            <div className="flex items-center justify-between">
              <Link
                href={`/${props.slug}`}
                className="w-2/3 text-sm text-white"
              >
                {props.name}
              </Link>
              <RatingDisplay rating={props.rating} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
