import React, { ReactNode, useRef, useState, useEffect } from 'react';
import { useDraggable, useDndMonitor } from '@dnd-kit/core';

interface DragContainerBoxProps {
  name: string;
  onClose: () => void;
  children?: ReactNode;
  initialPosition?: { x: number; y: number };
}

export default function DragContainerBox({
  name,
  children,
  onClose,
  initialPosition = { x: 0, y: 0 },
}: DragContainerBoxProps) {
  const [position, setPosition] = useState(initialPosition);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPosition(initialPosition);
  }, [initialPosition]);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: name,
    data: { name },
  });

  useDndMonitor({
    onDragEnd(event) {
      if (event.active.id === name && event.delta) {
        setPosition((prev) => {
          const newX = prev.x + event.delta.x;
          const newY = prev.y + event.delta.y;

          const box = boxRef.current;
          if (!box) return prev;

          const boxRect = box.getBoundingClientRect();
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;

          const maxX = viewportWidth - boxRect.width;
          const maxY = viewportHeight - boxRect.height;

          const clampedX = Math.max(0, Math.min(newX, maxX));
          const clampedY = Math.max(0, Math.min(newY, maxY));

          return { x: clampedX, y: clampedY };
        });
      }
    },
  });

  const dynamicTransform = transform
    ? `translate3d(${position.x + transform.x}px, ${position.y + transform.y}px, 0)`
    : `translate3d(${position.x}px, ${position.y}px, 0)`;

  const style = {
    transform: dynamicTransform,
    position: 'absolute' as const,
    zIndex: 10,
  };

  return (
    <div
      ref={(el) => {
        setNodeRef(el);
        boxRef.current = el;
      }}
      style={style}
      className="bg-[#D7F3FF] rounded-[22px] ring-[4px] ring-[#1DA4A4] dark:bg-[#31466A] dark:outline-[#FDEBA1] shadow-lg/40 shadow-cyan-900 dark:shadow-cyan-500"
    >
      {/* Drag handle */}
      <div className="relative w-full h-[40px] bg-[#1DA4A4] rounded-t-[19px] dark:bg-[#173061]">
        <div
          {...attributes}
          {...listeners}
          className="absolute inset-0 cursor-move z-0 rounded-t-[19px]"
        ></div>

        <h2 className="absolute left-[3%] top-[15%] text-amber-50 text-2xl dark:text-[#FDEBA1] z-10 pointer-events-none">
          {name}
        </h2>

        <button
          className="absolute right-[3%] top-[15%] text-amber-50 text-2xl dark:text-[#FDEBA1] z-10 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          X
        </button>
      </div>

      <div className="p-3">{children}</div>
    </div>
  );
}
