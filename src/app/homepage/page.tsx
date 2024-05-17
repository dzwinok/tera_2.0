// components
import { Navbar, Footer } from "@/components/homepage";

// sections
import Hero from "./hero";
import OnlineCourse from "./online-course";
import WhyChooseUs from "./why-choose-us";
import CarouselFeatures from "./carousel-features";
import Pricing from "./pricing";
import OtherCourses from "./other-courses";
import { WavyBackground } from "@/components/ui/waveBackground";
import { Roboto } from "next/font/google";
import {Button, Typography} from "@material-tailwind/react";



const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export default function Campaign() {
  return (
    <div className={roboto.className}>
      {/*<WavyBackground className="flex justify-center items-center pb-40">*/}
          {/*<div>*/}
            {/*<p className="tracking-widest text-9xl text-white font-bold">
                Teraconsult
            </p>*/}
          
            {/*<p className="text-2xl text-white">*/}
            {/*    Teraconsult є однією із провідних кантор Львова та Києва.<br>*/}
            {/*    Обери курс сьогодні та здобудь знання уже завтра.*/}
            {/*</p>*/}
          {/*  /!*<button className="text-xl rounded background-white text-black">*!/*/}
          {/*  /!*    ОБРАТИ КУРС*!/*/}
          {/*  /!*</button>*!/*/}
          {/*</div>*/}
    {/*<div className="grid min-h-screen px-8">*/}
    {/*  <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">*/}
    {/*    <Typography*/}
    {/*      variant="h1"*/}
    {/*      color="white"*/}
    {/*      className="md:max-w-full lg:max-w-3xl"*/}
    {/*    >*/}
    {/*      Master the Power of React Beginner Course*/}
    {/*    </Typography>*/}
    {/*    <Typography*/}
    {/*      variant="lead"*/}
    {/*      color="white"*/}
    {/*      className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"*/}
    {/*    >*/}
    {/*      Our React Course is your gateway to becoming a proficient React*/}
    {/*      developer. Learn to build dynamic and interactive web applications*/}
    {/*      using one of the most popular JavaScript libraries in the industry.*/}
    {/*    </Typography>*/}
    {/*    <div>*/}
    {/*      <Button variant="gradient" color="white">*/}
    {/*        ENROLL TODAY*/}
    {/*      </Button>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</div>*/}
    {/*      <Typography*/}
    {/*        variant="lead"*/}
    {/*        color="white"*/}
    {/*        className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"*/}
    {/*      >*/}
    {/*        Teraconsult є однією із провідних кантор Львова та Києва. Обери курс*/}
    {/*          сьогодні та здобудь знання уже завтра.*/}
    {/*      </Typography>*/}
    {/*      <div>*/}
    {/*        <Button variant="gradient" color="white">*/}
    {/*          ОБРАТИ КУРС*/}
    {/*        </Button>*/}
    {/*      </div>*/}
      {/*</WavyBackground>*/}
      <Hero />
      <OnlineCourse />
      <WhyChooseUs />
      <CarouselFeatures />
      <Pricing />
      <OtherCourses />
    </div>
  );
}
