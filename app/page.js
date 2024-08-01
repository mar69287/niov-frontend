import Image from "next/image";
import GradientBox from "./components/GradientBox";
import ImageContainer from "./components/ImageContainer";
import EmailButton from "./components/buttons/EmailButton";
import Hero from "./components/Hero";

const heroCardInfo = [
  {
    name: "Federation Cloud",
    icon: '/assets/images/fedCloudLogo.svg',
    details: "Access high-quality aggregated data, including users` staked decentralized identities, to optimize marketing efforts and create more effective, trust-building campaigns.",
  },
  {
    name: "NIOV Wallet",
    icon: '/assets/images/walletIcon.svg',
    details: "Manage your userbase and send personalized in-wallet messages, marketing campaigns and ads to your users, while empowering them to stake their data for rewards.",
  },
  {
    name: "Decentralized Privacy Sandbox",
    icon: '/assets/images/sandIcon.svg',
    details: "Advertise directly with your audiences securely and transparently, eliminating the middleman and ensuring complete user privacy and data control.",
  },
]

const productCardInfo = [
  {
    name: "User Analytics Dashboard",
    details: "Track and analyze user engagement with detailed metrics and insights. Optimize your campaigns for maximum impact.",
  },
  {
    name: "Personalized Messaging",
    details: "Send customized in-wallet messages tailored to your users' preferences and behavior. Increase engagement and conversion rates.",
  },
  {
    name: "Multi-Channel Campaigns",
    details: "Design and execute marketing campaigns across various blockchain networks, including cross-platform campaigns. Reach your audience wherever they are.",
  },
  {
    name: "Real-Time Reporting",
    details: "Access real-time data and reports to monitor your campaign performance. Make informed decisions with up-to-date information.",
  },
  {
    name: "Real-Time User Engagement Notifications",
    details: "Get real-time notifications from Federation Cloud and Privacy Sandbox about user actions in the NIOV Wallet for quick follow-ups.",
  },
  {
    name: "Secure Data Management",
    details: "Secure user data with encryption and IPFS for storage. Protect privacy, build trust, and ensure compliance.",
  }
]

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
        <EmailButton className="w-max px-4 text-white font-light bg-black text-xs md:text-sm h-[2rem] md:h-[2.2rem] lg:h-[2.5rem] min-h-[1.5rem] max-h-[2.5rem]">
          Request a demo
        </EmailButton>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mt-4 md:mt-6 lg:mt-10"
        >
          {heroCardInfo.map((card, index) => (
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
                {productCardInfo.map((card, index) => (
                  <ProductCards
                    key={index}
                    name={card.name}
                    details={card.details}
                  />
                ))}
              </div>
            </div>
          </GradientBox>
          <div className={`rounded-md p-5 md:p-7 lg:p-10 w-full z-5 md:col-span-2 bg-[#94FFC9] h-52 md:h-56 lg:h-60 flex-start flex-col gap-2`}>
            <h1 className="text-xl md:text-2xl lg:text-3xl text-start font-bold leading-6 max-w-sm lg:max-w-xl">Experience the “New Internet of Value” with NIOV Labs</h1>
            <p className="text-xs md:text-base lg:text-lg m-0 text-gray-600">
              Transform you marketing strategy with the power of Web3
            </p>
            <EmailButton className="border-none mt-2 w-max px-5 text-black font-light bg-white text-xs md:text-sm lg:text-base h-[2.2rem] md:h-[2.2rem] lg:h-[2.5rem] min-h-[1.5rem] max-h-[2.5rem]">
              Request a demo
            </EmailButton>
          </div>
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
