import { useDraggable } from '@dnd-kit/core';
import React, { ReactNode } from 'react';


interface DragContainerBoxProps {
    name: string;
    onClose: () => void;
    children?: ReactNode;
}

export default function DragContainerBox({ name, children, onClose}: DragContainerBoxProps) {
    const {attributes, listeners, setNodeRef, transform } = useDraggable({
        id: name,
        data: {
            name,
        },
    });
    const style = {
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
      };
    
    return (
        <div 
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
    
        className="relative bg-[#D7F3FF] rounded-[22px] shadow outline-[4px] outline-[#1DA4A4] outline-offset-[0px]">
            <div className="relative w-full  h-[40px] bg-[#1DA4A4] rounded-t-[21px]">
                {/* Title */}
                <h2 className="absolute left-[3%] top-[15%]  text-amber-50 text-2xl">{name}</h2>
            </div>

            <div>
                <button
                    className="absolute right-[3%] top-[15%] text-amber-50 text-2xl"
                    onClick={onClose}
                >
                    X
                </button>
            </div>


            {/* Optional children */}
            <div className=" m-3 text-gray-700">
                {children}
            </div>
        </div>
    );
}
