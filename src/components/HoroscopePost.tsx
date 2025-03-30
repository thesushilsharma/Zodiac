import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type HoroscopeProps = {
  horoscope: string;
};

function HoroscopePost({ horoscope }: HoroscopeProps) {
  return (
    <div className="container mx-auto p-4">
      <Card className="w-full border-foreground">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium text-center outline-foreground">
            Your Horoscope
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-center">
            {horoscope}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default HoroscopePost;