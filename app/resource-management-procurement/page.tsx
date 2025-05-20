import React from "react";
import { LuMoveRight } from "react-icons/lu";
import Image from "next/image";
import Button from "../_components/Button";

export default function page() {
  const whyItems = [
    {
      title: "Optimized Resource Utilization:",
      description:
        "We maximize the efficiency of your resources through strategic asset and vendor management, ensuring you get the most value from your investments.",
      image: "/images/opex1.svg",
      color: "#FFEAD0",
    },
    {
      title: "Cost-Effective Procurement:Cost-Effective Procurement:",
      description:
        "Reduce your procurement costs while acquiring best-in-class hardware, software, and services that meet your specific requirements.",
      image: "/images/opex2.svg",
      color: "#E9F5FF",
    },
    {
      title: "Expert Staffing Solutions:",
      description:
        "Gain access to top talent for both short-term and long-term needs, ensuring you have the right skills to drive your technology initiatives.",
      image: "/images/opex3.svg",
      color: "#E9F5FF",
    },
    {
      title: "End-to-End Management:v",
      description:
        "From initial procurement to ongoing maintenance and optimization, we handle it all, providing comprehensive management that frees you to focus on your core business.",
      image: "/images/opex4.svg",
      color: "#FFEAD0",
    },
  ];

  const supportItems = [
    {
      title: "Asset Management",
      description:
        "Ensure complete visibility and control over your IT assets. We track, maintain, and optimize hardware and software lifecycles to maximize value and minimize downtime.",
      image: "/images/res1.svg",
      color: "#F9FCFF",
      btn: "Consult an Expert",
      link: "#",
    },
    {
      title: "Hardware Procurement & Maintenance",
      description:
        "Leverage our experts to acquire high-performance hardware solutions with seamless integration, proactive maintenance, and timely upgrades, ensuring sustained performance and minimizing disruptions.",
      image: "/images/res2.svg",
      color: "#FFEAD0",
      btn: "Discover Strategic Hardware Procurement",
      link: "#",
    },
    {
      title: "Bid Packaging",
      description:
        "Win more contracts with strategic, high-impact proposals. We turn complex requirements into clear, compliant, and compelling bids, saving you time and increasing your win rate. From RFP analysis to final submission, we handle it all. Ready to win your next bid?",
      image: "/images/res3.svg",
      color: "#EFFFEF",
      btn: "Contact us today",
      link: "#",
    },
    {
      title: "Software Procurement & Licensing",
      description:
        "Acquire cost-effective software and SaaS licensing solutions that precisely meet your business needs and support your growth plans, ensuring compliance and avoiding unnecessary expenses.",
      image: "/images/res4.svg",
      color: "#F1D9FF",
      btn: "Explore Software Procurement",
      link: "#",
    },

    {
      title: "Vendor Management",
      description:
        "Streamline your vendor management processes, ensuring you get the best contracts, pricing, service level agreements, and services that align with your business objectives while effectively mitigating risks.",
      image: "/images/res5.svg",
      color: "#EFFFEF",
      btn: "Consult our Vendorship Experts",
      link: "#",
    },
    {
      title: "Staff Recruitment, Training & Augmentation",
      description:
        "Access skilled IT professionals who drive innovation and operational excellence within your organization. We handle IT staff augmentation, recruitment, and targeted training to build the perfect team for your needs.",
      image: "/images/res6.svg",
      color: "#F1D9FF",
      btn: "Find Your Expert IT Team Members",
      link: "#",
    },
  ];

  return (
    <div className="w-full">
      <div
        className="relative flex h-[900px] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/resource-bg.png')" }}
      >
        <div className="flex h-[350px] w-full flex-col justify-center bg-[#730A09BF] text-white">
          <div className="wrap">
            <h4 className="mb-6 text-4xl font-semibold">
              Resource Management & Procurement
            </h4>
            <p className="mb-8 font-extralight lg:w-[60%]">
              Frontier Vista Global (FVG) expertly handles your hardware,
              software, and personnel, significantly cutting costs. Gain control
              of your assets.
            </p>
            <Button text="Get Started Today" />
          </div>
        </div>
      </div>

      <div className="py-[10rem]">
        <div className="wrap">
          <div className="flex justify-end">
            <div className="flex w-full flex-col lg:w-1/2">
              <h4 className="mb-5 text-5xl leading-[60px] font-extralight text-[#D55B5A]">
                Maximize your organization’s efficiency & ROI with strategic
                resource management.
              </h4>

              <Button text="Request For Resource Assessment Today" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative flex h-[900px] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/resource-bg2.png')" }}
      ></div>

      <div className="wrap py-[10rem] pb-[5rem]">
        <div className="flex flex-col items-center justify-center text-center">
          <h4 className="text-5xl font-[500] lg:w-2/3">
            Unlock Efficiency and Savings with Our Expert Services
          </h4>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {supportItems.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[200px] gap-8 rounded-lg bg-[#FFEEED] p-10"
            >
              <div
                className={`flex h-[60px] w-[200px] items-center justify-center rounded bg-white p-3`}
              >
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt=""
                  className="h-[40px] w-[40px] object-contain"
                />
              </div>
              <div>
                <h5 className="mb-2 text-xl">{item.title}</h5>
                <p className="font-[300]">{item.description}</p>
                <button className="mt-6 flex h-[55px] w-fit cursor-pointer items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
                  {item.btn} <LuMoveRight className="ml-5 text-2xl" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-20 text-5xl font-light text-[#D55B5A] lg:w-1/2">
          Partner with Us for Smarter Resource Management
        </p>
      </div>

      <div className="bg-[#011D31] py-[8rem]">
        <div className="wrap flex flex-col justify-center">
          <h4 className="mb-6 text-center text-5xl font-medium text-white">
            Why Frontier Vista is the ideal choice
          </h4>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {whyItems.map((item, index) => (
              <div
                key={index}
                className="flex w-full items-center justify-center gap-6 rounded-lg bg-[#DCEAFD] p-8 text-center"
              >
                <div
                  className="mb-6 h-[60px] w-[80px] rounded p-4"
                  style={{ backgroundColor: item.color }}
                >
                  <Image
                    src={item.image}
                    width={1000}
                    height={1000}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="text-left">
                  <h5 className="mb-2 text-xl font-normal text-[#011D31]">
                    {item.title}
                  </h5>
                  <p className="font-light text-[#011D31]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex w-full flex-col items-center">
            <p className="mt-20 mb-4 text-center text-4xl font-light text-white lg:w-2/3">
              Ready to optimize your resources and procurement?
            </p>
            <Button text="Contact Our Resource Management Experts Today " />
          </div>
        </div>
      </div>

      <div
        className="relative flex h-[1100px] flex-col justify-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/res7.png')" }}
      >
        <div className="flex h-[350px] w-full flex-col justify-center bg-[#D0F4FF] pt-10 pb-8 text-white">
          <div className="wrap relative lg:min-w-[1200px]">
            <div className="flex w-full items-center justify-between gap-10">
              <div className="w-[40%]">
                <h4 className="mb-6 text-4xl font-normal text-[#011D31]">
                  Take Control of Your Resources and Drive Business Success
                </h4>
              </div>

              <div className="w-1/2">
                <p className="text-[#011D31]">
                  Streamline asset management, optimize procurement processes,
                  and scale teams with confidence through Frontier Vista&apos;s
                  expert resource management and procurement services.
                </p>

                <Button text="Schedule a Free Consultation on Your Resource Strategy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
