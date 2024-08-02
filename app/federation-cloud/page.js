import EmailButton from "@app/components/buttons/EmailButton"
import Hero from "@app/components/Hero"
import { federationCloudData, finalCardInfo } from "@/utils/data";
import GradientBox from "@app/components/GradientBox";
import FinalCard from "@app/components/cards/FinalCard";
import Image from "next/image";
import css from './federation-cloud.module.css'

const FederationCloudPage = () => {
  return (
    <seciton
        className='main overflow-hidden '
    >
        <div className={`absolute w-[30rem] h-[30rem] -right-80 -top-10 sm:w-[40rem] sm:h-[40rem] sm:-top-0 lg:w-[50rem] lg:h-[50rem] lg:-top-0 ${css.rotateImg1}`}>
            <Image
                src="/assets/images/federationRings.png" 
                fill 
                alt='logo'
                className='object-cover' 
            />
        </div>
        <div className={`absolute w-[30rem] h-[30rem] -left-80 top-72 sm:w-[40rem] sm:h-[40rem] sm:top-[35rem] lg:w-[50rem] lg:h-[50rem] lg:top-[40rem] ${css.rotateImg2}`}>
            <Image
                src="/assets/images/federationRings.png" 
                fill 
                alt='logo'
                className='object-cover' 
            />
        </div>
        <div
            className="page-content flex"
        >
            <Hero title={`Federation Cloud`} details={`Trailblazing the Future of Marketing`} />
            <EmailButton className="w-max px-4 text-white font-light bg-black text-xs md:text-sm h-[2rem] md:h-[2.2rem] lg:h-[2.5rem] min-h-[1.5rem] max-h-[2.5rem]">
                Request a demo
            </EmailButton>
            <div
                className="grid grid-cols-1 gap-5 w-full mt-4 md:mt-6 lg:mt-10"
            >
                {federationCloudData.map((item, index) => (
                    <Cards 
                        key={index}
                        title={item.title}
                        subTitle={item.subTitle}
                        details={item.details}
                    />
                ))}
                <FinalCard title={finalCardInfo.title} details={finalCardInfo.details} />
            </div>
        </div>
    </seciton>
  )
}

const Cards = ({ subTitle, title, details }) => {
    return (
        <GradientBox
            className={`bg-gradient-to-tr rounded-md p-[1.2px] md:p-[1.4px] w-full overflow-hidden z-5 md:col-span-2`}
        >
            <div
                className={`bg-white rounded-md p-5 md:p-7 lg:p-10 flex-start flex-col lg:flex-row lg:gap-5 gap-1 h-[22rem] md:h-[25rem] relative overflow-hidden`}
            >
                <div className="flex-start flex-col gap-1 lg:flex-1">
                    {
                        subTitle && (
                            <p className="text-xs md:text-sm lg:text-base m-0 text-gray-500">
                                {subTitle}
                            </p>
                        )
                    }
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-start font-bold leading-6">{title}</h1>
                    <p className="text-xs md:text-sm lg:text-base m-0 lg:max-w-md">
                        {details}
                    </p>
                </div>
                <div 
                    className="w-full flex-1 relative mt-3 sm:mt-5"
                >
                    <GradientBox className={`bg-gradient-to-tr rounded-md p-[1.1px] absolute top-0 left-0 right-0 lg:w-[45rem] min-[500px]:w-full h-[20rem] lg:h-[25rem]`}>
                        <div 
                            className="bg-white rounded-md w-full h-full"
                        >

                        </div>
                    </GradientBox>
                </div>
            </div>
        </GradientBox>
    )
}

export default FederationCloudPage