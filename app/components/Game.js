import Link from "next/link";

export default function Game({ ...props }) {
  return (
    <div key={props.id} className="flex flex-col w-64 h-auto gap-5">
      <Link href={`/${props.slug}`} className="">
        <img
          src={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${props.cover.image_id}.jpg`}
          alt=""
        />
      </Link>
      <div className="">
        <div className="flex justify-between items-center">
          <Link href={`/${props.slug}`} className="">
            {props.name}
          </Link>
          <div className=" ">{Math.floor(props.rating)}</div>
        </div>
      </div>
    </div>
  );
}
