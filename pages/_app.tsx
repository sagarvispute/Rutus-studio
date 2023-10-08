import type { AppProps } from 'next/app'
import React from 'react'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import './global.scss'
import axios from 'axios'
import ErrorBoundary from '@components/ErrorBoundary'
import Head from 'next/head'
import Script from 'next/script'

axios.interceptors.response.use(
    async (response: any) => {
        if (response && response?.status !== 200 && response?.status !== 201) {
            return null
        }

        return response?.data
    },
    (error) => {
        if (error?.response?.status === 401) {
            return Promise.reject(error)
        }
    }
)

export default function App({ Component, pageProps }: AppProps) {
    const getCurrentUrl = () => {
        if (typeof window !== 'undefined') return location.href
        return ''
    }

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    httpEquiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#fbf9f7" />
                <meta
                    name="keywords"
                    content="Interior design services, Interior decorator near me, Home interior design, Commercial interior design, Residential interior design, Modern interior design, Traditional interior design, Contemporary interior design, Kitchen design ideas, Living room interior design, Bedroom interior design, Bathroom interior design, Office interior design, Restaurant interior design, Retail store interior design, Interior design consultation, Interior design portfolio, Interior design inspiration, Interior design trends, Affordable interior design, Custom furniture design, Space planning solutions, Interior design for small spaces, Luxury interior design, Interior design services in India, Indian interior designers, India home decor, Interior design trends in India, Indian traditional interior design, Contemporary interior design India, Indian interior design inspiration, India interior decorator, Best interior designers India, Indian interior design portfolio, Interior design services in Pune, Pune interior designers, Home decor in Pune, Interior design firms Pune, Pune interior design trends, Pune residential interior design, Modern interior design Pune, Pune interior design consultation, Affordable interior designers Pune, Pune interior decorator, Interior design services in Mumbai, Mumbai interior designers, Home decor in Mumbai, Interior design firms Mumbai, Mumbai interior design trends, Mumbai residential interior design, Modern interior design Mumbai, Mumbai interior design consultation, Affordable interior designers Mumbai, Mumbai interior decorator, Caravan interior design, Caravan layout ideas, Space-efficient caravan design, Modern caravan design, Custom caravan interiors, Caravan remodeling, Caravan storage solutions, Caravan decor ideas, Caravan kitchen design, Compact caravan design, Caravan furniture design, Caravan lighting design, Eco-friendly caravan design, Caravan design trends, Caravan exterior design, Luxury caravan interiors, Caravan design inspiration, Container interior design, Shipping container conversion, Container home interiors, Container house design, Container office space, Container restaurant interior, Container retail space, Container living spaces, Industrial container decor, Container workshop layout, Sustainable container design, Tiny home container design, Innovative container interiors, Recycled container interiors, Cargo container customization, Container design trends, Affordable container interiors, Container interior inspiration, Container interior architects, Creative container layouts"
                />
                <meta property="og:site_name" content="Rutus Decor Studio" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={getCurrentUrl()} />
                <meta property="twitter:card" content="summary" />
                <meta property="twitter:site" content="@Rutustudio" />
                <meta property="twitter:creator" content="@Rutustudio" />
                <meta
                    property="twitter:domain"
                    content="https://www.rutustudio.com"
                />
                <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
                <link
                    rel="apple-touch-icon"
                    href="/icons/apple-touch-icon.png"
                />
                <link rel="shortcut icon" href="/favicon.ico"></link>

                <link rel="canonical" href={getCurrentUrl()} />
            </Head>

            <Script src="https://www.googletagmanager.com/gtag/js?id=G-XV8LX9YDWC" />
            <Script id="google-analytics">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
        
                gtag('config', 'G-XV8LX9YDWC');
                `}
            </Script>

            <ErrorBoundary>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </ErrorBoundary>
        </>
    )
}
