import React from "react";
import { useSelector } from "react-redux";
import { SearchResultCard } from "./SearchResultCard";

export const SearchResult = () => {
  const searchKeyword = useSelector((store) => store.search.searchKeyword);
  return (
    <div className="col-span-12  mt-[-5rem]">
      <p className="text-sm mb-3">
        Showing results for <span className="font-bold">{searchKeyword}</span>
      </p>
      <SearchResultCard></SearchResultCard>
    </div>
  );
};
