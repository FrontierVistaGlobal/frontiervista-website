"use client";
import React from "react";
import Image from "next/image";
import Button from "../_components/Button";

export default function page() {
  const whyItems = [
    {
      title: "Optimized Resource Utilization:",
      description:
        "We maximize the efficiency of your resources through strategic asset and vendor management, ensuring you get the most value from your investments.",
      image: "/images/RMP-SVG1.svg",
      color: "#FFEAD0",
    },
    {
      title: "Cost-Effective Procurement:",
      description:
        "Reduce your procurement costs while acquiring best-in-class hardware, software, and services that meet your specific requirements.",
      image: "/images/CEP-SVG2.svg",
      color: "#E9F5FF",
    },
    {
      title: "Expert Staffing Solutions:",
      description:
        "Gain access to top talent for both short-term and long-term needs, ensuring you have the right skills to drive your technology initiatives.",
      image: "/images/ESS-SVG3.svg",
      color: "#E9F5FF",
    },
    {
      title: "End-to-End Management:",
      description:
        "From initial procurement to ongoing maintenance and optimization, we handle it all, providing comprehensive management that frees you to focus on your core business.",
      image: "/images/EEM-SVG4.svg",
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
      link: "/lets-connect#contact",
    },
    {
      title: "Hardware Procurement & Maintenance",
      description:
        "Leverage our experts to acquire high-performance hardware solutions with seamless integration, proactive maintenance, and timely upgrades, ensuring sustained performance and minimizing disruptions.",
      image: "/images/res2.svg",
      color: "#FFEAD0",
      btn: "Discover Strategic Hardware Procurement",
      link: "/lets-connect#contact",
    },
    {
      title: "Bid Packaging",
      description:
        "Win more contracts with strategic, high-impact proposals. We turn complex requirements into clear, compliant, and compelling bids, saving you time and increasing your win rate. From RFP analysis to final submission, we handle it all. Ready to win your next bid?",
      image: "/images/res3.svg",
      color: "#EFFFEF",
      btn: "Contact us today",
      link: "/lets-connect#contact",
    },
    {
      title: "Software Procurement & Licensing",
      description:
        "Acquire cost-effective software and SaaS licensing solutions that precisely meet your business needs and support your growth plans, ensuring compliance and avoiding unnecessary expenses.",
      image: "/images/res4.svg",
      color: "#F1D9FF",
      btn: "Explore Software Procurement",
      link: "/lets-connect#contact",
    },

    {
      title: "Vendor Management",
      description:
        "Streamline your vendor management processes, ensuring you get the best contracts, pricing, service level agreements, and services that align with your business objectives while effectively mitigating risks.",
      image: "/images/res5.svg",
      color: "#EFFFEF",
      btn: "Consult our Vendorship Experts",
      link: "/lets-connect#contact",
    },
    {
      title: "Staff Recruitment, Training & Augmentation",
      description:
        "Access skilled IT professionals who drive innovation and operational excellence within your organization. We handle IT staff augmentation, recruitment, and targeted training to build the perfect team for your needs.",
      image: "/images/res6.svg",
      color: "#F1D9FF",
      btn: "Find Your Expert IT Team Members",
      link: "/lets-connect#contact",
    },
  ];

  return (
    <div className="w-full">
      <div
        className="relative flex h-[700px] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/resource-bg.png')" }}
      >
        <div className="flex w-full flex-col justify-center bg-[#730A09BF] py-10 text-white md:min-h-[350px]">
          <div className="wrap px-4 md:px-0">
            <h4 className="mb-6 text-2xl font-semibold md:text-4xl">
              Resource Management & Procurement
            </h4>
            <p className="mb-8 font-extralight lg:w-[60%]">
              Frontier Vista Global (FVG) expertly handles your hardware,
              software, and personnel, significantly cutting costs. Gain control
              of your assets.
            </p>
            <Button text="Get Started Today" path="/lets-connect#contact" />
          </div>
        </div>
      </div>

      <div className="py-[5rem] md:py-[10rem]">
        <div className="wrap">
          <div className="flex justify-end">
            <div className="flex w-full flex-col px-5 md:px-0 lg:w-1/2">
              <h4 className="mb-5 text-5xl leading-[60px] font-extralight text-[#D55B5A]">
                Maximize your organization&apos;s efficiency & ROI with
                strategic resource management.
              </h4>

              <Button
                text="Request For Resource Assessment Today"
                path="/lets-connect#contact"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative flex h-[700px] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/resource-bg2.png')" }}
      ></div>

      <div className="relative">
        <div className="absolute top-0 right-0 hidden lg:block">
          <Image
            src={"/images/line-bg1.png"}
            height={1000}
            width={1000}
            alt=""
            className="lg:w-[15rem]"
          />
        </div>
        <div className="absolute top-[20%] left-0 hidden lg:block">
          <Image
            src={"/images/line-bg2.png"}
            height={1000}
            width={1000}
            alt=""
            className="lg:w-[15rem]"
          />
        </div>
        <div className="wrap py-[5rem] pb-[5rem] md:py-[10rem]">
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-5xl font-[500] lg:w-2/3">
              Unlock Efficiency and Savings with Our Expert Services
            </h4>
          </div>

          <div className="mt-16 grid gap-4 px-5 md:grid-cols-2 md:px-0">
            {supportItems.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[200px] gap-8 rounded-lg bg-[#FFEEED] p-10"
              >
                <div
                  className={`hidden h-[60px] w-[100px] items-center justify-center rounded bg-white p-3 md:flex md:w-[200px]`}
                >
                  <Image
                    src={item.image}
                    width={1000}
                    height={1000}
                    alt=""
                    className="h-[40px] w-[40px] object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h5 className="mb-2 text-xl">{item.title}</h5>
                  <p className="font-[300]">{item.description}</p>

                  <Button text={item.btn} path={item.link} />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-20 px-5 text-5xl font-light text-[#D55B5A] md:px-0 lg:w-1/2">
            Partner with Us for Smarter Resource Management
          </p>
        </div>
      </div>

      <div className="bg-[#011D31] py-[5rem] md:py-[8rem]">
        <div className="wrap flex flex-col justify-center px-5 md:px-0">
          <h4 className="mx-auto mb-6 text-center text-4xl font-medium text-white md:text-5xl lg:w-1/2">
            Why Frontier Vista is the ideal choice
          </h4>

          <div className="md:grid-cols-2 mt-10 grid gap-3">
            {whyItems.map((item, index) => (
              <div
                key={index}
                className="flex w-full items-center justify-center gap-6 rounded-lg bg-[#DCEAFD] p-8 text-center"
              >
                <div
                  className="mb-6 h-[60px] w-[100px] rounded p-4"
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
            <Button
              text="Contact Our Resource Management Experts Today "
              path="/lets-connect#contact"
            />
          </div>
        </div>
      </div>

      <div
        className="relative flex h-[1100px] flex-col justify-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/res7.png')" }}
      >
        <div className="min:h-[350px] flex w-full flex-col justify-center bg-[#D0F4FF] pt-10 pb-8 text-white">
          <div className="wrap relative px-5 md:px-0 lg:min-w-[1200px]">
            <div className="flex w-full flex-col items-center justify-between md:flex-row md:gap-10">
              <div className="md:w-[40%]">
                <h4 className="mb-6 text-4xl font-normal text-[#011D31]">
                  Take Control of Your Resources and Drive Business Success
                </h4>
              </div>

              <div className="md:w-1/2">
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
