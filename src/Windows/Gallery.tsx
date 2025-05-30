import React from 'react';

const images = [
  {
    src: '/Illustrations/blue.png',
    alt: 'A beautiful sunrise illustration',
    description: 'Blue Illustration',
  },
  {
    src: '/Illustrations/kiki.png',
    alt: 'A beautiful sunrise illustration',
    description: 'Kiki Illustration',
  },
  {
    src: '/Illustrations/arale.png',
    alt: 'A beautiful sunrise illustration',
    description: 'Arale Illustration',
  },
  {
    src: '/Illustrations/perl.jpg',
    alt: 'A beautiful sunrise illustration',
    description: 'Perl Illustration',
  },
  {
    src: '/Illustrations/hatsune.jpeg',
    alt: 'A beautiful sunrise illustration',
    description: 'Hatsune Illustration',
  },
  {
    src: '/Illustrations/lol.png',
    alt: 'A beautiful sunrise illustration',
    description: 'LOL Illustration',
  },
  {
    src: '/Illustrations/power.png',
    alt: 'A beautiful sunrise illustration',
    description: 'Power Illustration',
  },
  {
    src: '/Illustrations/Llis.jpeg',
    alt: 'A beautiful sunrise illustration',
    description: 'Llis Illustration',
  },
  {
    src: '/Illustrations/butterfly.png',
    alt: 'A beautiful sunrise illustration',
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

const gallery: React.FC<GalleryProps> = ({ onImageClick }) => {
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

        <div className="overflow-y-auto h-[550px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent pr-2">
          <h1 className="text-3xl text-black dark:text-[#FDEBA1] mb-4">
            Digital illustration
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-48 object-cover rounded cursor-pointer shadow hover:scale-105 transition-transform"
                onClick={() => onImageClick(img)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default gallery;
