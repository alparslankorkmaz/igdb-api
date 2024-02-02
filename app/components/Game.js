import Link from "next/link";
import RatingDisplay from "./RatingDisplay";

export default function Game({ ...props }) {
  let releaseDate = new Date(props.first_release_date * 1000).getFullYear();

  // console.log(props.involved_companies);
  return (
    <div className="group">
      <div className="relative overflow-hidden group-hover:scale-105 duration-200">
        {/* ICY GLASS BG IMAGE */}
        <img
          loading="lazy"
          src={`https://images.igdb.com/igdb/image/upload/t_cover_small/${props.cover.image_id}.jpg`}
          alt={props.name}
          className="absolute object-cover w-full pt-7 -z-10 blur-md"
        />

        <div key={props.id} className="flex flex-col">
          <img
            loading="lazy"
            src={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${props.cover.image_id}.jpg`}
            alt={props.name}
          />

          <div className="">
            <div className="flex flex-col justify-evenly h-36 p-2">
              <div className="flex items-center justify-between">
                <Link
                  href={`/${props.slug}`}
                  className="w-2/3 text-sm text-white"
                >
                  {props.name}
                </Link>
                <RatingDisplay rating={props.rating} />
              </div>
              <div className="hidden group-hover:block">
                {props.genres.map((genre) => (
                  <div key={genre.id} className="flex flex-col">
                    <Link href={`/genres/${genre.slug}`} className="text-xs">
                      {genre.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="text-xs">
                <p>{releaseDate}</p>
                {/* <p>{props.involved_companies.company.name}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
