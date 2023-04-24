import React from "react";
import { useSelector } from "react-redux";

export const ContainerBody = ({ props }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`${
        isMenuOpen
          ? "absolute top-[10rem] left-[16rem] right-[.5rem]"
          : "absolute top-[10rem] "
      } `}
    >
      {props.children}
    </div>
  );
};
