"use client";
import React from "react";
import Image from "next/image";
import Button from "../_components/Button";

export default function page() {
  const whyItems = [
    {
      title: "Deep Expertise",
      description:
        "Our team comprises seasoned data scientists, analysts, and engineers with a proven track record of delivering impactful results.",
      image: "/images/opex1.svg",
      color: "#FFEAD0",
    },
    {
      title: "Tailored Solutions",
      description:
        "We understand that every business is unique. We craft customized solutions that align with your specific goals and challenges",
      image: "/images/opex2.svg",
      color: "#E9F5FF",
    },
    {
      title: "Cutting-Edge Technologies",
      description:
        "We leverage the latest advancements in data intelligence, advanced analytics, and AI/ML to deliver innovative solutions.",
      image: "/images/opex3.svg",
      color: "#E9F5FF",
    },
    {
      title: "Client-Centric Approach",
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
        "Navigate the complexities of your data landscape with our data analytics consulting. We transform your raw information into actionable strategies that drive revenue growth, streamline operations, and give you a clear edge over your competitors. We help you identify hidden opportunities and make smarter decisions faster.",
      image: "/images/DIA1.png",
      subDescription: "Want a competitive advantage?",
      color: "#454176",
      btn: "Request Your discovery session",
      link: "#",
    },
    {
      title: "Data Architecture & Engineering",
      description:
        "Lay the groundwork for effective data management and analysis with our robust data architecture and engineering services. We design and implement seamless, scalable, and secure data pipelines and architectures that allow your business to efficiently process and derive meaningful insights from your data, no matter the volume or complexity.",
      image: "/images/DIA2.png",
      subDescription: "Explore Our Architecture Solutions",
      color: "#F80F6D",
      btn: "Request Your discovery session",
      link: "#",
    },
    {
      title: "Business Intelligence (BI) Solutions",
      description:
        "Our BI solutions transform complex data into visual dashboards, providing real-time insights. Leveraging advanced reporting tools, we help businesses track key performance indicators (KPIs) and make data-driven decisions faster and more accurately.",
      image: "/images/DIA3.png",
      description2:
        "Struggling to understand your key metrics? Our tailored BI solutions deliver crystal-clear, interactive dashboards that visualize your business performance in real-time. Empower your teams to identify trends, understand profitability drivers, and make informed decisions that directly impact your bottom line.",
      subDescription: "Gain clearer business insights today",
      color: "#F80F6D",
      btn: "See a BI Demo",
      link: "#",
    },
    {
      title: "Data Strategy, Governance, & Management",
      description:
        "Establish a strong data foundation with our comprehensive data strategy, governance, and management services. We design frameworks that uphold data integrity, regulatory compliance, and improved data quality and accessibility across your organization. Build trust in your data and mitigate risks effectively.",
      image: "/images/DIA4.png",
      subDescription: "Strengthen your data governance framework",
      color: "#454176",
      btn: "Discuss Your Data Strategy",
      link: "#",
    },
  ];

  return (
    <div className="w-full">
      <div
        className="relative flex h-[700px] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/data-bg.png')" }}
      >
        <div
          className="flex h-[350px] w-full flex-col justify-center bg-[#030214] text-white"
          style={{
            background:
              "linear-gradient(358.6deg, rgba(3, 2, 20, 0.8) 10.69%, rgba(100, 0, 81, 0.8) 98.84%)",
          }}
        >
          <div className="wrap w-full">
            <h4 className="mb-6 text-4xl font-semibold">
              Data Intelligence & Advanced Analytics
            </h4>
            <p className="mb-8 font-extralight lg:w-[60%]">
              Maximize business success with data intelligence, advanced
              analytics, and AI-driven insights. Improve efficiency, ROI &
              compliance.
            </p>
            <Button text="Unlock the Power of Your Data" />
          </div>
        </div>
      </div>

      <div className="bg-[#030214] py-[10rem]">
        <div className="wrap">
          <div className="flex justify-end">
            <div className="flex w-full flex-col lg:w-1/2">
              <h4 className="text-[] mb-5 text-5xl leading-[60px] font-extralight text-white">
                Harness Data Intelligence for Smarter Decisions
              </h4>

              <p className="font-extralight text-white">
                Data is the backbone of modern businesses. With data
                intelligence and advanced analytics, organizations can transform
                raw information into actionable insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#030214]">
        <div className="wrap py-[10rem] pb-[4rem]">
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-5xl font-[500] text-white lg:w-2/3">
              Our Expertise in Data Intelligence & Analytics
            </h4>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {supportItems.map((item) => (
              <div
                key={item.title}
                className="mb-10 flex min-h-[200px] flex-col overflow-hidden rounded-lg rounded-tl-[20px] rounded-tr-[20px] border border-[#454176] bg-[#030214]"
              >
                <div
                  className="flex h-[60px] w-full items-center pl-8"
                  style={{
                    background: item.color,
                  }}
                >
                  <p className="text-xl text-white">{item.title}</p>
                </div>
                <div className="p-3">
                  <div className="w-full">
                    <Image
                      src={item.image}
                      width={1000}
                      height={1000}
                      alt=""
                      className="h-[250px] w-full"
                    />
                  </div>

                  <p className="my-3 font-extralight text-white">
                    {item.description}
                  </p>

                  {item.description2 && (
                    <p className="my-3 font-extralight text-white">
                      {item.description2}
                    </p>
                  )}

                  <p className="my-4 text-white">{item.subDescription}</p>

                  <Button text={item.btn} path="/" />
                </div>
              </div>
            ))}
          </div>

          <div
            className="relative my-18 h-[600px]"
            style={{ backgroundImage: "url('images/DIA5.png')" }}
          >
            <div className="absolute top-18 right-30 flex w-[500px] flex-col">
              <div className="h-[90px] rounded bg-[#7166E2] p-3 text-white">
                <p className="w-[350px] text-2xl">
                  Artificial Intelligence (AI) & Machine Learning (ML)
                </p>
              </div>

              <p className="my-5 text-white">
                We clarify your needs, simplify solutions to eliminate
                distractions, and implement the AI tool to help your business
                automate decision-making, predict trends, and personalize
                customer experiences. Our AI-driven models analyze patterns,
                optimize workflows, and enhance industry efficiency.
              </p>

              <Button text="Unlock AI Insight Now" path="/" />
            </div>
          </div>

          <div className="mt-[100px]">
            <div className="w-fit rounded bg-[#F80F6D] p-4 text-2xl text-white">
              How we empower your success
            </div>
          </div>

          <p className="mt-20 text-5xl font-[100] text-white lg:w-[70%]">
            At Frontier Vista we&apos;re more than just data experts. We&apos;re
            your partners in achieving data-driven success.
          </p>
        </div>
      </div>

      <div className="bg-[#030214] py-[8rem]">
        <div className="wrap flex flex-col justify-center">
          <h4 className="mb-6 text-center text-5xl font-medium text-white">
            Why businesses trust us
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

          <div className="my-20">
            <p className="w-1/2 font-[100] text-white lg:text-5xl">
              Optimize Your Business with Data Intelligence
            </p>
          </div>
        </div>
      </div>

      <div
        className="relative flex h-[1100px] flex-col justify-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/DIA6.png')" }}
      >
        <div className="flex h-[350px] w-full flex-col justify-center bg-[#030214] pt-10 pb-8 text-white">
          <div className="wrap relative lg:min-w-[1200px]">
            <div className="flex w-full items-center justify-between gap-18">
              <div className="mt-[-200px] w-[50%] rounded bg-[#030214] p-18">
                <div className="mb-5">
                  <p className="text-4xl font-[100] text-[#FFFFFF]">
                    Ready to transform your business with the power of data?
                  </p>
                </div>

                <h4 className="mb-6 text-xl font-[200] text-[#D9D9D9]">
                  Stay ahead of the competition with our data intelligence,
                  advanced analytics, and AI solutions. Discover growth
                  opportunities, improve efficiency, and maximize ROI with
                  data-driven decision-making.
                </h4>
              </div>

              <div className="w-1/2">
                <Button text="Get in Touch Today for a Free Assessment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
