import Image from "next/image";
import GradientBox from "./components/GradientBox";
import ImageContainer from "./components/ImageContainer";
import EmailButton from "./components/buttons/EmailButton";
import Hero from "./components/Hero";
import { homeCardInfo, homeProductCardInfo, finalCardInfo } from "@/utils/data";
import FinalCard from "./components/cards/FinalCard";

export default function Home() {
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
        <GradientBox className="bg-gradient-to-t rounded-sm p-[1px] w-max mb-1">
          <div
            className="bg-white rounded-sm p-1 md:px-2"
          >
            <p className="text-xs md:text-sm lg:text-base">The First Web3 Marketing Platform</p>
          </div>
        </GradientBox>
        <Hero title={`Delivering the New Internet of Value`} details={`Next Gen CRM for Web3 Advertising and Marketing`} />
        <EmailButton className="page-button text-white bg-black">
          Meet the Founders
        </EmailButton>
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
            />
          ))}
          <GradientBox className="bg-gradient-to-t rounded-md p-[1px] w-full md:col-span-2">
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
                  />
                ))}
              </div>
            </div>
          </GradientBox>
          <FinalCard title={finalCardInfo.title} details={finalCardInfo.details} />
        </div>
      </div>
    </section>
  );
}

const HeroCards = ({ name, icon, details, idx }) => {
  return (
    <GradientBox className={`bg-gradient-to-t rounded-md p-[1.2px] md:p-[1.4px] w-full overflow-hidden z-5 ${idx == 0 ? 'md:col-span-2 ' : 'md:col-span-1'}`}>
      <div
        className={`bg-white rounded-md p-5 md:p-7 lg:p-10 flex-start flex-col gap-1 h-[25rem] ${idx == 0 ? 'lg:h-[30rem]' : ''} relative overflow-hidden`}
      >
        <ImageContainer className={"relative h-[20px] w-[20px] md:h-[24px] md:w-[24px] lg:h-[27px] lg:w-[27px]"} img={icon} />
        <h1 className="text-xl md:text-2xl lg:text-3xl text-start font-bold leading-6">{name}</h1>
        <p className="text-xs md:text-sm lg:text-base m-0 max-w-lg">
          {details}
        </p>
        <div
          className="w-full flex-1 relative mt-3 sm:mt-5"
        >
          <GradientBox className={`bg-gradient-to-t rounded-md p-[1.2px] absolute top-0 left-0 ${idx == 0 ? 'md:left-[20rem] lg:left-[25rem] xl:left-[33rem]' : ''} w-[30rem] min-[500px]:w-full h-[20rem]`}>
            <div 
              className="bg-white rounded-md w-full h-full"
            >

            </div>
          </GradientBox>
          {
            idx == 0 && (
              <GradientBox className={`bg-gradient-to-t hidden md:flex absolute rounded-md p-[1.2px] top-16 left-0 w-[30rem] lg:w-[40rem] h-[20rem]`}>
                <div 
                  className="bg-white rounded-md w-full h-full"
                >

                </div>
              </GradientBox>
            )
          }
        </div>
      </div>
    </GradientBox>
  )
}

const ProductCards = ({ name, details }) => {
  return (
    <GradientBox className={`bg-gradient-to-t rounded-md p-[1.2px] w-full overflow-hidden z-5`}>
      <div
        className="bg-white rounded-md p-5 md:p-6 lg:p-7 flex-start flex-col gap-1 h-[17rem] md:h-[19rem] lg:h-[21rem] relative overflow-hidden"
      >
        <div
          className="w-full flex-1 relative"
        >
          {/* image here */}
        </div>
        <h1 className="text-md md:text-lg lg:text-xl text-start font-bold leading-6">{name}</h1>
        <p className="text-xs md:text-sm lg:text-base m-0">
          {details}
        </p>
      </div>
    </GradientBox>
  )
}
