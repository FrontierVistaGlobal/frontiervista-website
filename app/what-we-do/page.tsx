import Image from "next/image";
import React from "react";
import { LuMoveRight } from "react-icons/lu";

export default function page() {
  const services = [
    {
      title: "IT Strategy & Consulting",
      image: "/images/services1.png",
    },
    {
      title: "Digital Solutions & Development",
      image: "/images/services2.png",
    },
    {
      title: "Data Intelligence & Advanced Analytics",
      image: "/images/services3.png",
    },
    {
      title: "Operational Excellence",
      image: "/images/services4.png",
    },
    {
      title: "Cloud Innovation Hub",
      image: "/images/services5.png",
    },
    {
      title: "Resource Management & Procurement",
      image: "/images/services6.png",
    },
  ];

  return (
    <div>
      <div
        className="relative flex h-[500px] flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/wedo.png')" }}
      >
        <h4 className="w-[40%] text-center font-semibold text-white lg:text-5xl">
          Transforming Businesses with Bold, Customized Tech Solutions
        </h4>

        <button className="mx-auto mt-18 flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 py-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
          Discover How We Can Transform Your Business{" "}
          <LuMoveRight className="ml-5 text-2xl" />
        </button>
      </div>

      <div className="wrap my-30 flex items-center justify-between py-12">
        <div className="w-1/2 px-10">
          <h5 className="mb-8 text-5xl font-extralight text-[#011D31]">
            Understanding your needs is at the heart of what we do.{" "}
          </h5>
          <p className="mb-10">
            We customize our approach to design, build, and deliver solutions
            that align with your goals. Through collaboration, we create lasting
            partnerships that drive sustainable impact.
          </p>
          <button className="flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
            Discover More <LuMoveRight className="ml-5 text-2xl" />
          </button>
        </div>
        <div>
          <Image
            src="/wedo1.png"
            alt="We Do"
            width={500}
            height={500}
            className="h-[400px] w-[500px] rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="bg-[#D0F4FF] py-[8rem]">
        <div className="wrap">
          <div className="flex flex-col items-center text-center">
            <h4 className="mb-4 text-5xl font-semibold text-[#122231]">
              Explore our services
            </h4>
            <p className="mb-10 text-xl font-extralight text-[#3D4F60] lg:w-1/2">
              We offer tailored solutions that unlock potential, accelerate
              innovation, and drive sustainable growth for lasting impact.
            </p>

            <div className="mt-[2rem] grid w-full grid-cols-1 gap-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-md shadow-md transition-shadow duration-300 hover:shadow-lg"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="h-60 w-full object-cover transition-opacity duration-300 hover:opacity-80"
                    width={500}
                    height={500}
                  />
                  <div className="absolute bottom-0 left-0 h-22 w-full bg-black p-4 opacity-20"></div>
                  <h3 className="absolute bottom-0 z-10 w-2/3 p-4 text-left text-lg font-extralight text-white">
                    {service.title}
                  </h3>
                  <a
                    href="#"
                    className="absolute top-0 left-0 h-full w-full focus:outline-none"
                  >
                    <span className="sr-only">
                      Learn more about {service.title}
                    </span>
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-26 w-2/3 text-3xl font-[400] text-[#011D31]">
              Our tailored solutions are delivered through a flexible service
              approach encompassing both industry-specific Vertical Services,
              cross-industry Horizontal Services, and integrated Hybrid
              Services.
            </p>
          </div>
        </div>
      </div>

      <ServiceCategories />
      <ServiceSpectrum />
    </div>
  );
}

