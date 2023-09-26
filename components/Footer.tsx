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
        <section className="bg-[#316B83] py-12 text-white">
            <div className="container grid sm:grid-cols-2 lg:grid-cols-9 gap-4">
                <p className="text-4xl font-bold mb-5 col-span-5 xl:col-span-6">
                    Lorem ipsum dolor sit amet consectetur. Aliquam semper
                    accumsan purus augue maecenas elementum.
                </p>
                <div className="grid sm:grid-cols-2 gap-5 col-span-4 xl:col-span-3">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Contact me</h2>
                        <ul>
                            <li className="flex items-center gap-2 text-lg">
                                <IoMailOutline /> info@rutusdecor.com
                            </li>
                            <li className="flex items-center gap-2">
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
                            <li>
                                <Link href="#">Instagram</Link>
                            </li>
                            <li>
                                <Link href="#">Facebook</Link>
                            </li>
                            <li>
                                <Link href="#">Behance</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container grid sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-8">
                <Link href="/">
                    <Image
                        src="/images/Logo.webp"
                        alt=""
                        className="h-12 w-auto"
                        width="134"
                        height="48"
                    />
                </Link>
                <ul className="flex gap-4 justify-end">
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
        </section>
    )
}
