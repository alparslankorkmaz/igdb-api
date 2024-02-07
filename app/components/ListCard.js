import Link from "next/link";
import { SiIgdb } from "react-icons/si";

export default function ListCard({ listTitle, children }) {
  return (
    <div className="flex w-fit flex-col gap-7 rounded-box border border-neutral p-5 shadow-lg">
      <div className="flex items-center justify-between">
        <h3>{listTitle}</h3>
        {listTitle == "Top 10 Games" ? (
          <SiIgdb className="self-end text-3xl text-accent" />
        ) : null}
      </div>
      <div>{children}</div>
      {listTitle == "Top 10 Games" ? (
        <Link href="/top-100-games" className="btn glass w-fit">
          See top 100
        </Link>
      ) : (
        <Link href="/popular-games" className="btn glass w-fit">
          See all popular games
        </Link>
      )}
    </div>
  );
}
