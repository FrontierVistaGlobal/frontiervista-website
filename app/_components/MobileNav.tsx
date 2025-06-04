// "use client";
// import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";
// import { FiBookOpen } from "react-icons/fi";
// import Link from "next/link";

// const MobileNav = () => {
//   const [isOpen, setIsOpen] = useState(false);

 
  
//   const menuItems = [
//     { label: "Home", path: "/" },
//     { label: "Who We Are", path: "/who-we-are" },
//     { label: "What We Do", path: "/what-we-do", hasDropdown: true },
//     { label: "Our Solutions", path: "/our-solutions" },
//     { label: "Stay Informed", path: "/stay-informed" },
//     { label: "Lets Connect", path: "/lets-connect" },
//   ];


//   const toggleNavbar = () => setIsOpen(!isOpen);

//   const [nav, setNav] = useState(false);
//   const [logo, setLogo] = useState(false);
//   const handleNav = () => {
//     setNav(!nav);
//     setLogo(!logo);
//   }

//   return (
//         <div className="flex justify-between items-center h-20 px-4 absolute w-full z-10 text-white">
//       <div>
//         <h1 onClick={toggleNavbar} className={logo ? "hidden" : "block"}>
//           BEACHES.
//         </h1>
//       </div>
//       <ul className="hidden md:flex ">
//         <li>Home</li>
//         <li>Destination</li>
//         <li>Travel</li>
//         <li>View</li>
//         <li>Book</li>
//       </ul>
//       <div className="hidden md:flex">
//         {/* <BsPerson className='mr-2' size={20} />
//         <BiSearch size={20} /> */}
//       </div>
//       {/* hamburger */}
//       <div onClick={toggleNavbar} className="md:hidden z-10">
//         {nav ? <FaBars className='text-black' size={20} /> : <IoMdClose size={20} />}
//       </div>
//       {/* mobile menu dropdown */}
//       <div
//         // onClick={handleNav}
//         className={
//           nav
//             ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
//             : "absolute left-[-100%]"
//         }
//       >
//         <ul>
//           <h1 className="border-b">BEACHES.</h1>
//           <li className="border-b">Home</li>
//           <li className="border-b">Destination</li>
//           <li className="border-b">Travel</li>
//           <li className="border-b">View</li>
//           <li className="border-b">Book</li>
//           <div className="flex flex-col">
//             <button className="my-6">Search</button>
//             <button>Account</button>
//           </div>
//           <div className="flex justify-between my-6">
//             {/* <FaFacebook className="icon" />
//             <FaTwitter className="icon" />
//             <FaYoutube className="icon" />
//             <FaPinterest className="icon" />
//             <FaInstagram className="icon" /> */}
//           </div>
//         </ul>
//       </div>
//     </div>
//   )
// //     <div>
// //       {/* Top Bar */}
// //       <div className=" w-screen fixed top-0 left-0 z-50 bg-white shadow-sm border-b border-neutral-200 px-4  flex items-center justify-between">
// //         {/* Logo */}
// //         <div  className="text-lg font-semibold text-sky-700 flex items-center gap-x-2">
// //           <FiBookOpen size={24} />
// //           LearnHub
// //         </div>

// //         {/* Hamburger Icon */}
// //         <button onClick={toggleNavbar} className="text-neutral-600">
// //           <FaBars size={24} />
// //         </button>
// //       </div>

// //       {/* Slide-In Menu */}
// //       {isOpen && (
// // //  <div
// // //         className={`fixed top-0 left-0 h-[30%] w-screen bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out transform ${
// // //           isOpen ? "translate-x-0" : "translate-x-full"
// // //         }`}
// // //       >
// //      <div className="fixed top-0 left-0 h-[50%]  max-w-[300px] bg-white z-50 shadow-lg p-4">
// //         {/* Close Button */}
// //         <div className="flex items-center justify-between gap-10 p-4 border-b border-neutral-200">
// //           <span className="text-lg font-semibold text-sky-700 flex items-center gap-x-2">
// //             <FiBookOpen size={24} />
// //             LearnHub
// //           </span>
// //           <button onClick={toggleNavbar} className="text-red-600">
// //             <IoMdClose size={28} />
// //           </button>
// //         </div>

// //         {/* Nav Links */}
// //         <ul className="flex flex-col gap-6 p-6 text-base text-neutral-700 font-medium">
// //           {menuItems.map((item) => (
// //             <li key={item.path}>
// //               <div
               
// //                 onClick={() => setIsOpen(false)}
// //                 className="hover:text-sky-600 transition-all duration-200"
// //               >
// //                 <Link href={item.path}> {item.label} </Link>
               
// //               </div>
// //             </li>
// //           ))}
// //         </ul>

        
// //           <button className="h-[45px] rounded-md bg-[#479DDE] px-6 py-2 text-sm font-medium text-white">
// //             Get Started
// //           </button>
       
// //       </div>
// //       )}

     
// //     </div>
// //   );
// };

// export default MobileNav;
