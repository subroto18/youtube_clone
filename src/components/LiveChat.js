import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addChat } from "../utilis/chatSlice";
import {
  generateImageUrl,
  generateNames,
  generateString,
  USER_AVATAR,
  USER_NAME,
} from "../utilis/stringGenerator";

const LiveChat = () => {
  const chatData = useSelector((store) => store.liveChat.data);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const name = generateNames();
  const chat = generateString();
  const url = generateImageUrl();

  useEffect(() => {
    const intervel = setInterval(() => {
      dispatch(
        addChat({
          name: name,
          message: chat,
          avatar: url,
        })
      );
    }, 3000);

    return () => {
      clearInterval(intervel);
    };
  });

  const send = () => {
    dispatch(
      addChat({
        name: USER_NAME,
        message: message,
        avatar: USER_AVATAR,
      })
    );
    setMessage("");
  };

  return (
    <div className="bg-slate-200 p-5 mb-2  rounded pr-4 w-[97%]   h-[550px] ">
      <h3 className="font-bold text2lx">Live Chat</h3>
      <div className="rounded mt-2 bg-slate-100 h-96 shadow pr-4 overflow-y-scroll flex flex-col-reverse mb-2">
        <div className="">
          {chatData.map((data, index) => {
            return (
              <div className="flex p-3">
                <img
                  className="h-6 rounded-full"
                  src={data.avatar}
                  alt="avatar"
                />
                <p className="ml-2 text-slate-700">
                  {data.message}
                  <span className="font-bold ml-2">{data.name}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <input
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
  invalid:border-pink-500 invalid:text-pink-600
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mt-2"
          placeholder="Say something..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button
          onClick={send}
          className="float-right float-right box-border bg-slate-300 px-4 py-1 mt-2 rounded-full "
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
