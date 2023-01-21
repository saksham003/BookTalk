import { useState, ChangeEvent, useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { GoogleBook } from "../../interfaces/GoogleBooks";
import { CgSpinner } from "react-icons/cg";
import SearchResults from "./SearchResults";
import { useDebounce, useOutsideClick } from "../../helpers/hooks";

interface GoogleApiResponse {
  kind: string;
  totalItems: number;
  items: GoogleBook[];
}

function Search() {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GoogleApiResponse | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useOutsideClick(wrapperRef, () => clearSearch());
  useDebounce(() => getSearchResults(), 700, query === "" ? null : query);

  useEffect(() => {
    const focusInput = () => {
      if (showSearch === true && searchInputRef && searchInputRef.current) {
        searchInputRef.current.focus();
      }
    };
    const timeout = setTimeout(() => focusInput(), 200);
    return () => {
      clearTimeout(timeout);
    };
  }, [showSearch]);

  const getSearchResults = async () => {
    // const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    setIsLoading(true);
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?maxResults=5&printType=books&q=intitle:${query}`
    );
    const data = (await response.json()) as GoogleApiResponse;
    setData(data);
    setIsLoading(false);
  };

  const clearSearch = () => {
    setQuery("");
    setShowSearch(false);
    setData(null);
  };

  const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setQuery(ev.target.value);
  };

  return (
    <div ref={wrapperRef} className="flex-row relative z-10">
      <div className="">
        <input
          className={`h-10 w-80 rounded-lg border-none bg-white pl-4 pr-10 text-sm shadow transition-all outline-0 ease-in-out duration-200 ${
            showSearch
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
          placeholder="Search Books..."
          onChange={handleInputChange}
          value={query}
          ref={searchInputRef}
        />
        <button
          type="button"
          className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700 text-base"
          onClick={() => setShowSearch(true)}
        >
          {isLoading ? (
            <div className="animate-spin ">
              <CgSpinner />
            </div>
          ) : (
            <BiSearch />
          )}
        </button>
      </div>
      {showSearch && data?.items && data.items?.length > 0 ? (
        <SearchResults
          query={query}
          data={data.items}
          count={data.totalItems}
          clearSearch={() => clearSearch()}
        />
      ) : null}
    </div>
  );
}

export default Search;
