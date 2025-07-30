"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";
import Button from "./Button";

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
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
    <div className="sticky top-0 z-50 flex w-full bg-white px-6 shadow-md lg:px-16">
      <div className="flex w-screen items-center justify-between px-3 py-5 md:mx-auto md:max-w-[1200px]">
        <div className="text-3xl md:text-4xl">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={150} height={50} />
          </Link>
        </div>
        <div>
          <ul className="hidden items-center justify-center gap-7 lg:flex">
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

        <Button
          text="Get Started"
          className="!mt-0 hidden !h-[45px] md:flex"
          showArrow={false}
          path="/lets-connect"
        />
      </div>
      {/* Mobile Menu start here */}
      <div
        className="mt-3 flex items-center justify-between lg:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FaXmark className="cursor-pointer text-3xl text-blue-400" />
        ) : (
          <FaBars
            size={20}
            className="cursor-pointer text-3xl text-[#479DDE]"
          />
        )}
      </div>

      <div
        className={`${isMenuOpen ? "flex" : "hidden"} absolute top-[65px] left-0 w-full flex-col bg-white p-4 text-[#23557a]`}
        onClick={closeMenu}
      >
        <ul className="flex w-full flex-col gap-2">
          {menuItems.map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              className="w-full cursor-pointer rounded-lg p-2 font-semibold text-[#23557a] hover:bg-transparent"
            >
              {label}
            </Link>
          ))}
        </ul>
        <div className="px">
          <Button
            text="Get Started"
            className="mt-[4px] !h-[45px] !text-sm"
            showArrow={false}
            path="/lets-connect"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
