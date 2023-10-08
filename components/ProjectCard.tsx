import { WebConstants } from '@constants/web-constants'
import { Dialog, Transition } from '@headlessui/react'
import { Project } from '@models/project.model'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import Carousel from 'react-multi-carousel-18'
import 'react-multi-carousel-18/lib/styles.css'

interface Props {
    data: Project
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10,
        partialVisibilityGutter: 40,
        itemClass: 'px-2',
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        partialVisibilityGutter: 40,
        itemClass: 'px-2',
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5,
        itemClass: 'px-2',
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
    },
}

export default function ProjectCard(props: Props) {
    const [showImages, setShowImages] = useState<boolean>(false)
    const [images, setImages] = useState<any[]>([])
    const [selectedImage, setSelectedImage] = useState<any>(null)

    const loadImages = () => {
        axios
            .get(
                `${WebConstants.baseUrl}/${WebConstants.getImages}/${props.data.id}`
            )
            .then((res) => {
                if (res && '' + res.status == 'success') {
                    const response = res.data
                    setShowImages(true)
                    setImages(response)
                    setSelectedImage(response[0])
                }
            })
    }

    const closeGallery = () => {
        setSelectedImage(null)
        setImages([])
        setShowImages(false)
    }

    return (
        <>
            {props?.data && (
                <Link
                    href={''}
                    className="cursor-pointer"
                    onClick={() => loadImages()}
                >
                    <div className="rounded-3xl overflow-hidden relative text-white group h-full">
                        <Image
                            src={WebConstants.imageBaseURL + props.data.image}
                            className="w-full object-cover h-full"
                            alt="Project Image"
                            width="256"
                            height="256"
                            priority
                        />
                        <div className="group-hover:opacity-100 opacity-0 absolute leading-none bottom-0 left-0 top-0 right-0 ease-in-out duration-100 bg-black/40">
                            <div className="absolute bottom-0 px-4 pb-5">
                                <h3 className="font-bold mb-1">
                                    {props.data.name}
                                </h3>
                                <span className="text-xs text-white">
                                    {props.data.location},{' '}
                                    {props.data.completion_year}
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
            {!props?.data && <span>Invalid data passed</span>}

            <Transition show={showImages} as={Fragment}>
                <Dialog
                    onClose={() => closeGallery()}
                    className="relative z-50"
                >
                    <div className="fixed inset-0 bg-black/30" />

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <Dialog.Panel className="w-full max-w-xl rounded bg-white px-4 py-6">
                                <Dialog.Title className="font-bold text-xl flex justify-between">
                                    {props.data.name}
                                    <button onClick={() => closeGallery()}>
                                        <IoClose />
                                    </button>
                                </Dialog.Title>
                                {props.data.description && (
                                    <Dialog.Description className="text-xs mb-5 mt-2">
                                        {props.data.description}
                                    </Dialog.Description>
                                )}
                                <div className="mb-5 mt-5">
                                    <Image
                                        src={
                                            WebConstants.imageBaseURL +
                                            selectedImage?.name
                                        }
                                        className="w-full h-auto"
                                        height={300}
                                        width={500}
                                        priority
                                        alt="View project image"
                                    />
                                </div>
                                <Carousel responsive={responsive}>
                                    {images.map((image: any, i) => (
                                        <div
                                            className="mx-1 h-full cursor-pointer"
                                            key={i}
                                        >
                                            <Image
                                                src={
                                                    WebConstants.imageBaseURL +
                                                    image.name
                                                }
                                                onClick={() =>
                                                    setSelectedImage(image)
                                                }
                                                className="w-full h-full"
                                                height={200}
                                                width={500}
                                                priority
                                                alt="Project images image"
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
