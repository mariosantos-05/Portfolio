'use client';

import { useEffect, useState } from 'react';
import './globals.css';
import ContainerBox from '@/components/container';
import Button from '@/components/Button';
import Image from 'next/image';
import DragContainerBox from '@/components/DragContainerBox';
import { DndContext } from '@dnd-kit/core';

export default function Home() {
  const [showBox, setShowBox] = useState(true);
  const [dark, setDark] = useState(false);

  // Detect user's preferred theme on initial load
  useEffect(() => {
    const userPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setDark(userPrefersDark); // Set the initial theme based on the user's preference
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <DndContext>
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center z-0 pointer-events-none dark:bg-[url('/backgroundDark.png')]"></div>
        <div className="absolute inset-0 bg-[url('/nuvens.png')] bg-cover bg-center z-10 pointer-events-none bottom-75 dark:bg-[url('/stars.png')] dark:bottom-0 dark:z-45"></div>
        {/* The above is just background */}

        <div className="relative min-h-screen flex flex-row items-center justify-center ">
          <div className="relative min-h-screen left-[-480px] ">
            <div className="relative z-9 dark:top-[110px]">
              <Button
                SvgIcon={() =>
                  dark ? (
                    <Image
                      src="/buttons/moon.png"
                      alt="Example Icon"
                      width={286}
                      height={270}
                    />
                  ) : (
                    <Image
                      src="/buttons/sun.svg"
                      alt="Example Icon"
                      width={686}
                      height={606}
                    />
                  )
                }
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
              <DragContainerBox name="Home" onClose={() => setShowBox(false)}>
                <div className="relative flex m-10 right-10 justify-center ">
                  {dark ? (
                    <Image
                      src="/mario HereDark.svg"
                      alt=""
                      width={498}
                      height={129}
                    />
                  ) : (
                    <Image
                      src="/mario Here.svg"
                      alt=""
                      width={498}
                      height={129}
                    />
                  )}
                </div>

                <div className="flex flex-row justify-between space-x-20 p-10 items-end">
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
                    onClick={() => console.log('about clicked!')}
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
                    onClick={() => console.log('work clicked!')}
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
                    onClick={() => console.log('contact clicked!')}
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
                    onClick={() => console.log('gallery!')}
                  />
                </div>
              </DragContainerBox>
            )}
          </div>
        </div>
      </div>
    </DndContext>
  );
}
