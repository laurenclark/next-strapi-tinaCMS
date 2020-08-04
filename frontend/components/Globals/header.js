import Link from 'next/link'

export default function Header() {
    return (
        <nav class="flex items-center justify-between flex-wrap p-6 mb-10 border-b">
            <div class="flex items-center flex-shrink-0 text-black mr-6">
                <span class="font-semibold text-6xl font-bold tracking-tight">
                    TinaCMS.
                </span>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 text-black border-teal-400 hover:text-white hover:border-white">
                    <svg
                        class="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
                <div class="text-sm lg:flex-grow">
                    <a
                        href="#responsive-header"
                        class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-700 mr-4 text-2xl"
                    >
                        Docs
                    </a>
                    <a
                        href="#responsive-header"
                        class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-700 hover:text-white mr-4 text-2xl"
                    >
                        Examples
                    </a>
                    <a
                        href="#responsive-header"
                        class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-700 hover:text-white text-2xl"
                    >
                        Blog
                    </a>
                </div>
                <div>
                    <a
                        href="#"
                        class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0 text-2xl"
                    >
                        Edit
                    </a>
                </div>
            </div>
        </nav>
    )
}
