import Link from "next/link"
import GradientBox from "./GradientBox"
import ImageContainer from "./ImageContainer"

const navData = [
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Resources",
      link: "/resources",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

const Footer = () => {
  return (
    <footer className="flex-center relative w-full px-4 md:px-10 z-30 bg-white py-4">
        <div className="flex justify-between items-start sm:items-center w-full max-w-[90rem]">
            <aside className="flex-start sm:justify-center sm:items-center flex-col sm:flex-row gap-0 sm:gap-2">
                <ImageContainer className={"relative w-[100px] h-[20px] md:w-[120px]"} img={'/assets/images/logo.png'} />
                <p className="text-gray-500">| 2024 NIOVLABS, INC</p>
            </aside>
            <nav 
                className="flex-start flex-col sm:flex-row gap-1 sm:gap-4"
            >
                {navData.map((item, index) => (
                    <Link 
                        key={index} href={item.link}
                        className="text-gray-500 hover:text-gray-800 transition-colors duration-200 p-1 text-sm sm:text-base"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
        <GradientBox className="bg-gradient-to-r h-[1px] w-full absolute top-0 left-0" />
    </footer>
  )
}

export default Footer