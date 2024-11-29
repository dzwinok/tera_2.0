"use client";
import React from "react";
import { Card, CardBody, Button, Typography } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";


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
        <div className="grid place-items-center pb-20 text-center">
          <Typography variant="h2" color="blue-gray">
            Пропозиція місяця
          </Typography>
          <Typography variant="lead" className="mt-2 !text-gray-500 lg:w-5/12">
            Встигни скористатись акційною пропозицією до кінця травня та отримай кваліфікований курс для твого фаху
          </Typography>
        </div>
        <Card className="px-6 pb-5">
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
                  Вивчи основи проектування в системі ArchiCad та зроби свій перший готовий архітектурний проект разом з нами!
                </Typography>
                <div className="flex flex-wrap items-center gap-x-20 gap-y-6">
                  <Typography variant="h6" color="blue-gray">
                    Курс включає:
                  </Typography>
                  <hr className="w-72 bg-gray-500" />
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
                <Typography variant="h1" color="blue-gray" className="line-through text-red-300">
                  10 000 грн
                </Typography>
                <Typography variant="h1" color="blue-gray" className="text-2xl">
                  8 500 грн
                </Typography>
                <Button color="gray" className="my-3">
                  Старт 3 червня
                </Button>
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
