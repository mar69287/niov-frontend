
const Hero = ({ title, details }) => {
  return (
    <>
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-center font-bold leading-8 max-w-md md:max-w-xl w-full">{title}</h1>
        <p className="text-center text-xs md:text-base lg:text-lg my-2">{details}</p>
    </>
  )
}

export default Hero