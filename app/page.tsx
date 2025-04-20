"use client";
import Image from "next/image";
import { useEffect } from "react";
import CountUp from "react-countup";
import { LuMoveRight } from "react-icons/lu";
import { motion, useAnimation } from "motion/react";
import CarouselTestimonials from "./_components/Testimonies";

export default function Home() {
  const controls = useAnimation();
  const supportItems = [
    {
      title: "Advisory",
      description:
        "Strategize your future with expert guidance, navigating complex challenges and driving impactful digital transformation",
      image: "/advisory.svg",
      color: "#F9FCFF",
      btn: "Explore Advisory Services",
      link: "#",
    },
    {
      title: "IT Managed Services",
      description:
        "Secure your operations and optimize performance with proactive IT management, enhancing scalability and minimizing costly downtime.",
      image: "/it-service.svg",
      color: "#FFEAD0",
      btn: "Secure your IT Infrastructure",
      link: "#",
    },
    {
      title: "Delivery",
      description:
        "Deploy seamless IT solutions with speed and efficiency, ensuring timely implementation and maximizing business impact.",
      image: "/delivery.svg",
      color: "#EFFFEF",
      btn: "Unlock your IT potential Now",
      link: "#",
    },
    {
      title: "Consulting",
      description:
        "Transform ideas into reality with hands-on IT consulting, solution design, and seamless implementation",
      image: "/consulting.svg",
      color: "#F1D9FF",
      btn: "Transform your Ideas",
      link: "#",
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
  }, []);

  return (
    <div>
      <div
        className="relative h-[800px] bg-cover bg-center"
        style={{ backgroundImage: "url('/homebg.png')" }}
      >
        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col justify-center text-white">
          <div className="flex flex-col">
            <h3 className="mb-2 text-5xl font-[800] text-white">
              Unlock New Frontiers
            </h3>
            <p className="mb-12 w-1/2 text-lg font-[200]">
              Empowering businesses to achieve transformative growth through
              innovative solutions.
            </p>

            <button className="flex h-[65px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
              Transform Today <LuMoveRight className="ml-5 text-2xl" />
            </button>
          </div>

          <div className="absolute bottom-[50px] flex w-full justify-between">
            <div className="flex flex-col items-center text-center">
              <p className="text-[60px] font-[100]">
                <CountUp start={0} end={300} duration={2.5} suffix="%" />
              </p>
              <p className="w-2/3 text-center text-sm">
                REVENUE GROWTH RATE FOR OUR CLIENTS
              </p>
            </div>
            <div className="text-center">
              <p className="text-[60px] font-[100]">
                <CountUp start={0} end={400} duration={2.5} suffix="%" />
              </p>
              <p className="text-sm">NEW CLIENT PERCENTAGE</p>
            </div>
            <div className="text-center">
              <p className="text-[60px] font-[100]">
                <CountUp start={0} end={90} duration={2.5} suffix="%" />
              </p>
              <p className="text-sm">NPS SCORE</p>
            </div>
            <div className="text-center">
              <p className="text-[60px] font-[100]">
                <CountUp start={0} end={5} duration={2.5} />
              </p>
              <p className="text-sm">NEW MARKET</p>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap flex w-full flex-col items-center gap-6 py-[10rem] text-center">
        <p className="mx-auto w-[70%] text-center text-5xl font-[300]">
          Frontier Vista is a business and technology consulting firm delivering
          bold software, data, and AI solutions to accelerate and scale business
          growth.
        </p>
        <button className="mt-6 flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 text-xl font-normal text-white hover:bg-[#479DDE] focus:outline-none">
          Let&apos;s Partner to Transform Your Business Today{" "}
          <LuMoveRight className="ml-5 text-2xl" />
        </button>
      </div>

      <div className="wrap pb-[5rem]">
        <div className="flex flex-col items-center justify-center text-center">
          <h4 className="text-5xl font-[500]">How we support you</h4>
          <p className="mt-4 text-xl font-[200] lg:w-[70%]">
            We provide comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {supportItems.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[200px] gap-8 rounded-lg bg-[#EFF6FF] p-10"
            >
              <div
                className={`flex h-[60px] w-[140px] items-center justify-center rounded`}
                style={{
                  background: item.color,
                }}
              >
                <Image
                  src={item.image}
                  width={1000}
                  height={1000}
                  alt=""
                  className="h-[35px] w-[35px] object-contain"
                />
              </div>
              <div>
                <h5 className="text-xl">{item.title}</h5>
                <p className="font-[300]">{item.description}</p>
                <button className="mt-6 flex h-[55px] w-fit cursor-pointer items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
                  {item.btn} <LuMoveRight className="ml-5 text-2xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap overflow-hidden pt-[5rem] pb-[8rem] text-center">
        <h4 className="mb-3 text-4xl font-[500]">Our Clients</h4>
        <p className="text-xl font-[200]">
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

        <button className="mx-auto mt-16 flex h-[55px] w-fit cursor-pointer items-center rounded-[10px] bg-[#479DDE] px-6 text-xl font-normal text-white hover:bg-[#479DDE] focus:outline-none">
          Explore Our Portfolio <LuMoveRight className="ml-5 text-2xl" />
        </button>
      </div>

      <div className="wrap pt-[5rem] pb-[8rem] text-center">
        <h4 className="mb-3 text-4xl font-[500]">Testimonies</h4>
        <p className="mx-auto mb-20 text-xl font-[200] lg:w-1/2">
          Real stories from satisfied customers who have experienced the quality
          and impact of our work firsthand.
        </p>

        <CarouselTestimonials />

        <button className="mx-auto mt-16 flex h-[55px] w-fit cursor-pointer items-center rounded-[10px] bg-[#479DDE] px-6 text-xl font-normal text-white hover:bg-[#479DDE] focus:outline-none">
          Request a Free Consultation <LuMoveRight className="ml-5 text-2xl" />
        </button>
      </div>

      <div className="mt-[3rem] bg-[#D0F4FF]">
        <div className="wrap py-[6rem]">
          <h4 className="mb-[4rem] text-center text-4xl font-[500]">
            Trending Insights
          </h4>

          <div className="mt-5 mb-8 grid grid-cols-3 gap-12">
            <div className="flex flex-col">
              <Image src="/insight1.png" alt="" width={400} height={200} />
              <div className="mt-2 flex items-center justify-between">
                <div className="rounded-3xl bg-white px-4 py-1">
                  <p className="text-xs text-[#479DDE]">
                    IT Strategy & Governance
                  </p>
                </div>
                <p className="text-xs text-[#479DDE]">January 8, 2023</p>
              </div>

              <p className="mt-8 text-xl text-[#23557A]">
                Key Drivers of Scalable, Secure, and Future-Ready IT Solutions
              </p>

              <p className="mt-2 text-xl text-[#479DDE] underline">Read More</p>
            </div>

            <div className="flex flex-col">
              <Image src="/insight2.png" alt="" width={400} height={200} />
              <div className="mt-2 flex items-center justify-between">
                <div className="rounded-3xl bg-white px-4 py-1">
                  <p className="text-xs text-[#479DDE]">
                    Operationalizing AI with DevSecFinOps
                  </p>
                </div>
                <p className="text-xs text-[#479DDE]">January 8, 2023</p>
              </div>

              <p className="mt-8 text-xl text-[#23557A]">
                Balancing Risk, Cost, and Innovation
              </p>

              <p className="mt-2 text-xl text-[#479DDE] underline">Read More</p>
            </div>

            <div className="flex flex-col">
              <Image src="/insight3.png" alt="" width={400} height={200} />
              <div className="mt-2 flex items-center justify-between">
                <div className="rounded-3xl bg-white px-4 py-1">
                  <p className="text-xs text-[#479DDE]">New & Noteworthy</p>
                </div>
                <p className="text-xs text-[#479DDE]">January 8, 2023</p>
              </div>

              <p className="mt-8 text-xl text-[#23557A]">
                Cybersecurity in the Age of Digital Transformation Read More
              </p>

              <p className="mt-2 text-xl text-[#479DDE] underline">Read More</p>
            </div>
          </div>

          <button className="mx-auto mt-18 flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
            View More Insights <LuMoveRight className="ml-5 text-2xl" />
          </button>
        </div>
      </div>

      <div className="wrap pt-[9rem] text-center">
        <h4 className="mb-4 text-4xl font-[500]">
          Certifications & Memberships
        </h4>
        <p className="mx-auto mb-12 w-1/2 text-lg font-[200]">
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
