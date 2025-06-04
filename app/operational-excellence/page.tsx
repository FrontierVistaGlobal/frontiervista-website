"use client";
import React from "react";
import Image from "next/image";
import Button from "../_components/Button";

export default function page() {
  const supportItems = [
    {
      title: "Proactive Reliability",
      description:
        "We ensure your IT runs flawlessly, anticipating issues before they disrupt your core business.",
      image: "/images/opex1.svg",
      color: "#FFEAD0",
    },
    {
      title: "Tailored Optimization",
      description:
        "Our expert services are customized to streamline your specific IT infrastructure and workflows for peak performance.",
      image: "/images/opex2.svg",
      color: "#E9F5FF",
    },
    {
      title: "Comprehensive Support",
      description:
        "From proactive management to rapid recovery, we provide end-to-end solutions for a resilient IT environment.",
      image: "/images/opex3.svg",
      color: "#E9F5FF",
    },
    {
      title: "Focused Expertise",
      description:
        "Our dedicated team brings deep knowledge across all facets of IT operations, allowing you to concentrate on strategic growth.",
      image: "/images/opex4.svg",
      color: "#FFEAD0",
    },
  ];

  return (
    <div className="w-full">
      <div
        className="relative flex h-[700px] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/op-excel.png')" }}
      >
        <div className="flex h-[350px] w-full flex-col justify-center bg-[#012724BF] text-white">
          <div className="wrap">
            <h4 className="mb-6 text-4xl font-semibold">
              Operational Excellence
            </h4>
            <p className="mb-8 font-extralight lg:w-[60%]">
              Eliminate costly downtime and maximize the efficiency of your IT
              investments with our dedicated operational excellence services.
              Build a Resilient IT Environment
            </p>
            <Button text="Get Started Now" />
          </div>
        </div>
      </div>

      <div className="py-[10rem]">
        <div className="wrap">
          <div className="flex justify-end">
            <div className="flex w-full flex-col lg:w-1/2">
              <h4 className="mb-5 text-5xl leading-[60px] font-extralight text-[#16A99D]">
                Optimize IT Performance & Business Continuity{" "}
              </h4>
              <p className="mb-6 text-[#011D31]">
                We provide proactive support and trusted expertise to ensure the
                reliability of your critical systems, keeping them running
                without interruption, optimizing performance, and freeing up
                your internal resources to focus on innovation and core business
                activities. Explore our specialized services below to see how we
                ensure seamless operations for our clients.
              </p>
              <Button
                text="Request a Free Cloud Strategy Assessment Today"
                path="/lets-connect#contact"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative flex h-[700px] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/op-excel-2.png')" }}
      ></div>

      <div className="relative flex flex-col gap-18 py-[8rem]">
        <div className="absolute top-0 right-0 hidden lg:block">
          <Image
            src={"/images/line-bg1.png"}
            height={1000}
            width={1000}
            alt=""
            className="lg:w-[20rem]"
          />
        </div>

        <div className="absolute top-[20%] left-0 hidden lg:block">
          <Image
            src={"/images/line-bg2.png"}
            height={1000}
            width={1000}
            alt=""
            className="lg:w-[20rem]"
          />
        </div>
        <div className="wrap">
          <div className="flex w-full gap-4 lg:w-1/2">
            <p className="text-8xl text-[#479DDE33]"> 01</p>
            <div className="flex flex-col">
              <h4 className="mb-3 text-3xl font-extralight text-[#16A99D]">
                IT Support and Managed Services
              </h4>
              <p className="mb-3 text-[#011D31]">
                Eliminate IT headaches with our proactive monitoring, rapid
                troubleshooting, and comprehensive 24/7 technical assistance. We
                ensure your IT ecosystem runs smoothly with timely system
                updates and consistent maintenance, maximizing uptime and
                minimizing disruptions to your productivity.
              </p>
              <Button text="Talk to our Experts" path="/who-we-are?active=1#accordion"/>
            </div>
          </div>
        </div>

        <div className="wrap flex justify-end">
          <div className="flex w-full gap-4 lg:w-1/2">
            <p className="text-8xl text-[#479DDE33]"> 02</p>
            <div className="flex flex-col">
              <h4 className="text-3xl font-extralight text-[#16A99D]">
                Network and System Administration
              </h4>
              <p className="my-3 text-[#011D31]">
                Secure and optimize your critical IT infrastructure with our
                expert network and system administration. We offer comprehensive
                monitoring, robust security measures, and efficient maintenance
                to ensure a stable and high-performing environment that supports
                your business continuity and growth.
              </p>
              <Button text="Explore Our Network Solution" />
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="flex w-full gap-4 lg:w-1/2">
            <p className="text-8xl text-[#479DDE33]"> 03</p>
            <div className="flex flex-col">
              <h4 className="text-3xl font-extralight text-[#16A99D]">
                IT System Management
              </h4>
              <p className="my-3 text-[#011D31]">
                Achieve stability, security, and seamless compliance across all
                your IT assets. Our IT system management services streamline
                your operations through efficient system integration, timely
                software updates, and strategic automation, reducing manual
                effort and enhancing overall efficiency.
              </p>
              <Button text="Discover Our IT Management Expertise" />
            </div>
          </div>
        </div>

        <div className="wrap flex justify-end">
          <div className="flex w-full gap-4 lg:w-1/2">
            <p className="text-8xl text-[#479DDE33]"> 04</p>
            <div className="flex flex-col">
              <h4 className="text-3xl font-extralight text-[#16A99D]">
                Performance Monitoring and Optimization
              </h4>
              <p className="my-3 text-[#011D31]">
                Gain peak IT performance with our real-time monitoring solutions
                that proactively track system health, detect performance
                bottlenecks before they impact your business, and optimize
                resource utilization. Our approach guarantees improved uptime,
                enhanced efficiency, and a superior user experience.
              </p>
              <Button text="Optimize your IT performance now" />
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="flex w-full gap-4 lg:w-1/2">
            <p className="text-8xl text-[#479DDE33]"> 05</p>
            <div className="flex flex-col">
              <h4 className="text-3xl font-extralight text-[#16A99D]">
                Process and Workflow Automation
              </h4>
              <p className="my-3 text-[#011D31]">
                Boost your productivity and eliminate manual delays by
                automating repetitive tasks and streamlining your business
                processes. We collaborate with you to identify areas for
                improvement and implement intelligent solutions by leveraging
                tools like AI and machine learning. We specialize in platforms
                such as RPA (Robotic Process Automation) and specific workflow
                automation tools to significantly enhance your operational
                efficiency.
              </p>
              <Button text="Increase Efficiency - Talk to Our Experts" />
            </div>
          </div>
        </div>

        <div className="wrap flex justify-end">
          <div className="flex w-full gap-4 lg:w-1/2">
            <p className="text-8xl text-[#479DDE33]"> 06</p>
            <div className="flex flex-col">
              <h4 className="text-3xl font-extralight text-[#16A99D]">
                Disaster Recovery Planning
              </h4>
              <p className="my-3 text-[#011D31]">
                Ensure business continuity and minimize downtime with our robust
                disaster recovery solutions. We develop robust backup
                strategies, implement swift failover mechanisms, and ensure
                rapid data recovery in case of system failures or cyber
                incidents, protecting your critical data and operations
              </p>
              <Button text="Secure Your Business Continuity with a DR Plan" />
            </div>
          </div>
        </div>

        <div className="wrap mt-10 w-full">
          <p className="text-5xl font-[100] text-[#16A99D] lg:w-2/3">
            Optimize with Confidence - Your Partner for Seamless IT.
          </p>
        </div>
      </div>

      <div className="bg-[#011D31] py-[8rem]">
        <div className="wrap flex flex-col justify-center">
          <h4 className="mx-auto mb-6 text-center text-5xl font-medium text-white lg:w-1/2">
            Why Choose Us for Operational Excellence?
          </h4>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {supportItems.map((item, index) => (
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
        </div>
      </div>

      <div
        className="relative flex h-[1100px] flex-col justify-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/opex5.png')" }}
      >
        <div className="flex h-[350px] w-full flex-col justify-center bg-[#D0F4FF] pt-10 pb-8 text-white">
          <div className="wrap relative lg:min-w-[1200px]">
            <div className="flex w-full items-center justify-between gap-10">
              <div className="w-[40%]">
                <h4 className="mb-6 text-4xl font-normal text-[#011D31]">
                  Achieve Uninterrupted Operations and a Resilient IT
                  Environment{" "}
                </h4>
              </div>

              <div className="w-1/2">
                <p className="text-[#011D31]">
                  Transform your business with the Frontier Vista Cloud
                  Innovation Hub. From strategic cloud adoption to proactive
                  risk management, we help you build a secure, scalable, and
                  cost-effective cloud environment that accelerates your digital
                  transformation.
                </p>

                <p className="my-6 font-medium text-[#011D31]">
                  Discover How We Can Optimize Your IT
                </p>
                <Button text="Schedule a Call" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
