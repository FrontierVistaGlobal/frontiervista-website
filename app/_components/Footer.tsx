"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import addEmailToNewLetter from "../_util/addEmailToNewLetter";
import { ImSpinner7 } from "react-icons/im";

const footerData = [
  {
    title: "Corporate",
    items: [
      { name: "About Us", link: "/who-we-are" },
      { name: "Our Services", link: "/what-we-do" },
      { name: "Blog", link: "/blog" },
      { name: "Lets Connect", link: "/lets-connect" },
    ],
  },
  {
    title: "Our Solutions",
    items: [
      {
        name: "Data Analytics and Management",
        link: "/data-intelligence-advanced-analytics",
      },
      {
        name: "Intelligent Chat Agent",
        link: "/data-intelligence-advanced-analytics",
      },
      { name: "Retail Solution API", link: "/digital-solutions" },
    ],
  },
  {
    title: "Career",
    items: [
      { name: "Find Talent", link: "/talent-hub" },
      { name: "Search Job Opportunities", link: "/talent-hub" },
      { name: "Why Join Frontier Vista", link: "/lets-connect" },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Terms and Conditions", link: "/terms-and-agreement" },
      { name: "Privacy Policy", link: "/terms-and-agreement" },
      { name: "Security", link: "/terms-and-agreement" },
    ],
  },
  {
    title: "Contact Us",
    items: [
      { name: "Contact Sales", link: "/contact" },
      { name: "Support", link: "/support" },
      { name: "FAQ", link: "/faq" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    addEmailToNewLetter(email)
      .then((response) => {
        if (response) {
          if (email) {
            setSuccessMessage(true);
            setTimeout(() => {
              setSuccessMessage(false);
            }, 3000);
            setEmail("");
          }
        }
      })
      .catch((error) => {
        console.error("Error subscribing to newsletter:", error);
        alert("An error occurred while subscribing. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-[#011D31]">
      <div className="wrap mx-auto flex flex-col px-3 pt-[5rem] pb-8">
        <div className="mb-[50px] flex w-full flex-col gap-[5rem] md:flex-row">
          <div className="hidden w-[100px] md:flex">
            <Image src="/logo-icon.svg" alt="Logo" width={100} height={100} />
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-6">
            {footerData.map((section, index) => (
              <div key={index} className="pl-5">
                <p className="font-semibold text-[#479DDE]">{section.title}</p>
                <ul className="mt-7 flex flex-col gap-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-[13px] font-[100] text-white">
                      <Link href={item.link} className="hover:underline">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col justify-between md:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-xl text-white">
              Subscribe to our newsletter
            </p>

            <div>
              <div className="relative flex items-center rounded-md bg-white">
                <input
                  type="email"
                  placeholder="Your email..."
                  className="h-[56px] w-[400px] rounded-[10px] py-1 pr-[170px] pl-4 text-sm text-gray-400 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={handleSubscribe}
                  className="absolute right-2 flex h-[45px] w-fit items-center rounded-[10px] bg-[#479DDE] px-4 py-3 text-sm font-normal text-white hover:bg-[#479DDE] focus:outline-none"
                >
                  {loading ? (
                    <ImSpinner7 className="animate-spin text-xl" />
                  ) : (
                    <>
                      Get started <FiArrowUpRight className="ml-2 text-xl" />
                    </>
                  )}
                </button>
              </div>
              {successMessage && (
                <p className="mt-2 text-sm text-green-500">
                  Successfully subscribed to the newsletter!
                </p>
              )}
            </div>
          </div>

          <div className="mt-6 flex gap-5 text-white">
            <Link
              href="https://web.facebook.com/people/Frontier-Vista-Global-Inc/61578291463863/#"
              target="_blank"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/frontiervista/"
              target="_blank"
            >
              <FaInstagram />
            </Link>
            <Link href="https://x.com/Frontier_VG" target="_blank">
              <FaTwitter />
            </Link>
            <Link href="#" target="_blank">
              <FaTiktok />
            </Link>
            <Link href="#" target="_blank">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
