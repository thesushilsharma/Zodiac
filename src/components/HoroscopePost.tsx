import React from "react";

type HoroscopeProps = {
  horoscope: string;
};

function HoroscopePost({ horoscope }: HoroscopeProps) {
  return (
    <div className="container p-4 max-w-full overflow-hidden mx-auto">
      <h2 className="block mb-2 text-base font-medium text-center dark:text-gray-400">
        Your Horoscope
      </h2>
      <p className="block p-2.5 w-full text-sm text-balance text-center bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
        {horoscope}
      </p>
    </div>
  );
}

export default HoroscopePost;
