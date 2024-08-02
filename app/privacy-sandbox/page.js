import EmailButton from '@app/components/buttons/EmailButton'
import FinalCard from '@app/components/cards/FinalCard'
import GradientBox from '@app/components/GradientBox'
import Hero from '@app/components/Hero'
import { sandboxData, finalCardInfo } from "@/utils/data";


const PrivacyPage = () => {
  return (
    <section
        className='main overflow-hidden'
    >
         <div
            className="page-content flex"
        >
            <Hero title={`Decentralized Privacy Sandbox`} details={`Empowering Advertising with Unmatched Privacy and Control`} />
            <EmailButton className="page-button text-white bg-black">
                Request a demo
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