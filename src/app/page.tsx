'use client'

import { useEffect, useState } from 'react';
import './globals.css';
import ContainerBox from '@/components/container';
import Button from '@/components/Button';
import Image from 'next/image';


export default function Home() {
  const [showBox, setShowBox] = useState(true);
  const [dark, setDark] = useState(false);



  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);



  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
        
        <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/nuvens.png')] bg-cover bg-center z-10 pointer-events-none bottom-75"></div>
        {/* The above is just background */}
        


        <div className='relative min-h-screen flex flex-row items-center justify-center '>

                <div className='relative min-h-screen left-[-350px]'>
                    <div className=' z-9'>
                      <Button
                          SvgIcon={() => <Image src="/buttons/sol.svg" alt="Example Icon" width={686} height={606}  />} // Use next/image
                          altText=""
                          onClick={() => setDark(!dark)}
                        />

                    </div>


                    <div className=' absolute z-50 bottom-30 '> 
                      <Image src="/cloud.svg" alt="Example Icon" width={498} height={129}  />
                    </div>

                </div>
    
      

            <div className='absolute z-40 '>

              {showBox && (
                <ContainerBox
                  name="Home"
                  onClose={() => setShowBox(false)}
                >

                  <div className='relative m-10 left-[10px] justify-center bg-amber-400 '>
                    <Image src="/marioHere.svg" alt="" width={498} height={129}  />
                  </div>
              
                  <div className="flex flex-row justify-between space-x-20 p-10 items-end"> 
                    <Button
                      SvgIcon={() => <Image src="/buttons/about.svg" alt="About" width={128} height={115}  />} // Use next/image
                      altText="about"
                      onClick={() => console.log('about clicked!')}
                    />
                    <Button
                      SvgIcon={() => <Image src="/buttons/work.svg" alt="About" width={128} height={115}  />} // Use next/image
                      altText="work"
                      onClick={() => console.log('placeholder!')}
                    />
                    
                    <Button
                      SvgIcon={() => <Image src="/buttons/contact.svg" alt="About" width={128} height={115}  />} // Use next/image
                      altText="contact"
                      onClick={() => console.log('placeholder!')}
                    />
                    <Button
                      SvgIcon={() => <Image src="/buttons/gallery.svg" alt="About" width={128} height={115}  />} // Use next/image
                      altText="gallery"
                      onClick={() => console.log('placeholder!')}
                    />

              
                  </div>
              
              
                </ContainerBox>
              )}
            </div>

      </div>
    </div>
  );
}