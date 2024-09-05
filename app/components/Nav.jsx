"use client";

import Link from "next/link";
import GradientBox from "./GradientBox";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import ImageContainer from "./ImageContainer";
import EmailButton from "./buttons/EmailButton";
import { navData } from "@/utils/data";
import DownloadWalletButton from "./buttons/DownloadWalletButton";

const Nav = () => {
  const [selected, setSelected] = useState(0);
  return (
    <header className="flex-center fixed w-full px-4 md:px-10 z-40 h-[4rem] md:h-[4.5rem] bg-white"
        onMouseLeave={() => {
            setSelected(0);
        }}
    >
      <nav className='flex-between w-full relative max-w-[90rem]'>
        <Link href='/' className='flex flex-center'>
            <ImageContainer className={"relative w-[100px] h-[50px] md:w-[120px]"} img={'/assets/images/logo.png'} />
        </Link>
        <MobileNav selected={selected} setSelected={setSelected} />
        <DesktopNav selected={selected} setSelected={setSelected} />
      </nav>
      <GradientBox className="bg-gradient-to-r h-[1px] w-full absolute bottom-0 left-0" />
    </header>
  );
};

const DesktopNav = ({ selected, setSelected }) => {
    return (
        <>
            <div className="absolute top-0 bottom-0 mx-auto left-0 right-0 w-max flex-center gap-2 ">
                {navData.map((tab, index) => (
                    <DesktopTab
                        key={index}
                        setSelected={setSelected}
                        isSelected={selected === index + 1}
                        tabNum={index + 1}
                        name={tab.name}
                        icon={tab.icon}
                        submenu={tab.submenu}
                        link={tab.link}
                    />
                ))}
            </div>
            <EmailButton className="bg-black text-white font-light hidden md:block h-[2.5rem] min-h-[1.5rem] max-h-[2.5rem]">
                Meet the Founders
            </EmailButton>
        </>
    )
}

