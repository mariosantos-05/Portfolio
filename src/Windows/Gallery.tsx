'use client'; // if using inside an app directory and you need interaction

import Image from 'next/image';
import React from 'react';

const images = [
  {
    src: '/Illustrations/blue.png',
    alt: 'Blue Illustration of a sunrise',
    description: 'Blue Illustration',
  },
  {
    src: '/Illustrations/kiki.png',
    alt: 'Kiki Illustration of a sunrise',
    description: 'Kiki Illustration',
  },
  {
    src: '/Illustrations/arale.png',
    alt: 'Arale Illustration of a sunrise',
    description: 'Arale Illustration',
  },
  {
    src: '/Illustrations/perl.jpg',
    alt: 'Perl Illustration of a sunrise',
    description: 'Perl Illustration',
  },
  {
    src: '/Illustrations/hatsune.jpeg',
    alt: 'Hatsune Illustration of a sunrise',
    description: 'Hatsune Illustration',
  },
  {
    src: '/Illustrations/lol.png',
    alt: 'LOL Illustration of a sunrise',
    description: 'LOL Illustration',
  },
  {
    src: '/Illustrations/power.png',
    alt: 'Power Illustration of a sunrise',
    description: 'Power Illustration',
  },
  {
    src: '/Illustrations/Llis.jpeg',
    alt: 'Llis Illustration of a sunrise',
    description: 'Llis Illustration',
  },
  {
    src: '/Illustrations/butterfly.png',
    alt: 'Butterfly Illustration of a sunrise',
    description: 'Butterfly Illustration',
  },
];

type GalleryProps = {
  onImageClick: (img: {
    src: string;
    alt?: string;
    description: string;
  }) => void;
};

const Gallery: React.FC<GalleryProps> = ({ onImageClick }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div className="min-w-[860px] min-h-[550px] p-6 rounded shadow-lg overflow-hidden">
        <div className="flex flex-col mb-6">
          <h1 className="text-4xl text-black dark:text-white">
            I love drawings and art in general.
          </h1>
          <h2 className="text-2xl text-black dark:text-white">
            Here are some of my most cherished works!
          </h2>
        </div>

        <div className="h-px bg-black dark:bg-[#FDEBA1] my-4" />

        <div className="overflow-y-auto max-h-[550px] pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          <h1 className="text-3xl text-black dark:text-[#FDEBA1] mb-4">
            Digital Illustration
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] w-full rounded overflow-hidden cursor-pointer group"
                onClick={() => onImageClick(img)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  placeholder="blur"
                  blurDataURL="/placeholder.jpg" // Optional: Add a real tiny placeholder image if available
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
