import React, { useState } from 'react'
import { IoArrowForward } from 'react-icons/io5'
import RequestQuoteModal from './RequestQuoteModal'

export default function Banner() {
    const [openQuote, setOpenQuote] = useState(false)

    return (
        <div className="container pt-10">
            <h1 className="text-4xl md:text-6xl font-black leading-[1.2]">
                Elevate your living spaces with Rutus Decor Studio. Discover
                personalized interior design that speaks to your style and
                needs. Let&rsquo;s redefine your space together
            </h1>

            <div className="bg-gray-200 relative h-96 mt-10 rounded-3xl banner-img-block">
                <div className="bg-white inline-block p-5 absolute rounded-3xl -top-5 -left-5 w-3/4 max-w-lg text-md">
                    At Rutus Decor Studio, we don&rsquo;t just design interiors,
                    we create experiences.
                </div>

                <div className="bg-white inline-block absolute -bottom-5 -right-0 p-5 pr-0 rounded-3xl rounded-tr-none">
                    <button
                        type="button"
                        onClick={() => setOpenQuote(true)}
                        className="rounded-full border-2 border-black flex gap-3 py-2 px-7 items-center group"
                    >
                        REQUEST A QUOTE
                        <span className="text-xl -rotate-[50deg] group-hover:-rotate-0 ease-in-out duration-100">
                            <IoArrowForward />
                        </span>
                    </button>
                </div>
            </div>

            <RequestQuoteModal isOpen={openQuote} setIsOpen={setOpenQuote} />
        </div>
    )
}
