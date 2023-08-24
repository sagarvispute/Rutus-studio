import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

export default function RequestQuoteBlock() {
    return (
        <div className="mt-10 mb-5">
            <h3 className="font-black text-3xl leading-9">
                Lorem ipsum dolor sit amet consectetur. Diam nunc ac interdum
                vulputate. Urna amet eu in elementum consequat vel elementum
                ultrices tellus. Pharetra arcu elit est est fermentum neque.
            </h3>

            <div className="grid md:grid-cols-2 gap-5 mt-7 leading-5">
                <p>
                    Lorem ipsum dolor sit amet consectetur. Nunc euismod quis
                    malesuada egestas. Odio nascetur faucibus urna.
                </p>

                <div className="md:text-right">
                    <a
                        href="/contact"
                        className="rounded-full border-2 border-black inline-flex gap-3 py-3 px-7 items-center group"
                    >
                        REQUEST A QUOTE
                        <span className="text-xl -rotate-[50deg] group-hover:-rotate-0 ease-in-out duration-100">
                            <IoArrowForward />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}
