import React, { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'
import { Pagination } from 'react-headless-pagination'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import RequestQuoteBlock from '@components/RequestQuoteBlock'
import Pageheader from '@components/Pageheader'
import ProjectCard from '@components/ProjectCard'

const categories: any[] = [
    'House Interiors',
    'Office space Interiors',
    'Hotels and resort',
    'Shop interior',
]

export default function Projects() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [page, setPage] = React.useState<number>(0)

    const handlePageChange = (page: number) => {
        setPage(page)
    }

    return (
        <div className="container py-16">
            <Pageheader title="My remarkable projects" />

            <Tab.Group
                selectedIndex={selectedIndex}
                onChange={setSelectedIndex}
            >
                <Tab.List className="border-b-2 pb-5 mb-8">
                    {categories.map((category) => (
                        <Tab as={Fragment} key={category}>
                            {({ selected }) => (
                                <button
                                    className={`outline-none mr-5 mb-1 ${
                                        selected
                                            ? 'text-gray-950'
                                            : 'text-gray-400'
                                    }`}
                                >
                                    {category}
                                </button>
                            )}
                        </Tab>
                    ))}
                </Tab.List>
            </Tab.Group>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>

            <Pagination
                className="flex border-t-2 mt-8 py-5"
                edgePageCount={2}
                middlePagesSiblingCount={1}
                totalPages={10}
                truncableClassName=""
                truncableText="..."
                currentPage={page}
                setCurrentPage={handlePageChange}
            >
                <Pagination.PrevButton className="flex items-center gap-3">
                    <IoArrowBack /> Previous
                </Pagination.PrevButton>

                <nav className="flex justify-center flex-grow">
                    <ul className="flex items-center">
                        <Pagination.PageButton
                            activeClassName="bg-slate-100"
                            inactiveClassName=""
                            className="px-3 py-2 rounded-md cursor-pointer"
                        />
                    </ul>
                </nav>

                <Pagination.NextButton className="flex items-center gap-3">
                    Next
                    <IoArrowForward />
                </Pagination.NextButton>
            </Pagination>

            <RequestQuoteBlock />
        </div>
    )
}
