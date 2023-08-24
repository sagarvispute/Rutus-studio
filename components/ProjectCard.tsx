import React from 'react'

export default function ProjectCard() {
    return (
        <div className="rounded-2xl overflow-hidden relative text-white group">
            <img src="images/spacejoy.jpg" alt="" />
            <div className="group-hover:opacity-100 opacity-0 absolute leading-none bottom-0 left-0 right-0 px-4 pb-5 ease-in-out duration-100">
                <h3 className="font-bold">Sit amet consectetur</h3>
                <span className="text-xs text-gray-300">Pune, 2016</span>
            </div>
        </div>
    )
}