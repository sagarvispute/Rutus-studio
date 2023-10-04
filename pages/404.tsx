import Head from 'next/head'
import Link from 'next/link'
import { IoArrowForward } from 'react-icons/io5'

export default function NotFound() {
    return (
        <div className="container py-16">
            <Head>
                <title>404 Error - Page Not Found | Rutus Decor Studio</title>
                <meta
                    name="description"
                    content="Oops! It looks like you've landed on a page that doesn't exist. Return to Rutus Decor Studio's home page to continue exploring our interior design services."
                />
                <meta
                    property="og:title"
                    content="404 Error - Page Not Found | Rutus Decor Studio"
                />
                <meta
                    property="og:description"
                    content="Oops! It looks like you've landed on a page that doesn't exist. Return to Rutus Decor Studio's home page to continue exploring our interior design services."
                />
                <meta
                    property="twitter:title"
                    content="404 Error - Page Not Found | Rutus Decor Studio"
                />
                <meta
                    property="twitter:description"
                    content="Oops! It looks like you've landed on a page that doesn't exist. Return to Rutus Decor Studio's home page to continue exploring our interior design services."
                />
            </Head>

            <div className="max-w-2xl mx-auto text-center py-24">
                <h2 className="text-9xl font-bold mb-10">404</h2>
                <p className="mb-3">
                    Page not found. The content you&rsquo;re looking for does
                    not exist.
                </p>

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
