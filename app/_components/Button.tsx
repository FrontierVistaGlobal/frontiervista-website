import { useRouter } from "next/navigation";
import React from "react";
import { LuMoveRight } from "react-icons/lu";

export default function Button({
  text = "Contact Our Cloud Experts for a Consultation",
  className,
  onClick,
  showArrow = true,
  path = "/",
}: {
  text?: string;
  className?: string;
  onClick?: () => void;
  showArrow?: boolean;
  path?: string;
}) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        if (path) {
          router.push(path);
        } else if (onClick) {
          onClick();
        }
      }}
      className={`mt-5 flex h-[55px] w-fit cursor-pointer items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white focus:outline-none ${className}`}
    >
      {text}
      {showArrow && <LuMoveRight className="ml-5 text-2xl" />}
    </button>
  );
}
