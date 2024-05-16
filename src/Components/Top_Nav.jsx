import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Top_Nav = ({ setCollapse }) => {
  const location = useLocation();

  const [close, setClose] = useState(true);

  return (
    <nav className="flex bg-color2 md:bg-transparent p-4 h-16 items-center md:shadow-none shadow-lg justify-between">
      <div onClick={() => setCollapse(false)} className="md:hidden flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <span className="font-semibold">SMAK Board</span>
      </div>
      <div className="hidden md:block text-white font-bold">
        pages{location.pathname === "/" ? "/Overview" : location.pathname}
      </div>
      <div className="flex md:gap-6 gap-4 items-center md:mr-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-7 md:w-8 md:h-8 md:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>

        <img
          onClick={() => {
            setClose((prev) => !prev);
          }}
          className="inline-block h-7 w-7 md:w-8 md:h-8 rounded-full ring-2 ring-gray-500 md:ring-white cursor-pointer"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        ></img>
        <div
          className={`${
            close ? "hidden" : "absolute"
          } rounded-md h-fit w-36 bg-gray-100 right-2 top-14 md:right-10 md:top-16`}
        >
          <div className="h-12 flex justify-center items-center">
            Roshan Badarkhe
          </div>
          <button className="w-full rounded-b-xl bg-gray-200 py-2">
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Top_Nav;
