"use client";

import { Button, Typography, Card } from "@material-tailwind/react";
import { WavyBackground } from "@/components/ui/waveBackground";

function Hero() {
  return (
    <div className="relative min-h-screen w-full ">
        <div className="grid min-h-screen px-8">
          <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center ">
            <Typography
              variant="lead"
              color="white"
              className=" w-full md:max-w-full lg:max-w-3xl"
            >
              Простір для вивчення нової професії,<br/>зростання в кар’єрі або розвитку бізнесу
            </Typography>
            <p className="tracking-widest text-9xl text-white font-bold">
              Teraconsult
            </p>
            <div className="mt-10">
              <Button href="/study" className="px-5 py-3 text-xl" variant="gradient" color="white">
                ЗАПИСАТИСЬ НА КУРС
              </Button>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Hero;
