import { useState } from "react";
import SearchLogo from "../assets/images/SearchLogo";
import SortLogo from "../assets/images/SortLogo";

export default function VaultAction({ setBookMarkData, bookMarkData }) {
  console.log("vaultAction", bookMarkData);
  const [oldBookMarkData, setOldBookMarkData] = useState(bookMarkData);
  const [searchTearm, setSearchTearm] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  function handleSearch(value) {
    setSearchTearm(value);

    if (value.trim() === "") {
      setBookMarkData(oldBookMarkData);
      return;
    }

    console.log("filterData", searchTearm, bookMarkData);

    const filteredBookmark = oldBookMarkData.filter(
      (item) =>
        item.url?.toLowerCase().includes(value.toLowerCase()) ||
        item.username?.toLowerCase().includes(value.toLowerCase())
    );

    setBookMarkData(filteredBookmark);
  }

  const sortBy = (field, direction) => {
    const sorted = [...bookMarkData].sort((a, b) => {
      const comparison = a[field].localeCompare(b[field], undefined, {
        sensitivity: "base",
      });
      return direction === "asc" ? comparison : -comparison;
    });

    setBookMarkData(sorted); // Update state with sorted data
  };

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
          {/* Field selector */}
          <div className="relative inline-block">
            <select
              value={sortField}
              onChange={(e) => {
                setSortField(e.target.value);
                if (e.target.value) sortBy(e.target.value, sortDirection);
              }}
              className="appearance-none rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white pr-8"
            >
              <option value="" disabled hidden>
                Sort by
              </option>
              <option value="url">URL</option>
              <option value="username">Username</option>
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <SortLogo />
            </div>
          </div>

          {/* Direction toggle button */}
          {sortField && (
            <button
              onClick={() => {
                const newDirection = sortDirection === "asc" ? "desc" : "asc";
                setSortDirection(newDirection);
                sortBy(sortField, newDirection);
              }}
              className="rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-blue-500 hover:text-white"
            >
              {sortDirection === "asc" ? "↑ Ascending" : "↓ Descending"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
