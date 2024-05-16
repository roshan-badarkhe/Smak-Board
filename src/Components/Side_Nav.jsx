import { useEffect, useState } from "react";
import img2 from "../assets/img2.jpg";
import { Link, useLocation } from "react-router-dom";
const Side_Nav = ({ collapse, setCollapse }) => {
  function handleToggle() {
    setCollapse((prev) => !prev);
  }

  const [selected, setSelected] = useState(localStorage.getItem("selected"));

  //   useEffect(() => {
  //     setSelected(localStorage.getItem("selected"));
  //   }, []);

  useEffect(() => {
    localStorage.setItem("selected", selected);
  }, [selected]);

  const List = [
    {
      label: "Overview",
      route: "/Overview",
    },
    {
      label: "Class Wise",
      route: "/Class-wise",
    },
    {
      label: "Student Wise",
      route: "/Student-wise",
    },
    {
      label: "Teacher wise",
      route: "/Teacher-wise",
    },
    {
      label: "Reports",
      route: "/Reports",
    },
    // {
    //   label: "Overview",
    //   route: "/Overview",
    // },
  ];

  return (
    <div
      className={`bg-color3 absolute md:static duration-200 w-64 rounded-2xl ${
        collapse ? "-translate-x-72" : ""
      } inset-y-0 m-4 md:translate-x-0 flex flex-col font-font1`}
    >
      <div className="flex gap-2 justify-center items-center">
        <div className="h-full flex items-center">
          <img src={img2} className={"rounded-2xl h-1/2"} alt="" />
        </div>
        <div className="pr-10 text-lg font-bold whitespace-nowrap text-slate-700">
          SMAK Board
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 md:hidden"
          onClick={handleToggle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="h-[1.5px] mt-0 from-transparent to-transparent via-white bg-gradient-to-r" />

      <div className="grow w-full text-gray-600 text-sm antialiased font-semibold">
        <ul className="w-full p-4">
          {List.map((el, index) => {
            return (
              <>
                <li key={index} className="mt-1 w-full">
                  <Link
                    to={el.route}
                    onClick={() => setSelected(el.label)}
                    className={`w-full p-2 flex gap-1 rounded-lg ${
                      selected === el.label ? "bg-color4" : ""
                    } hover:bg-color4`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                      {el.label}
                    </span>
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Side_Nav;

{
  /* <li className="mt-1 w-full">
<Link
  to="/Overview"
  className="w-full p-2 flex gap-1 rounded-lg bg-color4 hover:bg-color4 "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
    Overview
  </span>
</Link>
</li>

<li className="mt-0.5 w-full">
<Link
  to="/Class-Wise"
  className="w-full p-2 flex gap-1 rounded-lg hover:bg-color4 "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
    Class Wise
  </span>
</Link>
</li>

<li className="mt-0.5 w-full">
<Link
  to="/Student-wise"
  className="w-full p-2 flex gap-1 rounded-lg hover:bg-color4 "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
    Student Wise
  </span>
</Link>
</li>

<li className="mt-0.5 w-full">
<Link
  to="/Teacher-wise"
  className="w-full p-2 flex gap-1 rounded-lg hover:bg-color4 "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
    Teacher Wise
  </span>
</Link>
</li>

<li className="mt-0.5 w-full">
<Link
  to="/Reports"
  className="w-full p-2 flex gap-1 rounded-lg hover:bg-color4 "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
    Reports
  </span>
</Link>
</li> */
}
