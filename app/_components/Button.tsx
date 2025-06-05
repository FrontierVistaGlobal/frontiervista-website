import { useRouter } from "next/navigation";
import React from "react";
import { LuMoveRight } from "react-icons/lu";

export default function Button({
  text = "Contact Our Cloud Experts for a Consultation",
  className,
  onClick,
  showArrow = true,
  path = "/",
  loading = false,
  type = "button",
}: {
  text?: string;
  className?: string;
  onClick?: (e: any) => void;
  showArrow?: boolean;
  path?: string;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
}) {
  const router = useRouter();
  return (
    <button
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        } else {
          router.push(path);
        }
      }}
      type={type}
      disabled={loading}
      className={`mt-5 ${loading ? "cursor-not-allowed" : "cursor-pointer"} flex h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 font-normal text-white focus:outline-none ${className}`}
    >
      {text}
      {showArrow && <LuMoveRight className="ml-5 text-2xl" />}
    </button>
  );
}
