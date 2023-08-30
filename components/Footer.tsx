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
                                <a href="#">Instagram</a>
                            </li>
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Behance</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container grid sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-8">
                <a href="/">
                    <img
                        src="images/Logo.webp"
                        alt=""
                        className="h-12 w-auto"
                    />
                </a>
                <ul className="flex gap-4 justify-end">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/studio">The Studio</a>
                    </li>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
