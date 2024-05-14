import Discounts from "@/components/general/discounts"

export default function Page(){



    return(
        <div className="w-full flex  flex-col px-[20%] space-y-4">

            
            <div className="space-y-4">
                <h2 className="text-tera-green text-[52px] font-[600] ">Основи програмування <br></br> на мовах С / С++</h2>
                <p><b>Мова програмування С</b> та її <b>розширення С++</b> на сьогодні є одними з найпопулярніших мов 
                    програмування. Їм надають перевагу програмісти у всьому світі при розробці складних проектів.</p>
                <p><b>Навчальний центр "Тераконсалт"</b> пропонує курс <b>"Основи програмування на мовах С/С++"</b>.
                    Програма курсу орієнтована на отримання знань сучасних методів та технологій, а також практичних 
                    навичок у сфері програмування.</p>

            </div>
            <span className="font-[700]">Програма курсу "Основи програмування на мові С" (30 занять):</span>
            <ul className="px-6 list-inside list-disc">
                {programmArray.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h1 className="font-bold text-2xl text-tera-green">Об'єктно-орієнтоване програмування на мові С++</h1>
            <p>Цей курс розрахований на тих, хто вже знає основи програмування.</p>

            <span className="font-[700]">Програма курсу "Об'єктно-орієнтоване програмування на мові С++" (35 занять):</span>
            <ul className="px-6 list-inside list-disc">
                {secondProgrammArray.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>Програма курсу включає велику кількість практичних занять, що допомагають закріпити отримані теоретичні 
                знання на практиці. Такий навчальний підхід допомагає слухачам швидко досягнути професійного рівня у 
                роботі над різними проектами.</p>
            <Discounts/>
        </div>
    )
}


const programmArray = [
    "Основи алгоритмізації",
    "Вступ до програмування на мові С",
    "Основні типи даних та їх використання",
    "Константи",
    "Основні оператори мови С",
    "Цикли",
    "Функції в мові програмування",
    "Масиви та структури",
    "Файли",
    "Динамічні змінні та їх використання",
    "Методи сортування та пошуку",
]

const secondProgrammArray = [
    "Основи об'єктно-орієнтованого програмування (ООП)",
    "Основи мови програмування С++",
    "Реалізація ООП засобами С++",
    "Додаткові можливості С++",
    "Використання стандартних шаблонів класів бібліотеки STL",
    "Розробка Windows програм засобами С++ Builder та Visual Studio",
]







/*
"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/waveBackground";

export default function Page() {
    return (
        <WavyBackground className="max-w-3xl mx-auto pb-40">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                T
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                Leverage the power of canvas to create a beautiful hero section
            </p>
        </WavyBackground>
    );
}
*/
