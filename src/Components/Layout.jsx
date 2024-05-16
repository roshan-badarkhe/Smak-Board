import { useState } from "react";

import Side_Nav from "./Side_Nav";
import Top_Nav from "./Top_Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [collapse, setCollapse] = useState(true);

  return (
    <>
      <div className="bg-color1 md:h-72 w-full -z-10 absolute"></div>
      <div className="flex h-screen w-screen">
        <Side_Nav collapse={collapse} setCollapse={setCollapse} />
        <div className="grow">
          <div className="h-full w-full flex flex-col">
            <Top_Nav setCollapse={setCollapse} />
            <div className="grow md:overflow-auto mt-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

// <div
//   className={`bg-color3 duration-200 w-64 rounded-2xl ${
//     collapse ? "-translate-x-72" : ""
//   } inset-y-0 m-4 mf:translate-x-0 flex flex-col font-font1`}
// >
//   <div className="h-19 flex gap-2 justify-center items-center">
//     <div className="h-full flex items-center">
//       <img src={img2} className={"rounded-2xl h-1/2"} alt="" />
//     </div>
//     <div className="pr-10 text-lg font-bold whitespace-nowrap text-slate-700">
//       SMAK Board
//     </div>

//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className="w-6 h-6 md:hidden"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M6 18 18 6M6 6l12 12"
//       />
//     </svg>
//   </div>
//   <div className="h-[1.5px] mt-0 bg-white " />

//   <div className="grow w-full text-gray-700 antialiased font-semibold">
//     <ul className="w-full p-4">
//       <li className="mt-0.5 w-full">
//         <a
//           href=""
//           className="w-full p-2 flex gap-1 rounded-lg bg-color4 hover:bg-color4 "
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-5 h-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//             />
//           </svg>
//           <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
//             Overview
//           </span>
//         </a>
//       </li>

//       <li className="mt-0.5 w-full">
//         <a
//           href=""
//           className="w-full p-2 flex gap-1 rounded-lg hover:bg-color4 "
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-5 h-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//             />
//           </svg>
//           <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
//             Class Wise
//           </span>
//         </a>
//       </li>

//       <li className="mt-0.5 w-full">
//         <a
//           href=""
//           className="w-full p-2 flex gap-1 rounded-lg hover:bg-color4 "
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-5 h-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//             />
//           </svg>
//           <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
//             Student Wise
//           </span>
//         </a>
//       </li>

//       <li className="mt-0.5 w-full">
//         <a
//           href=""
//           className="w-full p-2 flex gap-1 rounded-lg hover:bg-color4 "
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-5 h-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//             />
//           </svg>
//           <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
//             Class Wise
//           </span>
//         </a>
//       </li>

//       <li className="mt-0.5 w-full">
//         <a
//           href=""
//           className="w-full p-2 flex gap-1 rounded-lg hover:bg-color4 "
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-5 h-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//             />
//           </svg>
//           <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
//             Teacher Wise
//           </span>
//         </a>
//       </li>
//     </ul>
//   </div>
// </div>

// <nav className="flex p-4 h-16 items-center md:shadow-none shadow-lg justify-between md:justify-end">
//   <div
//     onClick={() => setCollapse(false)}
//     className="md:hidden flex gap-1"
//   >
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className="w-6 h-6"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//       />
//     </svg>
//     <span className="font-semibold">SMAK Board</span>
//   </div>
//   <div className="flex gap-6 items-center md:mr-8">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className="w-8 h-8 md:text-white"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
//       />
//     </svg>
//     <img
//       className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
//       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//       alt=""
//     ></img>
//   </div>
// </nav>
