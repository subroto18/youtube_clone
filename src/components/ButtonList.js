import React, { useState } from "react";
import { useSelector } from "react-redux";
import { WIDTH_BREAK_POINT_DRAWR_MENU } from "../utilis/helpers";

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [isAction, setIsAction] = useState("All");
  const screenWidth = useSelector((store) => store.app.screenWidth);
  const button = [
    "All",
    "Music",
    "Lo-fi",
    "Live",
    "Computer Programming",
    "Namaste Javasciprt",
    "Bollywood",
    "React",
    "Dsa",
    "Namaste React",
  ];

  return (
    <div
      className={`flex  overflow-x-scroll  py-5 pl-3 fixed top-[4.1rem] bg-white right-0 ${
        screenWidth > WIDTH_BREAK_POINT_DRAWR_MENU && isMenuOpen
          ? "left-[15rem]"
          : "left-[.5rem]"
      }
      `}
    >
      {button.map((b) => {
        return (
          <button
            onClick={() => setIsAction(b)}
            className={`${
              isAction === b ? "bg-black text-white" : "bg-slate-100"
            }  border-solid mr-2  text-black rounded-md px-4  py-3  text-xs font-bold mb-2`}
          >
            {b}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
