// import React, { useState } from "react";
// import Mobile from "./mini_components/mobile";

// function Navigation() {
//   const [showMenu, setShowMenu] = useState(false);

//   let menu;
//   let menuMask;

//   if (showMenu == true) {
//     menu = (
//       <div className="menu absolute  mob-bg left-0 top-0 w-full  h-24 z-50   shadow   ">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="1.5"
//           stroke="currentColor"
//           class="w-6 h-6 sariq-txt font-semibold ml-24 mt-4 hover:rotate-45 delay-700 hover:animate-pulse"
//           onClick={() => setShowMenu(!showMenu)}
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M6 18L18 6M6 6l12 12"
//           />
//         </svg>

//         <Mobile />
//       </div>
//     );

//     menuMask = (
//       <div
//         className=" bg-black opacity-30 top-0 left-0 z-50 w-full h-full "
//         onClick={() => setShowMenu(true)}
//       ></div>
//     );
//   }

//   return (
//     <nav className=" ml-10">
//       <span className="text-2xl ">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="1.5"
//           stroke="currentColor"
//           className="burger fixed  w-6 h-6 ml-44 sm:ml-72 sariq-txt inline   md:hidden "
//           onClick={() => setShowMenu(!showMenu)}
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//           />
//         </svg>
//       </span>

//       {menu}
//       {menuMask}
//     </nav>
//   );
// }

// export default Navigation;
