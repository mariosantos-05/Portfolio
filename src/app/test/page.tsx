// src/app/test/page.tsx
'use client';

import React from 'react';
import DragContainerBox from '@/components/DragContainerBox'; // Adjust import
import { DndContext } from '@dnd-kit/core';
import { useDraggable, useDndMonitor } from '@dnd-kit/core';

const centerX = window.innerWidth / 2 - 150; // 150 = half width of your box approx
const centerY = window.innerHeight / 2 - 100; // 100 = half height approx

export default function TestPage() {
  return (
    <DndContext>
      <div className="relative w-screen h-screen overflow-hidden">
        <DragContainerBox
          name="Window 1"
          initialPosition={{ x: centerX, y: centerY }}
          onClose={() => console.log('close')}
        >
          <p>Hello from draggable box!</p>
        </DragContainerBox>
      </div>
    </DndContext>
  );
}
