import React from "react";
import { useSelector } from "react-redux";
import { HOME_LOGO, SHORTS, SUBSCRIPTIONS } from "../utilis/Icons";
import { RxAvatar } from "react-icons/rx";
import { AiFillHome, AiOutlineFire } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiMusicLine } from "react-icons/ri";
import { BiMovie } from "react-icons/bi";
import { CgLivePhoto } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { BiNews } from "react-icons/bi";
import { BsTrophy } from "react-icons/bs";
import { TbAirBalloon } from "react-icons/tb";
import { GiHanger } from "react-icons/gi";

import {
  MdOutlineSubscriptions,
  MdVideoLibrary,
  MdHistory,
} from "react-icons/md";

import { Link } from "react-router-dom";
import { WIDTH_BREAK_POINT_DRAWR_MENU } from "../utilis/helpers";
export const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const screenWidth = useSelector((store) => store.app.screenWidth);

  if (screenWidth > 767 && !isMenuOpen) return null;

  let screenWidthGreterThen67 =
    "col-span-2 pr-3 z-50 fixed  0 shadow-r   pt-4	 h-[100%] left-0 pl-3  w-[15rem] pt-[1rem] pb-[10rem] mt-[5rem] overflow-y-scroll";
  let screenWidthLessThen67 =
    "col-span-2 pr-3 z-50 fixed  0 shadow-r    pt-4	 h-[100%] left-0 pl-3  w-[15rem] pt-[1rem] pb-[10rem] mt-[5rem] overflow-y-scroll";
  let menuOpen = "bg-white ease-in-out duration-500";
  let menuClose = "bg-white ease-in-out duration-500 left-[-100rem]";

  return (
    <div
      className={`${
        screenWidth > WIDTH_BREAK_POINT_DRAWR_MENU
          ? screenWidthGreterThen67
          : screenWidthLessThen67
      } ${isMenuOpen ? menuOpen : menuClose}`}
    >
      <div className="sidebar">
        <ul>
          <li className="flex mb-2 hover:bg-slate-200 p-2 rounded cursor-pointer">
            <AiFillHome className=" mr-2 text-xl" />
            <span>Home</span>
          </li>
          <li className="flex mb-2 hover:bg-slate-200 p-2 rounded cursor-pointer">
            <img className="h-6 mr-4" src={SHORTS} alt="shorts icon" />
            <span>Shorts</span>
          </li>
          <li className="flex mb-2 hover:bg-slate-200 p-2 rounded cursor-pointer">
            <MdOutlineSubscriptions className="mr-2 text-xl" />
            <span>Subscriptions</span>
          </li>
          <hr className=" divide-y-reverse w-[100%]" />
        </ul>
      </div>

      <div className="sidebar">
        <ul>
          <li className="flex mb-2 hover:bg-slate-200 p-2 rounded cursor-pointer">
            <MdVideoLibrary className="mr-2 text-xl" />
            <span>Library</span>
          </li>
          <li className="flex mb-2 hover:bg-slate-200 p-2 rounded cursor-pointer">
            <MdHistory className="mr-2 text-xl" />
            <span>History</span>
          </li>
          <hr className=" divide-y-reverse w-[100%]" />
        </ul>
      </div>

      <div className="sidebar">
        <p className="text-sm my-4 p-2">
          Sign in to like videos, comment and subscribe.
        </p>
        <button className="rounded px-2 py-1 mb-4  border-2 rounded-2xl	 border-black-500/100 text-black flex mt-2">
          <RxAvatar className="cursor-pointer text-black text-2xl mr-2 mt-[0px]"></RxAvatar>
          Sign In
        </button>
        <hr className=" divide-y-reverse w-[100%]" />
      </div>

      <div className="sidebar">
        <h3 className="font-bold my-3 p-2">Explore</h3>
        <ul>
          <li className="flex mb-2 hover:bg-slate-200 p-2 rounded cursor-pointer">
            <AiOutlineFire className="cursor-pointer text-black text-2xl mr-2 mt-[0px]" />
            <span>Trending</span>
          </li>
          <li className="flex mb-2 hover:bg-slate-200 p-2 rounded cursor-pointer">
            <HiOutlineShoppingBag className="cursor-pointer text-black text-2xl mr-2 mt-[0px]" />
            <span>Shopping</span>
          </li>

          <li className="flex mb-2 hover:bg-slate-200 p-2 rounded cursor-pointer">
            <RiMusicLine className="cursor-pointer text-black text-2xl mr-2 mt-[0px]" />
            <span>Music</span>
          </li>

          <li className="flex mb-2 hover:bg-slate-200 p-2 rounded cursor-pointer">
            <BiMovie className="cursor-pointer text-black text-2xl mr-2 mt-[0px]" />
            <span>Movies & shows</span>
          </li>

          <li className="flex mb-2 hover:bg-slate-200 p-2 rounded cursor-pointer">
            <CgLivePhoto className="cursor-pointer text-black text-2xl mr-2 mt-[0px]" />
            <span>Live</span>
          </li>

          <li className="flex mb-2 hover:bg-slate-200 p-2 rounded cursor-pointer">
            <SiYoutubegaming className="cursor-pointer text-black text-2xl mr-2 mt-[0px]" />
            <span>Gaming</span>
          </li>

          <li className="flex mb-2 hover:bg-slate-200 p-2 rounded cursor-pointer">
            <BiNews className="cursor-pointer text-black text-2xl mr-2 mt-[0px]" />
            <span>News</span>
          </li>

          <li className="flex mb-2 hover:bg-slate-200 p-2 rounded cursor-pointer">
            <BsTrophy className="cursor-pointer text-black text-2xl mr-2 mt-[0px]" />
            <span>Sport</span>
          </li>

          <li className="flex mb-2 hover:bg-slate-200 p-2 rounded cursor-pointer">
            <TbAirBalloon className="cursor-pointer text-black text-2xl mr-2 mt-[0px]" />
            <span>Sport</span>
          </li>
          <li className="flex mb-2 hover:bg-slate-200 p-2 rounded cursor-pointer">
            <GiHanger className="cursor-pointer text-black text-2xl mr-2 mt-[0px]" />
            <span>Fashion & beauty</span>
          </li>

          <hr className=" divide-y-reverse w-[100%] my-3" />
        </ul>
      </div>

      <div className="sidebar">
        <p className="text-sm font-bold mb-2 text-slate-600">
          About Press Copyright Contact us Creator Advertise Developers
        </p>
        <p className="text-sm font-bold mb-2 text-slate-600">
          Terms Privacy Policy & Safety How YouTube works Test new features
        </p>
        <p className="text-xs">
          ©2023 <Link>Subroto chakraborty</Link>
        </p>
      </div>
    </div>
  );
};
