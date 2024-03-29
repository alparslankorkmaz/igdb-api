import Link from "next/link";
import SearchBar from "./SearchBar";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full rounded-box border-b border-gray-800 bg-neutral bg-opacity-30 backdrop-blur-lg backdrop-filter">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-5">
        <div className="flex items-center justify-center md:gap-3">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost"
            >
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <Link href="/">Homepage</Link>
              </li>
              <li>
                <Link href="/top-100-games">Top 100 Games</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-primary text-xl">
            gamelib
          </Link>
        </div>
        <SearchBar />
      </div>
    </nav>
  );
}
