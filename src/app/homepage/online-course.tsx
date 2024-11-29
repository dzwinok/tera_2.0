"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/homepage/feature-card";

const FEATURES = [
  {
    icon: InboxIcon,
    title: "Фокус на практиці",
    description:
      "Викладач дає зворотний зв'язок по кожному вашому кроку",
  },
  {
    icon: AcademicCapIcon,
    title: "Кар'єрний зріст",
    description:
      "Після закінчення курсу Ви зможете знайти добре оплачувану роботу ",
  },
  {
    icon: CheckBadgeIcon,
    title: "Гнучкість навчання",
    description: "Можливість узгодити розклад з викладачем та займатись індивідуально",
  },
];

export function OnlineCourse() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/online-course.png"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>
        <div className="col-span-2 text-tera-green lg:pl-24">
          <Typography variant="h2" color="tera-green" className="mb-4">
            Про Teraconsult
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            Окрім навчальних послуг компанія Teraconsult зарекомендувала себе в якості досвідченого системного інтегратора, надійного партнера і постачальника. Надаючи якісні послуги та рішення, ми сприяємо розвитку та зміцненню української економіки та держави. Бути краще, ніж учора та розвивати бізнес наших замовників – це наш підхід до роботи
          </Typography>

          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;
