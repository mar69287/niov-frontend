import EmailButton from "@app/components/buttons/EmailButton"
import Hero from "@app/components/Hero"
import { federationCloudData, finalCardInfo } from "@/utils/data";
import GradientBox from "@app/components/GradientBox";
import FinalCard from "@app/components/cards/FinalCard";

const FederationCloudPage = () => {
  return (
    <seciton
        className='main overflow-hidden'
    >
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
            className={`bg-gradient-to-t rounded-md p-[1.2px] md:p-[1.4px] w-full overflow-hidden z-5`}
        >
            <div
                className={`bg-white rounded-md p-5 md:p-7 lg:p-10 flex-start flex-col gap-1 h-[20rem] relative overflow-hidden`}
            >
                {
                    subTitle && (
                        <p className="text-xs md:text-sm lg:text-base m-0 text-gray-500">
                            {subTitle}
                        </p>
                    )
                }
                <h1 className="text-xl md:text-2xl lg:text-3xl text-start font-bold leading-6">{title}</h1>
                <p className="text-xs md:text-sm lg:text-base m-0 max-w-lg">
                    {details}
                </p>
            </div>
        </GradientBox>
    )
}

export default FederationCloudPage