const DesktopTab = ({setSelected, isSelected, tabNum, name, icon, submenu, link}) => {
    const gradientStyles = 'bg-gradient-to-t absolute top-[3.85rem] rounded-md p-[2px] hidden md:flex gap-[2px]' 
    return (
        <>
            <div 
                className="p-2 hidden md:block cursor-pointer hover:text-violet-600 transition-colors duration-200"
                onMouseEnter={() => {
                    setSelected(isSelected ? 0 : tabNum);
                }}
            
            >
                <p className="">{name}</p>
            </div>
            {isSelected && (
                <GradientBox className={gradientStyles}
                >
                    <div className="w-[18rem] xl:w-[20rem] bg-white rounded-tl-md rounded-bl-md p-6">
                        <h1 className="text-gray-400">{name}</h1>
                        {submenu.map((subItem, index) => (
                            <Link key={index} href={subItem.link} className="block py-2 text-black group">
                                <div className="flex items-center gap-4">
                                    <div className="w-6">
                                        <ImageContainer className={"relative h-[27px] w-[27px]"} img={subItem.icon} />
                                    </div>
                                    <div>
                                        <p className="text-[15px] group-hover:text-violet-600 transition-colors duration-300 leading-5">{subItem.name}</p>
                                        <p className="text-gray-400 text-[15px] leading-[18px]">{subItem.details}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        {
                            isSelected && name == "Products" && (
                                <button className="btn btn-active w-full rounded-sm text-white font-light bg-[#FF7D9C] hover:bg-[#e06680] transition-colors duration-200 border-none h-[2.5rem] min-h-[1.5rem] max-h-[2.5rem] mt-3">Download</button>
                            )
                        }
                    </div>
                    {
                        tabNum != 3 && (
                            <div
                                className={`w-[18rem] xl:w-[20rem] bg-white rounded-tr-md rounded-br-md p-6 relative ${tabNum == 1 ? 'h-[22rem]' : 'h-[23rem]'}`}
                            >
                                {
                                    tabNum == 1 ?  (
                                        <>
                                            <h1 className="text-gray-400">Platform</h1>
                                            <ImageContainer className={"relative h-[50px] w-[140px]"} img={'/assets/images/logo.png'} />
                                            <div>
                                                <p className="text-gray-400 text-sm">Next Gen CRM for Web3 Advertising and Marketing</p>
                                            </div>
                                            <ImageContainer className={"absolute w-full h-72 bottom-0 left-0"} img={'/assets/images/productsPlatform.svg'} />
                                        </>
                                    ) : (
                                        <>
                                            <ImageContainer className={"relative w-full h-44"} img={'/assets/images/resourcesArticle.svg'} />
                                            <div className="mt-3">
                                                <p className="text-gray-400 text-xs">Recent Blog Article</p>
                                                <h1 className="font-medium">Need to know about NIOV Labs</h1>
                                                <p className="text-xs text-gray-800 font-light leading-[18px] mt-1">
                                                    NOIV Labs offers a next-gen CRM for Web3 advertising and marketing, integrating blockchain 
                                                    for advanced data-driven strategies and enhanced customer engagement.
                                                </p>
                                            </div>
                                        </>
                                    )
                                }
                                
                            </div>
                        )
                    }
                </GradientBox>
            )}

        </>
    )
}

const MobileNav = ( { selected, setSelected }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-black text-white rounded-sm p-1 px-2 text-xl md:hidden z-40" 
        onClick={() => {
            setIsMenuOpen(!isMenuOpen)
            setSelected(0)
        }}
    >
        <MdMenu />
      </div>
      {
        isMenuOpen && (
            <div className="fixed top-[4rem] bottom-0 left-0 right-0 w-full z-10 bg-white px-6 pb-2 flex-between flex-col md:hidden">
                <div className="w-full overflow-y-auto">
                    {navData.map((tab, index) => (
                        <MobileTab
                            key={index}
                            setSelected={setSelected}
                            isSelected={selected === index + 1}
                            tabNum={index + 1}
                            name={tab.name}
                            icon={tab.icon}
                            submenu={tab.submenu}
                            setIsMenuOpen={setIsMenuOpen}
                        />
                    ))}
                </div>
                <EmailButton className="bg-black w-full text-white font-light">
                    Meet the Founders
                </EmailButton>
            </div>
      )}
    </>
  );
};

const MobileTab = ({ setSelected, isSelected, tabNum, name, icon, submenu, setIsMenuOpen}) => {
    const menuTabStyles = 'flex-between py-4 w-full relative text-black'
    const gradientStyles = 'bg-gradient-to-r h-[1px] w-full absolute bottom-0 left-0'
    return (
        <>
            <div 
                className={menuTabStyles} 
                onClick={() => {
                    setSelected(isSelected ? 0 : tabNum);
                }}
            
            >
                <p className="">{name}</p>
                <div
                    className={`text-xl transition-transform duration-200 ${isSelected && '-rotate-90'}`}
                >
                    {icon}
                </div>
                {
                    !isSelected && (
                        <GradientBox className={gradientStyles} />
                    )
                }
            </div>
            {isSelected && (
                <div className="w-full">
                    {submenu.map((subItem, index) => (
                        <Link key={index} href={subItem.link} className="relative text-black"
                            onClick={() => {
                                setSelected(0);
                                setIsMenuOpen(false);
                            }}
                        >
                            <div className={`flex items-start gap-2 relative py-3`}>
                                <ImageContainer className={"relative h-[19px] w-[19px] mt-[2px]"} img={subItem.icon} />
                                <div>
                                    <p className="text-sm">{subItem.name}</p>
                                    <p className="text-gray-400 text-sm leading-[18px]">{subItem.details}</p>
                                </div>
                            {index < submenu.length - 1 && <GradientBox className={gradientStyles}></GradientBox>}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            {
                isSelected && name == "Products" && (
                    <DownloadWalletButton
                        className="w-full text-white font-light bg-[#FF7D9C] border-none h-[2.5rem] min-h-[1.5rem] max-h-[2.5rem]"
                    >
                        Download Wallet
                    </DownloadWalletButton>
                )
            }
        </>
    )
}


export default Nav;
