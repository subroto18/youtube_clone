import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleMenu,
  toggleSlideMenu,
  updateScreenWidth,
} from "../utilis/appSlice";
import { AutoComplete } from "./AutoComplete";
import { BsThreeDotsVertical } from "react-icons/bs";
import { YOUTUBE_SEARCH_API } from "../utilis/youtubeApi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiFillAudio } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { RxAvatar } from "react-icons/rx";

import { FiSearch } from "react-icons/fi";

import {
  addSearchCache,
  addSearchData,
  addSearchKeyWord,
} from "../utilis/searchSlice";
import { toggleAutoComplete } from "../utilis/appSlice";
import { slug } from "../utilis/helpers";
import { YOUTUBE_LOGO } from "../utilis/Icons";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAutoComplete = useSelector((store) => store.app.isAutoComplete);
  const isSlideMenuOpen = useSelector((store) => store.app.isSlideMenuOpen);
  const screenWidth = useSelector((store) => store.app.screenWidth);
  const isVideoError = useSelector((store) => store.videos.error);
  const [queryData, setQueryData] = useState("");
  const cacheSearch = useSelector((store) => store.search.cache);
  const location = useLocation();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const autoComplete = (state) => {
    dispatch(toggleAutoComplete(state));
  };

  useEffect(() => {
    // if (!(location.pathname === "/")) {
    //   dispatch(toggleSlideMenu(true));
    //   dispatch(toggleMenu());
    // }
    let width = window.innerWidth;

    dispatch(updateScreenWidth(width));
    window.addEventListener("resize", scroll);

    return () => {
      window.removeEventListener("resize", scroll);
    };
  });

  const scroll = () => {
    let width = window.innerWidth;
    dispatch(updateScreenWidth(width));
  };

  useEffect(() => {
    // add condition to state if needed
    let timeout = window.setTimeout(() => {
      search();
    }, 200);

    return () => {
      window.clearInterval(timeout);
    };
  }, [queryData]);

  const search = async () => {
    if (queryData === "") {
      dispatch(toggleAutoComplete(false));
    } else {
      dispatch(toggleAutoComplete(true));
      searchResult();
    }

    //  timeout.current = setTimeout(() => searchData(query), 2000);
  };

  const searchResult = async () => {
    try {
      // if api limit exceet

      // if (Object.keys(isVideoError).length === 0) {
      // if search cache exits thn do not make api call again

      if (cacheSearch[queryData]) {
        dispatch(addSearchData(cacheSearch[queryData]));
      } else {
        let data = await fetch(YOUTUBE_SEARCH_API(queryData));
        let json = await data.json();
        // if data is not fetched
        dispatch(addSearchData(json[1]));
        dispatch(addSearchCache({ [queryData]: json[1] }));
      }
      // }
    } catch (error) {}
  };

  const submitSearch = () => {
    navigate(`results?search_query=${slug(queryData)}`);
    dispatch(addSearchKeyWord(queryData));
    dispatch(toggleAutoComplete(false));
  };

  return (
    <div className="fixed w-full z-50  overflow-hidden text-center text-white px-6 py-5 bg-white m-auto shadow-rounded flex justify-between">
      <div className="flex mt-2">
        <GiHamburgerMenu
          className="cursor-pointer text-black text-xl mr-3 mt-[1px]"
          onClick={() => toggleMenuHandler()}
        ></GiHamburgerMenu>
        <Link to="/">
          <img className="h-6" src={YOUTUBE_LOGO} alt="logo" />
        </Link>
      </div>

      {screenWidth > 767 && (
        <div className="w-2/4 relative">
          <div className="flex">
            <input
              onChange={(e) => setQueryData(e.target.value)}
              onFocus={() => autoComplete(true)}
              className="border p-2 rounded-l-lg w-full	focus:outline-none text-black px-5"
              placeholder="Search"
            ></input>
            <button
              type="button"
              className="bg-[#f8f8f8] text-black rounded-r-lg px-5"
              onClick={submitSearch}
            >
              <FiSearch className="cursor-pointer text-black text-2xl ml-3"></FiSearch>
            </button>

            <AiFillAudio
              className="cursor-pointer text-black text-3xl ml-5 mt-[10px]"
              onClick={() => toggleMenuHandler()}
            ></AiFillAudio>
          </div>
          {isAutoComplete && <AutoComplete />}
        </div>
      )}

      <div className="flex">
        {screenWidth < 768 && (
          <FiSearch className="cursor-pointer text-black text-2xl mr-3 ml-3 mt-3"></FiSearch>
        )}

        <BsThreeDotsVertical className="cursor-pointer text-black text-1xl mr-2 mt-[15px]" />
        <button className="rounded border-2 rounded-2xl px-3 py-1	 border-black-500/100 text-black flex mt-2">
          <RxAvatar className="cursor-pointer text-black text-2xl mr-2 mt-[0px] "></RxAvatar>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
