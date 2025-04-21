'use client'

import { useState } from 'react'
import ContainerBox from '@/components/container'

export default function Home() {
  const [showBox, setShowBox] = useState(true)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Static Site Example</h1>

      {showBox && (
        <ContainerBox
          name="Home"
          onClose={() => setShowBox(false)}
        >
          <p>This is the content inside the container box.</p>
          <p>This is the content inside the container box.</p>
          <p>This is the content inside the container box.</p>
          <p>This is the content inside the container box.</p>
          <p>This is the content inside the container box.</p>
        </ContainerBox>
      )}
    </div>
  )
}
