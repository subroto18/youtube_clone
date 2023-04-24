import React from "react";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleAutoComplete } from "../utilis/appSlice";
import { addSearchKeyWord } from "../utilis/searchSlice";
import { slug } from "../utilis/helpers";

export const AutoComplete = () => {
  const searchData = useSelector((store) => store.search.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirect = (query) => {
    navigate(`results?search_query=${slug(query)}`);
    dispatch(toggleAutoComplete(false));
    dispatch(addSearchKeyWord(query));
  };

  return (
    <div className="bg-white text-dark w-[40%] rounded-md w-[85%] mt-2 fixed z-[5000] drop-shadow-2xl ">
      <ul className="text-left px-4">
        {searchData.map((searchData, index) => {
          return (
            <li
              onClick={() => redirect(searchData)}
              key={index}
              className="p-3 text-dark text-black font-bold flex cursor-pointer"
            >
              <CiSearch className="mt-1 mr-2 fo" /> {searchData}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
