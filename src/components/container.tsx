import React, { ReactNode } from 'react';


interface ContainerBoxProps {
    name: string;
    onClose: () => void;
    children?: ReactNode;
}

export default function ContainerBox({ name, onClose, children }: ContainerBoxProps) {
    return (
        <div className="relative bg-[#D7F3FF] rounded-[22px] shadow  outline outline-[4px] outline-[#1DA4A4] outline-offset-[0px]">
            <div className="relative w-full  h-[40px] bg-[#1DA4A4] rounded-t-[21px]">

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute right-[5%] top-[15%] text-[#D7F3FF] hover:text-white text-lg font-bold rounded-full  transition duration-300 ease-in-out"
                >
                    ×
                </button>

                {/* Title */}
                <h2 className="absolute left-[5%] top-[15%]">{name}</h2>
            </div>
            {/* Optional children */}
            <div className=" m-3 text-gray-700">
                {children}
            </div>
        </div>
    );
}
