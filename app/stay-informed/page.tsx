import React from "react";
import { LuMoveRight } from "react-icons/lu";
import Image from "next/image";
import Button from "../_components/Button";

export default function page() {
  return (
    <div className="w-full">
      <div
        className="relative flex h-[800px] flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/SIN1.png')" }}
      >
        <h4 className="w-[40%] text-center font-semibold text-white lg:text-5xl">
          Innovations, Insights, and Success Stories
        </h4>

        <button className="mx-auto mt-18 flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 py-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
          Explore trends, watch webinars, and see how our innovations are
          transforming industries
          <LuMoveRight className="ml-5 text-2xl" />
        </button>
      </div>

      <div className="wrap my-20">
        <h4 className="text-3xl font-medium text-[#1A7AC8]">
          Case Studies & Success Stories
        </h4>
        <p className="my-4 text-xl font-medium">Real Results, Real Impact.</p>
        <p className="w-2/3 text-[#192021]">
          Discover how we have transformed organizations through strategic and
          customized solutions. Our case studies illustrate the strategy,
          delivery, and adoption of secure, scalable, and co-created solutions
          that produce measurable results.
        </p>
        <div className="my-10 grid grid-cols-2 gap-4">
          <div>
            <Image src={"/images/SIN2.png"} alt="" width={1000} height={500} />
          </div>

          <div className="px-8">
            <div className="flex gap-8 text-[#54B862]">
              <div>
                <p className="text-2xl">38%</p>
                <p className="">Efficiency</p>
              </div>

              <div>
                <p className="text-2xl">&gt;55%</p>
                <p>Faster patient flow</p>
              </div>
            </div>

            <p className="mt-4 text-xl font-medium">
              Transforming Healthcare Delivery through AI-Driven EHR
              Implementation
            </p>

            <p className="my-4">
              Successfully migrated a hospital health record from legacy systems
              to an AI-powered EHR platform using FHIR standards boosting
              efficiency by 38% and cutting patient wait times by over 55%.
            </p>

            <p className="font-medium">
              Explore how we can modernize your healthcare systems
            </p>

            <Button text="Get in touch today" />
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-4">
          <div className="px-8">
            <p className="mt-4 text-xl font-medium">
              IT Recruitment for GoA: Driving Service Excellence and Speed to
              Market
            </p>

            <p className="my-4">
              Delivered expert IT talent to the Government of Alberta, improving
              service delivery, accelerating project timelines, and supporting
              enterprise-wide digital adoption.
            </p>

            <p className="font-medium">Need skilled IT professionals fast? </p>

            <Button text="Let's connect" />
          </div>

          <div>
            <Image src={"/images/SIN3.png"} alt="" width={1000} height={500} />
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-4">
          <div>
            <Image src={"/images/SIN4.png"} alt="" width={1000} height={500} />
          </div>

          <div className="px-8 pt-5">
            <div className="flex gap-8 text-[#54B862]">
              <div>
                <p className="text-2xl">$1M+</p>
                <p className="">Saved via analytics</p>
              </div>
            </div>
            <p className="mt-4 text-xl font-medium">
              Enhancing Business Efficiency and Fraud Detection Through Data
            </p>

            <p className="my-4">
              By deploying predictive analytics, we saved over $1 million and
              boosted operational efficiency through advanced fraud detection.
            </p>

            <p className="font-medium">Let&apos;s help you achieve the same</p>

            <Button text="Contact us today" />
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-4">
          <div className="px-8">
            <p className="mt-4 text-xl font-medium">
              Scaling Smart with IT Resource Management
            </p>

            <p className="my-4">
              We implemented a comprehensive Cloud FinOps strategy for a leading
              health organization, enhancing cost visibility, operational
              efficiency, and multi-cloud optimization across Azure, AWS, and
              GCP. Our approach delivered significant cost savings, improved
              resource optimization, and better financial control.
            </p>

            <p className="font-medium">Maximize your cloud investments</p>

            <Button text="Schedule a business consultation " />
          </div>
          <div>
            <Image src={"/images/SIN5.png"} alt="" width={1000} height={500} />
          </div>
        </div>
      </div>

      <div className="relative pt-[300px] pb-[100px]">
        <div className="bg-[#DAEBF8] pb-[5rem]">
          <div className="wrap relative">
            <div className="relative min-h-[400px]">
              <div className="absolute right-0 left-0 mt-[-100px]">
                <Image
                  src={"/images/SIN6.png"}
                  className="mt-[-40px] w-full"
                  alt=""
                  width={1000}
                  height={1000}
                />
              </div>

              <div className="mb-[6rem] pt-[250px]">
                <div className="flex justify-end pr-[10%]">
                  <div className="w-1/2">
                    <p className="text-5xl font-[300] text-[#011D31]">
                      Expert Knowledge, On Demand
                    </p>
                    <p className="mt-4 font-extralight">
                      Ensure you stay ahead of industry trend with engaging
                      webinars featuring industry thought Leaders discussing
                      real-world challenges and solutions in data strategy,
                      AI/ML, IT operations, cybersecurity and more
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-[4rem] flex flex-col">
                <p className="mb-[2rem] text-center text-3xl font-medium text-[#122231]">
                  Featured Webinars
                </p>

                <div className="grid grid-cols-3 gap-6">
                  <div className="relative">
                    <Image
                      src={"/images/SIN7.png"}
                      className="w-full rounded"
                      alt=""
                      width={1000}
                      height={1000}
                    />
                    <div className="absolute top-2 left-2 rounded-2xl bg-[#27BD5A] p-2">
                      <p className="text-xs text-white">UPCOMING EVENT</p>
                    </div>

                    <p className="mt-3 mb-2 text-2xl font-medium">
                      Digital Dexterity
                    </p>
                    <p>
                      Fostering a workforce ready for continuous technology
                      evolution. (Workforce 2.0)
                    </p>
                  </div>

                  <div className="relative">
                    <Image
                      src={"/images/SIN8.png"}
                      className="w-full rounded"
                      alt=""
                      width={1000}
                      height={1000}
                    />
                    <div className="absolute top-2 left-2 rounded-2xl bg-[#27BD5A] p-2">
                      <p className="text-xs text-white">UPCOMING EVENT</p>
                    </div>

                    <p className="mt-3 mb-2 text-2xl font-medium">
                      Boosting IT Operations with Gemba walks:
                    </p>
                    <p>Turning Insights into Actions</p>
                  </div>

                  <div className="relative">
                    <Image
                      src={"/images/SIN9.png"}
                      className="w-full rounded"
                      alt=""
                      width={1000}
                      height={1000}
                    />

                    <div className="absolute top-2 left-2 rounded-2xl bg-[#27BD5A] p-2">
                      <p className="text-xs text-white">UPCOMING EVENT</p>
                    </div>

                    <p className="mt-3 mb-2 text-2xl font-medium">
                      AI Starts with Why
                    </p>
                    <p>Turning Insights into Actions</p>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div className="relative">
                    <Image
                      src={"/images/SIN10.png"}
                      className="h-[280px] w-full rounded"
                      alt=""
                      width={1000}
                      height={1000}
                    />

                    <div className="absolute top-2 left-2 rounded-2xl bg-[#27BD5A] p-2">
                      <p className="text-xs text-white">UPCOMING EVENT</p>
                    </div>

                    <p className="mt-3 mb-2 text-2xl font-medium">
                      Balancing Innovation and Cost
                    </p>
                    <p>Mastering FinOps in Multi-Cloud Environments</p>
                  </div>

                  <div className="relative">
                    <Image
                      src={"/images/SIN11.png"}
                      className="h-[280px] w-full rounded"
                      alt=""
                      width={1000}
                      height={1000}
                    />

                    <div className="absolute top-2 left-2 rounded-2xl bg-[#27BD5A] p-2">
                      <p className="text-xs text-white">UPCOMING EVENT</p>
                    </div>

                    <p className="mt-3 mb-2 text-2xl font-medium">
                      The Secure Cloud Blueprint
                    </p>
                    <p>
                      Designing Scalable, Resilient, and Threat-Ready -
                      Infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap mt-[3rem] mb-[10rem]">
        <div className="flex gap-[10rem]">
          <div className="w-1/2">
            <p className="text-6xl font-[200]">
              Connect.
              <br /> Collaborate. <br /> Learn.
            </p>
          </div>

          <div>
            <p className="mb-10">
              Join our well-crafted webinars and workshops designed to empower
              professionals like you and foster innovation across digital,
              cloud, and operational domains. Connect with experts and enhance
              your expertise in key areas of business transformation and tech
              strategy.
            </p>

            <Button text="Download Event Flyers" />
          </div>
        </div>

        <div className="mt-20 flex gap-6 overflow-x-auto">
          <div
            className="flex min-h-[450px] w-[450px] flex-col justify-between"
            style={{
              background:
                "linear-gradient(180deg, #0895FF 1.48%, #AEDCFF 75.13%)",
            }}
          >
            <div className="w-[90%]">
              <div className="bg-[#011524] p-4">
                <div className="mb-4">
                  <Image
                    src="/images/download.svg"
                    alt=""
                    width={1000}
                    height={1000}
                    className="h-[20px] w-[20px]"
                  />
                </div>
                <p className="text-xl text-white">
                  Digital Dexterity: Fostering a Workforce Ready for Continuous
                  Technology Evolution (Workforce 2.0)
                </p>
              </div>
              <div className="mb-4 flex flex-col items-end justify-end">
                <div className="w-[90%] bg-white p-2">
                  <p>
                    Building agile teams, workforce reskilling, and cultivating
                    a tech-forward culture
                  </p>
                </div>
                <div className="bg-[#FF9314] p-2 text-xs">
                  <p>VIRTUAL EVENT</p>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-10 p-4 px-8">
              <div>
                <p className="text-sm text-[#FF9314]">SPEAKERS</p>
                <p className="">William Agbakoba & Vigneswar Raj</p>
              </div>
              <p className="">Thursday, 15th May 2025</p>
            </div>
          </div>

          <div
            className="flex min-h-[450px] w-[450px] flex-col justify-between"
            style={{
              background:
                "linear-gradient(180deg, #54B862 1.48%, #7FFA69 75.13%)",
            }}
          >
            <div className="w-[90%]">
              <div className="bg-[#003207] p-4">
                <div className="mb-4">
                  <Image
                    src="/images/download.svg"
                    alt=""
                    width={1000}
                    height={1000}
                    className="h-[20px] w-[20px]"
                  />
                </div>
                <p className="text-xl text-white">
                  Balancing Innovation and Cost: Mastering FinOps in Multi-Cloud
                  Environments
                </p>
              </div>
              <div className="mb-4 flex flex-col items-end justify-end">
                <div className="w-[90%] bg-white p-2">
                  <p>
                    Driving cost transparency, optimizing cloud ROI, and
                    aligning financial strategy with innovation
                  </p>
                </div>
                <div className="bg-[#5D0059] p-2 text-xs text-white">
                  <p>VIRTUAL EVENT</p>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-10 p-4 px-8">
              <div className="min-w-1/2">
                <p className="text-sm text-[#FF9314]">SPEAKERS</p>
                <p className="text-">Deb Olorunyomi & Ray Edwards</p>
              </div>
              <p className="">Thursday, 12th June 2025</p>
            </div>
          </div>

          <div
            className="flex min-h-[450px] w-[450px] flex-col justify-between"
            style={{
              background:
                "linear-gradient(180deg, #FF9314 1.48%, #FFCF3E 75.13%)",
            }}
          >
            <div className="w-[90%]">
              <div className="bg-[#241401] p-4">
                <div className="mb-4">
                  <Image
                    src="/images/download.svg"
                    alt=""
                    width={1000}
                    height={1000}
                    className="h-[20px] w-[20px]"
                  />
                </div>
                <p className="text-xl text-white">
                  The Secure Cloud Blueprint: Designing Scalable, Resilient, and
                  Threat-Ready Infrastructure
                </p>
              </div>
              <div className="mb-4 flex flex-col items-end justify-end">
                <div className="w-[90%] bg-white p-2">
                  <p>
                    Building cloud environments that are secure by design,
                    scalable, and aligned with compliance frameworks
                  </p>
                </div>
                <div className="bg-[#1199FF] p-2 text-xs text-white">
                  <p>VIRTUAL EVENT</p>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-10 p-4 px-8">
              <div className="w-1/2">
                <p className="text-sm text-[#FF9314]">SPEAKERS</p>
                <p className="text-xl">Akin Ojelabi</p>
              </div>
              <p className="">Thursday, 12th June 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
