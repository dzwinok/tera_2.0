"use client"
import Discounts from "@/components/general/discounts"
import CourseProgram from "@/components/general/program"
import Subscribe from "@/components/general/subscribe-course"
import {Button, Card, CardBody, Typography} from "@material-tailwind/react";
import React from "react";

const styles = {
    main: "w-full px-[20%] flex flex-col",
    text: "space-y-4 pb-4",
    header: "text-tera-green text-[62px] font-[600] py-5",
};

export default function Page(){


    return(
        <div className={styles.main}>
            <div className={styles.text}>
                <h2 className={styles.header}>Комп'ютерна графіка</h2>
                <p>
                    Курс <b>"Комп'ютерна графіка"</b> навчає роботі з програмами пакету <b>Photoshop та CorelDraw.</b>
                </p>
                <p>
                    <b>Photoshop</b> - це професійний растровий дизайнерський редактор. Основним призначенням програми є 
                    створення фотореалістичних зображень, ретушування, колірна корекція, створення колажів, а також 
                    web-дизайн і електронні публікації.
                </p>
                <p>
                    Навчаючись на курсі комп'ютерної графіки, слухачі не лише ознайомляться з роботою програм растрової та векторної графіки, а й зможуть підвищити якість робіт, освоїти тонкощі, що необхідні для виконання професійного дизайну. 
                    <b> CorelDraw</b> - найпопулярніша програма для роботи із векторними зображеннями. Він активно 
                    застосовується у розробці логотипів, макетів печаток, веб-дизайні, створенні рекламного буклету тощо.
                </p>
                <p>
                    Навчаючись на курсі комп'ютерної графіки, слухачі не лише ознайомляться з роботою програм растрової 
                    та векторної графіки, а й зможуть підвищити якість робіт, освоїти тонкощі, що необхідні для 
                    виконання професійного дизайну.
                </p>
            </div>
            <CourseProgram programmArray={programmArray} />

            
            <div className="py-8 flex flex-row justify-between flex-wrap ">
                <div
                    className="container bg-tera-dark-green bg-opacity-25 text-gray-700 p-4 rounded-lg shadow-lg w-1/4 mx-auto">
                    <div className="text-2xl h-16 font-semibold mb-4 align-middle">Курс "Комп'ютерна графіка"</div>
                    <hr className="py-4 w-[160px] border-gray-500"/>
    
                    <div className="text-base mb-2 font-normal text-gray-600">Плановий старт: 19.01.2026</div>
                    <div className="text-base mb-2 font-normal text-gray-600">Тривалість навчання: 4 місяці</div>
                    <div className="text-base mb-2 font-normal text-gray-600">Кількість занять: 30 занять</div>
                    <div className="flex py-2 justify-center font-medium">
                        <span className=" text-2xl">7 500 грн</span>
                    </div>
                    <div className="flex justify-center">
                        <Button className="py-4 px-8 my-4">
                            Записатись
                        </Button>
                    </div>
                </div>
                <div
                    className="container bg-tera-dark-green bg-opacity-25 text-gray-700 p-4 rounded-lg shadow-lg w-1/4 mx-auto">
                    <div className="text-2xl h-16 font-semibold mb-4 align-middle">Курс "CorelDraw"</div>
                    <hr className="py-4 w-[160px] border-gray-500"/>

                    <div className="text-base mb-2 font-normal text-gray-600">Плановий старт: 03.02.2026</div>
                    <div className="text-base mb-2 font-normal text-gray-600">Тривалість навчання: 1 місяць</div>
                    <div className="text-base mb-2 font-normal text-gray-600">Кількість занять: 13 занять</div>
                    <div className="flex py-2 justify-center font-medium">
                        <span className=" text-2xl">3 300 грн</span>
                    </div>
                    <div className="flex justify-center">
                        <Button className="py-4 px-8 my-4">
                            Записатись
                        </Button>
                    </div>
                </div>
                <div
                    className="container bg-tera-dark-green bg-opacity-25 text-gray-700 p-4 rounded-lg shadow-lg w-1/4 mx-auto">
                    <div className="text-2xl h-16 font-semibold mb-4 align-middle">Курс "Photoshop"</div>
                    <hr className="py-4 w-[160px] border-gray-500"/>

                    <div className="text-base mb-2 font-normal text-gray-600">Плановий старт: 23.12.2025</div>
                    <div className="text-base mb-2 font-normal text-gray-600">Тривалість навчання: 2 місяці</div>
                    <div className="text-base mb-2 font-normal text-gray-600">Кількість занять: 17 занять</div>
                    <div className="flex py-2 justify-center font-medium">
                        <span className=" text-2xl">4 300 грн</span>
                    </div>
                    <div className="flex justify-center">
                        <Button className="py-4 px-8 my-4">
                            Записатись
                        </Button>
                    </div>
                </div>
            </div>
        

            
            
            <Discounts/>
        </div>
    )
}

const programmArray = [
    "Поняття комп'ютерної графіки",
    "Формати та моделі відображення кольору",
    "Ознайомлення з інтерфейсом програми CorelDraw та її інструментами",
    "Створення та редагування векторних примітивів",
    "Створення художніх ефектів на прикладі оформлення тексту",
    "Художній та звичайний текст. Текст на кривій",
    "Оформлення тексту для логотипу",
    "Макетування та верстка нескладного документу",
    "Складні векторні об'єкти з використанням Кривих Без'є та інструменту Форма (Sape tool)",
    "Створення фірмового логотипу за допомогою програми CorelDraw",
    "Операції растрування, обробка растрових об'єктів у CorelDraw. Конвертація растрових зображень у векторні (трасування)",
    "Знайомство з інтерфейсом програми Photoshop та робочими інструментами",
    "Робота з інструментами: малювання та редагування, ретуш, градієнт",
    "Робота з шарами. Режим суміщення шарів",
    "Основи колажування",
    "Робота з каналами та специфічна кольорокорекція",
    "Основи роботи з фільтрами",
    "Основи обробки зображень, тонова та кольорова корекція",
    "Створення спеціальних об'єктів",
    "Actions та стилізація зображень",
]

