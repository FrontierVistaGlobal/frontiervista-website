"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";


const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Who We Are", path: "/who-we-are" },
    { label: "What We Do", path: "/what-we-do", hasDropdown: true },
    { label: "Our Solutions", path: "/our-solutions" },
    { label: "Stay Informed", path: "/stay-informed" },
    { label: "Lets Connect", path: "/lets-connect" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => {
  setIsMenuOpen(false); // Hide the mobile menu
};

  const [activeDropdown, setActiveDropdown] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navItemRef = useRef<HTMLLIElement>(null);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    // Use a small delay to allow the cursor to move onto the dropdown
    setTimeout(() => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.matches(":hover") &&
        navItemRef.current &&
        !navItemRef.current.matches(":hover")
      ) {
        setActiveDropdown("");
      }
    }, 500);
  };

  const dropdownVariants = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.15, ease: "easeInOut" },
    },
  };

  const dropdown = [
    {
      title: "IT Strategy and Consulting",
      link: "it-strategy-consulting",
      links: [
        "IT Strategy Consult",
        "Business Strategy",
        "Project planning and Delivery",
        "Technology Planning",
        "Enterprise Architecture Consulting",
        "IT Risk Management and Compliance",
        "Change Management",
      ],
    },
    {
      title: "Digital Solutions & Development",
      link: "digital-solutions",
      links: [
        "Brand and Product Design",
        "Website Design and Development",
        "Web and Mobile App Development",
        "Infrastructure and Platform Solutions",
        "Custom API Development",
        "SaaS Integration",
      ],
    },
    {
      title: "Data Intelligence and Advanced Analytics",
      link: "data-intelligence-advanced-analytics",
      links: [
        "Data Analytics Consulting",
        "Data Architecture and Engineering",
        "Data Strategy, Governance and Management",
        "Business Intelligence (BI) Solutions",
        "Artificial Intelligence (AI) and Machine Learning (ML)",
      ],
    },
    {
      title: "Operational Excellence",
      link: "operational-excellence",
      links: [
        "IT support and managed services",
        "Network and system administration",
        "IT system management",
        "Performance monitoring and optimization",
        "Process and workflow Automation",
        "Disaster recovery planning",
      ],
    },
    {
      title: "Cloud Innovation Hub",
      link: "cloud-innovation-hub",
      links: [
        "Cloud Adoption Strategy",
        "Website Design and Development",
        "Cloud Migration & Modernization",
        "Cloud Infrastructure Design & Automation",
        "Cloud FinOps",
        "Cybersecurity and Risk Management",
      ],
    },
    {
      title: "Resource Management & Procurement",
      link: "resource-management-procurement",
      links: [
        "IT asset management",
        "Software Procurement and Licensing",
        "Hardware procurement and maintenance",
        "Vendor management",
        "Staff recruitment, training and augmentation",
      ],
    },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md w-full lg:px-16  px-6   flex">
      <div className="md:mx-auto flex w-screen md:max-w-[1200px] items-center justify-between px-3 py-5">
        <div className="md:text-4xl text-3xl ">
          <Image src="/logo.svg" alt="Logo" width={150} height={50} />
        </div>
        <div>
          <ul className="lg:flex justify-center gap-7 hidden items-center">
            {menuItems.map((item) => (
              <li
                key={item.path}
                className={`cursor-pointer text-sm font-medium tracking-[0.5] ${
                  isActive(item.path) ? "text-[#479DDE]" : "text-[#000000]"
                }`}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
                ref={item.hasDropdown ? navItemRef : undefined}
              >
                <Link href={item.path}>{item.label}</Link>

                {item.hasDropdown && activeDropdown === item.label && (
                  <motion.div
                    className="absolute left-0 z-20 mx-auto mt-5 w-screen rounded-md bg-white shadow-lg"
                    variants={dropdownVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    ref={dropdownRef}
                  >
                    <div className="wrap">
                      <div className="container mx-auto grid grid-cols-3 gap-4 p-6">
                        {dropdown.map((column, index) => (
                          <div key={index}>
                            <h3 className="mb-2 font-semibold text-[#479DDE] underline">
                              <Link href={`/${column.link}`}>
                                {column.title}
                              </Link>
                            </h3>
                            <ul className="space-y-1">
                              {column.links.map((link) => (
                                <li key={link}>
                                  <a
                                    href="#"
                                    className="block py-1 text-gray-700"
                                  >
                                    {link}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="h-[45px] justify-center items-center rounded-md bg-[#479DDE] px-6 py-2 text-sm font-medium text-white
          lg:flex hidden
          ">
            Get Started
          </button>
         
        </div>
         </div>
        { /* Mobile Menu start here */}
         <div className="flex justify-between items-center lg:hidden mt-3 " onClick={toggleMenu}>
            {
              isMenuOpen ? <FaXmark  className="text-blue-400 text-3xl cursor-pointer" /> :
               <FaBars size={20} className="text-[#479DDE] text-3xl cursor-pointer" /> 
            }
        </div>
     
      <div className={`${isMenuOpen ? "flex" : "hidden"} flex-col  bg-white text-[#23557a]
         w-full  p-4 absolute top-[65px] left-0 `} onClick={closeMenu}>
        <ul className="flex flex-col gap-2 w-full  ">
            {menuItems.map(({label, path}) => (
              <Link
                key={path}
                href={path}
               className="text-[#23557a] font-semibold cursor-pointer p-2 rounded-lg
               w-full  hover:bg-transparent"
              >
               {label}
              </Link>
            ))}

        </ul>
       <div className="px">
         <button className="h-[45px] rounded-md bg-[#479DDE] px-6 py-2 text-sm font-medium text-white
          flex 
          ">
            Get Started
          </button>
       </div>
      </div>
 
     
    </div>
  );
};

export default Navbar;
