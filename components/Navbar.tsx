import useClickOutside from '@hooks/OutsideClick'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { IoArrowForward, IoMenu } from 'react-icons/io5'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const router = useRouter()
    const navRef: any = useRef()

    const hideMenus = () => {
        setShowMenu(false)
    }

    useClickOutside(navRef, () => {
        setShowMenu(false)
    })

    return (
        <div
            className="container flex md:justify-between items-center py-3 flex-wrap flex-[2_2_0%] relative bg-white"
            ref={navRef}
        >
            <Link
                href="/"
                className="basis-[134px] md:basis-auto"
                aria-label="Rutus Decor Home"
            >
                <Image
                    src="/images/Logo.webp"
                    alt="Rutus Decor studio's logo"
                    className="h-12 w-auto"
                    width="134"
                    height="48"
                    priority
                />
            </Link>

            <ul
                className={`md:flex gap-5 order-3 md:order-2 absolute md:relative top-16 md:top-0 pt-3 md:pt-0 basis-auto left-0 right-0 px-3 pb-3 md:pb-0 bg-white md:bg-transparent ${
                    !showMenu && 'hidden'
                }`}
            >
                <li>
                    <Link
                        href="/"
                        className={`hover:text-[#bf9a6a] ${
                            router.asPath == '/' ? 'text-[#bf9a6a]' : ''
                        }`}
                        onClick={hideMenus}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/studio"
                        className={`hover:text-[#bf9a6a] ${
                            router.asPath == '/studio/' ? 'text-[#bf9a6a]' : ''
                        }`}
                        onClick={hideMenus}
                    >
                        The Studio
                    </Link>
                </li>
                <li>
                    <Link
                        href="/services"
                        className={`hover:text-[#bf9a6a] ${
                            router.asPath == '/services/'
                                ? 'text-[#bf9a6a]'
                                : ''
                        }`}
                        onClick={hideMenus}
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        href="/projects"
                        className={`hover:text-[#bf9a6a] ${
                            router.asPath == '/projects/'
                                ? 'text-[#bf9a6a]'
                                : ''
                        }`}
                        onClick={hideMenus}
                    >
                        Projects
                    </Link>
                </li>
            </ul>

            <div className="flex gap-1 basis-[calc(100%-150px)] md:basis-0 justify-end order-2 md:order-3">
                <button
                    className="block text-2xl px-2 rounded-full md:hidden"
                    onClick={() => setShowMenu(!showMenu)}
                    aria-label="Rutus Decor mobile menu"
                >
                    <IoMenu />
                </button>
                <Link
                    href="/contact"
                    className="rounded-full border-2 border-black flex gap-3 py-1 px-5 items-center group"
                    aria-label="Rutus Decor contact"
                >
                    <span className="hidden md:inline whitespace-nowrap">
                        Contact Us
                    </span>
                    <span className="text-xl -rotate-[50deg] group-hover:-rotate-0 ease-in-out duration-100">
                        <IoArrowForward />
                    </span>
                </Link>
            </div>
        </div>
    )
}
