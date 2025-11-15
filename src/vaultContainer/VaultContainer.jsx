import BookMarkCard from "./BookMarkCard";
import NoBookMarkCard from "./NoBookMarkCard";
import VaultAction from "./VaultAction";

export default function VaultContainer({ bookMarkData, setBookMarkData }) {
  console.log("vaultContainer", bookMarkData);
  return (
    <main className="p-8">
      <div className="max-w-7xl mx-auto space-y-10 px-4">
        {/* <!-- Search, Sort, and Filter Buttons --> */}
        <VaultAction
          setBookMarkData={setBookMarkData}
          bookMarkData={bookMarkData}
        />

        {/* <!-- Password Cards Grid --> */}
        {bookMarkData && bookMarkData.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {bookMarkData.map((bookmark) => (
              <BookMarkCard key={bookmark.url} bookMarkData={bookmark} />
            ))}
            {/* <!-- Card 1 - Facebook --> */}
          </div>
        ) : (
          <NoBookMarkCard />
        )}
      </div>
    </main>
  );
}