const ServiceCategories = () => {
  return (
    <div className="wrap flex flex-col items-center justify-center py-[10rem]">
      <h4 className="mb-1 text-5xl leading-12 font-semibold text-[#122231]">
        Our Service Approach
      </h4>
      <h4 className="mb-4 w-2/3 text-center text-5xl leading-14 font-semibold text-[#122231]">
        Tailored Expertise for Your Success at Frontier Vista
      </h4>
      <p className="mt-5 mb-28 text-center text-xl font-extralight text-[#3D4F60] lg:w-2/3">
        At Frontier Vista, we understand that achieving your business goals
        requires a nuanced and adaptable approach. Our expertise is around these
        service models: advisory, consulting, delivery, and managed services,
        which are applied through our service delivery methods industry-focused
        vertical services, technology-focused horizontal services, and
        integrated hybrid services
      </p>

      <div className="flex w-full items-center">
        <div className="relative w-1/2">
          <Image
            width={500}
            height={500}
            src="/images/vertical.png"
            alt="Vertical Services"
            className="h-[400px] w-full rounded object-cover"
          />
        </div>
        <div className="relative h-fit w-1/2 bg-[#F8ECFF] px-10 pt-[3rem] pb-10">
          <div className="absolute top-[-25px] w-fit rounded bg-[#9354B8] px-8 py-4">
            <h3 className="text-xl font-light text-white">Vertical Services</h3>
          </div>
          <p className="text-md font-light text-[#011D31]">
            We go beyond general IT services by specializing in key industries.
            Our teams develop a deep understanding of the unique challenges and
            opportunities within sectors like health, FinTech & banking,
            e-commerce, education, and the public domain. By focusing on these
            verticals, we bring deep industry knowledge and expertise that
            address your industry needs, driving compliance, fostering
            innovation, and enabling sustainable growth
          </p>
        </div>
      </div>

      <div className="mt-30 flex w-full items-center">
        <div className="relative h-fit w-1/2 bg-[#FFEAD091] px-10 pt-[3rem] pb-10">
          <div className="absolute top-[-25px] w-fit rounded bg-[#FF9314] px-8 py-4">
            <h3 className="text-xl font-light text-white">
              Horizontal Services
            </h3>
          </div>
          <p className="text-md font-light text-[#011D31]">
            Our horizontal services provide essential technology capabilities
            that are critical for success across all sectors. We offer deep
            expertise in core areas such as IT infrastructure, cybersecurity,
            data analytics, and cloud solutions. We focus on optimizing these
            fundamental aspects of your business, streamlining processes,
            improving efficiency, and positively impacting your bottom line,
            regardless of your industry.
          </p>
        </div>
        <div className="relative w-1/2">
          <Image
            width={500}
            height={500}
            src="/images/horizontal.png"
            alt="Vertical Services"
            className="h-[400px] w-full rounded object-cover"
          />
        </div>
      </div>

      <div className="mt-30 flex w-full items-center">
        <div className="relative w-1/2">
          <Image
            width={500}
            height={500}
            src="/images/hybrid.png"
            alt="Vertical Services"
            className="h-[400px] w-full rounded object-cover"
          />
        </div>
        <div className="? relative h-fit w-1/2 bg-[#EFF6FF] px-10 pt-[3rem] pb-10">
          <div className="absolute top-[-25px] w-fit rounded bg-[#23557A] px-8 py-4">
            <h3 className="text-xl font-light text-white">Hybrid Services</h3>
          </div>
          <p className="text-md font-light text-[#011D31]">
            For truly comprehensive solutions, our hybrid services integrate our
            deep vertical knowledge with our specialized horizontal
            capabilities. This powerful combination allows us to create
            customized solutions that address both your industry&apos;s unique
            demands and your broader technology needs.
          </p>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center justify-center gap-8 text-center lg:w-2/3">
        <p className="mt-6 text-xl font-light text-[#3D4F60]">
          At Frontier Vista, our commitment is to provide personalized,
          innovative, and sustainable solutions that empower you to thrive in
          the digital age
        </p>
        <h4 className="text-3xl font-medium">
          Let&apos;s explore how our tailored service approach can unlock your
          full potential.
        </h4>
      </div>
    </div>
  );
};

