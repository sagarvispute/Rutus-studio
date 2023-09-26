import React, { useState } from 'react'
import { IoArrowForward } from 'react-icons/io5'
import Carousel from 'react-multi-carousel-18'
import 'react-multi-carousel-18/lib/styles.css'
import ProjectCard from './ProjectCard'
import Link from 'next/link'

interface ProjectCategories {
    id: string
    title: string
    active: boolean
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        partialVisibilityGutter: 40,
        itemClass: 'px-2',
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 40,
        itemClass: 'px-2',
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        itemClass: 'px-2',
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
}

export default function HomeProject() {
    const [categories, setCategories] = useState<ProjectCategories[]>([
        {
            id: '1',
            title: 'House Interiors',
            active: true,
        },
        {
            id: '2',
            title: 'Office space Interiors',
            active: false,
        },
        {
            id: '3',
            title: 'Hotels and resort',
            active: false,
        },
        {
            id: '4',
            title: 'Shop interior',
            active: false,
        },
    ])

    const changeState = (currState: ProjectCategories) => {
        const newCates: ProjectCategories[] = []
        categories.forEach((x) => {
            if (x.id === currState.id) {
                x.active = true
                newCates.push(x)
            } else {
                x.active = false
                newCates.push(x)
            }
        })
        setCategories(newCates)
        console.log('load data for ' + currState.title)
    }

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

            <div className="flex flex-col-reverse sm:grid sm:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
                <div>
                    <ul>
                        {categories.map((category, index) => {
                            const isLast = categories.length - 1 === index
                            return (
                                <li
                                    className={!isLast ? 'border-b-2' : ''}
                                    key={category.id}
                                >
                                    <button
                                        className={`w-full flex items-center justify-between group text-gray-400 py-3 [&.active]:text-black ${
                                            category.active && 'active'
                                        }`}
                                        onClick={() => changeState(category)}
                                    >
                                        {category.title}
                                        <span className="text-xl -rotate-[50deg] group-hover:-rotate-0 ease-in-out duration-100 group-[&.active]:-rotate-0">
                                            <IoArrowForward />
                                        </span>
                                    </button>
                                </li>
                            )
                        })}

                        <li className="mt-3">
                            <Link
                                href="/projects"
                                className="border-2 border-black w-full flex p-3 rounded-full justify-center text-sm"
                            >
                                VIEW ALL PROJECTS
                                <span className="text-xl -rotate-[50deg] group-hover:-rotate-0 ease-in-out duration-100">
                                    <IoArrowForward />
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sm:col-span-2 lg:col-span-3 mt-10 sm:mt-0">
                    <Carousel responsive={responsive} itemClass="px-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
                            <ProjectCard key={x} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
