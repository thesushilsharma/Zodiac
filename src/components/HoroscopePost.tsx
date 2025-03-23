import React from "react";

type HoroscopeProps = {
  horoscope: string;
};

function HoroscopePost({ horoscope }: HoroscopeProps) {
  return (
    <div className="container p-4 max-w-full overflow-hidden mx-auto">
      <h2 className="block mb-2 text-base font-medium text-center">
        Your Horoscope
      </h2>
      <p className="block p-2.5 w-full text-sm text-balance text-center bg-card rounded-lg shadow-sm border border-border focus:ring-primary focus:border-primary">
        {horoscope}
      </p>
    </div>
  );
}

export default HoroscopePost;
