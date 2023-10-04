import Head from 'next/head'
import Link from 'next/link'
import { IoArrowForward } from 'react-icons/io5'

export default function NotFound() {
    return (
        <div className="container py-16">
            <Head>
                <title>500 Internal Server Error | Rutus Decor Studio</title>
                <meta
                    name="description"
                    content="Sorry, we're experiencing some technical difficulties. Our team is working to resolve the issue. In the meantime, feel free to contact us."
                />
                <meta
                    property="og:title"
                    content="500 Internal Server Error | Rutus Decor Studio"
                />
                <meta
                    property="og:description"
                    content="Sorry, we're experiencing some technical difficulties. Our team is working to resolve the issue. In the meantime, feel free to contact us."
                />
                <meta
                    property="twitter:title"
                    content="Interior Design Services | Rutus Decor Studio's Expert Offerings"
                />
                <meta
                    property="twitter:description"
                    content="Sorry, we're experiencing some technical difficulties. Our team is working to resolve the issue. In the meantime, feel free to contact us."
                />
            </Head>

            <div className="max-w-2xl mx-auto text-center py-24">
                <h2 className="text-9xl font-bold mb-10">500</h2>
                <p className="mb-3">Server-side error occurred</p>

                <Link
                    href="/"
                    className="rounded-full border-2 border-black inline-flex gap-3 py-1 px-5 items-center group mr-3"
                    aria-label="Rutus Decor contact"
                >
                    <span className="hidden md:inline whitespace-nowrap">
                        Home
                    </span>
                    <span className="text-xl -rotate-[50deg] group-hover:-rotate-0 ease-in-out duration-100">
                        <IoArrowForward />
                    </span>
                </Link>

                <Link
                    href="/contact"
                    className="rounded-full border-2 border-black inline-flex gap-3 py-1 px-5 items-center group"
                    aria-label="Rutus Decor contact"
                >
                    <span className="hidden md:inline whitespace-nowrap">
                        Contact
                    </span>
                    <span className="text-xl -rotate-[50deg] group-hover:-rotate-0 ease-in-out duration-100">
                        <IoArrowForward />
                    </span>
                </Link>
            </div>
        </div>
    )
}
