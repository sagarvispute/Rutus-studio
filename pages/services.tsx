import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const Pageheader = dynamic(() => import('@components/Pageheader'))
const RequestQuoteBlock = dynamic(() => import('@components/RequestQuoteBlock'))

export default function Services() {
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
                name: `Services`,
                item: 'https://www.rutustudio.com/services',
            },
        ],
    }

    return (
        <div className="container py-16">
            <Head>
                <title>
                    Interior Design Services | Rutus Decor Studio&rsquo;s Expert
                    Offerings
                </title>
                <meta
                    name="description"
                    content="Discover our tailored interior design services. Rutus Decor Studio brings innovative ideas to life, creating personalized works of art."
                />
                <meta
                    property="og:title"
                    content="Interior Design Services | Rutus Decor Studio's Expert Offerings"
                />
                <meta
                    property="og:description"
                    content="Discover our tailored interior design services. Rutus Decor Studio brings innovative ideas to life, creating personalized works of art."
                />
                <meta
                    property="twitter:title"
                    content="Interior Design Services | Rutus Decor Studio's Expert Offerings"
                />
                <meta
                    property="twitter:description"
                    content="Discover our tailored interior design services. Rutus Decor Studio brings innovative ideas to life, creating personalized works of art."
                />
                <script
                    key="breadcrumb-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbData),
                    }}
                />
            </Head>

            <Pageheader title="Our Services" />

            <p className="mb-10">
                Our preference as designers is to be brought on to the project
                as early in the process as possible. We love collaborating with
                architects and builders to help you create the vision you have
                for your home. Whether your project is a new build, gut
                renovation, furnishing, or somewhere in between, full-service
                design includes:
            </p>

            <ul className="list-disc pl-5 mb-24">
                <li className="mb-3">
                    A detailed design questionnaire that helps us to understand
                    the scope and needs of the project, as well as your specific
                    design style
                </li>
                <li className="mb-3">
                    Design plan including preliminary sketches, CAD drawings and
                    elevations, and 3D renderings if needed
                </li>
                <li className="mb-3">
                    Close collaboration with architects, contractors, and other
                    tradespeople
                </li>
                <li className="mb-3">
                    Comprehensive material & finish selections for renovations
                </li>
                <li className="mb-3">
                    Furniture, lighting, accessory selections for furnishings
                </li>
                <li className="mb-3">
                    Detailed specification sheets to track all product costs and
                    lead times
                </li>
                <li className="mb-3">Purchasing and procurement</li>
                <li className="mb-3">
                    Project management and regular site visits to monitor design
                    execution
                </li>
                <li>Installation and final touches</li>
            </ul>

            <hr className="mb-24" />

            <RequestQuoteBlock />
        </div>
    )
}
