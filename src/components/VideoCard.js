import React from "react";
import { convertToMillion, randomNumber } from "../utilis/conversion";
const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="card">
      <img
        src={thumbnails.high.url}
        alt="thubmbail"
        className="h-40 w-80 rounded-md mb-4"
      />
      <div className="flex">
        <img
          className="h-8 w-8 rounded-full mr-2 mt-2"
          src={thumbnails.default.url}
          alt="channel thubmbail"
        />
        <div>
          <h3 className="text-base font-bold">
            {title.length > 50 ? title.substring(0, 50) + "..." : title}
          </h3>
          <p className="text-sm text-slate-500">{channelTitle}</p>
          <p className="text-sm text-slate-500">
            <span className="font-bold">
              {convertToMillion(viewCount)} M views .
            </span>{" "}
            <span className="font-bold">{randomNumber()} days ago</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
