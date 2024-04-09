# Zodiac
This Next.js application allows you to explore your daily, weekly, monthly or more horoscope based on your chosen zodiac sign. It leverages Tailwind CSS for a clean and responsive user interface.

## Features

- **Zodiac Sign Selection**: Choose your zodiac sign from a dropdown menu.
- **Date Selection**: Select the desired date for your horoscope (today, tomorrow, yesterday, weekly, or monthly).
- **Horoscope Display**: View your personalized horoscope text in a dedicated section.
- **Clean and Responsive UI**: Tailwind CSS ensures a beautiful and responsive layout across different devices.

## Data Source

- Fetches horoscopes data from [API]()

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

- Node.js installed on your machine
- npm or yarn package manager

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

You can deploy this API to a production server using a platform like Vercel, Netlify or any of your choice

## Contributing

Feel free to fork the repository and submit pull requests with your improvements or bug fixes. We welcome contributions from the community!

## License

This project is licensed under the MIT License.  See the [LICENSE](https://github.com/thesushilsharma/Zodiac/blob/main/LICENSE) file for details.

## Acknowledgements
- This project is for educational purposes only.