import EmailButton from '@app/components/buttons/EmailButton'
import FinalCard from '@app/components/cards/FinalCard'
import GradientBox from '@app/components/GradientBox'
import Hero from '@app/components/Hero'
import { sandboxData, finalCardInfo } from "@/utils/data";
import Image from 'next/image';
import css from './privacy-sandbox.module.css'

const PrivacyPage = () => {
  return (
    <section
        className='main overflow-hidden'
    >
        <div className={`absolute w-[40rem] h-[40rem] -right-96 -top-28 sm:w-[50rem] sm:h-[50rem] sm:-top-28 lg:w-[60rem] lg:h-[60rem] lg:-top-40 ${css.rotateImg1}`}>
            <Image
                src="/assets/images/sandboxBackground.png" 
                fill 
                alt='logo'
                className='object-scale-down' 
            />
        </div>
        <div className={`absolute w-[40rem] h-[40rem] -left-80 top-72 sm:w-[50rem] sm:h-[50rem] sm:top-[35rem] lg:w-[50rem] lg:h-[50rem] lg:top-80 2xl:w-[70rem] 2xl:h-[70rem]  ${css.rotateImg2}`}>
            <Image
                src="/assets/images/sandboxBackground.png" 
                fill 
                alt='logo'
                className='object-cover' 
            />
        </div>
        <div
            className="page-content flex"
        >
            <Hero title={`Decentralized Privacy Sandbox`} details={`Empowering Advertising with Unmatched Privacy and Control`} />
            <EmailButton className="page-button text-white bg-black">
                Meet the Founders
            </EmailButton>
            <div
                className="grid grid-cols-1 gap-5 w-full mt-4 md:mt-6 lg:mt-10"
            >
                {sandboxData.map((item, index) => (
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
    </section>
    
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

export default PrivacyPage