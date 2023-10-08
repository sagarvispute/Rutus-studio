import React from 'react'

export default function HomeInfo() {
    return (
        <section className="container grid sm:grid-cols-3 lg:grid-cols-5 gap-4 pb-28">
            <div className="lg:col-span-2 bg-gray-200 rounded-3xl info-img-block h-72 sm:h-auto mb-8 sm:mb-0">
                &nbsp;
            </div>
            <div className="sm:col-span-2 lg:col-span-3">
                <h3 className="text-3xl font-bold mb-5 sm:-ml-16 sm:bg-white sm:pl-7 pb-5 rounded-3xl pt-5 -mt-5 ">
                    About Rutus Décor Studio
                </h3>
                <p className="mb-5">
                    Specializes in providing turnkey design solutions for
                    highend residential luxury homes and commercial projects.
                    our ability to create luxurious, sophisticated interiors of
                    timeless quality, extraordinary design, and functionality,
                    infused with clientʼs personal style and desires. Most
                    importantly we respect our client’s budget and established
                    timeline.
                </p>
                <p>
                    Established in Mumbai Our mission is to focus on visualizing
                    and expressing the clients’ desires and personal needs of
                    style by exceeding the limits of perfection in their
                    interiors. To provide the best customer service, Our 3D
                    rendering experts will bring your ideas to life-like visuals
                    to better envision the classical or modern fit-outs of your
                    choice before the project execution
                </p>
            </div>
        </section>
    )
}
