import Image from "next/image";
import { LuMoveRight } from "react-icons/lu";

const HealthCare = () => {
  return (
    <div className="my-20 bg-[#011D31]">
      <div className="wrap flex flex-col items-center justify-center px-5 py-[4rem] md:py-[10rem]">
        <div className="relative flex w-full justify-center overflow-hidden py-24 text-center">
          <div className="hidden md:flex">
            <div className={`absolute top-4 w-full text-sm`}>
              <div className="flex items-center overflow-hidden rounded">
                <div className="font-bold` bg-[#79B3F9] p-3 px-6">CS</div>
                <div className={`bg-[#EFF6FF] p-3 pr-7`}>
                  Consulting and Strategy
                </div>
              </div>
            </div>

            <div className={`absolute top-0 left-[40%] w-full text-sm`}>
              <div className="flex items-center overflow-hidden rounded">
                <div className="font-bold` bg-[#77D7A8] p-3 px-6">TI</div>
                <div className={`bg-[#EFF6FF] p-3 pr-7`}>
                  Technology and System Implementation
                </div>
              </div>
            </div>

            <div className={`absolute w-full text-sm md:top-[60%]`}>
              <div className="flex items-center overflow-hidden rounded">
                <div className="font-bold` bg-[#FF9314] p-3 px-6">CF</div>
                <div className={`bg-[#EFF6FF] p-3 pr-7`}>Cloud and FinOps</div>
              </div>
            </div>

            <div className={`absolute top-[80%] left-[30%] w-full text-sm`}>
              <div className="flex items-center overflow-hidden rounded">
                <div className="font-bold` bg-[#FF4947] p-3 px-6">IS</div>
                <div className={`bg-[#EFF6FF] p-3 pr-7`}>
                  IT Support and Managed Services
                </div>
              </div>
            </div>

            <div className={`absolute top-[60%] left-[70%] w-full text-sm`}>
              <div className="flex items-center overflow-hidden rounded">
                <div className="font-bold` bg-[#B3D13B] p-3 px-6">TU</div>
                <div className={`bg-[#EFF6FF] p-3 pr-7`}>
                  Training and Upskilling
                </div>
              </div>
            </div>
          </div>

          <h4 className="mb-4 text-5xl leading-[60px] font-semibold text-white lg:w-[60%]">
            Transforming Healthcare with EHR Solutions
          </h4>
        </div>

        <div className="flex flex-col items-center gap-14 md:mt-[10rem] md:flex-row">
          <div className="relative md:w-1/2">
            <Image
              width={1000}
              height={1000}
              src="/images/healthcare.png"
              alt="Healthcare"
              className="md:w-[90%]"
            />
          </div>
          <div className="md:w-1/2">
            <p className="font-light text-white">
              We partner with the Ministry of Health to design and implement
              secure, scalable Electronic Health Records (EHR) systems that
              enhance patient care and streamline operations. Our expertise
              spans strategy, system implementation, cloud optimization, IT
              support, and training to ensure seamless adoption and long-term
              success.
            </p>

            <a
              href="#"
              className="mt-5 flex h-full w-full items-center gap-3 font-light text-[#479DDE] underline focus:outline-none"
            >
              <span>Learn more</span>
              <LuMoveRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCare;
