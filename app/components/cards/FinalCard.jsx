import EmailButton from '../buttons/EmailButton'

const FinalCard = ({ title, details }) => {
  return (
    <div className={`rounded-md p-5 md:p-7 lg:p-10 w-full z-5 md:col-span-2 bg-[#94FFC9] h-52 md:h-56 lg:h-60 flex-start flex-col gap-2`}>
        <h1 className="text-xl md:text-2xl lg:text-3xl text-start font-bold leading-6 max-w-sm lg:max-w-xl">{title}</h1>
        <p className="text-xs md:text-base lg:text-lg m-0 text-gray-600">
            {details}
        </p>
        <EmailButton className="border-none mt-2 w-max px-5 text-black font-light bg-white text-xs md:text-sm lg:text-base h-[2.2rem] md:h-[2.2rem] lg:h-[2.5rem] min-h-[1.5rem] max-h-[2.5rem]">
            Meet the Founders
        </EmailButton>
    </div>
  )
}

export default FinalCard