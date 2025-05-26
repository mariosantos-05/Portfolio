import React, { ReactNode } from 'react';

interface ContainerBoxProps {
  name: string;
  onClose: () => void;
  children?: ReactNode;
}

export default function ContainerBox({ name, children }: ContainerBoxProps) {
  return (
    <div className="relative bg-[#D7F3FF] rounded-[22px] ring-[4px] ring-[#1DA4A4] outline-offset-[0px] dark:bg-[#31466A] dark:outline-[#FDEBA1]  shadow-lg/40 shadow-cyan-900 dark:shadow-cyan-500 hidden md:block">
      <div className="relative w-full  h-[40px] bg-[#1DA4A4] rounded-t-[19px] dark:bg-[#173061] ">
        {/* Title */}
        <h2 className="absolute left-[5%] top-[15%]  text-amber-50 text-2xl  dark:text-[#FDEBA1]">
          {name}
        </h2>
      </div>

      {/* Optional children */}
      <div className=" m-3">{children}</div>
    </div>
  );
}
