import React from "react";
import Link from "next/link";

function Skeleton({ isGrid }) {
  return (
    <div
      className={`w-full dark:text-white mb-4 lg:mb-8 group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-green-700 dark:hover:shadow-green-700 overflow-hidden ease-in-out duration-500 ${
        isGrid ? "sm:w-[49%] md:w-[32%] lg:w-80" : "flex"
      }`}
    >
      <div className="relative w-full">
        <div
          className={` ${
            isGrid ? "h-56" : "h-full w-1/3"
          } bg-gray-300 dark:bg-slate-700 animate-pulse`}
        />
      </div>
      <div className={` ${isGrid ? "" : "flex w-2/3"}`}>
        <div className={` ${isGrid ? "p-6" : "p-6 sm:w-1/2"}`}>
          <div className={` ${isGrid ? "pb-6" : "sm:pb-6"}`}>
            <div className="h-6 bg-gray-300 dark:bg-slate-700 animate-pulse rounded w-3/4" />
          </div>
          <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center justify-between list-none">
            <li className="flex items-center me-4">
              <div className="h-6 w-6 bg-gray-300 dark:bg-slate-700 animate-pulse rounded-full mr-2" />
              <div className="h-6 bg-gray-300 dark:bg-slate-700 animate-pulse rounded w-12" />
            </li>
            <li className="flex items-center me-4">
              <div className="h-6 w-6 bg-gray-300 dark:bg-slate-700 animate-pulse rounded-full mr-2" />
              <div className="h-6 bg-gray-300 dark:bg-slate-700 animate-pulse rounded w-12" />
            </li>
            <li className="flex items-center">
              <div className="h-6 w-6 bg-gray-300 dark:bg-slate-700 animate-pulse rounded-full mr-2" />
              <div className="h-6 bg-gray-300 dark:bg-slate-700 animate-pulse rounded w-12" />
            </li>
          </ul>
          <ul
            className={` ${
              isGrid
                ? "pt-6 flex justify-between items-center list-none"
                : "sm:pt-6 flex justify-between items-center list-none"
            }`}
          >
            <li>
              <div className="h-6 bg-gray-300 dark:bg-slate-700 animate-pulse rounded w-20" />
              <div className="h-6 bg-gray-300 dark:bg-slate-700 animate-pulse rounded w-12 mt-2" />
            </li>
            <li>
              <div className="h-6 bg-gray-300 dark:bg-slate-700 animate-pulse rounded w-20" />
              <div className="h-6 bg-gray-300 dark:bg-slate-700 animate-pulse rounded w-12 mt-2" />
            </li>
          </ul>
        </div>
        {!isGrid && (
          <div className="w-1/2 py-6 pr-6 hidden sm:block">
            <div className="h-6 bg-gray-300 dark:bg-slate-700 animate-pulse rounded w-full mb-2" />
            <div className="h-6 bg-gray-300 dark:bg-slate-700 animate-pulse rounded w-full mb-2" />
            <div className="h-6 bg-gray-300 dark:bg-slate-700 animate-pulse rounded w-3/4" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Skeleton;
