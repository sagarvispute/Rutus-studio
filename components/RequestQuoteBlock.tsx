import React, { useState } from 'react'
import { IoArrowForward } from 'react-icons/io5'
import RequestQuoteModal from './RequestQuoteModal'

export default function RequestQuoteBlock() {
    const [openQuote, setOpenQuote] = useState(false)
    return (
        <div className="mt-10 mb-5">
            <h2 className="font-black text-3xl leading-10">
                Embark on your design journey with Rutus Décor Studio. Request a
                quote today for bespoke, luxurious interiors that align
                seamlessly with your unique style and lifestyle, and let us turn
                your vision into reality.
            </h2>

            <div className="grid md:grid-cols-2 gap-5 mt-7 leading-5 items-center">
                <p>
                    Let&rsquo;s Bring Your Vision to Life – Request a Quote
                    Today
                </p>

                <div className="md:text-right">
                    <button
                        className="rounded-full border-2 border-black inline-flex gap-3 py-3 px-7 items-center group"
                        onClick={() => setOpenQuote(true)}
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