const ServiceSpectrum = () => {
  const serviceTags = [
    {
      code: "CS",
      label: "Consulting and Strategy",
      color: "bg-[#79B3F9]",
      tagColor: "bg-[#79B3F9]",
      textColor: "text-black",
    },
    {
      code: "TI",
      label: "Technology and System Implementation",
      color: "bg-[#FFFFFF1A]",
      tagColor: "bg-[#77D7A8]",
      textColor: "text-white",
    },
    {
      code: "CF",
      label: "Cloud and FinOps",
      color: "bg-[#EFF6FF]",
      tagColor: "bg-[#FF9314]",
      textColor: "text-black",
    },
    {
      code: "BD",
      label: "Brand and Product Design",
      color: "bg-[#1a3447]",
      tagColor: "bg-[#A995F4]",
      textColor: "text-white",
    },
    {
      code: "DS",
      label: "Digital Solution Development",
      color: "bg-[#EFF6FF]",
      tagColor: "bg-[#FFD602]",
      textColor: "text-black",
    },
    {
      code: "CM",
      label: "Change Management",
      color: "bg-[#FFFFFF1A]",
      tagColor: "bg-[#27BD5A]",
      textColor: "text-white",
    },
    {
      code: "CY",
      label: "Cybersecurity",
      color: "bg-[#EFF6FF]",
      tagColor: "bg-[#F3C753]",
      textColor: "text-black",
    },
    {
      code: "IO",
      label: "IT Operations",
      color: "bg-[#F9F9F91A]",
      tagColor: "bg-[#EC8894]",
      textColor: "text-white",
    },
    {
      code: "DI",
      label: "Data Management and Integration",
      color: "bg-[#EFF6FF]",
      tagColor: "bg-[#9DA8F5]",
      textColor: "text-black",
    },
    {
      code: "IS",
      label: "IT Support and Managed Services",
      color: "bg-[#EFF6FF]",
      tagColor: "bg-[#FF4947]",
      textColor: "text-black",
    },
    {
      code: "PM",
      label: "Project Management and Delivery",
      color: "bg-[#F9F9F91A]",
      tagColor: "bg-[#27BD5A]",
      textColor: "text-white",
    },
    {
      code: "AI",
      label: "Artificial Intelligence and Machine Learning",
      color: "bg-[#F9F9F91A]",
      tagColor: "bg-[#79B3F9]",
      textColor: "text-white",
    },
    {
      code: "SR",
      label: "Staff Recruitment",
      color: "bg-[#EFF6FF]",
      tagColor: "bg-[#EC8894]",
      textColor: "text-black",
    },
    {
      code: "TU",
      label: "Training and Upskilling",
      color: "bg-[#EFF6FF]",
      tagColor: "bg-[#B3D13B]",
      textColor: "text-black",
    },
    {
      code: "VR",
      label: "Visualization and Reporting",
      color: "bg-[#F9F9F91A]",
      tagColor: "bg-[#F3C753]",
      textColor: "text-white",
    },
    {
      code: "PL",
      label: "Procurement and Licensing",
      color: "bg-[#EFF6FF]",
      tagColor: "bg-[#FFD602]",
      textColor: "text-black",
    },
  ];
  return (
    <div className="border-b-[5px] border-[#eee] bg-[#011D31] py-[10rem]">
      <div className="wrap flex flex-col items-center justify-center">
        <h4 className="mb-4 text-5xl font-semibold text-white">
          Our Service Spectrum
        </h4>
        <p className="mb-28 text-center text-xl font-extralight text-white lg:w-[60%]">
          Our comprehensive service spectrum encompasses a wide range of
          tailored solutions within Our Services to meet your unique needs.
          Explore the specific areas where we can drive impactful result for
          your business
        </p>

        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full items-center gap-2">
            {serviceTags.slice(0, 3).map((tag, index) => (
              <div
                key={index}
                className={`relative w-full rounded-md shadow-md ${tag.color} text-white`}
                // style={{ transform: `skewY(${tag.angle})` }}
              >
                <div className="flex h-full items-center gap-3">
                  <div
                    className={`${tag.tagColor} h-full p-4 px-6 font-bold text-black`}
                  >
                    {tag.code}
                  </div>
                  <div className={`${tag.textColor}`}>{tag.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto flex w-[95%] items-center gap-2">
            {serviceTags.slice(3, 6).map((tag, index) => (
              <div
                key={index}
                className={`relative w-full rounded-md shadow-md ${tag.color} text-black`}
                // style={{ transform: `skewY(${tag.angle})` }}
              >
                <div className="flex h-full items-center gap-3">
                  <div className={`${tag.tagColor} h-full p-4 px-6 font-bold`}>
                    {tag.code}
                  </div>
                  <div className={`${tag.textColor}`}>{tag.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto flex w-[90%] items-center gap-2">
            {serviceTags.slice(6, 9).map((tag, index) => (
              <div
                key={index}
                className={`relative w-full rounded-md shadow-md ${tag.color} text-black`}
                // style={{ transform: `skewY(${tag.angle})` }}
              >
                <div className="flex h-full items-center gap-3">
                  <div className={`${tag.tagColor} h-full p-4 px-6 font-bold`}>
                    {tag.code}
                  </div>
                  <div className={`${tag.textColor}`}>{tag.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto flex w-[80%] items-center gap-2">
            {serviceTags.slice(9, 11).map((tag, index) => (
              <div
                key={index}
                className={`relative w-full rounded-md shadow-md ${tag.color} text-black`}
                // style={{ transform: `skewY(${tag.angle})` }}
              >
                <div className="flex h-full items-center gap-3">
                  <div className={`${tag.tagColor} h-full p-4 px-6 font-bold`}>
                    {tag.code}
                  </div>
                  <div className={`${tag.textColor}`}>{tag.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto flex w-[70%] items-center gap-2">
            {serviceTags.slice(11, 13).map((tag, index) => (
              <div
                key={index}
                className={`relative w-full rounded-md shadow-md ${tag.color} text-black`}
                // style={{ transform: `skewY(${tag.angle})` }}
              >
                <div className="flex h-full items-center gap-3">
                  <div className={`${tag.tagColor} h-full p-4 px-6 font-bold`}>
                    {tag.code}
                  </div>
                  <div className={`${tag.textColor}`}>{tag.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto flex w-[60%] items-center gap-2">
            {serviceTags.slice(13, 15).map((tag, index) => (
              <div
                key={index}
                className={`relative w-full rounded-md shadow-md ${tag.color} text-black`}
                // style={{ transform: `skewY(${tag.angle})` }}
              >
                <div className="flex h-full items-center gap-3">
                  <div className={`${tag.tagColor} h-full p-4 px-6 font-bold`}>
                    {tag.code}
                  </div>
                  <div className={`${tag.textColor}`}>{tag.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto flex w-[40%] items-center gap-2">
            {serviceTags.slice(15).map((tag, index) => (
              <div
                key={index}
                className={`relative w-full rounded-md shadow-md ${tag.color} text-black`}
                // style={{ transform: `skewY(${tag.angle})` }}
              >
                <div className="flex h-full items-center gap-3">
                  <div className={`${tag.tagColor} h-full p-4 px-6 font-bold`}>
                    {tag.code}
                  </div>
                  <div className={`${tag.textColor}`}>{tag.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
