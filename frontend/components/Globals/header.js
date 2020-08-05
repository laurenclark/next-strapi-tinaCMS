import Link from 'next/link'

export default function Header() {
    return (
        <nav className="flex items-center justify-between flex-wrap p-6 lg:px-40 mb-10 border-b">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <span className="font-semibold text-6xl font-bold tracking-tight">
                    <Link href="/">
                        <a>TinaCMS.</a>
                    </Link>
                </span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 text-black border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-8 w-8" viewBox="0 0 20 20">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
                <div className="text-sm lg:flex-grow">
                    <a
                        href="https://tinacms.org/docs"
                        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-700 mr-4 text-2xl"
                    >
                        Docs
                    </a>
                    <Link href="/examples">
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-700 hover:text-white mr-4 text-2xl">
                            Examples
                        </a>
                    </Link>
                    <Link href="/blog">
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-700 hover:text-white text-2xl">
                            Blog
                        </a>
                    </Link>
                </div>
                <div>
                    <a
                        href="#"
                        className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0 text-2xl"
                    >
                        Edit
                    </a>
                </div>
            </div>
        </nav>
    )
}
