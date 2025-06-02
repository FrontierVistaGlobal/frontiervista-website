"use client";

import React from "react";
import Image from "next/image";
import Button from "../_components/Button";

export default function page() {
  return (
    <div className="w-full">
      <div
        className="relative flex h-[900px] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/SOL1.png')" }}
      >
        <div className="flex h-[350px] w-full flex-col justify-center bg-[#190F54CC] text-white">
          <div className="wrap">
            <h4 className="mb-2 text-4xl font-semibold">Our Solutions</h4>
            <p className="mb-3 text-2xl font-[100]">
              Drive growth with Intelligent Technology
            </p>
            <p className="mb-8 font-extralight lg:w-[60%]">
              Unlock immediate value and accelerate ROI. Our cutting-edge
              plug-and-play solutions are engineered to meet your specific
              requirements and drive rapid growth and efficiency. Ready to
              explore
            </p>
            <Button text="Discover Our Solutions Now" />
          </div>
        </div>
      </div>

      <div className="py-[10rem]">
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

              <Button text="Request a Demo Now"  path="/lets-connect#contact"/>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap mb-20 flex flex-col">
        <h4 className="text-3xl font-medium">Data Analytics & Management</h4>
        <p className="my-2 text-xl font-[400]">
          Unlock Actionable Insights with Our Data Analytics & Management Suite
        </p>
        <p className="font-[100]">
          Transform your raw data into strategic assets with our comprehensive
          data analytics and data management solutions
        </p>

        <div className="mt-5">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <Image
                src={"/images/SOL2.png"}
                width={1000}
                height={100}
                alt=""
                className="h-[200px] w-full"
              />

              <div className="bg-[#E8E6FF] p-8">
                <h5 className="mb-4 text-xl">Data Reporting and Dashboards</h5>
                <p className="mb-10 font-[200]">
                  Gain clear visibility into your key metrics with intuitive
                  data reporting and dynamic dashboards. Understand trends,
                  track performance, and make informed decisions. Get
                  interactive reports customized for your business needs.
                </p>

                <Button text="Request a BI Demo"  path="/lets-connect#contact"/>
              </div>
            </div>

            <div>
              <Image
                src={"/images/SOL3.png"}
                width={1000}
                height={100}
                alt=""
                className="h-[200px] w-full"
              />

              <div className="bg-[#E8E6FF] p-8">
                <h5 className="mb-4 text-xl">Data Governance Solutions</h5>
                <p className="mb-10 font-[200]">
                  Ensure the integrity, security, and compliance of your data
                  with our robust data governance solutions in any industry. We
                  help you establish frameworks, manage data quality, and adhere
                  to regulations like GDPR and HIPAA. protecting your business
                  and building trust.
                </p>

                <Button text="Let's make your business compliant"  path="/lets-connect#contact"/>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Image
              src={"/images/SOL4.png"}
              width={1000}
              height={100}
              alt=""
              className="h-[200px] w-full"
            />

            <div className="bg-[#E8E6FF] p-8">
              <h5 className="mb-4 text-xl">Real-Time Data Analytics</h5>
              <p className="mb-10 font-[200]">
                Need fast, actionable insights? Our real-time data analytics
                platform processes big data instantly, detecting trends,
                optimizing operations, and driving smarter decisions. Stay ahead
                with AI-powered analytics.
              </p>

              <Button text="Start Real-Time Analysis Today"  path="/lets-connect#contact"/>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap mb-20 flex flex-col">
        <h4 className="text-3xl font-medium">
          Intelligent Chat Agent Solutions
        </h4>
        <p className="my-2 text-xl font-[400]">
          Enhance Customer Engagement with Intelligent Chat Agents
        </p>

        <div className="mt-5">
          <div className="mt-5">
            <Image
              src={"/images/SOL8.png"}
              width={1000}
              height={100}
              alt=""
              className="h-[200px] w-full"
            />

            <div className="bg-[#E8E6FF] p-8">
              <h5 className="mb-4 text-xl">Chat Agents </h5>
              <p className="mb-10 font-[200]">
                Revolutionize your customer interactions with Frontier Vista
                Global&apos;s AI-powered chat agents. Automate support, deliver
                instant and personalized responses across multiple channels,
                reduce costs, and improve customer satisfaction with our
                intelligent virtual assistants. Provide 24/7 support and enhance
                customer engagement with seamless conversational AI.
              </p>

              <Button text="Explore our Chat Agents Solution"  path="/lets-connect#contact"/>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap mb-20 flex flex-col">
        <h4 className="text-3xl font-medium">
          Retail Solutions & Marketing Solutions
        </h4>
        <p className="my-2 text-xl font-[400]">
          Transform Your Retail and Marketing Strategies
        </p>
        <p className="font-[100]">
          Drive sales, enhance customer loyalty, and personalize your marketing
          efforts with Frontier Vista Global&apos;s innovative retail solutions
          and marketing solutions.
        </p>

        <div className="mt-5">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <Image
                src={"/images/SOL6.png"}
                width={1000}
                height={100}
                alt=""
                className="h-[200px] w-full"
              />

              <div className="bg-[#E8E6FF] p-8">
                <h5 className="mb-4 text-xl">
                  Retail APIs (Wallet API, Bill Pay API)
                </h5>
                <p className="mb-10 font-[200]">
                  Integrate secure payment solutions effortlessly. Our retail
                  APIs power digital wallets, bill payments, and seamless fund
                  transfers, enabling frictionless transactions for retailers
                  and fintech businesses.
                </p>

                <Button text="Integrate our Retail API"  path="/lets-connect#contact"/>
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

              <div className="bg-[#E8E6FF] p-8">
                <h5 className="mb-4 text-xl">
                  Digital Loyalty & Rewards Platform
                </h5>
                <p className="mb-10 font-[200]">
                  Boost customer retention with our Digital Loyalty & Rewards
                  Platform. Create custom rewards programs, track customer
                  engagement, and increase brand loyalty with personalized
                  incentives across all channels.
                </p>

                <Button text="Launch Your Rewards Program Today" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Image
              src={"/images/SOL5.png"}
              width={1000}
              height={100}
              alt=""
              className="h-[200px] w-full"
            />

            <div className="bg-[#E8E6FF] p-8">
              <h5 className="mb-4 text-xl">
                Retail AI Solutions for Marketing
              </h5>
              <p className="mb-10 font-[200]">
                Struggling to reach the right customers? Our retail AI solutions
                use machine learning and predictive analytics to personalize
                marketing campaigns, optimize pricing, and drive higher
                conversions for your brand.
              </p>

              <Button text="Boost Sales with AI-Driven Marketing" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative flex h-[1100px] flex-col justify-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/SOL9.png')" }}
      >
        <div className="flex h-[300px] w-full flex-col justify-center bg-[#E8E6FF] pt-10 pb-8 text-white">
          <div className="wrap relative lg:min-w-[1200px]">
            <div className="flex w-full items-center justify-between gap-10">
              <div className="w-[40%]">
                <h4 className="mb-6 text-2xl font-normal text-[#011D31]">
                  We offer a powerful suite of solutions, all designed to drive
                  efficiency, enhance customer engagement, and fuel growth.
                  However, our expertise doesn&apos;t end there.{" "}
                </h4>
              </div>

              <div className="w-1/2">
                <p className="text-xl font-[300] text-[#011D31]">
                  Don&apos;t see exactly what you&apos;re looking for?
                  Let&apos;s discuss your unique requirements and build the
                  perfect solution together.
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
