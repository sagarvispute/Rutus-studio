import React, { useEffect, useState } from 'react'
import { IoArrowForward } from 'react-icons/io5'
import Carousel from 'react-multi-carousel-18'
import 'react-multi-carousel-18/lib/styles.css'
import ProjectCard from './ProjectCard'
import Link from 'next/link'
import { Categories, Project } from '@models/project.model'
import axios from 'axios'
import { WebConstants } from '@constants/web-constants'

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
    const [categories, setCategories] = useState<Categories[]>([])
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        loadCategories()
        loadProjects()
    }, [])

    const loadCategories = () => {
        axios
            .get(`${WebConstants.baseUrl}/${WebConstants.allCategories}`)
            .then((resp) => {
                if (resp && '' + resp?.status == 'success') {
                    const response = resp.data
                    const allCate: any = [
                        {
                            id: null,
                            name: 'All',
                            active: true,
                        },
                    ]
                    setCategories([...allCate, ...response])
                }
            })
    }

    const changeState = (currState: Categories) => {
        const newCates: Categories[] = []
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
        loadProjects()
    }

    const loadProjects = () => {
        const category: Categories = categories.find(
            (cate: Categories) => cate.active
        ) as Categories
        axios
            .get(
                `${WebConstants.baseUrl}/${
                    WebConstants.homeProjects
                }?&category=${category ? category?.id : null}`
            )
            .then((resp) => {
                if (resp && '' + resp?.status == 'success') {
                    const response = resp.data
                    setProjects(response)
                }
            })
    }

    return (
        <>
            {categories.length && (
                <section className="container pb-16">
                    <header className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-10">
                        <h3 className="text-3xl font-bold leading-none">
                            My remarkable
                            <br />
                            projects
                        </h3>
                        <p>
                            Explore Our Remarkable Projects: A Showcase of
                            Inspired Designs, Craftsmanship, and Unforgettable
                            Spaces.
                        </p>
                    </header>

                    <div className="flex flex-col-reverse sm:grid sm:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
                        <div>
                            <ul>
                                {categories.map((category, index) => {
                                    const isLast =
                                        categories.length - 1 === index
                                    return (
                                        <li
                                            className={
                                                !isLast ? 'border-b-2' : ''
                                            }
                                            key={category.id}
                                        >
                                            <button
                                                className={`w-full flex items-center text-left justify-between group text-gray-400 py-3 [&.active]:text-black ${
                                                    category.active && 'active'
                                                }`}
                                                onClick={() =>
                                                    changeState(category)
                                                }
                                            >
                                                {category.name}
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
                        <div className="sm:col-span-2 lg:col-span-3 sm:mt-0 home-projects">
                            {projects.length ? (
                                <Carousel
                                    responsive={responsive}
                                    itemClass="px-2 h-full"
                                >
                                    {projects.map((project: Project) => (
                                        <ProjectCard
                                            data={project}
                                            key={project.id}
                                        />
                                    ))}
                                </Carousel>
                            ) : null}
                            {!projects.length && (
                                <div className="text-gray-300 text-center text-3xl py-20">
                                    Project not found in this category
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}
