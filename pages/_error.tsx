import Head from 'next/head'
import Link from 'next/link'
import { IoArrowForward } from 'react-icons/io5'

export default function ErrorPage({ statusCode }: any) {
    return (
        <div className="container py-16">
            <Head>
                <title>An error occurred | Rutus Decor Studio</title>
                <meta
                    name="description"
                    content="Oops! It looks like something went wrong. Return to Rutus Decor Studio's home page to continue exploring our interior design services."
                />
            </Head>

            <div className="max-w-2xl mx-auto text-center py-24">
                <h2 className="text-9xl font-bold mb-10">
                    Oops, something went wrong
                </h2>
                <p className="mb-3">
                    {statusCode
                        ? `An error ${statusCode} occurred on server`
                        : 'An error occurred on client'}
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
