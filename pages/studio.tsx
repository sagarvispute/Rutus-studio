import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const Pageheader = dynamic(() => import('@components/Pageheader'))
const RequestQuoteBlock = dynamic(() => import('@components/RequestQuoteBlock'))

export default function Studio() {
    const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://rutustudio.com/',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'The Studio',
                item: 'https://rutustudio.com/studio',
            },
        ],
    }

    return (
        <div className="container py-16">
            <Head>
                <title>
                    About Rutus Decor Studio | Interior Design Expertise
                </title>
                <meta
                    name="description"
                    content="Learn about Rutus Decor Studio and our passion for interior design. Our team of experts is dedicated to transforming your spaces into works of art."
                />
                <meta
                    property="og:title"
                    content="About Rutus Decor Studio | Interior Design Expertise"
                />
                <meta
                    property="og:description"
                    content="Learn about Rutus Decor Studio and our passion for interior design. Our team of experts is dedicated to transforming your spaces into works of art."
                />
                <meta
                    property="twitter:title"
                    content="About Rutus Decor Studio | Interior Design Expertise"
                />
                <meta
                    property="twitter:description"
                    content="Learn about Rutus Decor Studio and our passion for interior design. Our team of experts is dedicated to transforming your spaces into works of art."
                />
                <script
                    key="breadcrumb-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbData),
                    }}
                />
            </Head>

            <Pageheader title="Know more about Rutus Decor Studio" />

            <p className="mb-5">
                Rutus Decor Studio is a distinguished interior design company
                dedicated to transforming spaces into captivating and functional
                works of art. With a passion for design excellence, we have been
                shaping interior environments for clients across the globe. Our
                commitment to creativity, innovation, and attention to detail
                sets us apart as leaders in the field of interior design.
            </p>

            <p className="mb-5">
                At Rutus Decor Studio, we understand that every project is a
                unique expression of our client&rsquo;s vision. Our team of
                talented designers and architects brings a wealth of experience
                to the table, specializing in crafting bespoke interiors that
                harmonize aesthetics, comfort, and practicality. From
                residential sanctuaries to commercial spaces that inspire, we
                excel in curating personalized solutions that reflect the
                individuality of each client.
            </p>

            <p className="mb-5">
                Our mission at Rutus Decor Studio is to exceed expectations in
                every project we undertake. We believe that a well-designed
                space has the power to enrich lives and elevate experiences.
                With an unwavering commitment to client satisfaction, we
                collaborate closely with our clients to bring their dreams to
                life. Rutus Decor Studio is not just about creating beautiful
                interiors; it&rsquo;s about crafting environments that tell
                stories, evoke emotions, and stand the test of time.
            </p>

            <p className="mb-24">
                Feel free to modify or expand upon these paragraphs to suit
                Rutus Decor Studio&rsquo;s specific mission and values.
            </p>

            <hr className="mb-24" />

            <RequestQuoteBlock />
        </div>
    )
}
