'use client';

import { useEffect, useState } from 'react';
import './globals.css';
import ContainerBox from '@/components/container';
import Button from '@/components/Button';
import Image from 'next/image';
import DragContainerBox from '@/components/DragContainerBox';
import { DndContext } from '@dnd-kit/core';
import About from '@/Windows/About';
import Work from '@/Windows/Work';
import Contact from '@/Windows/Contact';
import Gallery from '@/Windows/Gallery';
import ImageModal from '@/components/ImageModal';

export default function Home() {
  const [activeBoxes, setActiveBoxes] = useState<string[]>([]);
  const [showBox, setShowBox] = useState(true);
  const [dark, setDark] = useState(false);
  const [focusedBox, setFocusedBox] = useState<string | null>(null);
  const [centerPosition, setCenterPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  useEffect(() => {
    const userPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setDark(userPrefersDark);
  }, []);

  useEffect(() => {
    // This runs only on the client
    const centerX = window.innerWidth / 2 - 250; // adjust 150 to half your box width
    const centerY = window.innerHeight / 2 - 250; // adjust 100 to half your box height

    setCenterPosition({ x: centerX, y: centerY });
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const openBox = (name: string) => {
    if (!activeBoxes.includes(name)) {
      setActiveBoxes((prev) => [...prev, name]);
    }
    setFocusedBox(name);
  };

  const closeBox = (name: string) => {
    setActiveBoxes((prev) => prev.filter((box) => box !== name));
    // If the closed box is the image modal, clear selectedImage
    if (name === 'image') setSelectedImage(null);
  };

  return (
    <DndContext>
      <div className="relative min-h-screen min-w-screen overflow-hidden select-none">
        <div className="absolute z-60">
          {activeBoxes.map((box, index) => {
            const isFocused = box === focusedBox;
            // Give image box a very high zIndex so it's always on top
            const zIndex =
              box === 'image' ? 1000 : isFocused ? 100 + index : 50 + index;

            return (
              <div
                key={box}
                className="absolute"
                style={{ zIndex }}
                onMouseDown={() => setFocusedBox(box)}
              >
                {box === 'image' && selectedImage ? (
                  <ImageModal
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    onClose={() => {
                      setSelectedImage(null);
                      closeBox('image');
                    }}
                  />
                ) : (
                  <DragContainerBox
                    name={box}
                    initialPosition={centerPosition || undefined}
                    onClose={() => closeBox(box)}
                  >
                    {box === 'about' && <About />}
                    {box === 'work' && <Work />}
                    {box === 'contact' && <Contact />}
                    {box === 'gallery' && (
                      <Gallery onImageClick={setSelectedImage} />
                    )}
                  </DragContainerBox>
                )}
              </div>
            );
          })}
        </div>

        <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center z-0 pointer-events-none dark:bg-[url('/backgroundDark.png')]"></div>
        <div className="absolute inset-0 bg-[url('/nuvens.png')] bg-cover bg-center z-10 pointer-events-none bottom-75 dark:bg-[url('/stars.png')] dark:bottom-0 dark:z-45"></div>
        <div
          className="absolute inset-0 z-[9] pointer-events-none bg-no-repeat bg-center bg-contain top-8 hidden  2xl:dark:block dark:block "
          style={{ backgroundImage: `url('/Group 3.svg')` }}
        ></div>
        <div
          className="absolute inset-0 z-[9] pointer-events-none  bg-no-repeat bg-center bg-contain top-8 dark:hidden 2xl:block "
          style={{ backgroundImage: `url('/Group 2.svg')` }}
        ></div>
        {/* TODO: adjust the sizes for both modes*/}
        {/* The above is just background */}

        <div className="relative min-h-screen flex flex-row items-center justify-center ">
          <div className="relative min-h-screen left-[-480px] ">
            <div className="relative z-9 dark:top-[110px]">
              <Button
                SvgIcon={() => (
                  <>
                    <Image
                      className="block dark:hidden"
                      src="/buttons/sun.svg"
                      alt="Light mode icon"
                      width={686}
                      height={606}
                    />
                    <Image
                      className="hidden dark:block"
                      src="/buttons/moon.png"
                      alt="Dark mode icon"
                      width={286}
                      height={270}
                    />
                  </>
                )}
                altText=""
                onClick={() => setDark(!dark)}
              />
            </div>

            <div className=" absolute z-50 bottom-30 dark:opacity-0 dark:">
              <Image
                src="/cloud.svg"
                alt="Example Icon"
                width={498}
                height={129}
              />
            </div>
          </div>

          <div className="absolute z-40 ">
            {showBox && (
              <ContainerBox name="Home" onClose={() => setShowBox(false)}>
                <div className="relative flex m-10 right-10 justify-center select-none pointer-events-none">
                  <Image
                    className="block dark:hidden"
                    src="/mario Here.svg"
                    alt=""
                    width={498}
                    height={129}
                  />
                  <Image
                    className="hidden dark:block"
                    src="/mario HereDark.svg"
                    alt=""
                    width={498}
                    height={129}
                  />
                </div>

                <div className="flex flex-row justify-between space-x-20 p-10 items-end  ">
                  <Button
                    SvgIcon={() =>
                      dark ? (
                        <Image
                          src="/buttons/aboutDark.svg"
                          alt="About dark"
                          width={128}
                          height={115}
                        />
                      ) : (
                        <Image
                          src="/buttons/about.svg"
                          alt="About"
                          width={128}
                          height={115}
                        />
                      )
                    } // Use next/image
                    altText="about"
                    onClick={() => openBox('about')}
                  />
                  <Button
                    SvgIcon={() =>
                      dark ? (
                        <Image
                          src="/buttons/workDark.svg"
                          alt="work dark"
                          width={128}
                          height={115}
                        />
                      ) : (
                        <Image
                          src="/buttons/work.svg"
                          alt="work"
                          width={128}
                          height={115}
                        />
                      )
                    }
                    altText="work"
                    onClick={() => openBox('work')}
                  />
                  <Button
                    SvgIcon={() =>
                      dark ? (
                        <Image
                          src="/buttons/contactDark.svg"
                          alt="contact dark"
                          width={128}
                          height={115}
                        />
                      ) : (
                        <Image
                          src="/buttons/contact.svg"
                          alt="contact"
                          width={128}
                          height={115}
                        />
                      )
                    }
                    altText="contact"
                    onClick={() => openBox('contact')}
                  />
                  <Button
                    SvgIcon={() =>
                      dark ? (
                        <Image
                          src="/buttons/galleryDark.svg"
                          alt="gallery dark"
                          width={128}
                          height={115}
                        />
                      ) : (
                        <Image
                          src="/buttons/gallery.svg"
                          alt="galley"
                          width={128}
                          height={115}
                        />
                      )
                    }
                    altText="gallery"
                    onClick={() => openBox('gallery')}
                  />
                </div>
              </ContainerBox>
            )}
          </div>
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </DndContext>
  );
}
