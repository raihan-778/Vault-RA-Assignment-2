export default function NoBookmarkCard() {
  return (
    <article className="rounded-3xl  border border-neutral-800 bg-neutral-900/70 p-12 shadow-2xl shadow-black/30 text-center">
      <div className="space-y-2 flex flex-col items-center">
        <h3 className="text-2xl  font-semibold text-blue-800">
          No Bookmarks Yet
        </h3>
        <p className="text-sm italic font-semibold text-neutral-500 max-w-md">
          You haven't saved any bookmarks yet. Start adding your favorites to
          keep them organized.
        </p>
      </div>
    </article>
  );
}
