"use client";
import { Button, Typography, Card } from "@material-tailwind/react";
import { WavyBackground } from "@/components/ui/waveBackground";
import Link from 'next/link';

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
            <p className="tracking-widest text-9xl text-white font-bold [text-shadow:0_4px_12px_rgba(0,0,0,0.45)]">
              Teraconsult
            </p>
            <div className="mt-10">
              <Link href="/study">
                <Button className="px-5 py-3 text-lg uppercase" variant="gradient" color="white">
                  записатись на курс
                </Button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Hero;
