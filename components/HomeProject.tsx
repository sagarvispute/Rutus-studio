import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

export default function HomeProject() {
    return (
        <section className="container pb-16">
            <header className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-10">
                <h3 className="text-3xl font-bold leading-none">
                    My remarkable
                    <br />
                    projects
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Vel malesuada
                    egestas eget egestas. Facilisi cursus proin odio dolor id.
                </p>
            </header>

            <div className="grid grid-cols-4 gap-6">
                <div>
                    <ul>
                        <li className="border-b-2">
                            <button className="w-full flex items-center justify-between group text-gray-400 py-3">
                                House Interiors
                                <span className="text-xl -rotate-[50deg] group-hover:-rotate-0 ease-in-out duration-100">
                                    <IoArrowForward />
                                </span>
                            </button>
                        </li>
                        <li className="border-b-2">
                            <button className="w-full flex items-center justify-between group text-gray-400 py-3">
                                Office space Interiors
                                <span className="text-xl -rotate-[50deg] group-hover:-rotate-0 ease-in-out duration-100">
                                    <IoArrowForward />
                                </span>
                            </button>
                        </li>
                        <li className="border-b-2">
                            <button className="w-full flex items-center justify-between group text-gray-400 py-3">
                                Hotels and resort
                                <span className="text-xl -rotate-[50deg] group-hover:-rotate-0 ease-in-out duration-100">
                                    <IoArrowForward />
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="w-full flex items-center justify-between group text-gray-400 py-3">
                                Shop interior
                                <span className="text-xl -rotate-[50deg] group-hover:-rotate-0 ease-in-out duration-100">
                                    <IoArrowForward />
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="border-2 border-black w-full flex p-3 rounded-full justify-center">
                                VIEW ALL PROJECTS
                                <span className="text-xl -rotate-[50deg] group-hover:-rotate-0 ease-in-out duration-100">
                                    <IoArrowForward />
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="col-span-3">carousel</div>
            </div>
        </section>
    )
}
