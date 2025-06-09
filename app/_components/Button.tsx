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
  hideMobileArrow = false,
}: {
  text?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  showArrow?: boolean;
  path?: string;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  hideMobileArrow?: boolean;
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
      className={`md:text-md mt-5 text-sm ${loading ? "cursor-not-allowed" : "cursor-pointer"} flex min-h-[55px] w-fit items-center rounded-[10px] bg-[#479DDE] px-6 py-3 font-normal text-white focus:outline-none ${className}`}
    >
      {text}
      {showArrow && (
        <LuMoveRight
          className={`ml-5 text-2xl ${hideMobileArrow ? "hidden md:flex" : ""}`}
        />
      )}
    </button>
  );
}
