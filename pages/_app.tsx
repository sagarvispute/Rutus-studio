import type { AppProps } from 'next/app'
import React from 'react'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import './global.scss'
import axios from 'axios'

export default function App({ Component, pageProps }: AppProps) {
    axios.interceptors.response.use(
        (response) => {
            return response?.data
        },
        function (error) {
            console.error('Something went wrong')
        }
    )

    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}
