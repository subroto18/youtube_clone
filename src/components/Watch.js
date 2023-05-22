import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utilis/appSlice";
import CommentContainer from "./Comments";
import { Description } from "./Description";
import LiveChat from "./LiveChat";
import { VideoPlayer } from "./VideoPlayer";
const Watch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleMenu());
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4 mt-[-4rem]">
      <div className="col-span-12 md:col-span-7 lg:col-span-8">
        <VideoPlayer />
        <Description />
        <CommentContainer />
      </div>
      <div className="col-span-12 md:col-span-5 lg:col-span-4">
        <LiveChat />
      </div>
    </div>
  );
};

export default Watch;
