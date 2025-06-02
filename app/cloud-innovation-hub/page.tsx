"use client";
import React from "react";
import { LuMoveRight } from "react-icons/lu";
import Image from "next/image";
import Button from "../_components/Button";
import Link from "next/link";

export default function page() {
  const supportItems = [
    {
      title: "Advisory",
      description:
        "Provide expert strategic guidance to help businesses navigate complex challenges and drive digital transformation",
      image: "/advisory.svg",
      color: "#F9FCFF",
    },
    {
      title: "IT Managed Services",
      description:
        "Proactive IT management, security, and optimization to enhance performance, scalability, and reduce downtime",
      image: "/it-service.svg",
      color: "#FFEAD0",
    },
    {
      title: "Delivery",
      description:
        "Seamless IT solution delivery with ensuring timely deployment, efficiency, and business impact.",
      image: "/delivery.svg",
      color: "#EFFFEF",
    },
    {
      title: "Consulting",
      description:
        "Transform ideas into reality with hands-on IT consulting, solution design, and seamless implementation",
      image: "/consulting.svg",
      color: "#F1D9FF",
    },
  ];

  return (
    <div className="w-full">
      <div
        className="relative flex h-[700px] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/CLO-bg.png')" }}
      >
        <div className="flex h-[350px] w-full flex-col justify-center bg-[#000000C4] text-white">
          <div className="wrap">
            <h4 className="mb-6 text-4xl font-semibold">
              Cloud Innovation Hub
            </h4>
            <p className="mb-8 font-extralight lg:w-[60%]">
              Unlock scalability, security, and cost savings with the cloud.
              Frontier Vista provides the expertise you need for a successful
              cloud transformation. Start your journey to a more efficient
              cloud.
            </p>
            <Button text="Schedule a Consultation Now"  path="/lets-connect#contact" />
          </div>
        </div>
      </div>

      <div className="py-[10rem]">
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
            <Link href="/lets-connect#contact">
            <button className="flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] cursor-pointer focus:outline-none">
              Request a Free Cloud Strategy Assessment Today{" "}
              <LuMoveRight className="ml-5 text-2xl" />
            </button>
            </Link>
            
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
                  <Link href="/lets-connect#contact">
                  <button className="mt-5 flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] cursor-pointer focus:outline-none">
                    Schedule a Discovery Session{" "}
                    <LuMoveRight className="ml-5 text-2xl" />
                  </button>
                  </Link>
                  
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

            <div className="my-6 flex bg-[#D0F4FF]">
              <div className="flex w-1/2 flex-col justify-center px-10">
                <h5 className="mb-4 text-2xl text-[#0975A0]">
                  Cloud Infrastructure Design & Automation
                </h5>
                <p className="text-[#011D31]">
                  Our experts develop robust cloud infrastructures, integrating
                  automation tools to streamline deployment, management, and
                  scaling of cloud-based applications and services.
                </p>
                <button className="mt-5 flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
                  Create a Scalable Infrastructure{" "}
                  <LuMoveRight className="ml-5 text-2xl" />
                </button>
              </div>
              <div className="h-[380px] w-1/2">
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
        <div className="wrap flex flex-col justify-center">
          <h4 className="mb-6 text-center text-5xl font-medium text-white">
            Why Choose Us for Cloud Innovation?
          </h4>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {supportItems.map((item, index) => (
              <div
                key={index}
                className="flex w-full items-center justify-center gap-6 rounded-lg bg-[#DCEAFD] p-6 text-center"
              >
                <div
                  className="mb-6 h-[60px] w-[70px] rounded p-4"
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
                  <h5 className="mb-4 text-2xl font-medium text-[#011D31]">
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
            <Button text="Contact Our Cloud Experts for a Consultation" path="/lets-connect#contact"/>
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
        <div className="flex h-[300px] w-full flex-col justify-center bg-[#D0F4FF] pb-8 text-white">
          <div className="wrap relative lg:min-w-[1200px]">
            <div className="flex w-full items-center justify-between">
              <div className="w-[50%]">
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
              <Button text="Start Your Cloud Innovation Journey Now"  path="/lets-connect#contact"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
