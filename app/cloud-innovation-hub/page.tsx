"use client";
import React from "react";
import { LuMoveRight } from "react-icons/lu";
import Image from "next/image";
import Button from "../_components/Button";

export default function page() {
  const supportItems = [
    {
      title: "End-to-End Cloud Solutions",
      description:
        "From initial strategy to seamless execution, we provide comprehensive guidance throughout your cloud transformation.",
      image: "/images/EECS-CLD1.svg",
      color: "#FFEAD0",
    },
    {
      title: "Optimized Cost & Performance",
      description:
        "Our Cloud FinOps expertise ensures cost efficiency while maximizing the performance of your cloud solutions.",
      image: "/images/OCP-CLD2.svg",
      color: "#E9F5FF",
    },
    {
      title: "Robust Security & Compliance",
      description:
        "We implement robust cybersecurity frameworks to protect your valuable cloud environments & ensure regulatory compliance.",
      image: "/images/RSC-CLD3.svg",
      color: "#E9F5FF",
    },
    {
      title: "Innovative & Scalable Solutions",
      description:
        "Our cloud services are designed for agility and provide the scalable cloud infrastructure you need for future growth.",
      image: "/images/ISS-CLD4.svg",
      color: "#FFEAD0",
    },
  ];

  return (
    <div className="w-full">
      <div
        className="relative flex h-[700px] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/CLO-bg.png')" }}
      >
        <div className="flex w-full flex-col justify-center bg-[#000000C4] px-5 py-10 text-white md:min-h-[350px]">
          <div className="wrap">
            <h4 className="mb-6 text-2xl font-semibold md:text-4xl">
              Cloud Innovation Hub
            </h4>
            <p className="mb-8 font-extralight lg:w-[60%]">
              Unlock scalability, security, and cost savings with the cloud.
              Frontier Vista provides the expertise you need for a successful
              cloud transformation. Start your journey to a more efficient
              cloud.
            </p>
            <Button
              text="Schedule a Consultation Now"
              path="/lets-connect#contact"
            />
          </div>
        </div>
      </div>

      <div className="px-5 py-[5rem] md:px-0 md:py-[10rem]">
        <div className="wrap">
          <div className="flex w-full flex-col">
            <h4 className="mb-5 text-5xl leading-[60px] font-extralight text-[#011D31] lg:w-[70%]">
              Accelerate Digital Transformation with Cloud Excellence
            </h4>
            <p className="mb-10 text-[#011D31]">
              Our expert team guides you through every stage of your cloud
              journey, tailoring solutions to your unique business needs. Ready
              to unlock the power of the cloud for your business?
            </p>

            <Button
              text=" Request a Free Cloud Strategy Assessment Today"
              path="/lets-connect#contact"
            />
          </div>

          <div className="mt-36">
            <h4 className="text-center text-5xl">Our Cloud Services</h4>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-lg">
                <div className="h-[380px]">
                  <Image
                    src="/images/CS1.png"
                    width={1000}
                    height={1000}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex min-h-[300px] flex-col justify-center bg-[#D0F4FF] p-8">
                  <h5 className="mb-4 text-2xl text-[#0975A0]">
                    Cloud Adoption Strategy
                  </h5>
                  <p className="text-[#011D31]">
                    Our IT system management services ensure stability,
                    security, and compliance across all IT assets. We help
                    businesses streamline operations through system integration,
                    software updates, and automation.
                  </p>

                  <Button
                    text="Schedule a Discovery Session"
                    path="/lets-connect#contact"
                  />
                </div>
              </div>

              <div className="overflow-hidden rounded-lg">
                <div className="h-[380px]">
                  <Image
                    src="/images/CS2.png"
                    width={1000}
                    height={1000}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex min-h-[300px] flex-col justify-center bg-[#D0F4FF] p-8">
                  <h5 className="mb-4 text-2xl text-[#0975A0]">
                    Cloud Migration & Modernization
                  </h5>
                  <p className="text-[#011D31]">
                    We facilitate cloud migration and modernization of legacy
                    systems, enabling organizations to enhance performance,
                    security, and agility in the cloud.
                  </p>
                  <button className="mt-5 flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
                    Schedule a Discovery Session{" "}
                    <LuMoveRight className="ml-5 text-2xl" />
                  </button>
                </div>
              </div>
            </div>

            <div className="my-6 flex flex-col gap-10 bg-[#D0F4FF] md:flex-row md:gap-0">
              <div className="order-2 flex flex-col justify-center px-8 md:order-1 md:w-1/2">
                <h5 className="mb-4 text-2xl text-[#0975A0]">
                  Cloud Infrastructure Design & Automation
                </h5>
                <p className="text-[#011D31]">
                  Our experts develop robust cloud infrastructures, integrating
                  automation tools to streamline deployment, management, and
                  scaling of cloud-based applications and services.
                </p>
                <button className="my-5 flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
                  Create a Scalable Infrastructure{" "}
                  <LuMoveRight className="ml-5 text-2xl" />
                </button>
              </div>
              <div className="order-1 h-[380px] md:order-2 md:w-1/2">
                <Image
                  src="/images/CS5.png"
                  width={1000}
                  height={1000}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-lg">
                <div className="h-[380px]">
                  <Image
                    src="/images/CS3.png"
                    width={1000}
                    height={1000}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex min-h-[300px] flex-col justify-center bg-[#D0F4FF] p-8">
                  <h5 className="mb-4 text-2xl text-[#0975A0]">Cloud FinOps</h5>
                  <p className="text-[#011D31]">
                    Optimize your cloud spending and maximize ROI with our Cloud
                    FinOps expertise. We provide visibility into your cloud
                    costs, resource allocation, and financial governance,
                    ensuring cost-effective and efficient cloud operations.
                  </p>
                  <button className="mt-5 flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
                    Lets Save You Money{" "}
                    <LuMoveRight className="ml-5 text-2xl" />
                  </button>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg">
                <div className="h-[380px]">
                  <Image
                    src="/images/CS4.png"
                    width={1000}
                    height={1000}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex min-h-[300px] flex-col justify-center bg-[#D0F4FF] p-8">
                  <h5 className="mb-4 text-2xl text-[#0975A0]">
                    Cybersecurity and Risk Management
                  </h5>
                  <p className="text-[#011D31]">
                    Protect your valuable data and ensure compliance in the
                    cloud with our robust cybersecurity and risk management
                    strategies. We implement industry best practices to
                    safeguard your cloud environments against evolving threats.
                  </p>
                  <button className="mt-5 flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
                    Strengthen Your Cloud Security Today{" "}
                    <LuMoveRight className="ml-5 text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#011D31] py-[8rem]">
        <div className="wrap flex flex-col justify-center px-5 md:px-0">
          <h4 className="mb-6 text-center text-5xl font-medium text-white">
            Why Choose Us for Cloud Innovation?
          </h4>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {supportItems.map((item, index) => (
              <div
                key={index}
                className="flex w-full items-center justify-center gap-6 rounded-lg bg-[#DCEAFD] p-6 text-center"
              >
                <div
                  className="mb-6 hidden h-[60px] w-[70px] rounded p-4 md:flex"
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
                  <h5 className="mb-4 text-lg font-medium text-[#011D31] md:text-2xl">
                    {item.title}
                  </h5>
                  <p className="text-[#011D31]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 flex flex-col items-center justify-center gap-4">
            <p className="text-center text-4xl text-white lg:w-1/2">
              Ready to experience the Frontier Vista difference in the cloud?
            </p>
            <Button
              text="Contact Our Cloud Experts for a Consultation"
              path="/lets-connect#contact"
            />
          </div>
        </div>
      </div>

      <div
        className="relative flex h-[1100px] flex-col justify-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/CS-bg.png')" }}
      >
        <div className="mb-22 w-full">
          <div className="wrap">
            <p className="text-6xl font-[100] text-white lg:w-2/3">
              Ready to experience the Frontier Vista difference in the cloud?
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col justify-center bg-[#D0F4FF] pb-8 text-white md:min-h-[300px]">
          <div className="wrap relative lg:min-w-[1200px]">
            <div className="flex w-full flex-col items-center justify-between md:flex-row">
              <div className="px-5 py-5 md:w-[50%] md:px-0">
                <h4 className="mb-6 text-4xl font-normal text-[#011D31]">
                  Drive Cloud Innovation Today
                </h4>
                <p className="text-[#011D31]">
                  Transform your business with the Frontier Vista Cloud
                  Innovation Hub. From strategic cloud adoption to proactive
                  risk management, we help you build a secure, scalable, and
                  cost-effective cloud environment that accelerates your digital
                  transformation.
                </p>
              </div>
              <Button
                text="Start Your Cloud Innovation Journey Now"
                path="/lets-connect#contact"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
