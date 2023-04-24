import React from "react";
import { useSearchParams } from "react-router-dom";
import YouTube from "react-youtube";
export const VideoPlayer = () => {
  const [searchParams] = useSearchParams();
  const search_query = searchParams.get("v");

  return (
    <div>
      <YouTube
        videoId={search_query} // defaults -> ''
        id={search_query} // defaults -> ''
        className={`w-[100%] h-[300px] sm:h-[400px] md:h-[400px] rounded pr-4`} // defaults -> ''
        iframeClassName={`w-[100%] h-[300px] sm:h-[400px] md:h-[400px]  rounded`} // defaults -> ''
      />
    </div>
  );
};
