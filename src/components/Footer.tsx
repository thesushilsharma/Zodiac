import Image from "next/image";

export default function Footer() {
    return (
        <footer className="text-gray-400 bg-gray-900 body-font mt-auto">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col ">
                <a
                    className="-m-1.5 p-1.5 flex title-font font-medium items-center md:justify-start justify-center text-white"
                    href="https://github.com/thesushilsharma"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="./zodiac.svg"
                        alt="Logo"
                        className="h-8 w-auto"
                        width={180}
                        height={37}
                        priority
                    />
                </a>
                <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2024 Sushil Sharma —
                    <a href="https://www.linkedin.com/in/thesushilsharma/" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@thesushilsharma</a>
                </p>
            </div>
        </footer>
    )
}
