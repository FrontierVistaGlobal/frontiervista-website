import React from "react";
import { LuMoveRight } from "react-icons/lu";

export default function Button({
  text = "Contact Our Cloud Experts for a Consultation",
  className,
  onClick,
}: {
  text?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`mt-5 flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white hover:bg-[#479DDE] focus:outline-none ${className}`}
    >
      {text} <LuMoveRight className="ml-5 text-2xl" />
    </button>
  );
}
