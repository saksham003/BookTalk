import React, { FC } from "react";
import { Link } from "react-router-dom";
import { GoogleBook } from "../../interfaces/GoogleBooks";

type props = {
  data: GoogleBook[] | null;
  query: string;
  count: number;
  clearSearch: () => void
};

const SearchResults: FC<props> = ({ data, query, count, clearSearch }) => {
  return (
    <div className="flex flex-col justify-center antialiased mt-2 text-gray-600 absolute mx-auto w-80 bg-white shadow-lg rounded-lg py-2 px-4">
      <h3 className="text-xs font-semibold text-gray-400 mb-1">
        {`Search Results for \"${query}\"`}
      </h3>
      {data !== null &&
        data.length > 0 &&
        data.map((book) => <SearchResultItem data={book} clearSearch={clearSearch} key={book.id} />)}
      {count > 5 && (
        <div className="divide-y text-center pt-1 divide-gray-200 text-xs">
          <a>View all results</a>
        </div>
      )}
    </div>
  );
};

function SearchResultItem({ data, clearSearch }: { data: GoogleBook, clearSearch: () => void }) {
  return (
    <button className="w-full text-left focus:outline-none focus-visible:bg-indigo-50">
      <Link to={`/books/${data.id}`} onClick={clearSearch}>
        <div className="flex items-center py-2 rounded-lg border-b hover:bg-slate-50">
          <img
            src={data.volumeInfo?.imageLinks?.smallThumbnail}
            alt={data.volumeInfo.title}
            width={32}
            height={32}
          />
          <div className="pl-3">
            <h4 className="text-sm font-semibold text-gray-900">
              {data.volumeInfo.title}
            </h4>
            {data?.volumeInfo?.authors &&
              data?.volumeInfo?.authors.length > 0 && (
                <div className="text-xs">{`by: ${data?.volumeInfo?.authors?.join(
                  ", "
                )}`}</div>
              )}
          </div>
        </div>
      </Link>
    </button>
  );
}

export default SearchResults;
