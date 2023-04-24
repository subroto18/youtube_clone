import React from "react";
import { Sidebar } from "./Sidebar";
import Headers from "./Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { WIDTH_BREAK_POINT_DRAWR_MENU } from "../utilis/helpers";
export const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const screenWidth = useSelector((store) => store.app.screenWidth);
  return (
    <>
      <Headers></Headers>
      <div className="grid grid-flow-col gap-3 px-4">
        <Sidebar></Sidebar>
        <div
          className={`${
            screenWidth > WIDTH_BREAK_POINT_DRAWR_MENU && isMenuOpen
              ? "absolute top-[10rem] left-[16rem] right-[.5rem]"
              : "absolute top-[12rem] left-[1rem]"
          }`}
        >
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};
