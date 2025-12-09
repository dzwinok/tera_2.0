import { Card,CardDescription,CardFooter,CardHeader } from "@/components/ui/card";

import Hero from "@/app/homepage/hero";
import OnlineCourse from "@/app/homepage/online-course";
import WhyChooseUs from "@/app/homepage/why-choose-us";
import CarouselFeatures from "@/app/homepage/carousel-features";
import Pricing from "@/app/homepage/pricing";
import OtherCourses from "@/app/homepage/other-courses";
import { WavyBackground } from "@/components/ui/waveBackground";
import { Roboto } from "next/font/google";
import {Button, Typography} from "@material-tailwind/react";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
    display: "swap",
});

async function getStrapiData(url: string) {
    const baseUrl = "http://localhost:1337";
    try {
        const response = await fetch(baseUrl + url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export default async function Home() {
    const strapiData = await getStrapiData("/api/home-page");

    const { title, description } = strapiData.data;
  return (
      <div className={roboto.className}>
          <WavyBackground className="flex justify-center items-center pb-40">
              <Hero />
          </WavyBackground>
          <OnlineCourse />
          
          <Pricing />
          <OtherCourses />
      </div>
  );
}
