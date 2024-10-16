'use client';
import Image from "next/image";
import GradientBox from "./components/GradientBox";
import ImageContainer from "./components/ImageContainer";
import Hero from "./components/Hero";
import { homeCardInfo, homeProductCardInfo, finalCardInfo } from "@/utils/data";
import FinalCard from "./components/cards/FinalCard";
import HeroHook from "./components/HeroHook";
import WaitlistForm from "./components/WaitlistForm";
import WaitlistButton from "./components/buttons/WaitlistButton";
import { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const waitlistRef = useRef(null);
  const waitlistControls = useAnimation();
  const { ref: waitlistInViewRef, inView: waitlistInView } = useInView({ threshold: 0.2 });

  const scrollToWaitlist = () => {
    if (waitlistRef.current) {
      const yOffset = -70; // Adjust this offset as needed (e.g., to compensate for any sticky headers)
      const yPosition = waitlistRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (waitlistInView) {
      waitlistControls.start('visible');
    }
  }, [waitlistControls, waitlistInView]);

  // Animation controls for the section above the waitlist form
  const aboveControls = useAnimation();
  const { ref: aboveRef, inView: aboveInView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (aboveInView) {
      aboveControls.start('visible');
    }
  }, [aboveControls, aboveInView]);

  // Function to merge waitlistRef and waitlistInViewRef
  const setWaitlistRefs = (node) => {
    waitlistRef.current = node;
    waitlistInViewRef(node);
  };

  return (
    <section 
      className='main overflow-hidden'
    >
      <div className='absolute inset-0 w-[400vw] -ml-[10vw] md:w-full md:ml-0'>
        <Image
          src="/assets/images/homeRings.svg" 
          fill 
          alt='logo'
          className='object-cover' 
        />
      </div>
      <div
        className="page-content flex"
      >
        <HeroHook />
        <Hero title={`Delivering the New Internet of Value`} details={`Next Gen CRM for Web3 Advertising and Marketing`} />
        <WaitlistButton className="page-button text-white bg-black" onClick={scrollToWaitlist}>
          Join the Waitlist
        </WaitlistButton>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mt-4 md:mt-6 lg:mt-10"
        >
          {homeCardInfo.map((card, index) => (
            <HeroCards 
              key={index}
              name={card.name}
              icon={card.icon}
              details={card.details}
              idx={index}
              image1={card.image1}
              image2={card.image2}
            />
          ))}
          <motion.div
            className="w-full md:col-span-2"
            ref={aboveRef}
            initial="hidden"
            animate={aboveControls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
            }}
          >
            <GradientBox className="bg-gradient-to-t rounded-md p-[1px]">
              <div
                className="bg-white rounded-md p-5 md:p-7 lg:p-10"
              >
                <h1 className="text-xl md:text-2xl lg:text-3xl max-w-sm lg:max-w-md text-start font-semibold leading-6">Intuitive Products Engineered for the Enterprise.</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-4 md:mt-6 lg:mt-10">
                  {homeProductCardInfo.map((card, index) => (
                    <ProductCards
                      key={index}
                      name={card.name}
                      details={card.details}
                      image={card.image}
                    />
                  ))}
                </div>
              </div>
            </GradientBox>
          </motion.div>
          <motion.div
            ref={setWaitlistRefs}
            initial="hidden"
            animate={waitlistControls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
            }}
            className='w-full md:col-span-2'
          >
            <WaitlistForm />
          </motion.div>
          <FinalCard title={finalCardInfo.title} details={finalCardInfo.details} />
        </div>
      </div>
    </section>
  );
}

const HeroCards = ({ name, icon, details, idx, image1, image2 }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
      }}
      whileHover={{
        scale: 1.01,
        // rotateY: 5,
        // rotateX: 5,
        boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.2)',
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className={`rounded-md z-5 ${idx === 0 ? 'md:col-span-2 ' : 'md:col-span-1'}`}
    >
      <GradientBox
        className={`bg-gradient-to-t rounded-md p-[1.2px] md:p-[1.4px] w-full overflow-hidden z-5 ${idx === 0 ? 'md:col-span-2 ' : 'md:col-span-1'}`}
      >
        <div
          className={`bg-white rounded-md p-5 md:p-7 lg:p-10 flex-start flex-col gap-1 h-[25rem] ${idx === 0 ? 'lg:h-[42rem]' : 'lg:h-[28rem]'} relative overflow-hidden`}
        >
          <ImageContainer className={"relative h-[20px] w-[20px] md:h-[24px] md:w-[24px] lg:h-[27px] lg:w-[27px]"} img={icon} />
          <h1 className="text-xl md:text-2xl lg:text-3xl text-start font-bold leading-6">{name}</h1>
          <p className="text-xs md:text-sm lg:text-base m-0 max-w-lg">
            {details}
          </p>
          <div className="w-full flex-1 relative mt-3 sm:mt-5">
            {
              idx === 0 ? (
                <GradientBox className={`bg-gradient-to-t rounded-md p-[1.2px] absolute top-0 left-0 ${idx === 0 ? 'md:left-[20rem] lg:left-[30rem] xl:left-[38rem] lg:w-[50rem] lg:h-[25rem]' : ''} w-[30rem] min-[500px]:w-full h-[30rem]`}>
                  <div className="bg-white rounded-md w-full h-full overflow-hidden p-2">
                    <Image
                      src={image1}
                      width={500}
                      height={500}
                      alt='logo'
                      layout='responsive'
                      className='rounded-md' 
                    />
                  </div>
                </GradientBox>
              ) : (
                <GradientBox className={`bg-gradient-to-t overflow-hidden rounded-md p-[1.2px] min-[500px]:w-full h-full`}>
                  <div className="bg-white rounded-md w-full h-full p-2 overflow-hidden relative ">
                    <ImageContainer className={"w-[30rem] h-[50rem] absolute left-0 right-0 top-0 bottom-0 m-auto"} img={image1} />
                  </div>
                </GradientBox>
              )
            }
            {
              idx === 0 && (
                <GradientBox className={`bg-gradient-to-t hidden md:flex absolute rounded-md p-[1.2px] top-16 left-0 w-[30rem] lg:w-[50rem] h-[20rem] lg:h-[30rem]`}>
                  <div className="bg-white rounded-md w-full h-full overflow-hidden p-2">
                    <Image
                      src={image2}
                      width={500}
                      height={500}
                      alt='logo'
                      layout='responsive'
                      className='rounded-md' 
                    />
                  </div>
                </GradientBox>
              )
            }
          </div>
        </div>
      </GradientBox>
    </motion.div>
  );
};

const ProductCards = ({ name, details, image }) => {
  return (
    <GradientBox className={`bg-gradient-to-t rounded-md p-[1.2px] w-full overflow-hidden z-5`}>
      <div
        className="bg-white rounded-md p-5 md:p-6 lg:p-7 flex-start flex-col gap-1 h-[13rem] md:h-[14rem] lg:h-[18rem] relative overflow-hidden"
      >
        <div
          className="w-full flex-1 relative"
        >
          <ImageContainer className={"relative h-[20px] w-[20px] md:h-[24px] md:w-[24px] lg:h-[27px] lg:w-[27px]"} img={image} />
        </div>
        <h1 className="text-md md:text-lg lg:text-xl text-start font-bold leading-6">{name}</h1>
        <p className="text-xs md:text-sm lg:text-base m-0">
          {details}
        </p>
      </div>
    </GradientBox>
  )
}
