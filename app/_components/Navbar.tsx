"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

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
      title: "IT Strategy and Consultancy",
      link: "it-strategy-consultancy",
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
    <div>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-3 py-5">
        <div>
          <Image src="/logo.svg" alt="Logo" width={150} height={50} />
        </div>
        <div>
          <ul className="flex gap-7">
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
                            <h3 className="mb-2 font-semibold text-[#479DDE]">
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
          <button className="h-[45px] rounded-md bg-[#479DDE] px-6 py-2 text-sm font-medium text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
