"use client";
import Image from "next/image";
import React, { useState } from "react";

import { IoMdCloseCircleOutline } from "react-icons/io";

import { LuFilter } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import Button from "../_components/Button";

export default function TalentHub() {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [isApply, setIsApply] = useState(false);

  return (
    <div>
      <div
        style={{
          background: "linear-gradient(180deg, #0895FF 1.48%, #AEDCFF 75.13%)",
        }}
      >
        <div className="wrap flex">
          <div className="flex w-1/2 flex-col justify-center p-14">
            <h4 className="mb-3 text-5xl font-semibold text-white">
              Vista Talent Hub
            </h4>
            <p className="text-2xl font-[300]">
              We bridge the gap between companies and exceptional professionals
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-xl bg-[#479DDE] px-5 py-3 text-white">
                Search Job
              </button>
              <button className="rounded-xl bg-[#EFF6FF] px-5 py-3 text-[#479DDE]">
                Find Talent
              </button>
            </div>
          </div>

          <div className="w-1/2">
            <Image
              src="/images/CON2.png"
              alt=""
              width={1000}
              height={1000}
              className="h-[500px]"
            />
          </div>
        </div>
      </div>

      <div className="wrap m-10">
        <div className="flex items-center gap-4">
          <div
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={` ${isFilterOpen ? "bg-[#479DDE] text-white" : "bg-[#4155650D]"} flex h-[45px] cursor-pointer items-center gap-2 rounded border border-[#41556533] px-4 text-[#415565]`}
          >
            <LuFilter />
            <span>Filter</span>
          </div>
          <div className="relative">
            <input
              className="h-[45px] w-[350px] rounded border border-[#41556533] bg-[#4155650D] p-2 pl-[35px] text-[#415565]"
              placeholder="Search"
            />
            <IoSearchOutline className="text-md absolute top-4 left-3" />
          </div>
        </div>

        <div className="mt-10 flex">
          <div
            className={`${isFilterOpen ? "flex" : "hidden"} w-[30%] flex-col gap-4`}
          >
            <div className="flex flex-col">
              <p className="font-medium">Type of Employment</p>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">Fulltime</span>
              </div>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">Internship</span>
              </div>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">Contract</span>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-medium">Location</p>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">Hybrid</span>
              </div>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">Remote</span>
              </div>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">Onsite</span>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-medium">Experience</p>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">Entry</span>
              </div>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">Intermediate</span>
              </div>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">Senior</span>
              </div>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">Team Lead</span>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-medium">Industry</p>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">Fintech</span>
              </div>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">E-commerce</span>
              </div>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">Fashion</span>
              </div>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">Artificial Intelligence</span>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-medium">Salary range</p>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">$12,000 - $20,000</span>
              </div>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">$30,000 - $40,000</span>
              </div>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">$50,000 - $60,000</span>
              </div>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm"> $70,000 - $80,000</span>
              </div>
            </div>
          </div>

          <div className={`flex ${isFilterOpen ? "w-full" : "w-full"}`}>
            <div
              className={`flex flex-col ${isFilterOpen ? "w-full" : "w-[50%]"}`}
            >
              {[...Array(5)].map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setIsFilterOpen(false);
                    setIsApply(false);
                  }}
                  className={`flex h-[100px] w-full cursor-pointer items-center justify-between border border-[#41556533] p-4 ${index % 2 === 0 ? "bg-[#4155650D]" : "bg-white"}`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <p className="text-[#23557A]">Senior Product Designer</p>
                      <div className="h-[7px] w-[7px] rounded-full bg-[#D9D9D9]" />
                      <span className="text-xs text-[#415565]">2 days ago</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <p>Nokia</p>
                      <div className="h-[7px] w-[7px] rounded-full bg-[#D9D9D9]" />
                      <p className="text-sm text-[#415565]">
                        Norway (Full-time)
                      </p>
                      <div className="h-[7px] w-[7px] rounded-full bg-[#D9D9D9]" />
                      <p className="text-sm text-[#415565]">Remote</p>
                    </div>
                  </div>

                  <div className="cursor-pointer">
                    <IoMdCloseCircleOutline />
                  </div>
                </div>
              ))}
            </div>

            <div className={`p-5 ${isFilterOpen ? "hidden" : "w-[50%]"}`}>
              <h4 className="text-2xl text-[#23557A]">
                Senior Product Designer
              </h4>
              <div className="flex w-full items-center gap-3">
                <p>Nokia</p>
                <div className="h-[7px] w-[7px] rounded-full bg-[#D9D9D9]" />
                <p className="text-sm text-[#415565]">Norway (Full-time)</p>
                <div className="h-[7px] w-[7px] rounded-full bg-[#D9D9D9]" />
                <p className="text-sm text-[#415565]">Remote</p>
              </div>

              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => setIsApply(true)}
                  className="rounded-xl bg-[#479DDE] px-4 py-3 text-sm text-white"
                >
                  Apply for job
                </button>
                <button className="rounded-xl border border-[#479DDE] px-5 py-2 text-sm text-[#479DDE]">
                  Share
                </button>
              </div>

              {isApply ? (
                <div className="mt-5">
                  <p className="font-[200]">Job Unique ID: VT250506001</p>
                  <p className="font-[200]">
                    Job Title: Senior Product Designer
                  </p>

                  <form className="mt-4 w-full">
                    <div className="flex flex-col gap-1">
                      <label>
                        Applicant Name (Full name){" "}
                        <span className="text-red-500">*</span>
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
                        Resume upload
                        <span className="pl-3 text-sm text-[#00000071]">
                          (PDF, DOCX, XLSX—optional)
                        </span>
                      </label>
                      <input className="h-[50px] w-full rounded border border-dashed border-[#479DDE] bg-white p-2" />
                    </div>

                    <div className="mt-4 flex flex-col gap-1">
                      <label>
                        Linkedin/Portfolio
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        placeholder="Enter linkedin/portfolio"
                        className="h-[50px] w-full rounded border border-[#0000001A] bg-white p-2"
                      />
                    </div>

                    <div className="mt-4 flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />{" "}
                      <span className="text-sm font-[300]">
                        I acknowledge that every information given is accurate
                        and complete. I understand that any false or misleading
                        information provided in this application may result in
                        the rejection of my application or termination of
                        employment if discovered later.
                      </span>
                    </div>

                    <Button text="Submit" showArrow={false} />
                  </form>
                </div>
              ) : (
                <>
                  <div className="mt-8">
                    <p className="text-xl">Job Overview</p>
                    <p className="mt-2 text-sm font-[200]">
                      We&apos;re excited to welcome a UI/UX Designer who&apos;s
                      passionate about crafting outstanding user experiences. In
                      this role, you&apos;ll be a driving force in shaping the
                      look and feel of our products. Working closely with
                      various teams, you&apos;ll transform complex concepts into
                      intuitive and engaging designs that truly resonate with
                      our diverse community.
                    </p>
                  </div>
                  <div className="mt-8">
                    <p className="text-xl">Job Duties</p>
                    <ul className="mt-2 list-disc pl-5 font-[200]">
                      <li>
                        Generate innovative design concepts and translate them
                        into feasible product designs through sketches,
                        wireframes, and prototypes.
                      </li>
                      <li>
                        Conduct user research and usability testing to
                        understand user needs, preferences, and pain points.
                      </li>
                      <li>
                        Analyze feedback and data to inform design decisions.
                      </li>
                      <li>
                        Create detailed design specifications, for product
                        features, ensuring alignment with user experience
                        principles and brand guidelines.
                      </li>
                      <li>
                        Work closely with product managers, engineers, and other
                        stakeholders to ensure designs are feasible and align
                        with project goals.
                      </li>
                      <li>
                        Collaborate with the engineering team during the
                        development phase to ensure the final product meets
                        design specifications and quality standards.s
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <p className="text-xl">What we are looking for in you</p>
                    <ul className="mt-2 list-disc pl-5 font-[200]">
                      <li>
                        Degree in Product Design, Industrial Design, Graphic
                        Design, or a related field.
                      </li>
                      <li>
                        3-5 years of experience in product design, with a
                        portfolio showcasing successful design projects.
                      </li>
                      <li>
                        Proficiency in design and prototyping tools such as
                        Sketch, Figma, or similar tools.
                      </li>
                      <li>
                        Strong understanding of user-centered design principles
                        and methodologies.
                      </li>
                      <li>
                        Excellent visual design skills with a strong sense of
                        aesthetics and attention to detail.
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
