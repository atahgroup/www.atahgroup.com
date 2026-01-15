import React from "react";

export const RainboxGradientBorderButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      className="relative group overflow-hidden rounded-full p-[3px] focus:outline-none"
      onClick={onClick}
    >
      <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff0000_0%,#ff8800_15%,#ffff00_30%,#00ff00_45%,#00ffff_60%,#0000ff_75%,#8800ff_90%,#ff0000_100%)] blur-md"></div>

      <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff0000_0%,#ff8800_15%,#ffff00_30%,#00ff00_45%,#00ffff_60%,#0000ff_75%,#8800ff_90%,#ff0000_100%)]"></div>

      <div className="relative z-10 flex items-center justify-center bg-white px-8 py-3 rounded-full text-black transition-all group-hover:bg-white/80 group-hover:underline underline-offset-4 cursor-pointer">
        {children}
      </div>
    </button>
  );
};
