import React from "react";
import { LuMoveRight } from "react-icons/lu";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full">
      <div
        className="relative flex h-[900px] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/digital-sol-bg.png')" }}
      >
        <div
          className="flex h-[350px] w-full flex-col justify-center bg-[#502D0599] text-white"
          style={{
            background:
              "linear-gradient(0deg, rgba(80, 45, 5, 0.6), rgba(80, 45, 5, 0.6)), linear-gradient(270deg, rgba(240, 66, 66, 0.6) 0%, rgba(174, 97, 6, 0.6) 100%)",
          }}
        >
          <div className="wrap">
            <h4 className="mb-6 text-4xl font-semibold">
              Digital Solutions & Development
            </h4>
            <p className="mb-8 font-extralight lg:w-[60%]">
              At FVG, we create cutting-edge digital solutions that empower
              businesses to thrive in the digital landscape. From custom
              software and mobile apps to web and SaaS solutions, we design and
              develop secure, scalable, and high-performance technology tailored
              to your business needs. Our expert team leverages the latest
              technologies, programming languages, and frameworks to
            </p>
            <button className="flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none">
              Get in touch today <LuMoveRight className="ml-5 text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="py-[10rem]">
        <div className="wrap">
          <div className="flex w-full justify-end">
            <h4 className="w-[45%] text-5xl leading-[60px] font-extralight text-[#FF9314]">
              “Technology is best when it brings people together.” -{" "}
              <span className="text-3xl italic">Matt Mullenweg</span>
            </h4>
          </div>

          <div>
            <div className="mt-24 grid gap-1 md:grid-cols-2 lg:grid-cols-3">
              <div
                className="flex h-[450px] flex-col items-center justify-center rounded px-8 text-white"
                style={{
                  background:
                    "linear-gradient(180deg, #FF4848 0%, #FF9314 100%)",
                }}
              >
                <h5 className="mb-5 text-5xl font-light">
                  Digital Branding & Product Design
                </h5>
                <p className="font-extralight">
                  We craft intuitive and visually compelling digital experiences
                  that enhance your brand identity and product engagement. From
                  brand design to UI/UX design to interactive prototypes, we
                  ensure seamless user interactions across all digital
                  touchpoints
                </p>
              </div>

              <div className="h-[450px]">
                <Image
                  src="/images/GDSol10.png"
                  alt=""
                  height={1000}
                  width={1000}
                  className="h-full w-full rounded"
                />
              </div>

              <div className="flex h-[450px] flex-col items-center justify-center rounded bg-[#011D31] px-8 text-white">
                <h5 className="mb-5 text-5xl font-light">
                  Website Design & Development
                </h5>
                <p className="font-extralight">
                  Your website is your digital storefront. Our web development
                  services focus on building modern, responsive, and
                  SEO-optimized websites that deliver outstanding user
                  experiences and support business goals. We utilize
                  cutting-edge technologies to create high-performing web
                  solutions
                </p>
              </div>

              <div className="h-[450px]">
                <Image
                  src="/images/DGSol2.png"
                  alt=""
                  height={1000}
                  width={1000}
                  className="h-full w-full rounded"
                />
              </div>

              <div className="flex h-[450px] flex-col items-center justify-center rounded bg-[#011D31] px-8 text-white">
                <h5 className="mb-5 text-5xl font-light">
                  Web & Mobile App Development
                </h5>
                <p className="font-extralight">
                  Great products start with great design. We craft intuitive,
                  visually compelling digital experiences that enhance brand
                  identity and product engagement. From UI/UX design to
                  interactive prototypes, we ensure seamless user interactions.
                </p>
              </div>

              <div className="h-[450px]">
                <Image
                  src="/images/DGSol3.png"
                  alt=""
                  height={1000}
                  width={1000}
                  className="h-full w-full rounded"
                />
              </div>

              <div className="flex h-[450px] flex-col items-center justify-center rounded bg-[#011D31] px-8 text-white">
                <h5 className="mb-5 text-5xl font-light">
                  Infrastructure & Platform Solutions
                </h5>
                <p className="font-extralight">
                  A strong foundation is key to business success. Our team
                  develop secure, cloud-based infrastructures and scalable
                  platforms that enhance performance, security, and operational
                  efficiency for businesses of all sizes.
                </p>
              </div>

              <div className="h-[450px]">
                <Image
                  src="/images/DGSol4.png"
                  alt=""
                  height={1000}
                  width={1000}
                  className="h-full w-full rounded"
                />
              </div>

              <div className="flex h-[450px] flex-col items-center justify-center rounded bg-[#011D31] px-8 text-white">
                <h5 className="mb-5 text-5xl font-light">
                  Custom API Development
                </h5>
                <p className="font-extralight">
                  Your website is your digital storefront. Our web development
                  services focus on building modern, responsive, and
                  SEO-optimized websites that deliver outstanding user
                  experiences and support business goals.
                </p>
              </div>

              <div className="h-[450px]">
                <Image
                  src="/images/DGSol5.png"
                  alt=""
                  height={1000}
                  width={1000}
                  className="h-full w-full rounded"
                />
              </div>

              <div className="flex h-[450px] flex-col items-center justify-center rounded bg-[#011D31] px-8 text-white">
                <h5 className="mb-5 text-5xl font-light">SaaS Integration</h5>
                <p className="font-extralight">
                  Streamline your operations with seamless SaaS integration. We
                  help businesses optimize and integrate cloud-based solutions
                  that enhance collaboration, boost efficiency, and drive
                  digital transformation.
                </p>
              </div>

              <div className="h-[450px]">
                <Image
                  src="/images/DGSol6.png"
                  alt=""
                  height={1000}
                  width={1000}
                  className="h-full w-full rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative flex h-[1100px] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('images/DGSol-bg.png')" }}
      >
        <div className="flex h-[250px] w-full flex-col justify-end bg-white pb-16 text-white">
          <div className="wrap relative lg:min-w-[1200px]">
            <div className="flex w-full items-center justify-between">
              <div>
                <h4 className="mb-6 w-[60%] text-4xl font-semibold text-[#FF9314]">
                  Let&apos;s accelerate your growth and elevate your brand
                </h4>
                <p className="mt-4 text-[#011D31]">
                  Ready to connect your systems and unlock new possibilities?
                </p>
              </div>

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
