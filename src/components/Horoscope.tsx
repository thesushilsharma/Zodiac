"use client";

import React, { useState } from "react";
import { FormEvent } from "react";
import SubmitBtn from "@/components/SubmitBtn";
import HoroscopePost from "@/components/HoroscopePost";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";

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
    <section className="w-full py-12">
      <div className="container mx-auto px-4 space-y-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Star Material
          </h1>

          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-lg">
                Your Cosmic Forecast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="zodiacSymbol" className="text-center block">
                      Your Zodiac:
                    </Label>
                    <select
                      value={zodiacSymbol}
                      className="bg-card border border-border sm:text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5"
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="period" className="text-center block">
                      Timeframe:
                    </Label>
                    <select
                      id="period"
                      value={period}
                      className="bg-card border border-border sm:text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5"
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
                  </div>
                </div>

                <SubmitBtn />
              </form>
            </CardContent>
          </Card>

          {horoscope && (
            <div className="w-full max-w-3xl mx-auto mt-6">
              <HoroscopePost horoscope={horoscope} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Horoscope;
