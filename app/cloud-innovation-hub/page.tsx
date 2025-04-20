import React from "react";
import { LuMoveRight } from "react-icons/lu";
import Image from "next/image";

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
        className="relative flex h-[900px] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/CI-bg.png')" }}
      >
        <div className="flex h-[350px] w-full flex-col justify-center bg-[#000000C4] text-white">
          <div className="wrap">
            <h4 className="mb-6 text-4xl font-semibold">
              Cloud Innovation Hub
            </h4>
            <p className="mb-8 font-extralight lg:w-[60%]">
              Our Cloud Innovation Hub empowers businesses to leverage the full
              potential of cloud computing. From strategy to execution, we
              enable seamless cloud adoption, migration, and optimization,
              ensuring scalability, security, and cost efficiency.
            </p>
            <button className="flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
              Get in touch today <LuMoveRight className="ml-5 text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="py-[10rem]">
        <div className="wrap">
          <div className="flex w-full justify-end">
            <h4 className="w-[45%] text-5xl leading-[60px] font-extralight text-[#011D31]">
              Accelerate Digital Transformation with Cloud Excellence
            </h4>
          </div>

          <div className="mt-26">
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

                <div className="h-[230px] bg-[#D0F4FF] p-10">
                  <h5 className="mb-4 text-2xl text-[#0975A0]">
                    Cloud Adoption Strategy
                  </h5>
                  <p className="text-[#011D31]">
                    Our IT system management services ensure stability,
                    security, and compliance across all IT assets. We help
                    businesses streamline operations through system integration,
                    software updates, and automation.
                  </p>
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

                <div className="h-[230px] bg-[#D0F4FF] p-8">
                  <h5 className="mb-4 text-2xl text-[#0975A0]">
                    Cloud Migration & Modernization
                  </h5>
                  <p className="text-[#011D31]">
                    We facilitate cloud migration and modernization of legacy
                    systems, enabling organizations to enhance performance,
                    security, and agility in the cloud.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-6 flex bg-[#D0F4FF]">
              <div className="flex w-1/2 flex-col justify-center px-10">
                <h5 className="mb-4 text-2xl text-[#0975A0]">Cloud FinOps</h5>
                <p className="text-[#011D31]">
                  Optimize cloud spending with Cloud FinOps strategies that
                  provide visibility into costs, resource allocation, and
                  financial governance, ensuring cost-effective cloud
                  operations.
                </p>
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

                <div className="h-[230px] bg-[#D0F4FF] p-10">
                  <h5 className="mb-4 text-2xl text-[#0975A0]">Cloud FinOps</h5>
                  <p className="text-[#011D31]">
                    Optimize cloud spending with Cloud FinOps strategies that
                    provide visibility into costs, resource allocation, and
                    financial governance, ensuring cost-effective cloud
                    operations.
                  </p>
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

                <div className="h-[230px] bg-[#D0F4FF] p-8">
                  <h5 className="mb-4 text-2xl text-[#0975A0]">
                    Cybersecurity and Risk Management
                  </h5>
                  <p className="text-[#011D31]">
                    We implement cybersecurity best practices to safeguard cloud
                    environments against threats, ensuring data protection,
                    compliance, and risk management in the cloud.
                  </p>
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
        </div>
      </div>

      <div
        className="relative flex h-[1100px] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/CS-bg.png')" }}
      >
        <div className="flex h-[300px] w-full flex-col justify-center bg-[#D0F4FF] pb-8 text-white">
          <div className="wrap relative lg:min-w-[1200px]">
            <div className="flex w-full items-center justify-between">
              <div className="w-[50%]">
                <h4 className="mb-6 text-4xl font-semibold text-[#011D31]">
                  Drive Cloud Innovation Today
                </h4>
                <p className="text-[#011D31]">
                  Transform your business with our Cloud Innovation Hub. From
                  cloud adoption to risk management, we help you build a secure,
                  scalable, and cost-effective cloud environment.
                </p>
              </div>
              <button className="flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
                Get in touch today <LuMoveRight className="ml-5 text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
