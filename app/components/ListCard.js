import Link from "next/link";

export default function ListCard({ listTitle, children }) {
  return (
    <div className="flex w-fit flex-col gap-7 rounded-box border border-neutral p-5 shadow-lg">
      <h3>{listTitle}</h3>
      <div>{children}</div>
      {listTitle == "Top 10 Games" ? (
        <Link href="/top-100-games" className="btn glass w-fit">
          See top 100
        </Link>
      ) : null}
    </div>
  );
}
