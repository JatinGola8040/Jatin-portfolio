import React from "react";

const Button = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-10 sm:h-12 w-full md:w-48 overflow-hidden rounded-3xl p-[1px] focus:outline-none transform hover:scale-105 hover:shadow-[0_0_18px_rgba(115,169,255,0.40)] transition-all duration-300 ease-in-out"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,white_0%,blue_80%,lightblue_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-3xl
            bg-slate-900/[0.8] px-5 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        <span className="font-extrabold">
          {title}</span>
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default Button;
