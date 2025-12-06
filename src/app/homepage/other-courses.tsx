"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/homepage/course-card";

const OTHER_COURSES = [
  {
    img: "/image/blogs/inDesign.png",
    title: "Верстка і Макетування: Adobe InDesign",
    desc: "Навчіться створювати сучасний дизайн макетів за допомогою професійної" +
        "  програми, яка може використовуватися для створення постерів, флаєрів, брошур, журналів, газет та книг.",
    buttonLabel: "детальніше",
    link:"/cources/indesign",
  },
  {
    img: "/image/blogs/ps_coreldraw.png",
    title: "Комп'ютерна графіка: CorelDraw та Photoshop",
    desc: "Навчаючись на курсі, слухачі ознайомляться з роботою програм растрової" +
        "  та векторної графіки та зможуть освоїти тонкощі, що необхідні для виконання професійного дизайну.",
    buttonLabel: "детальніше",
    link:"/cources/comp_graph",
  },
  {
    img: "/image/blogs/microsoft.png",
    title: "Microsoft Office: Word, Excel, PowerPoint",
    desc: "Після закінчення навчання, Ви зможете легко виконувати прості функції вдома й складні офісні операції." +
        "  Освоїте базу та більш поглиблено ознайомитесь з функціями зазначених програм.",
    buttonLabel: "детальніше",
    link:"/cources/microsoft_office",
  },
  {
    img: "/image/blogs/c.png",
    title: "Основи програмування на мовах С / С++",
    desc: "Ознайомтесь з основами мови програмування C та об'єктно-орієнтованого програмування C++." +
        " Навчіться створювати перші пофесійні програми.",
    buttonLabel: "детальніше",
    link:"/cources/c_plus_plus",
  },
];

export function OtherCourses() {
  return (
    <section className="pb-20 px-8 pt-12">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Інші пропозиції
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        > 
          Відкрийте для себе інші навчальні можливості! Перегляньте деталі наших курсів та оберіть найцікавіший для себе.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {OTHER_COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default OtherCourses;
