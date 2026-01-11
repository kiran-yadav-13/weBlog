import React from 'react'
import { Link } from 'react-router-dom'
// Logo image removed; using textual logo in footer

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 footer-gradient text-black b-0" >
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap text-[min(3vw,1.2rem)]">
                    <div className="w-full px-6 md:p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className=" mb-1 md:mb-4 inline-flex items-center">
                                <div className='weblog-logo'>WEBLOG</div>
                            </div>
                            <div>
                                <p className="mb-2 md:text-sm text-black">
                                    &copy; Copyright 2026. All Rights Reserved by WEBLOG.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-6 py-3  md:p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-3 md:mb-9  md:text-xs font-semibold uppercase text-black">
                                Company
                            </h3>
                            <ul>
                                <li className=" mb-1 md:mb-4">
                                    <Link
                                        className="  md:text-base md:font-medium text-black hover:text-[#FF7A7A]"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-1 md:mb-4">
                                    <Link
                                        className="  md:text-base md:font-medium text-black hover:text-[#FF7A7A]"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-1 md:mb-4">
                                    <Link
                                        className="  md:text-base md:font-medium text-black hover:text-[#FF7A7A]"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" md:text-base mb-1 md:font-medium text-black hover:text-[#FF7A7A]"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-6 py-3 md:p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-3 md:mb-9  md:text-xs font-semibold uppercase text-black">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-1 md:mb-4">
                                    <Link
                                        className=" md:text-base  md:font-medium text-black hover:text-[#FF7A7A]"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-1 md:mb-4">
                                    <Link
                                        className="  md:text-base md:font-medium text-black hover:text-[#FF7A7A]"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-1 md:mb-4">
                                    <Link
                                        className=" md:text-base  md:font-medium text-black hover:text-[#FF7A7A]"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" md:text-base  md:font-medium text-black hover:text-[#FF7A7A]"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-6 py-3  md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-3 md:mb-9  md:text-xs font-semibold uppercase text-black">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-1 md:mb-4">
                                    <Link
                                        className=" md:text-base md:font-medium text-black hover:text-[#FF7A7A]"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-1 md:mb-4">
                                    <Link
                                        className="  md:text-base  md:font-medium text-black hover:text-[#FF7A7A]"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="mb-1 md:mb-4">
                                    <Link
                                        className="  md:text-base md:font-medium text-black hover:text-[#FF7A7A]"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer