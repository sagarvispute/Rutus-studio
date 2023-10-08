import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    IoCallOutline,
    IoLocationOutline,
    IoMailOutline,
} from 'react-icons/io5'

export default function Footer() {
    return (
        <section className="bg-[#2B5E73] py-12 text-white">
            <div className="container grid sm:grid-cols-2 lg:grid-cols-9 gap-4">
                <p className="text-4xl font-bold mb-5 col-span-5 xl:col-span-6">
                    Elevate your spaces with Rutus Decor Studio, where every
                    design is a masterpiece, blending creativity, comfort, and
                    innovation.
                </p>
                <div className="grid sm:grid-cols-2 gap-5 col-span-4 xl:col-span-3">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Contact me</h2>
                        <ul>
                            <li className="flex items-center gap-2 mb-2">
                                <IoMailOutline /> info@rutusdecor.com
                            </li>
                            <li className="flex items-center gap-2 mb-2">
                                <IoCallOutline /> +91 9527-447-496
                            </li>
                            <li className="flex items-center gap-2">
                                <IoLocationOutline /> Mumbai
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Social</h2>
                        <ul>
                            <li className="mb-2">
                                <Link
                                    href="https://www.instagram.com/rutustudio/"
                                    target="_blank"
                                >
                                    Instagram
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    href="https://www.facebook.com/rutusstudio"
                                    target="_blank"
                                >
                                    Facebook
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="#" target="_blank">
                                    Behance
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container grid sm:grid-cols-3 lg:grid-cols-2 gap-4 pt-8">
                <Link href="/" aria-label="Rutus Decor Home">
                    <Image
                        src="/images/Logo.webp"
                        alt="Footer Logo"
                        className="h-12 w-auto"
                        width="134"
                        height="48"
                        priority
                    />
                </Link>
                <ul className="flex gap-4 sm:justify-end col-span-2 lg:col-span-1">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/studio">The Studio</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>
            </div>

            <div className="container text-left pt-14 text-white text-sm">
                <p>
                    All rights reserved by{' '}
                    <Link href="/" className="underline underline-offset-2">
                        Rutuja Murade
                    </Link>{' '}
                    and Developed by{' '}
                    <Link
                        href="http://sagarvispute.com/"
                        target="_blank"
                        className="underline underline-offset-2"
                    >
                        Sagar Vispute
                    </Link>
                </p>
            </div>
        </section>
    )
}
