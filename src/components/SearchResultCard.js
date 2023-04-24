import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULT_API } from "../utilis/youtubeApi";

export const SearchResultCard = () => {
  const [searchParams] = useSearchParams();
  const search_query = searchParams.get("search_query");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    search();
  }, [search_query]);

  const search = async () => {
    console.log();

    try {
      const data = await fetch(YOUTUBE_SEARCH_RESULT_API(search_query));
      const json = await data.json();

      if (!json.error) {
        setSearchResult(json.items);
      }
    } catch (error) {}
  };

  return (
    <>
      {searchResult.map((info, index) => {
        const { snippet, id } = info;
        const { channelTitle, title, thumbnails } = snippet;
        const { videoId } = id;
        return (
          <Link key={videoId} to={`/watch?v=${videoId}`}>
            <div className="flex w-full hover:bg-slate-200 container mb-3">
              <img
                className="w-64 rounded h-36"
                src={thumbnails.high.url}
                alt="thumbnail"
              />
              <div className="ml-4">
                <h3 className="font-bold text-1xl">{title}</h3>
                <div className="flex mt-3">
                  <img
                    className="h-6 w-6 rounded-full mr-3"
                    src={thumbnails.high.url}
                    alt="avatar"
                  />
                  <p className="text-slate-600">{channelTitle}</p>
                </div>
                <p className="mt-2 flex flex-wrap w-3/4">
                  <span className="mr-1 text-sm text-slate-500">#short</span>
                  <span className="mr-1 text-sm text-slate-500">#short</span>
                  <span className="mr-1 text-sm text-slate-500">#short</span>
                  <span className="mr-1 text-sm text-slate-500">#short</span>
                  <span className="mr-1 text-sm text-slate-500">#short</span>
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};
