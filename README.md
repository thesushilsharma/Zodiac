# Zodiac
This Next.js application allows you to explore your daily, weekly, monthly or more horoscope based on your chosen zodiac sign. It leverages Tailwind CSS for a clean and responsive user interface.

## Features

- **Zodiac Sign Selection**: Choose your zodiac sign from a dropdown menu.
- **Personalized Horoscopes**: Get daily, weekly, monthly, and yearly horoscopes tailored to your zodiac sign.
- **Compatibility Insights**: Check relationship compatibility based on astrology.
- **Planetary Transits**: Stay updated with real-time planetary movements and their influence.

> **_NOTE:_** Work In progress  
- **Interactive Elements**: Daily lucky numbers, tarot card pulls, and astrology trends.
- **Multi-Astrology Support**: Choose from Western astrology, Vedic astrology, or Lo Shu Grid numerology.
- **Dynamic Date Selection**: Users can select any date range for customized insights.
- **Celestial-Themed UI**: A sleek, modern design with smooth navigation and an immersive experience.

## Supported Zodiac Systems

1. Western Astrology
 - 12 Zodiac Signs (Aries - Pisces)
 - Based on sun signs
 - Elemental classification (Fire, Earth, Air, Water)

> **_NOTE:_** Work In progress  
2. Vedic Astrology (Jyotish)
 - 12 Rashi (Moon Signs) & 27 Nakshatras
 - Based on the Sidereal zodiac system
 - Birth chart (Kundali) analysis

3. Lo Shu Grid Numerology
 - Based on ancient Chinese numerology
 - Grid-based calculations for personality and destiny numbers

## Data Source

- Fetches(web scraping) horoscope data from [API](https://www.horoscope.com/us/index.aspx)

## API Route
The application utilizes an API route (/api/horoscope) to fetch horoscope data from the external website. This route accepts query parameters for zodiacSign and timeFrame.

## Endpoints
### Get a Horoscope for Today, Tomorrow, or Yesterday
- **Method**: GET
   - `http://localhost:3000/api/horoscope?zodiacSign=Cancer&period=today`
   > Replace `Cancer` with the desired zodiac sign and `today` with any timeframe you like.

### Get Weekly or Monthly Horoscope
- **Method**: GET
   - `http://localhost:3000/api/horoscope?zodiacSign=Cancer&period=weekly`
   > Replace `Cancer` with the desired zodiac sign and `weekly` with any timeframe you like.

### Get Specific Date Horoscope (In Progress)
- **Method**: GET
   - `http://localhost:3000/api/horoscope?zodiacSign=Cancer&period=YYYY-MM-DD`
   > Replace `Cancer` with the desired zodiac sign and `YYYY-MM-DD` with a date within the last year.

### Get Previous or Current Year Horoscope (In Progress)
- **Method**: GET
   
## Usage

- Visit the application in your browser.
- Select your zodiac sign from the dropdown menu.
- Choose your desired horoscope timeframe:
    - Today
    - Tomorrow
    - Yesterday
    - Weekly
    - Monthly
    - Specific Date (enter in YYYY-MM-DD format) 
- Click the "Get Horoscope" button.
- Your personalized horoscope will be  displayed below.

## Prerequisites

- VS Code or any Code Editor
- Node.js installed on your machine
- npm package manager
- Use the Postman or Thunder client extension in VS Code to make API requests.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thesushilsharma/Zodiac.git
   ```

2. Install dependencies:
    - [axios](https://axios-http.com/): Promise-based HTTP client for the browser and Node.js
    - [cheerio](https://cheerio.js.org/): Fast, flexible & lean implementation of core jQuery designed specifically for the server
    - [moment](https://momentjs.com/): Parse, validate, manipulate, and display dates and times in JavaScript
    
    ```
    cd Zodiac
    npm i
    ```

3. Start the development server:
   ```
    npm run dev
    ```
This starts the development server and opens your app in the browser, typically at `http://localhost:3000`

## Deployment:

You can deploy this API to a production server using a platform like Vercel, Netlify or any of your choice.

## Contributing

Feel free to fork the repository and submit pull requests with your improvements or bug fixes. We welcome contributions from the community!

## License

This project is licensed under the MIT License.  See the [LICENSE](https://github.com/thesushilsharma/Zodiac/blob/main/LICENSE) file for details.

## Acknowledgements
- This project is for educational purposes only.
