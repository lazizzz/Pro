// import { useContext, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../utilities/authContext";
// import { GameContext } from "../../../utilities/gameContext";
// import "../styles/nav.css";

// function Navbar() {
//   const { gameCart } = useContext(GameContext);
//   const { currentUser, logout } = useContext(AuthContext);
//   let navigate = useNavigate();
//   const myRef = useRef(null);

//   const onLogout = () => {
//     logout();

//     console.log(myRef.current.textContent);

//     navigate("/login");
//   };

//   return (
//     <div className="">
//       <nav className="ml-24 mt-8    lg:ml-60">
//         <ul className=" grid grid-cols-10  ">
//           {/* <li className="logo  text-xl text-slate-100 font-semibold">
//             <Link to={"/"}>
//                <h1 className="Sarlavha sariq-txt mt-0  -ml-40   font-semibold text-lg">My Imiganition</h1>
//             </Link>
//           </li> */}
//           <li className="head_li hover:text-xl rounded-xl ml-2 text-center    text-xl sariq-txt font-semibold">
//             <a href="https://www.un.org/en/coronavirus">COVID-19 </a>
//           </li>
//           <li className="head_li hover:text-xl rounded-xl ml-2 text-center    text-xl sariq-txt font-semibold">
//             <Link to={"/About"}>About</Link>
//           </li>
//           <li className="head_li hover:text-xl rounded-xl ml-2 text-center    text-xl sariq-txt font-semibold">
//             <Link to={"/Explore"}>Donate</Link>
//           </li>
//           <li className="head_li hover:text-xl rounded-xl ml-2 text-center    text-xl sariq-txt font-semibold">
//             <Link to={"/Hero"}>Add Hero</Link>
//           </li>
//           <li className="head_li hover:text-xl rounded-xl ml-2 text-center    text-xl sariq-txt font-semibold">
//             <Link to={"/Contact"}>Contact</Link>
//           </li>
//           <li className="head_li hover:text-xl rounded-xl ml-2 text-center    text-xl sariq-txt font-semibold">
//             <Link to={"/Contact"}>Help</Link>
//           </li>
//           {currentUser != null ? (
//             <button
//               ref={myRef}
//               onClick={onLogout}
//               className="bg-red-500 px-4 py-2 rounded-md text-white"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link
//               className="head_li hover:text-xl rounded-xl ml-2 text-center    text-xl sariq-txt font-semibold"
//               to="/login"
//             >
//               Login
//             </Link>
//           )}
//           <li className="Cart  text-xl   font-semibold sariq-txt">
//             <Link to={"/Cart"}>
//               <span class="relative inline-block">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                   class="w-6 h-6"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
//                   />
//                 </svg>

//                 <span style={{ display: gameCart.length > 0 ? "block" : "none" }} class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  
//                   {gameCart.length}
//                 </span>
//               </span>
//             </Link>
//           </li>
//         </ul>

//         <br />
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
