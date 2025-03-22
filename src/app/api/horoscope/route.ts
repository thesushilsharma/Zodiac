import { NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";
import moment from "moment";

const zodiacSigns = {
  aries: 1,
  taurus: 2,
  gemini: 3,
  cancer: 4,
  leo: 5,
  virgo: 6,
  libra: 7,
  scorpio: 8,
  sagittarius: 9,
  capricorn: 10,
  aquarius: 11,
  pisces: 12,
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  let zodiacSign = params.get("zodiacSign");
  zodiacSign = zodiacSign!.toLowerCase();
  const zodiacSignNumber = zodiacSigns[zodiacSign as keyof typeof zodiacSigns];
  console.log(zodiacSign);

  if (!zodiacSignNumber) {
    return NextResponse.json({
      message:
        "Invalid zodiac sign name. Please provide a valid zodiac sign name.",
    });
  }

  const period = params.get("period");
  console.log("Timeframe:", period);
  const year = params.get("year");
  console.log("Year:", year);

  try {
    let baseUrl;
    if (year !== null) {
      baseUrl = "https://www.horoscope.com/us/horoscopes/yearly/";
    } else {
      baseUrl = "https://www.horoscope.com/us/horoscopes/general/horoscope-";
    }

    let url;
    if (["today", "tomorrow", "yesterday"].includes(period!)) {
      url = `${baseUrl}general-daily-${period}.aspx?sign=${zodiacSignNumber}`;
    } else if (["weekly", "monthly"].includes(period!)) {
      url = `${baseUrl}general-${period}.aspx?sign=${zodiacSignNumber}`;
    } else if (moment(period, "YYYY-MM-DD", true).isValid()) {
      url = `${baseUrl}archive.aspx?sign=${zodiacSignNumber}&laDate=${period!.replace(
        /-/g,
        ""
      )}`;
    } else if (moment(year, "YYYY", true).isValid()) {
      url = `${baseUrl}${year}-horoscope-${zodiacSign}.aspx`;
    } else {
      return NextResponse.json({
        message:
          'Invalid day format. Please use "today", "tomorrow", "yesterday", YYYY-MM-DD format, "weekly", or YYYY (for yearly).',
      });
    }
    console.log(url);
    const response = await axios.get(url);
    console.log("Year:", year);

    const $ = cheerio.load(response.data);

    let horoscopeText;
    if (year !== null) {
      horoscopeText = $("section#personal p")
        .not("p.show-small,p.hide-small")
        .text();
    } else {
      horoscopeText = $(".main-horoscope p")
        .not("p.show-small,p.hide-small")
        .text();
    }

    if (!horoscopeText) {
      throw new Error("No future");
    }

    return NextResponse.json(horoscopeText, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
