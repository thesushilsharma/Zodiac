"use client";

import React, { useState } from "react";
import { FormEvent } from "react";
import SubmitBtn from "@/components/SubmitBtn";
import HoroscopePost from "@/components/HoroscopePost";

function Horoscope() {
  const [zodiacSymbol, setZodiacSymbol] = useState("");
  const [period, setPeriod] = useState("");
  let [horoscope, setHoroscope] = useState("");

  const zodiacSigns = {
    Aries: 1,
    Taurus: 2,
    Gemini: 3,
    Cancer: 4,
    Leo: 5,
    Virgo: 6,
    Libra: 7,
    Scorpio: 8,
    Sagittarius: 9,
    Capricorn: 10,
    Aquarius: 11,
    Pisces: 12,
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!zodiacSymbol || !period) {
      setHoroscope("Please enter your zodiac sign and timeframe of birth.");
      return;
    }

    try {
      const response = await fetch(
        `/api/horoscope?zodiacSign=${zodiacSymbol}&period=${period}`,
        {
          method: "GET",
        }
      );
      horoscope = await response.json();
      setHoroscope(horoscope);
      console.log(horoscope);
    } catch (error) {
      console.error("Error fetching horoscope:", error);
      setHoroscope("Error fetching horoscope. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-4 md:space-y-6 sm:px-2">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-center md:text-2xl dark:text-white">
        Star Material
      </h1>
      <form onSubmit={handleSubmit} className="space-y-8 md:space-y-6">
        <div className="container mx-auto max-w-sm px-4 py-2">
          <label
            className="block mb-2 text-sm font-medium text-center dark:text-white"
            htmlFor="zodiacSymbol"
          >
            Your Zodiac:
          </label>
          <select
            value={zodiacSymbol}
            className="bg-gray-50 border border-gray-300 sm:text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) => setZodiacSymbol(event.target.value)}
            required
          >
            <option value="">Select your zodiac sign</option>
            {Object.keys(zodiacSigns).map((sign) => (
              <option key={sign} value={sign}>
                {sign}
              </option>
            ))}
          </select>
          <label
            className="block mb-2 text-sm font-medium text-center dark:text-white"
            htmlFor="period"
          >
            Timeframe:
          </label>
          <select
            id="period"
            value={period}
            className="bg-gray-50 border border-gray-300 sm:text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) => setPeriod(event.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="yesterday">Yesterday</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          <SubmitBtn />
        </div>
      </form>

      <div>{horoscope && <HoroscopePost horoscope={horoscope} />}</div>
    </div>
  );
}

export default Horoscope;
