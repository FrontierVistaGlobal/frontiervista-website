import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: `Partnering with Frontier Vista was one of our best business decisions. Their expertise in the IT space helped us develop a highly effective management system that not only saved us valuable time but also boosted our revenue and enhanced customer satisfaction. Their support has been a game-changer for our business`,
    author: "Tolu (Club Hive)",
  },
  {
    id: 2,
    text: `Transitioning to the cloud and migrating our system with Frontier Vista was seamless. We experienced zero downtime, and our service delivery to patients remained optimal throughout the process. Frontier Vista's expertise and delivery are unparalleled—truly exceptional!`,
    author: "Mr Stephen (Ministry of Health)",
  },
  {
    id: 3,
    text: `Frontier Vista stopped our money drain with smart process solutions. Now, we run smoother operations, deliver faster, and save money. Thanks to their expertise!`,
    author: "Tayo (Toyosab Enterprises)",
  },
  {
    id: 4,
    text: `A faster, reliable and secure logistics was possible with Frontier’s tailored application for SpidLit, They are a truly reliable IT team.`,
    author: " Chief Operations Officer (SpidLit)",
  },
];

const testimonialVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
};

const CarouselTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoplayInterval = useRef<NodeJS.Timeout>(null);
  const autoplayDelay = 5000;

  const startAutoplay = () => {
    autoplayInterval.current = setInterval(goToNext, autoplayDelay);
  };

  const stopAutoplay = () => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
    }
  };

  const resetAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    resetAutoplay();
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    resetAutoplay();
  };

  const goToIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    resetAutoplay();
  };

  const handleMouseEnter = () => {
    stopAutoplay();
  };

  const handleMouseLeave = () => {
    startAutoplay();
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  });

  return (
    <div
      className="wrap relative min-h-[400px] w-full overflow-hidden rounded-lg bg-white p-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={testimonialVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute top-0 left-0 flex min-h-[350px] w-full flex-col items-center justify-center rounded-xl bg-[#EFF6FF] px-4 md:px-[10%] text-center"
        >
          <Image
            src="/quote.svg"
            alt=""
              height={60}
            width={60}
            className="absolute top-4 left-4 md:top-18 md:left-20 sm:top-6 sm:left-6 "
            // height={100}
            // width={100}
            // // className="absolute top-18 left-20 z-0"
            
            // className="absolute  top-5 left-5 md:top-18 md:left-20 "
          />

          <span className="z-10 text-base md:text-xl font-light">
            {testimonials[currentIndex].text}
          </span>

          <p className=" z-10 mt-10 md:mt-8 text-lg md:text-xl font-semibold text-gray-800">
            {testimonials[currentIndex].author}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-1/2 left-4 md:left-6 z-10 -translate-y-1/2 transform">
        <button
          onClick={goToPrevious}
          className="cursor-pointer rounded-full bg-white p-2 text-gray-500 hover:bg-gray-200"
        >
          <FaChevronLeft />
        </button>
      </div>

      <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2 transform">
        <button
          onClick={goToNext}
          className="cursor-pointer rounded-full bg-white p-2 text-gray-500 hover:bg-gray-200"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="absolute bottom-1 left-[46%] z-20 mt-4 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 cursor-pointer rounded-full ${
              currentIndex === index
                ? "w-[35px] bg-[#97D2F7]"
                : "bg-[#DAEBF8] hover:bg-[#97D2F7]"
            } `}
            onClick={() => goToIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselTestimonials;
