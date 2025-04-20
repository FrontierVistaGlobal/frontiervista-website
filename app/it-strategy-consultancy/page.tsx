import React from "react";
import { LuMoveRight } from "react-icons/lu";
import { Covered_By_Your_Grace } from "next/font/google";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
});

export default function page() {
  return (
    <div className="w-full">
      <div
        className="relative flex h-[900px] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/it-strategy-bg.png')" }}
      >
        <div className="flex h-[350px] w-full flex-col justify-center bg-[#02303BE5] text-white">
          <div className="wrap">
            <h4 className="mb-6 text-4xl font-semibold">
              IT Strategy and Consultancy{" "}
            </h4>
            <p className="mb-8 font-extralight lg:w-[60%]">
              We become your dedicated IT advisor, crafting winning strategies,
              actionable roadmaps, and detailed implementation plans to achieve
              your business goals. Beyond the strategy, we provide the expertise
              to deliver the solutions.
            </p>
            <button className="flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
              Get in touch today <LuMoveRight className="ml-5 text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="py-[10rem]"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #DBF6FF 60.5%, #d5f5ff 100%)",
        }}
      >
        <div className="wrap">
          <div className="flex w-full justify-end">
            <h4 className="w-1/2 text-5xl leading-[60px] font-extralight text-[#3990A5]">
              Effective IT strategies are the foundation of any successful
              digital transformation.
            </h4>
          </div>

          <div>
            <h4 className="mt-36 mb-14 flex items-center gap-2 text-5xl font-semibold text-[#011D31]">
              Our service
              <span
                className={`${coveredByYourGrace.className} text-5xl text-[#3990A5]`}
              >
                Offerings
              </span>
            </h4>

            <div className="grid grid-cols-1 gap-8 px-8 md:grid-cols-2">
              {/* Service 1: IT Strategy Consulting */}
              <div className="flex gap-6 rounded-lg p-6 px-8">
                <div className="mb-2 text-5xl font-extralight text-[#3990A5]">
                  01
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-medium text-[#011D31]">
                    IT Strategy Consulting
                  </h3>
                  <p className="font-light text-[#011D31]">
                    We develop tailored strategies, identify technology
                    opportunities, and create actionable roadmaps to guide your
                    IT investments.
                  </p>
                </div>
              </div>

              {/* Service 2: Business Strategy */}
              <div className="flex gap-6 rounded-lg p-6 px-8">
                <div className="mb-2 text-5xl font-extralight text-[#3990A5]">
                  02
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-medium text-[#011D31]">
                    Business Strategy
                  </h3>
                  <p className="font-light text-[#011D31]">
                    We create business strategies that optimize your operations,
                    lower costs, and improve performance, while addressing
                    future challenges.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-[#011D31]" />

            <div className="grid grid-cols-1 gap-8 px-8 md:grid-cols-2">
              <div className="flex gap-6 rounded-lg p-6 px-8">
                <div className="mb-2 text-5xl font-extralight text-[#3990A5]">
                  03
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-medium text-[#011D31]">
                    Project Planning & Delivery{" "}
                  </h3>
                  <p className="font-light text-[#011D31]">
                    From initial planning to final delivery, we create detailed
                    plans, manage risks, and ensure that all deliverables align
                    with your business objectives. We facilitate successful
                    project execution with minimal disruption.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 rounded-lg p-6 px-8">
                <div className="mb-2 text-5xl font-extralight text-[#3990A5]">
                  04
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-medium text-[#011D31]">
                    Solution Architecture Consulting
                  </h3>
                  <p className="font-light text-[#011D31]">
                    Our tailored architecture ensures your systems are
                    optimized, well-integrated, and future-ready. We focus on
                    developing flexible, high-performing infrastructures that
                    adapt to your evolving business needs.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-[#011D31]" />

            <div className="grid grid-cols-1 gap-8 px-8 md:grid-cols-2">
              <div className="flex gap-6 rounded-lg p-6 px-8">
                <div className="mb-2 text-5xl font-extralight text-[#3990A5]">
                  05
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-medium text-[#011D31]">
                    IT Risk Management & Compliance
                  </h3>
                  <p className="font-light text-[#011D31]">
                    We develop tailored security strategies to mitigate
                    vulnerabilities, allowing you to focus on growth while
                    minimizing risks. Trust our experts to handle compliance, so
                    you can drive your business forward with confidence.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 rounded-lg p-6 px-8">
                <div className="mb-2 text-5xl font-extralight text-[#3990A5]">
                  06
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-medium text-[#011D31]">
                    Change Management
                  </h3>
                  <p className="font-light text-[#011D31]">
                    Our tailored architecture ensures your systems are
                    optimized, well-integrated, and future-ready. We focus on
                    developing flexible, high-performing infrastructures that
                    adapt to your evolving business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative flex h-[1100px] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/amazing.png')" }}
      >
        <div className="flex h-[250px] w-full flex-col justify-end bg-[#D0F4FF] pb-8 text-white">
          <div className="wrap relative lg:min-w-[1200px]">
            <div className="absolute top-[-230px] w-[450px] rounded bg-[#D0F4FF] p-6 px-10 font-light text-black">
              <p>
                We guide your organization through process and technological
                transitions with minimal disruption. Our approach equips your
                team with the necessary tools, techniques, and training to adapt
                to new systems, technology, and processes, ensuring smooth
                transitions and maximizing the value of new technologies.
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <h4 className="mb-6 w-[50%] text-4xl font-semibold text-black">
                Let&apos;s Build Something Amazing Together
              </h4>

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
