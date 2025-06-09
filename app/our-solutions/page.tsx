"use client";

import React from "react";
import Image from "next/image";
import Button from "../_components/Button";

export default function page() {
  return (
    <div className="w-full">
      <div
        className="relative flex min-h-[700px] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/SOL1.png')" }}
      >
        <div className="flex min-h-[200px] w-full flex-col justify-center bg-[#190F54CC] py-10 text-white md:py-[3rem]">
          <div className="wrap px-4 md:px-10">
            <h4 className="mb-2 text-2xl font-semibold md:text-4xl">
              Our Solutions
            </h4>
            <p className="mb-3 md:text-2xl md:font-[100]">
              Drive growth with Intelligent Technology
            </p>
            <p className="mb-8 font-extralight lg:w-[60%]">
              Unlock immediate value and accelerate ROI. Our cutting-edge
              plug-and-play solutions are engineered to meet your specific
              requirements and drive rapid growth and efficiency. Ready to
              explore
            </p>
            <div className="my-5">
              <Button text="Discover Our Solutions Now" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-[6rem] md:py-[10rem]">
        <div className="wrap">
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-center lg:w-1/2">
              <h4 className="mb-5 text-center text-4xl font-normal">
                Powering Data-Driven Decisions, Intelligent Interactions, and
                Enhanced Retail Experiences
              </h4>

              <p className="my-4 font-[300] text-[#3D4F60]">
                Unlock data insights, enhance customer engagement with chat
                agents, and drive sales with our retail and marketing solutions.
              </p>

              <Button text="Request a Demo Now" path="/lets-connect#contact" />
            </div>
          </div>
        </div>
      </div>

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
        <div className="absolute top-[30%] left-0 hidden lg:block">
          <Image
            src={"/images/line-bg2.png"}
            height={1000}
            width={1000}
            alt=""
            className="lg:w-[15rem]"
          />
        </div>

        <div className="wrap mb-20 flex flex-col px-4">
          <h4 className="text-3xl font-medium">Data Analytics & Management</h4>
          <p className="my-2 text-xl font-[400]">
            Unlock Actionable Insights with Our Data Analytics & Management
            Suite
          </p>
          <p className="font-[100]">
            Transform your raw data into strategic assets with our comprehensive
            data analytics and data management solutions
          </p>

          <div className="mt-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <Image
                  src={"/images/SOL2.png"}
                  width={1000}
                  height={100}
                  alt=""
                  className="h-[200px] w-full object-cover"
                />

                <div className="bg-[#E8E6FF] p-8">
                  <h5 className="mb-4 text-xl">
                    Data Reporting and Dashboards
                  </h5>
                  <p className="mb-10 font-[200]">
                    Gain clear visibility into your key metrics with intuitive
                    data reporting and dynamic dashboards. Understand trends,
                    track performance, and make informed decisions. Get
                    interactive reports customized for your business needs.
                  </p>

                  <Button
                    text="Request a BI Demo"
                    path="/lets-connect#contact"
                  />
                </div>
              </div>

              <div>
                <Image
                  src={"/images/SOL3.png"}
                  width={1000}
                  height={1000}
                  alt=""
                  className="w-full object-cover md:h-[200px]"
                />

                <div className="bg-[#E8E6FF] p-8">
                  <h5 className="mb-4 text-xl">Data Governance Solutions</h5>
                  <p className="mb-10 font-[200]">
                    Ensure the integrity, security, and compliance of your data
                    with our robust data governance solutions in any industry.
                    We help you establish frameworks, manage data quality, and
                    adhere to regulations like GDPR and HIPAA. protecting your
                    business and building trust.
                  </p>

                  <Button
                    text="Let's make your business compliant"
                    path="/lets-connect#contact"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Image
                src={"/images/SOL4.png"}
                width={1000}
                height={1000}
                alt=""
                className="h-48 w-full object-cover md:h-[200px]"
              />

              <div className="bg-[#E8E6FF] p-8">
                <h5 className="mb-4 text-xl">Real-Time Data Analytics</h5>
                <p className="mb-10 font-[200]">
                  Need fast, actionable insights? Our real-time data analytics
                  platform processes big data instantly, detecting trends,
                  optimizing operations, and driving smarter decisions. Stay
                  ahead with AI-powered analytics.
                </p>

                <Button
                  text="Start Real-Time Analysis Today"
                  path="/lets-connect#contact"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="wrap mb-20 flex flex-col px-4 lg:px-0">
          <h4 className="text-2xl font-medium md:text-3xl">
            Intelligent Chat Agent Solutions
          </h4>
          <p className="my-2 text-lg font-[400] md:text-xl">
            Enhance Customer Engagement with Intelligent Chat Agents
          </p>

          <div className="mt-5">
            <div className="mt-5">
              <Image
                src={"/images/SOL8.png"}
                width={1000}
                height={100}
                alt=""
                className="h-[200px] w-full object-cover"
              />

              <div className="bg-[#E8E6FF] p-8">
                <h5 className="mb-4 text-lg font-semibold md:text-xl">
                  Chat Agents{" "}
                </h5>
                <p className="mb-3 text-sm font-[200] lg:mb-10">
                  Revolutionize your customer interactions with Frontier Vista
                  Global&apos;s AI-powered chat agents. Automate support,
                  deliver instant and personalized responses across multiple
                  channels, reduce costs, and improve customer satisfaction with
                  our intelligent virtual assistants. Provide 24/7 support and
                  enhance customer engagement with seamless conversational AI.
                </p>

                <Button
                  text="Explore our Chat Agents Solution"
                  path="/lets-connect#contact"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="wrap mb-20 flex flex-col px-4 lg:px-0">
          <h4 className="text-2xl font-medium md:text-3xl">
            Retail Solutions & Marketing Solutions
          </h4>
          <p className="my-2 text-lg font-[400] md:text-xl">
            Transform Your Retail and Marketing Strategies
          </p>
          <p className="font-[100]">
            Drive sales, enhance customer loyalty, and personalize your
            marketing efforts with Frontier Vista Global&apos;s innovative
            retail solutions and marketing solutions.
          </p>

          <div className="mt-5 space-y-8">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <Image
                  src={"/images/SOL6.png"}
                  width={1000}
                  height={100}
                  alt=""
                  className="h-48 w-full md:h-[200px]"
                />

                <div className="bg-[#E8E6FF] p-6 md:p-8">
                  <h5 className="mb-4 text-lg md:text-xl">
                    Retail APIs (Wallet API, Bill Pay API)
                  </h5>
                  <p className="mb-8 font-[200] md:mb-10">
                    Integrate secure payment solutions effortlessly. Our retail
                    APIs power digital wallets, bill payments, and seamless fund
                    transfers, enabling frictionless transactions for retailers
                    and fintech businesses.
                  </p>

                  <Button
                    text="Integrate our Retail API"
                    path="/lets-connect#contact"
                  />
                </div>
              </div>

              <div>
                <Image
                  src={"/images/SOL7.png"}
                  width={1000}
                  height={100}
                  alt=""
                  className="h-[200px] w-full"
                />

                <div className="bg-[#E8E6FF] p-6 md:p-8">
                  <h5 className="mb-4 text-lg md:text-xl">
                    Digital Loyalty & Rewards Platform
                  </h5>
                  <p className="mb-8 font-[200] md:mb-10">
                    Boost customer retention with our Digital Loyalty & Rewards
                    Platform. Create custom rewards programs, track customer
                    engagement, and increase brand loyalty with personalized
                    incentives across all channels.
                  </p>

                  <Button text="Launch Your Rewards Program Today" />
                </div>
              </div>
            </div>
            <div className="mt-5 md:mt-8">
              <Image
                src={"/images/SOL5.png"}
                width={1000}
                height={100}
                alt=""
                className="h-48 w-full object-cover md:h-[200px]"
              />

              <div className="bg-[#E8E6FF] p-6 md:p-8">
                <h5 className="text-lg md:text-xl">
                  Retail AI Solutions for Marketing
                </h5>
                <p className="mb-10 font-[200]">
                  Struggling to reach the right customers? Our retail AI
                  solutions use machine learning and predictive analytics to
                  personalize marketing campaigns, optimize pricing, and drive
                  higher conversions for your brand.
                </p>

                <Button text="Boost Sales with AI-Driven Marketing" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative flex min-h-[1100px] flex-col justify-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/SOL9.png')" }}
      >
        <div className="flex min-h-[300px] w-full flex-col justify-center bg-[#E8E6FF] px-4 pt-10 pb-8 text-white md:px-20">
          <div className="mx-auto max-w-7xl">
            {/* wrap relative lg:min-w-[1200px] */}
            <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="lg:w-[40%]">
                <h4 className="text-lg font-normal text-[#011D31] md:text-2xl">
                  We offer a powerful suite of solutions, all designed to drive
                  efficiency, enhance customer engagement, and fuel growth.
                  However, our expertise doesn&apos;t end there.{" "}
                </h4>
              </div>

              <div className="lg:w-[50%]">
                <p className="font-[300] text-[#011D31] md:text-xl">
                  Don&apos;t see exactly what you&apos;re looking for?
                  Let&apos;s discuss your unique requirements and build the
                  perfect solution together.
                </p>

                <Button
                  text="Schedule a Free Custom Solution Consultation Today"
                  path="/lets-connect"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
