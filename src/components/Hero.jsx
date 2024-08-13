'use client'
import { useState } from 'react';
import AnimatedTextCharacter from './AnimatedText';
import HeroForm from './Forms/HeroForm';
import BackgroundAnimation from './BackgroundAnimation';
import ShapeAnimation from './ShapeAnimation';
import BlurAnimation from './BlurAnimation';


export default function Hero({data}){

    
  const pageData = data.data.pages.nodes[0].homePage


  const [isActive, setIsActive] = useState(false);

  const openModal = () => {
    setIsActive(!isActive);
  };




    return(<>
     <section style={{ marginTop: '-100px' }}  className={`${isActive ? "z-[999]" : null} hero sm:h-screen h-[100vh] flex items-end sm:py-24 py-6 overflow-hidden relative`}>
          <BlurAnimation position="bottom left" />
          <div className="container z-10 relative">
            <div className="lg:w-10/12 grid gap-5">
              <ShapeAnimation />
              <h1 className="lg:text-[3.5rem] md:text-[4rem] sm:text-[3rem] text-[2rem] leading-tight" data-aos="fade-up">{pageData.heroTitle && pageData.heroTitle}<span className="block">
                <AnimatedTextCharacter text={pageData.heroAnimatedHeading && pageData.heroAnimatedHeading} />
              </span>
              </h1>
              <p className="md:text-[1.6rem] text-[1rem]" data-aos="fade-up" data-delay="500">{pageData.heroDescription && pageData.heroDescription}</p>
              <div className='mt-3'>
                <div onClick={openModal}>
                <HeroForm />
                </div>
              </div>
            </div>
          </div>
          <BackgroundAnimation />
        </section>
    </>)
}