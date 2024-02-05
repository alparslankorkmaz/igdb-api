import Link from "next/link";
import RatingDisplay from "./RatingDisplay";

export default function Game({ ...props }) {
  // convert unix to full year
  let releaseDate = new Date(props.first_release_date * 1000).getFullYear();
  // filter out developer companies from involved companies
  const developerCompanies = props.involved_companies.filter(
    (company) => company.developer,
  );
  return (
    <div key={props.id} className="group">
      {/* CARD ABOVE */}
      <div className="group relative duration-200 lg:group-hover:z-20">
        {/* CARD UNDER */}
        <div className="group absolute top-0 -z-10 hidden h-fit w-36 rounded-l-badge bg-neutral p-3 duration-200 lg:group-hover:block lg:group-hover:-translate-x-10">
          <div className="flex h-full flex-col justify-evenly gap-5">
            <p className="badge badge-secondary text-sm font-semibold">
              {releaseDate}
            </p>
            <div className="text-sm">
              {props.genres.map((genre) => (
                <div key={genre.id} className="flex flex-col italic">
                  <Link href={`/genres/${genre.slug}`}>{genre.name}</Link>
                </div>
              ))}
            </div>
            <div className="text-sm">
              {developerCompanies.map((company) => (
                <p key={company.company.id}>{company.company.name}</p>
              ))}
            </div>
          </div>
        </div>
        {/* CARD UNDER ENDS */}

        <div className="group relative overflow-hidden rounded-box duration-200 lg:group-hover:translate-x-24">
          <div>
            {/* ICY GLASS BG IMAGE */}
            <img
              loading="lazy"
              src={`https://images.igdb.com/igdb/image/upload/t_cover_small/${props.cover.image_id}.jpg`}
              alt={props.name}
              className="absolute -z-10 w-full object-cover pt-3 blur-lg"
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

            <div className="flex min-h-20 flex-col justify-evenly p-2">
              <div className="flex items-center justify-between lg:group-hover:glass lg:group-hover:p-2">
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
