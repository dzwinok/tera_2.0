"use client";
import React from "react";
import { Card, CardBody, Button, Typography } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';


const PRICING_OPTIONS = [
  "20 занять",
  "40 академічних годин",
  "Доступ до платної версії",
  "Сертифікат про завершення курсу",
];

export function Pricing() {
  return (
    <div className="grid min-h-screen place-items-center">
      <section className="container mx-auto px-10">
        <div className="grid place-items-center text-tera-green pb-20 text-center">
          <Typography variant="h2" color="tera-green">
            Пропозиція місяця
          </Typography>
          <Typography variant="lead" className="mt-2 !text-gray-500 lg:w-5/12">
            Встигни скористатись акційною пропозицією до кінця року та отримай кваліфікований курс для твого фаху
          </Typography>
        </div>
        <Card className="px-6 pb-5 bg-tera-dark-green bg-opacity-25">
          <CardBody>
            <Typography variant="h3" color="blue-gray">
              Курс "ArchiCad базовий"
            </Typography>
            <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
              <div>
                <Typography
                  variant="paragraph"
                  className="mb-10 mt-2 w-full font-normal !text-gray-500"
                >
                  Вивчи основи проєктування в системі ArchiCad та зроби свій перший готовий архітектурний проєкт разом з нами!
                </Typography>
                <div className="flex flex-wrap items-center gap-x-20 gap-y-6">
                  <Typography variant="h6" color="blue-gray">
                    Курс включає:
                  </Typography>
                  <hr className="w-72 border-gray-500" />
                </div>

                <div className="mt-8 grid grid-cols-2 justify-between gap-x-12 gap-y-2">
                  {PRICING_OPTIONS.map((option, key) => (
                    <div key={key} className="flex items-center gap-4">
                      <CheckIcon
                        className="h-4 w-4 text-gray-900"
                        strokeWidth={3}
                      />
                      <Typography
                        variant="paragraph"
                        className="font-normal !text-gray-500"
                      >
                        {option}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid place-items-center lg:justify-end">
                <Typography variant="h1" color="blue-gray" className="line-through text-2xl text-red-600">
                  10 000 грн
                </Typography>
                <Typography variant="h1" color="blue-gray" className="text-4xl">
                  8 500 грн
                </Typography>
                <Link href="/cources/archicad">
                  <Button color="gray" className="my-4 px-6 flex flex-wrap gap-2">
                    детальніше
                    <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg" color="currentColor" className="ml-1 h-4 w-4 stroke-2">
                      <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      </path>
                    </svg>
                  </Button>
                </Link>
                <Typography
                  variant="small"
                  className="font-normal !text-gray-500"
                >
                  
                </Typography>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}


export default Pricing;
