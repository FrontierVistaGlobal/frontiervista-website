"use client";
import Image from "next/image";
import { useEffect } from "react";
import CountUp from "react-countup";
import { LuMoveRight } from "react-icons/lu";
import { motion, useAnimation } from "motion/react";
import CarouselTestimonials from "./_components/Testimonies";
import Button from "./_components/Button";
import HealthCare from "./_components/Healthcare";

export default function Home() {
  const controls = useAnimation();
  const supportItems = [
    {
      title: "Advisory and Consulting",
      description:
        "Strategize your future with expert guidance, navigating complex challenges and driving impactful digital transformation",
      image: "/advisory.svg",
      color: "#F9FCFF",
      btn: "Explore Advisory Services",
      link: "/it-strategy-consulting",
    },
    {
      title: "IT Managed Services",
      description:
        "Secure your operations and optimize performance with proactive IT management, enhancing scalability and minimizing costly downtime.",
      image: "/it-service.svg",
      color: "#FFEAD0",
      btn: "Secure your IT Infrastructure",
      link: "/operational-excellence",
    },
    {
      title: "Delivery",
      description:
        "Deploy seamless IT solutions with speed and efficiency, ensuring timely implementation and maximizing business impact.",
      image: "/delivery.svg",
      color: "#EFFFEF",
      btn: "Unlock your IT potential Now",
      link: "/who-we-are?active=2#accordion",
    },
    {
      title: "Workforce Solutions",
      description:
        "Connecting Top Talents with Opportunities. Discover your next great hire or dream job. We make the right connections happen, building stronger teams and great career",
      image: "/consulting.svg",
      color: "#F1D9FF",
      btn: "Find your perfect fit",
      link: "/talent-hub",
    },
  ];

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: "-100%",
      transition: {
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  const partners = [
    "/microsoft.svg",
    "/aws.svg",
    "/iiba.svg",
    "/pong.svg",
    "/servicenow.svg",
    "/finops.svg",
  ];

  const clients = [
    "/alberta.svg",
    "/provi.svg",
    "/prima.svg",
    "/eden.svg",
    "/garage.svg",
  ];

  useEffect(() => {
    handleMouseLeave();
  });

  return (
    <div>
      <div
        className="relative min-h-[650px] bg-cover bg-center"
        style={{ backgroundImage: "url('/homebg.png')" }}
      >
        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col justify-between px-4 pt-[7rem] pb-[3rem] text-white sm:px-6 md:px-8">
          <div className="flex flex-col">
            <h3 className="mb-2 text-3xl font-[800] text-white lg:text-5xl">
              Unlock New Frontiers
            </h3>
            <p className="mb-12 text-lg font-[200] md:w-1/2">
              Empowering businesses to achieve transformative growth through
              innovative solutions.
            </p>

            <Button text="Explore Our Solutions" path="/what-we-do" />
          </div>

          <div className="mt-[4rem] grid w-full grid-cols-2 justify-between md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <p className="text-[40px] font-[100] lg:text-[60px]">
                <CountUp start={0} end={67} duration={2.5} suffix="%" />
              </p>
              <p className="w-2/3 text-center md:text-sm text-[12px]">
                REVENUE GROWTH RATE FOR OUR CLIENTS
              </p>
            </div>
            <div className="text-center">
              <p className="text-[40px] font-[100] lg:text-[60px]">
                <CountUp start={0} end={400} duration={2.5} suffix="%" />
              </p>
              <p className="w-[80%] text-center  md:text-sm text-[12px]">
                GROWTH IN CLIENT BASE
              </p>
            </div>
            <div className="min-w-[140px] text-center">
              <p className="text-[40px] font-[100] lg:text-[60px]">
                <CountUp start={0} end={90} duration={2.5} suffix="%" />
              </p>
              <p className="w-[80%] text-center  md:text-sm text-[12px]">
                CLIENT SATISFACTION (NPS)
              </p>
            </div>
            <div className="text-center">
              <p className="w-[80%] text-[40px] font-[100] lg:text-[60px]">
                <CountUp start={0} end={5} duration={2.5} />
              </p>
              <p className="w-[80%] text-center md:text-sm text-[12px]">NEW MARKET ENTERED</p>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap flex w-full flex-col items-center gap-6 px-4 py-20 text-center lg:py-[10rem]">
        <p className="mx-auto max-w-[750px] text-center text-3xl font-[300] lg:text-4xl">
          Frontier Vista is a business and technology consulting firm delivering
          bold software, data, and AI solutions to accelerate and scale business
          growth.
        </p>
        <Button
          text="Let's Partner to Transform Your Business Today"
          path="/lets-connect"
        />
      </div>

      <div className="wrap pb-[5rem]" id="support">
        <div className="flex flex-col items-center justify-center text-center">
          <h4 className="text-4xl font-[500] lg:text-5xl">
            How we support you
          </h4>
          <p className="mt-4 text-xl font-[200] lg:w-[70%]">
            We provide comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-2 px-3 md:grid-cols-2 lg:gap-4">
          {supportItems.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[200px] flex-col gap-4 rounded-lg bg-[#EFF6FF] p-6 lg:flex-row lg:gap-8 lg:p-10"
            >
              <div
                className={`flex h-[50px] w-[50px] items-center justify-center rounded lg:h-[60px] lg:w-[140px]`}
                style={{
                  background: item.color,
                }}
              >
                <Image
                  src={item.image}
                  width={1000}
                  height={1000}
                  alt=""
                  className="h-[25px] w-[25px] object-contain lg:h-[35px] lg:w-[35px]"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h5 className="text-lg font-semibold lg:text-xl">
                  {item.title}
                </h5>
                <p className="mt-2 text-sm font-[300] lg:text-base">
                  {item.description}
                </p>
                {/* <button className="mt-6 flex h-[55px] w-fit cursor-pointer items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
                  {item.btn} <LuMoveRight className="ml-5 text-2xl" />
                </button> */}
                <Button text={item.btn} path={item.link} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <HealthCare />

      <div className="wrap overflow-hidden pt-[5rem] pb-[8rem] text-center">
        <h4 className="mb-3 text-3xl md:text-4xl font-[500]">Our Clients</h4>
        <p className=" text-lg md:text-xl font-[200]">
          We&apos;re proud to work with industry leaders across various sectors
        </p>

        <motion.div
          initial={{
            x: 0,
          }}
          animate={controls}
          className="mt-12 flex cursor-pointer gap-18"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {[...clients, ...clients, ...clients].map((client, index) => (
            <Image
              src={client}
              alt=""
              className="w-[100%] object-contain"
              width={100}
              height={100}
              key={index}
            />
          ))}
        </motion.div>

        {/* <Link href="/stay-informed#case-studies">
            <button className="mx-auto mt-16 cursor-pointer items-center rounded-[10px] bg-[#479DDE] px-6 text-xl font-normal text-white hover:bg-[#479DDE] focus:outline-none">
          Explore Our Portfolio <LuMoveRight className="ml-5 text-2xl" />
        </button>
          </Link> */}

        <Button
          text="Explore Our Portfolio "
          path="/stay-informed#case-studies"
          className="mx-auto mt-16 flex h-[55px] w-fit px-6 text-xl font-normal"
        />
      </div>

      <div className="wrap pt-[5rem] pb-[8rem] text-center">
        <h4 className="mb-3 text-3xl md:text-4xl font-[500]">Testimonies</h4>
        <p className="mx-auto mb-20 text-[18px] md:text-xl font-[200] lg:w-1/2">
          Real stories from satisfied customers who have experienced the quality
          and impact of our work firsthand.
        </p>

        <CarouselTestimonials />

        {/* <Link href="/lets-connect#contact">
         <button className="mx-auto mt-16 flex h-[55px] w-fit cursor-pointer items-center rounded-[10px] bg-[#479DDE] px-6 text-xl font-normal text-white hover:bg-[#479DDE] focus:outline-none">
          Request a Free Consultation <LuMoveRight className="ml-5 text-2xl" />
        </button>
        </Link> */}

        <Button
          text="Request a Free Consultation"
          path="/lets-connect#contact"
          className="mx-auto"
        />
      </div>

      <div className="mt-[20px] bg-[#D0F4FF]">
        <div className="wrap py-[6rem]">
          <h4 className="mb-[4rem] text-center text-4xl font-[500]">
            Trending Insights
          </h4>

          <div className="mt-5 mb-8 grid grid-cols-1 gap-12 px-5 lg:grid-cols-3">
            <div className="flex flex-col">
              <Image src="/insight1.png" alt="" width={400} height={200} />
              <div className="mt-2 flex items-center justify-between">
                <div className="rounded-3xl bg-white px-4 py-1">
                  <p className="text-xs text-[#479DDE]">
                    IT Strategy & Governance
                  </p>
                </div>
                <p className="text-xs text-[#479DDE]">June 4, 2025</p>
              </div>

              <p className="mt-8 text-xl font-medium text-[#23557A]">
                Key Drivers of Scalable, Secure, and Future-Ready IT Solutions
              </p>

            </div>

            <div className="flex flex-col">
              <Image src="/insight02.png" alt="" width={400} height={200} />
              <div className="mt-2 flex items-center justify-between">
                <div className="rounded-3xl bg-white px-4 py-1">
                  <p className="text-xs text-[#479DDE]">
                    Operationalizing AI with DevSecFinOps
                  </p>
                </div>
                
            <p  className="text-xs text-[#479DDE]">march 15, 2025</p>
              </div>

              <p className="mt-8 text-xl font-medium text-[#23557A]">
                Balancing Risk, Cost, and Innovation
              </p>

            </div>

            <div className="flex flex-col">
              <Image src="/insight3.png" alt="" width={400} height={200} />
              <div className="mt-2 flex items-center justify-between">
                <div className="rounded-3xl bg-white px-4 py-1">
                  <p className="text-xs text-[#479DDE]">Cybersecurity And It Governance</p>
                </div>
                <p className="text-xs text-[#479DDE]">June 4, 2025</p>
              </div>

              <p className="mt-8 text-xl font-medium text-[#23557A]">
                Cybersecurity in the Age of Digital Transformation Read More
              </p>

             
            </div>
          </div>

          <button className="mx-auto mt-18 flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
            View More of Our Thinking <LuMoveRight className="ml-5 text-2xl" />
          </button>
        </div>
      </div>

      <div className="wrap pt-[5rem] md:pt-[9rem] text-center px-1 md:px-0">
        <h4 className="mb-4 text-2xl md:text-4xl font-[500]">
          Certifications & Memberships
        </h4>
        <p className="mx-auto mb-12 md:w-1/2 w-full text-[16px] md:text-lg font-[200]">
          Backed by industry-recognized certifications, strategic partnerships,
          and extensive experience, Frontier Vista is committed to delivering
          trusted solutions that simplify IT challenges.
        </p>

        <Image
          src="/certs.png"
          alt=""
          className="mx-auto mt-4"
          width={720}
          height={100}
        />
      </div>
      <p className="text-right italic">...and a lot more</p>

      <div className="wrap wrap overflow-hidden py-[9rem] text-center">
        <h4 className="mb-8 text-4xl font-[500]">Partners</h4>

        <motion.div
          initial={{
            x: 0,
          }}
          animate={controls}
          className="flex cursor-pointer gap-18"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {[...partners, ...partners, ...partners].map((client, index) => (
            <Image
              key={client + index}
              src={client}
              alt=""
              className="w-[150px] object-contain"
              width={100}
              height={100}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
