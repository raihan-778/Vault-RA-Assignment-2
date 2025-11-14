import { useState } from "react";
import SearchLogo from "../assets/images/SearchLogo";
import SortLogo from "../assets/images/SortLogo";

export default function VaultAction({ setBookMarkData, bookMarkData }) {
  const [searchTearm, setSearchTearm] = useState("");

  console.log("voltAction", bookMarkData);

  function handleSearch(data) {
    setSearchTearm(data);
    console.log("filterData", searchTearm, bookMarkData);

    const filteredBookmark = [
      bookMarkData.filter((bookMark) =>
        bookMark.url.toLowerCase().includes(searchTearm.toLowerCase())
      ),
    ];

    setBookMarkData(filteredBookmark);
  }

  return (
    <section className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 p-6 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* <!-- Search Bar --> */}
        <label className="relative flex-1">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
            <SearchLogo />
          </span>
          <input
            type="text"
            value={searchTearm}
            placeholder="Search saved credentials"
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full rounded-2xl border border-neutral-800 bg-neutral-950/60 py-3 pl-11 pr-4 text-sm text-white placeholder:text-neutral-500 transition focus:border-blue-500 focus:bg-neutral-950 focus:outline-none"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white">
            <SortLogo />
            Sort by
          </button>
        </div>
      </div>
    </section>
  );
}
