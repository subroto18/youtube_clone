import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API } from "../utilis/youtubeApi";
import { Shimmer } from "./Shimmer";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import {
  addError,
  addVideos,
  showLoading,
  showScrollLoading,
} from "../utilis/videosSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.videos.videoLoading);
  const videos = useSelector((store) => store.videos.videoData);
  const error = useSelector((store) => store.videos.error);
  const scrollVideoLoading = useSelector(
    (store) => store.videos.scrollVideoLoading
  );

  useEffect(() => {
    getVideos(20);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", scroll);

    return () => {
      document.removeEventListener("scroll", scroll);
    };
  });

  const scroll = () => {
    // if (
    //   window.innerHeight + document.documentElement.scrollTop ===
    //   document.scrollingElement.scrollHeight
    // ) {
    //   dispatch(showScrollLoading(true));
    //   getVideos(20);
    // } else if (
    //   window.innerHeight + document.documentElement.scrollTop ===
    //   200
    // ) {
    //   dispatch(showScrollLoading(false));
    // }
  };

  const getVideos = async (maxResults) => {
    try {
      const data = await fetch(YOUTUBE_API(maxResults));
      const json = await data.json();

      if (json.error) {
        dispatch(addVideos([]));
        dispatch(showLoading(false));
        dispatch(showScrollLoading(false));
        dispatch(
          addError({
            statusCode: json.error.code,
            message: json.error.message,
          })
        );
      } else {
        dispatch(addVideos(json.items));
        dispatch(showLoading(false));
        dispatch(showScrollLoading(false));
      }
    } catch {
      dispatch(addVideos([]));
      dispatch(showLoading(false));
      dispatch(showScrollLoading(false));
    }
  };

  return (
    <div
      className={`${
        Object.keys(error).length === 0 &&
        "grid grid-cols-2 xs:grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      } 	`}
    >
      {loading ? (
        <Shimmer />
      ) : Object.keys(error).length > 0 ? (
        <div className="bg-slate-200 flex flex-col justify-center items-center w-100 h-64 rounded">
          <h3 className="font-bold text-3xl">{error.statusCode}</h3>
          <p className="text-slate-600 text-1xl mt-4">{error.message}</p>
        </div>
      ) : (
        videos.map((video) => (
          <Link to={`watch/?v=` + video.id} key={video.id}>
            <VideoCard info={video}></VideoCard>
          </Link>
        ))
      )}

      {scrollVideoLoading && <Shimmer />}

      {/* //show shiimer on scoll */}
    </div>
  );
};

export default VideoContainer;
