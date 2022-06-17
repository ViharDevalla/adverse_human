/* eslint-disable @next/next/no-html-link-for-pages */
import React,{useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { Transition } from "@headlessui/react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="">
        <nav className=" w-full fixed z-50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50" >
            <div className="max-w-7xl mx-auto lg:px-8">
            <div className="flex items-right justify-between h-30 ">
                <div className="flex items-center ">
                    <div className="flex-shrink-0 ">
                        <div
                        className="h-16 w-16 md:h-36 md:w-48 p-2 pt-4"
                        >
                            <Link href="/" passHref >
                                <Image  src="/logo.png" alt="Adverse Human Logo" width={352} height={196} layout="responsive" className="cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block ">
                        <div className="text-gray-100 pl-80 lg:pl-96 lg:ml-10 flex justify-end w-full items-baseline space-x-4">
                            <Link href="/">
                            <a
                                className=" hover:bg-gray-200 hover:text-gray-900  px-3 py-2 rounded-md text-2xl font-thin"
                            >
                                Home
                            </a>
                            </Link>

                            <Link href="/team" passHref>
                            <a
                                className=" hover:bg-gray-200 hover:text-gray-900  px-3 py-2 rounded-md text-2xl font-thin"
                            >
                                Our Team
                            </a>
                            </Link>

                            <Link href="/owasp" passHref>
                            <a
                                className=" hover:bg-gray-200 hover:text-cyan-900  px-3 py-2 rounded-md text-2xl font-thin"
                            >
                                OWASP
                            </a>
                            </Link>

                            <Link href="/osint" passHref>
                            <a
                                className=" hover:bg-gray-200 hover:text-cyan-900  px-3 py-2 rounded-md text-2xl font-thin"
                            >
                                OSINT
                            </a>
                            </Link>

                            <Link href="/firewall" passHref>
                            <a
                                className=" hover:bg-gray-200 hover:text-cyan-900  px-3 py-2 rounded-md text-2xl font-thin"
                            >
                                Firewall
                            </a>
                            </Link>


                        </div>
                    </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="pr-10 bg-transparent inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white   "
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                    <svg
                        className="block fill-cyan-500  h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#075985"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    ) : (
                    <svg
                        className="fill-cyan-500 block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill='#075985'
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    )}
                </button>
                </div>
            </div>
            </div>

            <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
            {(ref) => (
                <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 space-y-1 sm:px-3 text-sky-400">
                    <Link href="/">
                        <a
                            className=" hover:bg-gray-200 hover:text-gray-900  px-3 py-2 rounded-md text-xl font-thin"
                        >
                            Home
                        </a>
                    </Link>

                    <Link href="/team" passHref>
                        <a
                            className=" hover:bg-gray-200 hover:text-gray-900  px-3 py-2 rounded-md text-xl font-thin"
                        >
                            Our Team
                        </a>
                    </Link>

                    <Link href="/about" passHref>
                        <a
                            className=" hover:bg-gray-200 hover:text-cyan-900  px-3 py-2 rounded-md text-xl font-thin"
                        >
                            OWASP
                        </a>
                    </Link>

                    <Link href="/about" passHref>
                        <a
                            className=" hover:bg-gray-200 hover:text-cyan-900  px-3 py-2 rounded-md text-xl font-thin"
                        >
                            OSINT
                        </a>
                    </Link>

                    <Link href="/about" passHref>
                        <a
                            className=" hover:bg-gray-200 hover:text-cyan-900  px-3 py-2 rounded-md text-xl font-thin"
                        >
                            Firewall
                        </a>
                    </Link>
                </div>
                </div>
            )}
            </Transition>
        </nav>

        
        </div>
    );
}

export default NavBar
