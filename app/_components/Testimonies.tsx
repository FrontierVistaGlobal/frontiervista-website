import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: `Partnering with Frontier Vista was one of our best business decisions. Their
    expertise in the IT space helped us develop a highly effective management
    system that not only saved us valuable time but also BOOSTED OUR
    REVENUE AND ENHANCED CUSTOMER SATISFACTION. Their support
    has been a game-changer for our business.`,
    author: "Tolu (Club Hive)",
  },
  {
    id: 2,
    text: `Frontier Vista's team is incredibly knowledgeable and responsive. They truly
    understand our needs and have provided solutions that have significantly
    improved our operational efficiency. We highly recommend their services.`,
    author: "Kwame (Tech Solutions Inc.)",
  },
  {
    id: 3,
    text: `We've been working with Frontier Vista for over a year now, and their commitment
    to excellence is evident in everything they do. Their proactive approach
    and dedication to our success make them a valuable partner.`,
    author: "Aisha (Global Innovations)",
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
  const autoplayInterval = useRef<any>(null);
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
  }, []);

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
          className="absolute top-0 left-0 flex min-h-[350px] w-full flex-col items-center justify-center rounded-xl bg-[#EFF6FF] px-[10%] text-center"
        >
          <Image
            src="/quote.svg"
            alt=""
            height={100}
            width={100}
            className="absolute top-18 left-20 z-0"
          />

          <span className="z-10 text-xl font-light">
            {testimonials[currentIndex].text}
          </span>

          <p className="text-md z-10 mt-8 text-xl font-semibold text-gray-800">
            {testimonials[currentIndex].author}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-1/2 left-6 z-10 -translate-y-1/2 transform">
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
