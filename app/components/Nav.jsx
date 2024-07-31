"use client";

import Image from "next/image";
import Link from "next/link";
import GradientBox from "./GradientBox";
import { MdMenu, MdKeyboardArrowDown, MdOutlineMenuBook, MdCall, MdPeople, MdContactPhone } from "react-icons/md";
import { BsSignTurnRightFill } from "react-icons/bs";
import { TbCloudStorm, TbBriefcase2Filled } from "react-icons/tb";
import { LuWalletCards } from "react-icons/lu";
import { FaBookReader } from "react-icons/fa";
import { useState } from "react";

// Navigation Data
const navData = [
  {
    name: "Products",
    icon: <MdKeyboardArrowDown />,
    link: "/products",
    submenu: [
      {
        name: "Federation Cloud",
        icon: <TbCloudStorm />,
        details: "Advertise securely directly",
        link: "/products/federation-cloud",
      },
      {
        name: "Decentralized Privacy Sandbox",
        icon: <TbCloudStorm />,
        details: "Advertise securely directly",
        link: "/products/privacy-sandbox",
      },
      {
        name: "Niov Wallet",
        icon: <LuWalletCards />,
        details: "Smart innovative wallet",
        link: "/products/niov-wallet",
      },
    ],
  },
  {
    name: "Resources",
    icon: <MdKeyboardArrowDown />,
    link: "/resources",
    submenu: [
      {
        name: "Guides",
        link: "/resources/guides",
        details: "Step-by-step instructions for users.",
        icon: <BsSignTurnRightFill />
      },
      {
        name: "Learn",
        link: "/resources/learn",
        details: "Educational content and informative articles.",
        icon: <FaBookReader />
      },
      {
        name: "Blog",
        link: "/resources/blog",
        details: "Latest news and updates.",
        icon: <MdOutlineMenuBook />
      },
    ],
  },
  {
    name: "Contact",
    icon: <MdKeyboardArrowDown />,
    link: "/contact",
    submenu: [
        {
            name: "About Us",
            link: "/contact",
            details: "Company history, mission, and values.",
            icon: <MdPeople />
        },
        {
            name: "Careers",
            link: "/contact",
            details: "Job openings and application information.",
            icon: <TbBriefcase2Filled />
        },
        {
            name: "Contact Devs",
            link: "/contact",
            details: "Reach out to sales team.",
            icon: <MdCall />
        }
    ],
  },
];

const Nav = () => {
  return (
    <header className="flex-center relative px-4 md:px-10 z-10 h-[4rem] md:h-[4.5rem]">
      <nav className='flex-between w-full relative max-w-[90rem]'>
        <Link href='/' className='flex flex-center'>
          <div className="relative w-[100px] h-[100px] md:w-[130px]">
            <Image
              src='/assets/images/logo.png'
              alt='logo'
              fill
              sizes="(min-width: 320px) 100%"
              className='object-contain'
            />
          </div>
        </Link>
        <MobileNav />
      </nav>
      <GradientBox className="bg-gradient-to-r h-[1px] w-full absolute bottom-0 left-0" />
    </header>
  );
};

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div 
        className="bg-black text-white rounded-sm p-1 px-2 text-xl md:hidden" 
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
                        />
                    ))}
                </div>
                <button className="btn btn-active w-full rounded-sm text-white font-light">Request a demo</button>
            </div>
      )}
    </>
  );
};

const MobileTab = ({setSelected, isSelected, tabNum, name, icon, submenu}) => {
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
                        <Link key={index} href={subItem.link} className="block py-2 text-black hover:bg-gray-200">
                            <div className="flex items-start">
                                <div className="mr-2 mt-[3px] h-full flex justify-start items-start text-md">{subItem.icon}</div>
                                <div>
                                    <p className="text-sm">{subItem.name}</p>
                                    <p className="text-gray-400 text-sm">{subItem.details}</p>
                                </div>
                            </div>
                            {index < submenu.length - 1 && <div className="bg-gradient-to-r from-green-200 to-red-200 h-[1px] my-2"></div>}
                        </Link>
                    ))}
                </div>
            )}
            {
                isSelected && name == "Products" && (
                    <button className="btn btn-active w-full rounded-sm text-white font-light bg-[#FF7D9C] border-none h-[2.5rem] min-h-[1.5rem] max-h-[2.5rem]">Download</button>
                )
            }
        </>
    )
}


export default Nav;
