import React, { ReactNode } from 'react';


interface ContainerBoxProps {
    name: string;
    onClose: () => void;
    children?: ReactNode;
}

export default function ContainerBox({ name, children }: ContainerBoxProps) {
    return (
        <div className="relative bg-[#D7F3FF] rounded-[22px] shadow outline-[4px] outline-[#1DA4A4] outline-offset-[0px]">
            <div className="relative w-full  h-[40px] bg-[#1DA4A4] rounded-t-[21px]">
                {/* Title */}
                <h2 className="absolute left-[3%] top-[15%]  text-amber-50 text-2xl">{name}</h2>
            </div>
            {/* Optional children */}
            <div className=" m-3 text-gray-700">
                {children}
            </div>
        </div>
    );
}
