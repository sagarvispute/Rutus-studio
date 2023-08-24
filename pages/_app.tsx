import type { AppProps } from 'next/app'
import React from 'react'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import './global.scss'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}
