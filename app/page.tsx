import Image from "next/image";
import Horoscope from '../components/Horoscope';

export default function Home() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-center py-8 mx-auto min-h-screen">
        <div className="flex">
          <a
            className="-m-1.5 p-1.5"
            href="https://github.com/thesushilsharma"
            target="_blank"
            rel="noopener noreferrer"
          >
            hi{" "}
            <Image
              src="./zodiac.svg"
              alt="Logo"
              className="h-8 w-auto"
              width={180}
              height={37}
              priority
            />
          </a>
        </div>

        <div className="rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          <Horoscope />
        </div>
      </div>
    </section>
  );
}
