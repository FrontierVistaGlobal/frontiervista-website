import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const footerData = [
    {
      title: "Corporate",
      items: [
        { name: "About Us", link: "/about-us" },
        { name: "Careers", link: "/careers" },
        { name: "Ambassadors", link: "/privacy-policy" },
        { name: "Privacy", link: "/terms-of-use" },
      ],
    },
    {
      title: "Product",
      items: [
        { name: "Lorem Ipsum", link: "/stamper" },
        { name: "Careers", link: "/careers" },
        { name: "Ambassadors", link: "/privacy-policy" },
        { name: "Privacy", link: "/terms-of-use" },
      ],
    },
    {
      title: "Product",
      items: [
        { name: "Lorem Ipsum", link: "/stamper" },
        { name: "Careers", link: "/careers" },
        { name: "Ambassadors", link: "/privacy-policy" },
        { name: "Privacy", link: "/terms-of-use" },
      ],
    },
  ];
  return (
    <div className="bg-[#011D31]">
      <div className="mx-auto flex max-w-[1200px] justify-between px-3 py-[5rem]">
        <div className="flex items-start gap-[8rem] md:w-[70%]">
          <Image src="/logo-icon.svg" alt="Logo" width={90} height={50} />

          {footerData.map((section, index) => (
            <div key={index}>
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

        <div>
          <p className="mb-4 text-xl text-white">Subscribe to our newsletter</p>

          <div className="relative flex items-center rounded-md bg-white">
            <input
              type="email"
              placeholder="Your email..."
              className="h-[56px] w-[380px] rounded-[10px] py-1 pr-[170px] pl-4 text-sm text-gray-400 focus:outline-none"
            />
            <button className="absolute right-2 flex h-[45px] w-fit items-center rounded-[10px] bg-[#479DDE] px-4 py-3 text-sm font-normal text-white hover:bg-[#479DDE] focus:outline-none">
              Get started <FiArrowUpRight className="ml-2 text-xl" />
            </button>
          </div>

          <div className="mt-6 flex gap-5 text-white">
            <Link href="#" target="_blank">
              <FaFacebookF />
            </Link>
            <Link href="#" target="_blank">
              <FaInstagram />
            </Link>
            <Link href="#" target="_blank">
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
