import React, { Fragment, useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { Pagination } from 'react-headless-pagination'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import axios from 'axios'
import { WebConstants } from '@constants/web-constants'
import { PaginationResponse } from '@models/pagination.model'
import { Project } from '@models/project.model'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Pageheader = dynamic(() => import('@components/Pageheader'))
const RequestQuoteBlock = dynamic(() => import('@components/RequestQuoteBlock'))
const ProjectCard = dynamic(() => import('@components/ProjectCard'))

export default function Projects() {
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
        undefined
    )
    const [initState, setInitState] = React.useState<number>(0)
    const [page, setPage] = React.useState<number>(1)
    const [categories, setCategories] = useState<any>([])
    const [defaultCategory, setDefaultCategory] = useState<number | null>(null)
    const [projects, setProjects] = useState<Project[]>([])
    const [counts, setCounts] = useState<number>(0)
    const [totalPages, setTotalPages] = useState<number>(0)

    const handlePageChange = (page: number) => {
        setPage(page)
    }

    const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.rutustudio.com/',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Projects',
                item: 'https://www.rutustudio.com/projects',
            },
        ],
    }

    useEffect(() => {
        loadProjects()
        loadCategories()
        setInitState(initState + 1)
    }, [])

    useEffect(() => {
        if (initState > 0) loadProjects()
    }, [page, defaultCategory])

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
                        },
                    ]
                    setCategories([...allCate, ...response])
                }
            })
    }

    const loadProjects = () => {
        axios
            .get(
                `${WebConstants.baseUrl}/${WebConstants.allProjects}?page=${page}&category=${defaultCategory}`
            )
            .then((resp) => {
                if (resp && '' + resp?.status == 'success') {
                    const response: PaginationResponse<Project[]> = resp.data
                    setProjects(response.records)
                    setCounts(response.count)
                    setTotalPages(Math.ceil(response.count / 10))
                }
            })
    }

    const changeTab = (data: any) => {
        setDefaultCategory(data.id)
    }

    return (
        <div className="container py-16">
            <Head>
                <title>
                    Interior Design Projects | Rutus Decor Studio Portfolio
                </title>
                <meta
                    name="description"
                    content="Explore our portfolio showcasing Rutus Decor Studio's creative and precise transformation of interior spaces in impressive projects."
                />
                <meta
                    property="og:title"
                    content="Interior Design Projects | Rutus Decor Studio Portfolio"
                />
                <meta
                    property="og:description"
                    content="Explore our portfolio showcasing Rutus Decor Studio's creative and precise transformation of interior spaces in impressive projects."
                />
                <meta
                    property="twitter:title"
                    content="Interior Design Projects | Rutus Decor Studio Portfolio"
                />
                <meta
                    property="twitter:description"
                    content="Explore our portfolio showcasing Rutus Decor Studio's creative and precise transformation of interior spaces in impressive projects."
                />
                <script
                    key="breadcrumb-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbData),
                    }}
                />
            </Head>

            <Pageheader title="My remarkable projects" />

            <Tab.Group selectedIndex={selectedIndex}>
                <Tab.List className="border-b-2 pb-5 mb-8">
                    {categories.map((category: any) => (
                        <Tab as={Fragment} key={category.id}>
                            {({ selected }) => (
                                <button
                                    className={`outline-none mr-5 mb-1 ${
                                        selected
                                            ? 'text-gray-950'
                                            : 'text-gray-400'
                                    }`}
                                    onClick={() => changeTab(category)}
                                >
                                    {category.name}
                                </button>
                            )}
                        </Tab>
                    ))}
                </Tab.List>
            </Tab.Group>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {projects.map((project: Project) => (
                    <ProjectCard data={project} key={project.id} />
                ))}
            </div>
            {!projects.length && (
                <div className="text-gray-300 text-center text-3xl py-20">
                    Project not found in this category
                </div>
            )}

            <Pagination
                className="flex border-t-2 mt-8 py-5"
                edgePageCount={counts}
                middlePagesSiblingCount={1}
                totalPages={totalPages}
                truncableClassName=""
                truncableText="..."
                currentPage={page}
                setCurrentPage={handlePageChange}
            >
                {page > 1 && (
                    <Pagination.PrevButton className="flex items-center gap-3">
                        <IoArrowBack /> Previous
                    </Pagination.PrevButton>
                )}

                <nav className="flex justify-center flex-grow">
                    <ul className="flex items-center">
                        <Pagination.PageButton
                            activeClassName="bg-slate-100"
                            inactiveClassName=""
                            className="px-3 py-2 rounded-md cursor-pointer"
                        />
                    </ul>
                </nav>

                {page < totalPages && (
                    <Pagination.NextButton className="flex items-center gap-3">
                        Next
                        <IoArrowForward />
                    </Pagination.NextButton>
                )}
            </Pagination>

            <RequestQuoteBlock />
        </div>
    )
}
