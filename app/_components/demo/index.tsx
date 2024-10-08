import Image from "next/image";
import React from "react";

export const Demo = () => {
  return (
    <div className="w-full bg-background h-min flex justify-center items-center border-2 border-black">
      <Image
        src={`/images/board.png`}
        alt="demo-puzzle-board-picture"
        width={1200}
        height={1200}
        priority
        className="w-full h-full object-contain"
        draggable={false}
      />
    </div>
  );
};
