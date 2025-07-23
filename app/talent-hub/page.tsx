"use client";
import Image from "next/image";
import React, { useState } from "react";

import { IoMdCloseCircleOutline } from "react-icons/io";

import { LuFilter } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import Button from "../_components/Button";
import sendEmail from "../_util/emailSend";
import Link from "next/link";

export default function TalentHub() {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [isApply, setIsApply] = useState(false);
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    link: "",
    phone: "",
    file: null as File | null,
    agree: false,
  });
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({
        ...prev,
        file: e.target.files?.[0] as File,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agree) {
      setMessage("Please agree to the Privacy Policy and Terms of Use.");
      return;
    } else {
      setMessage("");
    }

    setSending(true);
    sendEmail({
      senderEmail: formData.email,
      senderName: formData.name,
      subject: `Application for ${selectedJob.role} at ${selectedJob.organization}`,
      htmlContent: `
        <p>Full Name: ${formData.name}</p>
        <p>Email: ${formData.email}</p>
        <p>Phone: ${formData.phone}</p>
        <p>LinkedIn/Portfolio: ${formData.link}</p>
      `,
      receivers: ["hr@frontiervista.com", "iclasschima@gmail.com"],
      ...(formData.file && { file: formData.file }),
    }).finally(() => {
      setSending(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        link: "",
        file: null,
        agree: false,
      });
      setMessage("Your application has been sent successfully!");
      setShowSuccess(true);
    });
  };

  return (
    <div>
      <div
        style={{
          background: "linear-gradient(180deg, #0895FF 1.48%, #AEDCFF 75.13%)",
        }}
      >
        <div className="wrap flex">
          <div className="flex flex-col justify-center p-14 md:w-1/2">
            <h4 className="mb-3 text-5xl font-semibold text-white">
              Vista Talent Hub
            </h4>
            <p className="text-2xl font-[300]">
              We bridge the gap between companies and exceptional professionals
            </p>

            <div className="mt-10 flex gap-4">
              <Button
                text="Search Job"
                className="rounded-xl bg-[#479DDE] px-5 py-3 text-white"
                showArrow={false}
              />
              <Link href="/lets-connect">
                <Button
                  text="Find Talent"
                  className="!rounded-xl !bg-[#EFF6FF] !px-5 !py-3 !text-[#479DDE]"
                  showArrow={false}
                />
              </Link>
            </div>
          </div>

          <div className="hidden w-1/2 md:flex">
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

      <div className="wrap m-10 px-3">
        <div className="hidden items-center gap-4 md:flex">
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
            className={`${isFilterOpen ? "md:flex" : "md:hidden"} hidden w-[30%] flex-col gap-4`}
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
              {/* <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">Fashion</span>
              </div> */}
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">Artificial Intelligence</span>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-medium">Salary range</p>
              {/* <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">$12,000 - $20,000</span>
              </div> */}
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">$40,000 - $69,999</span>
              </div>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm">$70,000 - $99,999</span>
              </div>
              <div className="mt-2 flex gap-2">
                <input type="checkbox" />
                <span className="text-sm"> $100,000+</span>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col md:flex-row ${isFilterOpen ? "w-full" : "w-full"}`}
          >
            <div
              className={`flex flex-col ${isFilterOpen ? "w-full" : "md:w-[50%]"} ${isApply ? "" : ""}`}
            >
              {jobs.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setIsFilterOpen(false);
                    setIsApply(false);
                    setSelectedJob(item);
                  }}
                  className={`flex h-[100px] w-full cursor-pointer items-center justify-between border border-[#41556533] p-4 ${index % 2 === 0 ? "bg-[#4155650D]" : "bg-white"}`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <p className="text-[#23557A]">{item.role}</p>
                      {/* <div className="h-[7px] w-[7px] rounded-full bg-[#D9D9D9]" />
                      <span className="text-xs text-[#415565]">2 days ago</span> */}
                    </div>
                    <div className="flex items-center gap-3">
                      <p>{item.organization}</p>
                      <div className="h-[7px] w-[7px] rounded-full bg-[#D9D9D9]" />
                      <p className="text-sm text-[#415565]">
                        {item.province} ({item.type})
                      </p>
                      <div className="h-[7px] w-[7px] rounded-full bg-[#D9D9D9]" />
                      <p className="text-sm text-[#415565]">{item.type}</p>
                    </div>
                  </div>

                  <div className="hidden cursor-pointer">
                    <IoMdCloseCircleOutline />
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`p-5 ${isFilterOpen ? "hidden" : "w-full md:w-[50%]"}`}
            >
              <h4 className="text-2xl text-[#23557A]">{selectedJob?.role}</h4>
              <div className="flex w-full items-center gap-3">
                <p>{selectedJob?.organization}</p>
                <div className="h-[7px] w-[7px] rounded-full bg-[#D9D9D9]" />
                <p className="text-sm text-[#415565]">
                  {selectedJob?.province} ({selectedJob?.type})
                </p>
                <div className="h-[7px] w-[7px] rounded-full bg-[#D9D9D9]" />
                <p className="text-sm text-[#415565]">{selectedJob?.type}</p>
              </div>

              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => setIsApply(true)}
                  className="rounded-xl bg-[#479DDE] px-4 py-3 text-sm text-white"
                >
                  Apply for job
                </button>
                {/* <button className="rounded-xl border border-[#479DDE] px-5 py-2 text-sm text-[#479DDE]">
                  Share
                </button> */}
              </div>

              {isApply ? (
                <div className="mt-5">
                  {/* <p className="font-[200]">Job Unique ID: VT250506001</p> */}
                  {/* <p className="font-[200]">Job Title: {selectedJob?.role}</p> */}

                  <form className="mt-4 w-full">
                    <div className="flex flex-col gap-1">
                      <label>
                        Applicant Name (Full name){" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
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
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
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
                          className="h-[50px] w-full rounded border border-[#0000001A] bg-white pl-3"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
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
                      <input
                        type="file"
                        accept=".jpg,.png,.pdf" // Specify allowed file types
                        onChange={(e) => {
                          if (e.target.files && e.target.files.length > 1) {
                            alert("You can only upload one file.");
                            e.target.value = ""; // Reset the input
                          } else {
                            handleFileChange(e);
                          }
                        }}
                        className="h-[50px] w-full rounded border border-dashed border-[#479DDE] bg-white p-2"
                      />
                    </div>

                    <div className="mt-4 flex flex-col gap-1">
                      <label>
                        Linkedin/Portfolio
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="url"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                        required
                        placeholder="Enter linkedin/portfolio"
                        className="h-[50px] w-full rounded border border-[#0000001A] bg-white p-2"
                      />
                    </div>

                    <div className="mt-4 flex items-start gap-2">
                      <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="mt-1"
                      />{" "}
                      <span className="text-sm font-[300]">
                        I acknowledge that every information given is accurate
                        and complete. I understand that any false or misleading
                        information provided in this application may result in
                        the rejection of my application or termination of
                        employment if discovered later.
                      </span>
                    </div>

                    {message && !formData.agree && !showSuccess && (
                      <p className="mt-2 text-red-500">{message}</p>
                    )}

                    <Button
                      text="Submit"
                      onClick={handleSubmit}
                      type="button"
                      showArrow={false}
                    />
                    {message && !sending && showSuccess && (
                      <p className="mt-2 text-green-500">{message}</p>
                    )}
                  </form>
                </div>
              ) : (
                <>
                  <div className="mt-8">
                    <p className="text-xl">Job Overview</p>
                    <p className="mt-2 text-sm font-[200]">
                      {selectedJob?.overview}
                    </p>
                  </div>
                  <div className="mt-8">
                    <p className="text-xl">Job Duties</p>
                    <ul className="mt-2 list-disc pl-5 font-[200]">
                      {selectedJob?.duties.map((duty, index) => (
                        <li key={index}>{duty}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <p className="text-xl">What we are looking for in you</p>
                    <ul className="mt-2 list-disc pl-5 font-[200]">
                      {selectedJob?.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
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

const jobs = [
  {
    role: "Financial Analyst",
    organization: "Government of Alberta",
    province: "Alberta",
    type: "Contract",
    model: "Hybrid",
    overview:
      "The candidate will apply their financial and accounting skills along with knowledge of IT to support financial and contract reporting. This includes conducting financial and contractual analyses, developing and implementing financial processes, and producing internal and external reports, including building dashboards. The role requires a hybrid work model, primarily based in Edmonton, Alberta.",
    duties: [
      "Review and interpret financial, contractual, and operational data to monitor performance and compliance.",
      "Assist in preparing annual and project-based budgets and develop contract-level budget justifications in collaboration with program areas.",
      "Maintain and update a comprehensive contract inventory and conduct detailed spend analysis to assess compliance with contractual terms and value received for funds expended.",
      "Identify cost-saving opportunities through contract consolidation, renegotiation, and elimination of underperforming contracts.",
      "Prepare and present comprehensive zero-based budgeting reports.",
      "Evaluate contracts and programs from a zero-based perspective, and document justification for all expenditures.",
      "Collect and analyze data related to grant funding and assess financial impact outcomes associated with grants to determine value for money.",
      "Support compliance with internal and external grant reporting requirements.",
      "Develop dashboards and reports to support internal and external decision-making.",
      "Provide recommendations to update and maintain financial policies and procedures related to contracts and grants.",
      "Identify and recommend process improvements to increase efficiency and accuracy.",
      "Collaborate with cross-functional teams to gather, analyze, and disseminate budgeting and forecasting data.",
      "Support variance analysis and investigate abnormalities in budget execution.",
      "Perform other related duties as required.",
    ],
    requirements: [
      "Bachelor’s degree in Finance, Accounting, Economics, or a related field.",
      "Minimum 3-5 years of experience in financial analysis, budgeting, and forecasting, especially in zero-based or performance-based budgeting environments.",
      "Demonstrated expertise in contract cost analysis, spend analysis, and cost allocation methodologies.",
      "Proficiency in financial modeling, forecasting, and scenario analysis.",
      "Advanced skills in MS Excel and financial/budgeting software (experience with ERP systems preferred).",
      "Excellent written and verbal communication skills for reporting and presenting budget analysis findings.",
      "Experience in process documentation and supporting audit/traceability requirements.",
    ],
  },
  {
    role: "Data Analyst",
    organization: "Government of Alberta",
    province: "Alberta",
    type: "Contract",
    model: "Hybrid",
    overview:
      "A Data Analyst is expected to provide expertise in data collection, data-driven storytelling, statistical analysis, data modelling and visualization, data policies, and governance standards. This role involves creating plans and strategies to identify linkages between data forms, integrating data models, developing data policies, and presenting statistical analysis and data visualizations to improve service delivery.",
    duties: [
      "Implement, develop, and share service metrics and service performance dashboards of IT projects related to spend, progress, and risk level.",
      "Inform project team and leadership about current data trends and performance, and recommend performance metrics to support program delivery and monitoring.",
      "Research best practices and make recommendations for data-driven governance policies to support the adoption of digital services.",
      "Collaborate with Technology and Innovation (TI) program areas to investigate program needs, understand contract requirements, and support the achievement of program deliverables.",
      "Develop comprehensive contract inventory and conduct spend analysis to support financial planning and decision-making.",
      "Prepare contract-level budget justifications and develop optimized contractual spend plans aligned with program objectives.",
      "Produce comprehensive zero-based budgeting reports to enhance financial transparency and resource allocation.",
      "Support grants management through data collection and analysis, aiding in compliance and performance reporting.",
      "Support corporate priorities and data-driven decision making by leveraging existing and new analytics, data visualizations, data models, and storytelling tools.",
      "Perform other responsibilities as required or requested.",
    ],
    requirements: [
      "Bachelor’s degree in Data Science, Statistics, Computer Science, Finance, or a related field.",
      "Minimum 3+ years of experience in data analysis, preferably supporting finance or procurement processes.",
      "Experience with data extraction, cleansing, and preparing data sets related to contracts, spending, and budgeting.",
      "Proficiency in data analysis/visualization tools (Excel, Power BI, Tableau) and working knowledge of SQL or other database tools.",
      "Ability to translate complex financial/operational data into actionable insights for zero-based budgeting decisions.",
      "Experience in preparing dashboards and reports tailored for various audiences.",
      "Strong attention to detail and commitment to data accuracy and quality.",
    ],
  },
];

jobs.push(
  {
    role: "Project Coordinator",
    organization: "Government of Alberta",
    province: "Alberta",
    type: "Contract",
    model: "Hybrid",
    overview:
      "The Project Coordinator will support the successful delivery of government IT projects by coordinating project activities, resources, and communication. The role requires managing timelines, budgets, and progress reporting to ensure alignment with project goals and government standards. Work is based in Alberta and follows a hybrid model.",
    duties: [
      "Support planning and coordination of project activities and resources across multiple departments.",
      "Monitor project schedules, track progress, and ensure deliverables are completed on time.",
      "Facilitate meetings and maintain documentation such as minutes, action items, and issue logs.",
      "Coordinate with internal and external stakeholders to gather information and support project execution.",
      "Maintain project documentation, including project charters, plans, schedules, and risk registers.",
      "Assist in budget tracking and project reporting to leadership.",
      "Support compliance with project management methodologies and tools used in the Government of Alberta.",
      "Escalate project risks and issues as appropriate to ensure timely resolution.",
    ],
    requirements: [
      "Diploma or bachelor’s degree in Business Administration, Project Management, or related field.",
      "2+ years experience supporting project management activities.",
      "Strong organizational and multitasking skills.",
      "Proficiency in MS Office Suite (especially Excel and MS Project).",
      "Familiarity with project management software and tools.",
      "Strong communication and documentation skills.",
      "PMP/CAPM or similar certification is considered an asset.",
    ],
  },
  {
    role: "Project Manager",
    organization: "Government of Alberta",
    province: "Alberta",
    type: "Contract",
    model: "Hybrid",
    overview:
      "The Project Manager oversees planning, execution, monitoring, and delivery of complex government IT and transformation projects. This includes stakeholder coordination, budget and resource management, and ensuring successful outcomes aligned with business and technical objectives. The role follows a hybrid model based in Alberta.",
    duties: [
      "Develop and manage project plans, timelines, scope, and budgets for IT and business transformation projects.",
      "Lead cross-functional project teams, ensuring all project objectives are met.",
      "Manage project risks, issues, and dependencies, escalating where necessary.",
      "Ensure alignment with Government of Alberta project management frameworks.",
      "Prepare and deliver executive-level status reports and presentations.",
      "Manage stakeholder expectations and ensure clear communication across all levels.",
      "Ensure quality control and risk mitigation strategies are applied throughout the project lifecycle.",
      "Provide mentorship and support to junior project team members.",
    ],
    requirements: [
      "Bachelor’s degree in Computer Science, Business, or related field.",
      "5+ years experience managing complex IT projects, ideally within government or large enterprise environments.",
      "Demonstrated success delivering large-scale projects on time and within budget.",
      "Strong leadership, interpersonal, and stakeholder management skills.",
      "Advanced proficiency in project management tools and methodologies (Agile, Waterfall).",
      "PMP or PRINCE2 certification is required; Agile certification is a plus.",
      "Excellent communication, negotiation, and documentation skills.",
    ],
  },
  {
    role: "Digital Architect",
    organization: "Government of Alberta",
    province: "Alberta",
    type: "Contract",
    model: "Hybrid",
    overview:
      "The Digital Architect is responsible for designing and guiding the implementation of digital systems that meet the strategic objectives of the Government of Alberta. The role involves defining system architectures, integration strategies, and ensuring alignment with digital transformation goals, enterprise architecture standards, and security requirements.",
    duties: [
      "Develop enterprise-level architecture models for digital government solutions.",
      "Guide technical design and ensure alignment with architectural standards and best practices.",
      "Collaborate with stakeholders to define system requirements, integrations, and digital services.",
      "Support procurement by defining technical architecture requirements and evaluating vendor solutions.",
      "Assess technical feasibility and provide direction on modernization and cloud strategies.",
      "Ensure designs are scalable, secure, and cost-effective.",
      "Review and approve design documentation and support solution implementation.",
      "Contribute to the evolution of the government’s digital architecture framework.",
    ],
    requirements: [
      "Bachelor’s or master’s degree in Computer Science, Software Engineering, or related field.",
      "8+ years experience in IT architecture, with focus on digital services and enterprise integration.",
      "Strong understanding of cloud platforms (Azure, AWS), APIs, microservices, and security principles.",
      "Experience working with government systems or large public-sector environments.",
      "Proficiency in architecture modeling tools (e.g., ArchiMate, TOGAF frameworks).",
      "Excellent stakeholder management, communication, and documentation skills.",
      "TOGAF or other architecture certification is preferred.",
    ],
  },
  {
    role: "Scrum Master",
    organization: "Government of Alberta",
    province: "Alberta",
    type: "Contract",
    model: "Hybrid",
    overview:
      "The Scrum Master facilitates agile processes for government technology teams. The role supports delivery of high-value digital services by removing impediments, enabling collaboration, and guiding teams in applying agile principles. It promotes continuous improvement and alignment with modern delivery practices.",
    duties: [
      "Serve as Scrum Master for one or more agile teams, facilitating Scrum ceremonies (stand-ups, planning, reviews, retrospectives).",
      "Coach teams and stakeholders on Agile/Scrum practices and values.",
      "Help identify and resolve team impediments and support productive team dynamics.",
      "Foster transparency, collaboration, and open communication among team members and stakeholders.",
      "Track team performance metrics (velocity, burndown, etc.) and ensure continuous improvement.",
      "Promote alignment with broader organizational agile transformation goals.",
      "Ensure effective delivery by maintaining a focus on priorities and scope.",
      "Support product owners with backlog grooming and sprint planning.",
    ],
    requirements: [
      "Bachelor’s degree in Business, IT, or related discipline.",
      "3+ years experience as a Scrum Master in an Agile environment.",
      "Strong understanding of Agile frameworks (Scrum, Kanban) and team facilitation skills.",
      "Certified ScrumMaster (CSM), SAFe, or equivalent Agile certification.",
      "Excellent interpersonal, conflict resolution, and servant leadership qualities.",
      "Experience working in large enterprise or government environments is an asset.",
      "Strong communication and organizational skills.",
    ],
  }
);
