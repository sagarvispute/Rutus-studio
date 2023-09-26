import React, { useState } from 'react'
import { IoArrowForward } from 'react-icons/io5'
import RequestQuoteModal from './RequestQuoteModal'

export default function Banner() {
    const [openQuote, setOpenQuote] = useState(false)

    return (
        <div className="container pt-10">
            <h1 className="text-6xl font-black">
                Lorem ipsum dolor sit amet consectetur. Lacinia ac scelerisque
                at ipsum tortor massa maecenas.
            </h1>

            <div className="bg-red-600 relative h-96 mt-10 rounded-2xl banner-img-block">
                <div className="bg-white inline-block p-5 absolute rounded-2xl -top-5 -left-5 w-3/4 max-w-lg text-xs">
                    Lorem ipsum dolor sit amet consectetur. Pulvinar nisl proin
                    hendrerit ac risus leo a ante. Metus urna libero commodo
                    velit.
                </div>

                <div className="bg-white inline-block absolute -bottom-5 -right-5 p-5 rounded-2xl">
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

            {openQuote && (
                <RequestQuoteModal
                    isOpen={openQuote}
                    setIsOpen={setOpenQuote}
                />
            )}
        </div>
    )
}
