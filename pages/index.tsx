import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const Banner = dynamic(() => import('@components/Banner'))
const HomeFeature = dynamic(() => import('@components/HomeFeature'))
const HomeInfo = dynamic(() => import('@components/HomeInfo'))
const HomeProject = dynamic(() => import('@components/HomeProject'))

export default function index() {
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
        ],
    }

    return (
        <div>
            <Head>
                <title>
                    Rutus Decor Studio | Innovative Interior Design Solutions
                </title>
                <meta
                    name="description"
                    content="Welcome to Rutus Decor Studio! Crafting captivating interiors reflecting your style. Explore our services and portfolio."
                />
                <meta
                    property="og:title"
                    content="Rutus Decor Studio | Innovative Interior Design Solutions"
                />
                <meta
                    property="og:description"
                    content="Welcome to Rutus Decor Studio! Crafting captivating interiors reflecting your style. Explore our services and portfolio."
                />
                <meta
                    property="twitter:title"
                    content="Rutus Decor Studio | Innovative Interior Design Solutions"
                />
                <meta
                    property="twitter:description"
                    content="Welcome to Rutus Decor Studio! Crafting captivating interiors reflecting your style. Explore our services and portfolio."
                />
                <script
                    key="breadcrumb-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbData),
                    }}
                />
            </Head>

            <Banner />

            <HomeFeature />

            <HomeInfo />

            <HomeProject />
        </div>
    )
}
