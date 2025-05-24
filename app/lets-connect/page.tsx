"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../_components/Button";

export default function LetsConnect() {
  const [activeTab, setActiveTab] = useState("job");

  const jobs = [
    {
      title: "Apply Directly to Your Dream IT Job Today",
      description:
        "Discover a wide range of job postings from leading companies in the IT sector.",
      btn: "Browse",
      image: "/images/JOB1.png",
    },
    {
      title: "Stay Updated with the Latest Job Openings in IT",
      description: "Sign up for alerts to never miss an opportunity.",
      btn: "Sign up",
      image: "/images/JOB2.png",
    },
    {
      title: "Join a Community of Talented Professionals and Employers",
      description:
        "Connect, collaborate, and grow your career in the thriving IT landscape.",
      btn: "Join",
      image: "/images/JOB3.png",
    },
  ];

  const talents = [
    {
      title: "Tailored Recruitment Solutions for Your Business",
      description:
        "We offer customized recruitment strategies to meet your unique needs.",
      image: "/images/TAL1.png",
    },
    {
      title: "Access to a Diverse Talent Pool",
      description: "Our extensive network connects you with top candidates.",
      image: "/images/TAL2.png",
    },
    {
      title: "Streamlined Application Process for Job Seekers",
      description: "We make applying for jobs simple and efficient.",
      image: "/images/TAL3.png",
    },
  ];

  return (
    <div className="w-full">
      <div
        className="relative flex h-[600px] flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/CON1.png')" }}
      >
        <h4 className="w-[40%] text-center font-semibold text-white lg:text-5xl">
          Let&apos;s Build Extraordinary Solutions Together
        </h4>
      </div>

      <div className="wrap my-20 flex justify-end">
        <div className="lg:w-1/2">
          <p className="text-5xl font-[100] text-[#1A7AC8]">
            Every great project starts with a conversation. Let&apos;s build
            something extraordinary together.
          </p>
        </div>
      </div>

      <div
        className="mt-10 min-h-[50vh] p-5 py-18"
        style={{
          background: "#EFF6FF",
        }}
      >
        <div className="wrap">
          <h4 className="text-5xl font-medium">
            Ready to launch your next big idea?
          </h4>

          <div className="mt-18 flex w-full gap-10">
            <div className="lg:w-1/3">
              <p>
                Our experts are ready to co-create a scalable solution for you
                that meets your needs and is future-proof.
              </p>
              <button className="mt-5 rounded-xl border-[2px] border-[#479DDE] p-3 text-[#479DDE]">
                Schedule a Call
              </button>
            </div>
            <div className="lg:w-2/3">
              <form className="w-full">
                <div className="flex flex-col gap-1">
                  <label>
                    Fullname <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Enter your name"
                    className="h-[50px] w-full rounded border border-[#0000001A] bg-white p-2"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="mt-4 flex w-full flex-col gap-1">
                    <label>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      placeholder="Enter your email address"
                      className="h-[50px] w-full rounded border border-[#0000001A] bg-white p-2"
                    />
                  </div>

                  <div className="mt-4 flex w-full flex-col gap-1">
                    <label>
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      placeholder="Enter your phone number"
                      className="h-[50px] w-full rounded border border-[#0000001A] bg-white"
                    />
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-1">
                  <label>
                    Organization/Company Name
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Enter company name"
                    className="h-[50px] w-full rounded border border-[#0000001A] bg-white p-2"
                  />
                </div>

                <div className="mt-4 flex flex-col gap-1">
                  <label>
                    Project Overview/Message
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Enter project overview"
                    className="h-[100px] w-full rounded border border-[#0000001A] bg-white p-2"
                  />
                </div>

                <div className="mt-4 flex flex-col gap-1">
                  <label>
                    Attach Supporting File
                    <span className="pl-3 text-sm text-[#00000071]">
                      (PDF, DOCX, XLSX—optional)
                    </span>
                  </label>
                  <input className="h-[50px] w-full rounded border border-dashed border-[#479DDE] bg-white p-2" />
                </div>

                <div className="mt-4 flex gap-2">
                  <input type="checkbox" />{" "}
                  <span className="text-sm font-[300]">
                    I agree to the Privacy Policy and Terms of Use
                  </span>
                </div>

                <Button text="Send Message" showArrow={false} />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(180deg, #0895FF 1.48%, #AEDCFF 75.13%)",
        }}
      >
        <div className="wrap flex">
          <div className="flex w-1/2 flex-col justify-center p-14">
            <h4 className="mb-2 text-4xl font-semibold text-white">
              Vista Talent Hub
            </h4>
            <p className="text-xl font-[100]">
              We bridge the gap between companies and exceptional professionals
            </p>
          </div>

          <div className="w-1/2">
            <Image
              src="/images/CON2.png"
              alt=""
              width={1000}
              height={1000}
              className="h-[450px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#EFF6FF] py-[5rem]">
        <div className="wrap">
          <div className="mx-auto flex h-[50px] w-[300px] items-center rounded-lg bg-[#D8E2EA] p-1">
            <div
              onClick={() => setActiveTab("job")}
              className={`flex h-full w-1/2 cursor-pointer items-center justify-center rounded-lg ${activeTab === "job" ? "bg-[#479DDE] text-white" : "text-black"}`}
            >
              <p>Search job</p>
            </div>

            <div
              onClick={() => setActiveTab("talent")}
              className={`flex h-full w-1/2 cursor-pointer items-center justify-center rounded-lg ${activeTab === "talent" ? "bg-[#479DDE] text-white" : "text-black"}`}
            >
              <p>Find Talent</p>
            </div>
          </div>

          <div className="m-10 w-full">
            <h4 className="mx-auto w-[70%] text-center text-4xl font-semibold">
              {activeTab === "job"
                ? "Explore Exciting Job Opportunities Tailored for IT Professionals Like You"
                : "Your Gateway to Exceptional Talent"}
            </h4>
            {activeTab === "talent" && (
              <p className="mx-auto mt-2 w-[80%] text-center">
                At Vista Hub, we bridge the gap between companies and skilled
                professionals. Our platform simplifies the hiring process,
                ensuring you find the right talent quickly and efficiently.
              </p>
            )}

            <div className="mt-10 grid grid-cols-3 gap-6">
              {activeTab === "job" &&
                jobs.map((job) => (
                  <div className="flex flex-col" key={job.title}>
                    <Image
                      alt=""
                      className="rounded"
                      src={job.image}
                      width={1000}
                      height={1000}
                    />

                    <h4 className="mt-3 text-xl text-[#479DDE]">{job.title}</h4>
                    <p className="mt-2 lg:w-[80%]">{job.description}</p>

                    <button className="mt-5 w-[200px] rounded-xl border-[2px] border-[#479DDE] p-3 text-[#479DDE]">
                      {job.btn}
                    </button>
                  </div>
                ))}

              {activeTab === "talent" &&
                talents.map((talent) => (
                  <div key={talent.title}>
                    <Image
                      alt=""
                      className="rounded"
                      src={talent.image}
                      width={1000}
                      height={1000}
                    />

                    <h4 className="mt-3 text-xl text-[#479DDE]">
                      {talent.title}
                    </h4>
                    <p className="mt-2 lg:w-[80%]">{talent.description}</p>
                  </div>
                ))}
            </div>
            {activeTab === "talent" && (
              <div className="mt-5 flex w-full justify-center">
                <button className="mx-auto mt-5 w-[200px] rounded-xl border-[2px] border-[#479DDE] p-3 text-[#479DDE]">
                  Contact us
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="wrap my-20 flex flex-col items-center justify-center">
        <h4 className="my-10 text-4xl font-medium">
          Why join Vista Talent Hub
        </h4>

        <div className="mb-10 grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <Image
              alt=""
              src={"/images/CON3.png"}
              className="rounded-xl"
              width={1000}
              height={1000}
            />
            <p className="text-2xl font-semibold">Team work</p>
          </div>

          <div className="flex flex-col gap-4">
            <Image
              alt=""
              src={"/images/CON5.png"}
              className="rounded-xl"
              width={1000}
              height={1000}
            />
            <p className="text-2xl font-semibold">Inclusitivity</p>
          </div>

          <div className="flex flex-col gap-4">
            <Image
              alt=""
              src={"/images/CON6.png"}
              className="rounded-xl"
              width={1000}
              height={1000}
            />
            <p className="text-2xl font-semibold">Continuous learning</p>
          </div>

          <div className="flex flex-col gap-4">
            <Image
              alt=""
              src={"/images/CON4.png"}
              className="rounded-xl"
              width={1000}
              height={1000}
            />
            <p className="text-2xl font-semibold">Worklife balance</p>
          </div>
        </div>
      </div>
    </div>
  );
}
