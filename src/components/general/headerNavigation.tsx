"use client";
import { INavigationData } from "@/types/navigationTypes/navigationDataType"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link"
import Image from "next/image";
import logoPNG from "@/assets/images/logo.png";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
export default function HeaderNavigation() {

    const [nav, setNav] = useState(false);

    const handleResize = () => {
        if (window.innerWidth >= 768) { // Assuming 768px is your md breakpoint
            setNav(false);
        }
    };

    // Set up event listener for window resize
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    let prevScrollpos = window.scrollY;
    window.onscroll = function() {
        let currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else if(!nav) {
            document.getElementById("navbar").style.top = "-200px";
        }
        prevScrollpos = currentScrollPos;
    }


    return (
        <div id="navbar" className="w-full fixed flex flex-row justify-between duration-300 items-center bg-tera-green px-10 nav top-0">
            <div className="bg-white rounded-full">
                <Link href="/" className="bg-white rounded-xl">
                    <Image src={logoPNG} className="h-[80px] w-[80px]  object-contain" alt="logoTeraConsult" />
                </Link>
            </div>
            <div className="h-[100px] bg-tera-green flex items-center flex-1 justify-center ">
                <div className="hidden w-1/2 md:flex justify-center">{
                    navigationDataArray.map((item, index) => (
                        <HoverCard className="nav-links" key={`${item.navigationName}-${index}`} openDelay={100} closeDelay={0}>
                            <div className="group w-full text-center">
                                <HoverCardTrigger asChild>
                                    <Link href={item.link ? item.link :"/"} className="bg-tera-green text-white w-full group-hover:bg-green-500 px-4 py-2 group-hover:text-black group-hover:border group-hover:border-black group-hover:rounded">{item.navigationName} </Link>
                                </HoverCardTrigger>
                                {item.navigationItems && <HoverCardContent avoidCollisions={false} className="bg-green-500 group-hover:bg-green-500 flex flex-col p-0">
                                    {item.navigationItems.map((item, index) => ( <div key={`${item}-${index}`} className="text-black font-[600] hover:rounded-md text-[13px] hover:bg-green-700 py-[6px] px-2  ">{item}</div> ))}
                                </HoverCardContent>}
                            </div>
                        </HoverCard>
                    ))}
                </div>
                <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 ml-[70%] text-white md:hidden">
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>

                {nav && (
                    <ul className="fixed flex flex-col justify-center items-center top-0 left-0 w-full h-screen bg-gradient-to-b from-tera-green to-tera-light-green text-white">
                        {navigationDataArray.map((item, index) => (
                            <li
                                key={index}
                                className="px-4 cursor-pointer capitalize py-6 text-4xl font-bold"
                            >
                                <Link onClick={() => setNav(!nav)} href={item.link ? item.link :"/"}>
                                    {item.navigationName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}



const navigationDataArray: INavigationData[] = [
    {
        navigationName: "Головна",
        navigationItems: null,
        link: "/"
    },
    {
        navigationName: "Навчання",
        navigationItems: null,
        link: "/study"
    },
    {
        navigationName: "Пропозиції",
        navigationItems: null,
        link: "/sales"
    },
    {
        navigationName: "Відгуки",
        navigationItems: null,
        link: "/reviews"
    },
    {
        navigationName: "Контакти",
        navigationItems: null,
        link: "/contacts"
    },
    {
        navigationName: "Компанія",
        navigationItems: null,
        link: null
    },

]