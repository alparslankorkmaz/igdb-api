import Link from "next/link";
import RatingDisplay from "./RatingDisplay";

export default function Game({ ...props }) {
  // convert unix to full year
  let releaseDate = new Date(props.first_release_date * 1000).getFullYear();
  // filter out developer companies from involved companies
  const developerCompanies = props.involved_companies.filter(
    (company) => company.developer
  );
  return (
    <div className="group">
      {/* CARD ABOVE */}
      <div className="relative group duration-200 group-hover:translate-x-20 group-hover:z-20">
        {/* CARD UNDER */}
        <div className="top-0 h-fit bg-neutral rounded-box p-3 -z-10 hidden group-hover:block absolute duration-200 group group-hover:-translate-x-20">
          <div className="flex flex-col w-2/3 h-full gap-5 justify-evenly">
            <p className="text-sm">{releaseDate}</p>
            <div className="text-sm">
              {props.genres.map((genre) => (
                <div key={genre.id} className="flex flex-col">
                  <Link href={`/genres/${genre.slug}`}>{genre.name}</Link>
                </div>
              ))}
            </div>
            <div className="text-sm">
              {developerCompanies.map((company) => (
                <p key={company.company}>{company.company.name}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="relative group rounded-box overflow-hidden group-hover:translate-x-20 duration-200">
          <div>
            {/* ICY GLASS BG IMAGE */}
            <img
              loading="lazy"
              src={`https://images.igdb.com/igdb/image/upload/t_cover_small/${props.cover.image_id}.jpg`}
              alt={props.name}
              className="absolute object-cover w-full pt-3 -z-10 blur-lg"
            />
          </div>

          <div className="flex flex-col">
            <Link href={`/${props.slug}`}>
              <img
                loading="lazy"
                src={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${props.cover.image_id}.jpg`}
                alt={props.name}
              />
            </Link>

            <div className="flex flex-col justify-evenly h-20 p-2">
              <div className="flex group-hover:glass group-hover:p-2 items-center justify-between">
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
    </div>
  );
}
