import React from "react";

export const Shimmer = () => {
  return (
    <>
      {Array.apply(null, Array(10)).map((effect, index) => {
        return (
          <div key={index} className="card">
            <div className="h-40 w-70 rounded-md mb-4 bg-slate-100" />
            <div className="flex">
              <div className="h-10 w-10 rounded-full mr-2 mt-2 bg-slate-100" />
              <div className="w-full">
                <div className="h-4 w-full bg-slate-100 mb-2"></div>
                <p className="text-sm bg-slate-100 h-4 w-full mb-2"></p>
                <p className="text-sm bg-slate-100 h-4 w-full"></p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
