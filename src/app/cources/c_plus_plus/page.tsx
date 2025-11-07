import Discounts from "@/components/general/discounts"
import CourseProgram from "@/components/general/program"
import Subscribe from "@/components/general/subscribe-course"

const styles = {
    main: "w-full px-[20%] flex flex-col",
    text: "space-y-4 pb-4",
    header: "text-tera-green text-[62px] font-[600] py-5",
};


export default function Page(){

    const сInfo = [
        { label: "Плановий старт:", value: "02.01.2026" },
        { label: "Тривалість навчання:", value: "~5 місяців" },
        { label: "Кількість занять:", value: "30 занять" },
    ];
    const сPlusPlusInfo = [
        { label: "Плановий старт:", value: "14.01.2026" },
        { label: "Тривалість навчання:", value: "~6 місяців" },
        { label: "Кількість занять:", value: "35 занять" },
    ];

    return(
        <div className={styles.main}>
            <div className={styles.text}>
                <h2 className={styles.header}>Основи програмування <br></br> на мовах С / С++</h2>
                <p><b>Мова програмування С</b> та її <b>розширення С++</b> на сьогодні є одними з найпопулярніших мов 
                    програмування. Їм надають перевагу програмісти у всьому світі при розробці складних проектів.</p>
                <p><b>Навчальний центр "Тераконсалт"</b> пропонує курс <b>"Основи програмування на мовах С/С++"</b>.
                    Програма курсу орієнтована на отримання знань сучасних методів та технологій, а також практичних 
                    навичок у сфері програмування.</p>

            </div>
            <CourseProgram title={"Програма курсу \"Основи програмування на мові С\":"} programmArray={programmArray} />
            <Subscribe title="Основи програмування на мові С" price="10 000" courseInfo={сInfo}/>

            <CourseProgram title={"Програма курсу \"Об'єктно-орієнтоване програмування на мові С++\":"} programmArray={secondProgrammArray} />
            <p>Програма курсу включає велику кількість практичних занять, що допомагають закріпити отримані теоретичні
                знання на практиці. Такий навчальний підхід допомагає слухачам швидко досягнути професійного рівня у
                роботі над різними проектами.</p>
            <Subscribe title="Програмування на мові С++" price="10 500" courseInfo={сPlusPlusInfo}/>
            
            
            
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
