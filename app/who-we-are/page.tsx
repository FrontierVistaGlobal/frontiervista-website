"use client";

import Image from "next/image";
import React from "react";
import { FiX, FiPlus } from "react-icons/fi";
import { LuMoveRight } from "react-icons/lu";

export default function Hello() {
  const [activeAccordion, setActiveAccordion] = React.useState<number>(0);
  const accordionData = [
    {
      header: "Our Core Values",
      subTitle: "Our Value and Culture",
      description:
        "At Frontier Vista Global Inc., our core values are the driving force behind our success. They shape how we innovate, collaborate, and deliver impactful technology solutions to our clients.",
      items: [
        {
          title: "Co-Creation",
          content:
            "We believe in the power of collaboration. By working closely with our clients, we co-create innovative solutions that address their unique challenges and drive transformative growth.",
        },
        {
          title: "Innovation & Agility",
          content:
            "By embracing cutting-edge technology and staying agile, we ensure our solutions are not only scalable but also adaptable to evolving business needs, setting the stage for future-proof success.",
        },
        {
          title: "Integrity",
          content:
            "We believe in transparency, trust, and ethical business practices. Every decision we make is driven by our commitment to honest relationships and long-term partnerships.",
        },
        {
          title: "Excellence",
          content:
            "We are dedicated to delivering high-quality solutions with precision, continuously refining and optimizing for sustained business success.",
        },
        {
          title: "Customer-Centricity",
          content:
            "Our clients are at the heart of everything we do. We design innovative solutions that not only boost operational efficiency but also deliver measurable outcomes that fuel sustainable growth and competitive advantage.",
        },
      ],
      theme: {
        bg: "bg-[#D8EEFA33]",
        cardBg: "bg-[#DAEBF8]",
        color: "text-[#479DDE]",
        subHeader: "text-[#23557A]",
        btnClass: "bg-[#479DDE]",
      },
    },
    {
      header: "What Makes Us Different",
      subTitle: "What Makes Frontier Vista Global Inc. Different?",
      description:
        "At Frontier Vista Global Inc., we go beyond providing IT solutions—we build strategic partnerships that drive real business impact. Here’s what sets us apart.",
      items: [
        {
          title: "Collaborative Innovation",
          content:
            "We don’t just implement technology—we co-create solutions with you, tackling challenges head-on and ensuring measurable and scalable success.",
        },
        {
          title: "Tailored Solutions",
          content:
            "No two businesses are alike. Our custom-built strategies ensure you get secured, scalable, and future-proof technology tailored to your unique needs.",
        },
        {
          title: "Cutting-Edge Technology",
          content:
            "We consistently adopt the latest technological advancements, integrating innovations from blockchain, AI/ML, and cloud computing to keep your business ahead of the competition.",
        },
        {
          title: "Customer-Centric & Cost-Effective Solutions",
          content:
            "Your success is our priority. Every solution is designed to maximize efficiency, enhance decision-making, and optimize costs, ensuring you get the best ROI without compromising quality.",
        },
        {
          title: "Proven Expertise",
          content:
            "With a track record of success across multiple industries, our team of seasoned IT professionals ensures seamless digital transformation and long-term value.",
        },
      ],
      theme: {
        bg: "bg-[#fffbf6]",
        cardBg: "bg-[#FFEACA]",
        color: "text-[#A05600]",
        subHeader: "text-[#A05600]",
        btnClass: "bg-[#A05600]",
      },
    },
    {
      header: "How We Implement",
      subTitle: "How We Implement",
      description:
        "Our framework ensures high-quality, adaptable applications by integrating best practices, minimizing risk, and enhancing data security, scalability, and resource efficiency.",
      items: [
        {
          title: "Plan, Define & Align",
          content:
            "We don’t just implement technology, we co-create solutions with you, tackling challenges head-on and ensuring measurable and scalable success.",
        },
        {
          title: "Design, Build & Test",
          content:
            "No two businesses are alike. Our custom-built strategies ensure you get secured, scalable, and future-proof technology tailored to your unique needs.",
        },
        {
          title: "Deploy & Monitor",
          content:
            "We consistently adopt the latest technological advancements, integrating innovations from blockchain, AI/ML, and cloud computing to keep your business ahead of the competition.",
        },
      ],
      theme: {
        bg: "bg-[#fcfffc]",
        cardBg: "bg-[#C0EDD7]",
        color: "text-[#65B68E]",
        subHeader: "text-[#65B68E]",
        btnClass: "bg-[#65B68E]",
      },
    },
    {
      header: "Our Corporate Social Responsibility (CSR)",
      subTitle: "Our Corporate Social Responsibility (CSR)",
      description: "",
      items: [],
      theme: {
        bg: "#fcfffc",
        cardBg: "#C0EDD7",
        color: "#65B68E",
      },
    },
  ];

  return (
    <div>
      <div className="wrap flex min-h-[35rem] flex-col items-center justify-center text-center">
        <p className="w-[80%] text-5xl leading-[55px] font-medium text-[#000000]">
          We are <span className="text-[#479DDE]">Frontier Vista</span>, and the
          vision is to unlock new frontiers and accelerate sustainable growth.
        </p>

        <button className="mx-auto mt-18 flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
          Discover How We Drive Growth <LuMoveRight className="ml-5 text-2xl" />
        </button>
      </div>

      <div className="mb-5 w-full">
        <Image
          src="/who-we-are.png"
          alt="who-are-we"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>

      <div className="wrap my-[5rem] rounded-lg p-12">
        <div className="mb-20 flex gap-30">
          <div>
            <h4 className="text-3xl font-medium text-[#122231]">Our Vision</h4>
            <p className="mt-5 text-lg font-extralight text-[#3D4F60]">
              Driving business transformation through collaborative innovation
              and cutting-edge technology to unlock new frontiers and accelerate
              sustainable growth.
            </p>
          </div>
          <div>
            <h4 className="text-3xl font-medium text-[#122231]">Our Mission</h4>
            <p className="mt-5 text-lg font-extralight text-[#3D4F60]">
              We empower businesses by fostering collaborative innovation and
              leveraging cutting-edge technology to drive transformation,
              enhance efficiency, and achieve sustainable growth.
            </p>
          </div>
        </div>

        <button className="mx-auto mt-18 flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
          Discover Our Core Values <LuMoveRight className="ml-5 text-2xl" />
        </button>
      </div>

      <div
        className="flex w-full flex-col items-center py-34"
        style={{ backgroundImage: "url('/milestone.png')" }}
      >
        <div className="wrap mb-38 text-center">
          <h4 className="mb-10 text-4xl font-normal text-white">Our Journey</h4>
          <p className="text-md font-extralight text-[#D9D9D9]">
            Frontier Vista Global Inc. has evolved into a fast-growing
            technology company, driving sustainable growth through innovation
            and collaboration. With expertise in digital transformation, cloud
            solutions, and AI, we empower businesses across industries to
            navigate the evolving digital era and achieve lasting success.{" "}
          </p>

          <p className="text-md mt-10 font-extralight text-[#D9D9D9]">
            Driven by excellence and co-creation of cutting-edge solutions, we
            remain committed to delivering impactful solutions that unlock
            opportunities, optimize operations, and accelerate growth. Leading
            organizations to the next frontier of digital innovation.
          </p>
        </div>

        <div className="text-center">
          <h4 className="mb-1 text-4xl font-normal text-white">
            Our Milestone
          </h4>
          <p className="text-lg font-extralight text-[#D9D9D9]">
            Our journey of growth and innovation
          </p>
        </div>

        <div className="relative my-18 h-[250vh] 2xl:h-[70vh]">
          {/* Vertical Timeline Line */}
          <div className="mty-12 left-6 min-h-[80vh] w-0.5 bg-white"></div>
          <div
            className={`absolute top-0 left-[-8px] z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#479DDE]`}
          >
            <div className={`h-3 w-3 rounded-full`}></div>
          </div>

          <div
            className={`absolute top-[10rem] left-[-8px] z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#FF9314]`}
          >
            <div className={`h-3 w-3 rounded-full`}></div>
          </div>

          <div
            className={`absolute top-[20rem] left-[-8px] z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#54B862]`}
          >
            <div className={`h-3 w-3 rounded-full`}></div>
          </div>

          <div
            className={`absolute top-[33rem] left-[-8px] z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#9354B8]`}
          >
            <div className={`h-3 w-3 rounded-full`}></div>
          </div>

          <div className="absolute top-0 left-[-20rem] flex flex-col">
            <p className="mb-3 text-right text-white">NOV 2022</p>
            <div className="w-[300px] rounded-md bg-[#EFF6FF] p-6 shadow-md">
              <h3 className="font-semibold text-[#011D31]">Launch</h3>

              <p className="text-[#011D31 mt-2 font-extralight">
                Launched Frontier Vista, helping businesses optimize IT
                strategies and streamline operations to enhance efficiency and
                scalability.
              </p>
            </div>
          </div>

          <div className="absolute top-[10rem] left-8 flex flex-col">
            <p className="text- mb-3 text-white">JUN 2023</p>
            <div className="w-[300px] rounded-md bg-[#FFEAD0] p-6 shadow-md">
              <h3 className="font-semibold text-[#011D31]">
                Digital & Cloud Solutions
              </h3>

              <p className="text-[#011D31 mt-2 font-extralight">
                Expanded the Digital Solutions & Cloud Innovation Hub,
                delivering custom software development, mobile apps, and
                cloud-based web solutions that accelerate business growth and
                improve operational performance.
              </p>
            </div>
          </div>

          <div className="absolute top-[20rem] left-[-20rem] flex flex-col">
            <p className="mb-3 text-right text-white">JAN 2024</p>
            <div className="w-[300px] rounded-md bg-[#EFFFEF] p-6 shadow-md">
              <h3 className="font-semibold text-[#011D31]">
                Data analytics & AI
              </h3>

              <p className="text-[#011D31 mt-2 font-extralight">
                Achieved major success in data analytics and AI-driven insights
                (ML/AI),empowering businesses with real-time analytics,
                predictive modelling, and data-driven decision-making to
                maximize business impact.
              </p>
            </div>
          </div>

          <div className="absolute top-[33rem] left-8 flex flex-col">
            <p className="text- mb-3 text-white">JAN 2025</p>
            <div className="w-[300px] rounded-md bg-[#F7E8FF] p-6 shadow-md">
              <h3 className="font-semibold text-[#011D31]">
                Frontier AI Agent
              </h3>

              <p className="text-[#011D31 mt-2 font-extralight">
                Developed and launched the Frontier AI Agent, now leveraged by
                multiple small and medium-sized enterprises (SMEs) to automate
                workflows, enhance productivity, and drive digital
                transformation, positioning Frontier Vista as a trusted IT
                partner.
              </p>
            </div>
          </div>
        </div>

        <button className="mx-auto mt-48 flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 py-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
          Explore Our Expertise <LuMoveRight className="ml-5 text-2xl" />
        </button>
      </div>

      <div className={`${accordionData[activeAccordion].theme?.bg}`}>
        <div className="wrap min-h-[80vh] py-12">
          <div className="flex justify-between">
            {accordionData.map((item, index) => (
              <div key={item.header} onClick={() => setActiveAccordion(index)}>
                <h4
                  className={`${
                    activeAccordion === index
                      ? `${item.theme?.color}`
                      : "text-[#011D31]"
                  } flex cursor-pointer text-lg font-medium transition-all duration-300 ease-in-out`}
                >
                  {item.header}
                </h4>
              </div>
            ))}
          </div>

          <div>
            <h4
              className={`${
                accordionData[activeAccordion].theme?.subHeader
              } mt-12 text-xl font-medium`}
            >
              {accordionData[activeAccordion].subTitle}
            </h4>
            <p className="mt-3 text-[#122C3F] lg:w-[80%]">
              {accordionData[activeAccordion].description}
            </p>
          </div>

          <div className="mt-4">
            {activeAccordion === 3 ? (
              <div className="flex flex-col">
                <div>
                  <span className="!text-[#011D31]">
                    At Frontier Vista, driven by integrity and
                    customer-centricity, we leverage our tech expertise for
                    positive social change. We focus on creating sustainable
                    impact by promoting digital empowerment and fostering
                    inclusive growth for businesses and communities.
                  </span>
                </div>

                <div className="mx-auto flex w-[80%] flex-col gap-6">
                  <div className="mt-8 flex items-center justify-between rounded !bg-white p-6">
                    <h4 className="text-6xl text-[#5D0059]">20</h4>
                    <span className="w-1/3 text-xl font-light text-[#5D0059]">
                      Grants for Digital Literacy Program
                    </span>
                    <span className="w-1/4 text-[#011D31]">
                      We grant resources to EdTech to support digital skills
                      training in underserved communities.
                    </span>
                    <Image
                      src="/images/laptop.svg"
                      alt="Logo"
                      width={60}
                      height={60}
                    />
                  </div>

                  <div className="mt-8 flex items-center justify-between rounded !bg-white p-6">
                    <h4 className="text-6xl text-[#5D0059]">16</h4>
                    <span className="w-1/3 text-xl font-light text-[#5D0059]">
                      Research Grant for Health Research Program
                    </span>
                    <span className="w-1/4 text-[#011D31]">
                      We fund tech-driven research to advance medical knowledge
                      and improve healthcare across 4 institutions.
                    </span>
                    <Image
                      src="/images/brief.svg"
                      alt="Logo"
                      width={50}
                      height={50}
                    />
                  </div>

                  <div className="mt-8 flex items-center justify-between rounded !bg-white p-6">
                    <h4 className="text-6xl text-[#5D0059]">50</h4>
                    <span className="w-1/3 text-xl font-light text-[#5D0059]">
                      Women Empowerment in Tech
                    </span>
                    <span className="w-1/4 text-[#011D31]">
                      Empowering 20 women with essential tech skills through
                      scholarships, mentorship and Networking.
                    </span>
                    <Image
                      src="/images/people.svg"
                      alt="Logo"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>

                <button className="mx-auto my-18 flex h-[55px] w-fit items-center rounded-[10px] bg-[#5D0059] px-6 py-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
                  Partner With Us On CSR Intiatives{" "}
                  <LuMoveRight className="ml-5 text-2xl" />
                </button>
              </div>
            ) : (
              <Accordion
                //   data={item}
                data={accordionData[activeAccordion]}
                key={accordionData[activeAccordion].header}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

type AccordionProps = {
  data: {
    header: string;
    subTitle: string;
    description: string;
    items: {
      title: string;
      content: string;
    }[];
    theme: {
      bg?: string;
      cardBg?: string;
      color?: string;
      subHeader?: string;
      btnClass?: string;
    };
  };
};

const Accordion = ({ data }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto w-full space-y-4">
      {data.items.map((item, index: number) => (
        <div key={index} className="rounded-lg shadow-sm">
          {/* Accordion Header */}

          {activeIndex === index ? (
            <></>
          ) : (
            <button
              onClick={() => toggleAccordion(index)}
              className={`flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left text-lg font-medium text-gray-800 focus:outline-none ${data.theme.cardBg}`}
            >
              <span>{item.title}</span>
              <div
                onClick={() => toggleAccordion(index)}
                className={`h-[35px] w-[35px] ${data.theme.btnClass} flex cursor-pointer items-center justify-center rounded-full text-lg text-white`}
              >
                <FiPlus />
              </div>
            </button>
          )}

          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              activeIndex === index ? "max-h-[250px]" : "max-h-0"
            }`}
          >
            <div className="flex">
              <div className="w-1/2">
                <Image
                  src="/accordian-img.png"
                  width={1000}
                  height={1000}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className={`relative flex min-h-[250px] w-1/2 items-center ${data.theme.cardBg}`}
              >
                <div className="px-8">
                  <h4
                    className={`mb-3 text-xl font-medium ${data.theme.subHeader}`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[#122C3F]">{item.content}</p>
                </div>
                <div
                  onClick={() => toggleAccordion(index)}
                  className={`absolute top-5 right-5 h-[35px] w-[35px] ${data.theme.btnClass} flex cursor-pointer items-center justify-center rounded-full text-lg text-white`}
                >
                  <FiX />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
