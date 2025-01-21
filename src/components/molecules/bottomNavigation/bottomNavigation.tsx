// "use client";
import React from "react";
// import DarkModeToggle from "@/components/atoms/darkModeToggle/darkModeToggle";
import { allRoutes } from "@/constants/allRoutes";
import Link from "next/link";

const BottomNavigation = async () => {
  return (
    <>
      <div className="py-12" />
      <div className="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2">
        <div className="w-full">
          <div
            className="grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg"
            role="group"
          >
            <button
              type="button"
              className="px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-20 rounded-lg"
            >
              New
            </button>
            <button
              type="button"
              className="px-5 py-1.5 text-xs font-medium text-white dark:text-gray-900 rounded-lg"
            >
              Popular
            </button>
            <button
              type="button"
              className="px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 rounded-lg"
            >
              Following
            </button>
          </div>
        </div>
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          <Link
            href={allRoutes.HOME}
            data-tooltip-target="tooltip-home"
            // type="button"
            className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 group"
          >
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            <span className="sr-only">Home</span>
          </Link>
          <div
            id="tooltip-home"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip"
          >
            Home
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <Link
            href={allRoutes.SEARCH()}
            data-tooltip-target="tooltip-post"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                className="text-gray-500 dark:text-gray-400 group-hover:stroke-blue-500"
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="sr-only">View sugested posts</span>
          </Link>
          <div
            id="tooltip-post"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            View New post
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <Link
            href={allRoutes.PROFILE("cat")}
            data-tooltip-target="tooltip-post"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 group"
          >
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
            <span className="sr-only">New post</span>
          </Link>
          <div
            id="tooltip-post"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            New post
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <Link
            href={allRoutes.DEMO}
            data-tooltip-target="tooltip-bookmark"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 group"
          >
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 14 20"
            >
              <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
            </svg>
            <span className="sr-only">Bookmark</span>
          </Link>
          <div
            id="tooltip-bookmark"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
          >
            Bookmark
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <Link
            href={allRoutes.PROFILE("settings")}
            data-tooltip-target="tooltip-post"
            type="button"
            className="inline-flex flex-col items-center justify-center p-4 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              height="18px"
              width="18px"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 502.664 502.664"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <g>
                    <path
                      className="group-hover:fill-blue-500 fill-gray-500"
                      d="M52.137,144.664h398.369c28.797,0,52.158-25.756,52.158-57.594 c0-31.86-23.361-57.659-52.158-57.659H52.137C23.404,29.412,0,55.21,0,87.07C0,118.909,23.404,144.664,52.137,144.664z M71.464,51.608c19.586,0,35.484,15.876,35.484,35.462s-15.876,35.462-35.484,35.462c-19.565,0-35.462-15.876-35.462-35.462 C36.002,67.484,51.899,51.608,71.464,51.608z"
                    />
                    <path
                      className="group-hover:fill-blue-500 fill-gray-500"
                      d="M450.506,193.716H52.137C23.404,193.716,0,219.537,0,251.375s23.404,57.594,52.137,57.594h398.369 c28.797,0,52.158-25.756,52.158-57.594S479.303,193.716,450.506,193.716z M323.972,286.837 c-19.586,0-35.462-15.876-35.462-35.462c0-19.586,15.855-35.462,35.462-35.462s35.484,15.876,35.484,35.462 C359.434,270.961,343.558,286.837,323.972,286.837z"
                    />
                    <path
                      className="group-hover:fill-blue-500 fill-gray-500"
                      d="M450.506,357.999H52.137C23.404,357.999,0,383.82,0,415.658c0,31.817,23.404,57.637,52.137,57.594 h398.369c28.797,0,52.158-25.777,52.158-57.594S479.303,357.999,450.506,357.999z M214.996,451.121 c-19.586,0-35.462-15.876-35.462-35.484s15.855-35.462,35.462-35.462s35.462,15.855,35.462,35.462 S234.582,451.121,214.996,451.121z"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <span className="sr-only">Settings</span>
          </Link>
          <div
            id="tooltip-post"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Settings
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
