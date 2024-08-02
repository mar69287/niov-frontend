import DownloadWalletButton from '@app/components/buttons/DownloadWalletButton'
import Hero from '@app/components/Hero'
import { walletData, finalCardInfo, walletImages } from "@/utils/data";
import FinalCard from '@app/components/cards/FinalCard';
import GradientBox from '@app/components/GradientBox';
import css from './niov-wallet.module.css'

const WalletPage = () => {
  return (
    <section
        className='main overflow-hidden'
    >
        <div
            className="page-content flex"
        >
            <Hero title={`NIOV Wallet`} details={`Manage your userbase and send personalized in-wallet messages, campaigns and ads to your users.`} />
            <DownloadWalletButton
                className="page-button bg-[#FF7D9C] text-white"
            >
                Download Wallet
            </DownloadWalletButton>
            <div
                className='w-full max-w-xl xl:max-w-2xl h-[12rem] min-[500px]:h-[16rem] sm:h-[17rem] md:h-[19rem] lg:h-[20rem] xl:h-[20rem] 2xl:h-[22rem] my-10 lg:my-14 relative flex'
            >
                <GradientBox
                    className={`bg-gradient-to-tr rounded-md p-[1.2px] md:p-[1.4px] ${css.w35} overflow-hidden z-5`}
                >
                    <div
                        className={`bg-gray-100 rounded-md p-5 md:p-7 lg:p-10 h-[12rem] min-[500px]:h-[16rem] sm:h-[17rem] md:h-[19rem] lg:h-[20rem] xl:h-[20rem] 2xl:h-[22rem] w-full relative overflow-hidden`}

                    >

                    </div>
                </GradientBox>
                <GradientBox
                    className={`bg-gradient-to-tr rounded-md p-[1.2px] md:p-[1.4px] ${css.w35} overflow-hidden z-10 absolute top-4 lg:top-8 left-1/2 transform -translate-x-1/2`}
                >
                    <div
                        className={`bg-gray-100 rounded-md p-5 md:p-7 lg:p-10 h-[12rem] min-[500px]:h-[16rem] sm:h-[17rem] md:h-[19rem] lg:h-[20rem] xl:h-[20rem] 2xl:h-[22rem] w-full relative overflow-hidden`}

                    >

                    </div>
                </GradientBox>
                <GradientBox
                    className={`bg-gradient-to-tr rounded-md p-[1.2px] md:p-[1.4px] ${css.w35} overflow-hidden z-3 absolute bottom-4 lg:bottom-8 right-0`}
                >
                    <div
                        className={`bg-gray-100 rounded-md p-5 md:p-7 lg:p-10 h-[12rem] min-[500px]:h-[16rem] sm:h-[17rem] md:h-[19rem] lg:h-[20rem] xl:h-[20rem] 2xl:h-[22rem] w-full relative overflow-hidden`}

                    >

                    </div>
                </GradientBox>
            </div>
            <h1
                className='text-center text-lg md:text-xl lg:text-2xl leading-6 font-medium max-w-sm'
            >
                Intuitive products engineered for the Enterprise.
            </h1>
            <div
                className="grid grid-cols-1 gap-5 w-full mt-4 md:mt-6 lg:mt-10"
            >
                {walletData.map((item, index) => (
                    <Cards 
                        key={index}
                        title={item.title}
                        subTitle={item.subTitle}
                        details={item.details}
                        index={index}
                    />
                ))}
                <FinalCard title={finalCardInfo.title} details={finalCardInfo.details} />
            </div>
        </div>
    </section>
  )
}

const Cards = ({ title, details, index }) => {
    return (
        <GradientBox
            className={`bg-gradient-to-tr rounded-md p-[1.2px] md:p-[1.4px] w-full overflow-hidden z-5 md:col-span-2`}
        >
            <div
                className={`bg-white rounded-md p-5 md:p-7 lg:p-10 flex-start flex-col ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:gap-5 gap-1 h-[22rem] md:h-[25rem] relative overflow-hidden`}
            >
                <div className={`flex-start flex-col gap-1 lg:flex-1`}>
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-start font-bold leading-6">{title}</h1>
                    <p className="text-xs md:text-sm lg:text-base m-0 lg:max-w-md">
                        {details}
                    </p>
                </div>
                <div 
                    className="w-full flex-1 relative mt-3 sm:mt-5"
                >
                    <GradientBox className={`bg-gradient-to-tr rounded-md p-[1.1px] absolute top-0  lg:w-[45rem] w-full h-[20rem] lg:h-[25rem] ${index % 2 === 0 ? ' right-0' : 'left-0'}`}>
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

export default WalletPage