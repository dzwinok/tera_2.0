import React from "react";
import {Button, Card, CardBody, Typography} from "@material-tailwind/react";
import {CheckIcon} from "@heroicons/react/24/outline";

export default function Page() {


    return (
        <div className="px-[20%] h-[calc(100vh-350px)]">
            <h2 className="text-[65px] font-[750] text-tera-green py-5">Система <br></br>наших знижок:</h2>
        
            {/*<div className="px-[10%] flex flex-row justify-between flex-wrap ">
                <div className="container bg-gradient-to-r from-tera-green to-tera-light-green text-white p-4 rounded-lg shadow-lg w-1/3 mx-auto">
                    <div className="text-xl h-16 font-bold mb-4">На кожен наступний курс</div>
                    <div className="text-base mb-4">Отримай <span className="text-yellow-400 font-bold">10% знижки</span> якщо раніше вже проходив в нас курс!
                    </div>
                    <div className="text-sm mt-4">
                        <p>Знижка дійсна <span className="font-semibold">протягом 2 років</span> після закінчення попереднього курсу</p>
                    </div>
                </div>
                <div className="container bg-gradient-to-r from-tera-green to-tera-light-green text-white p-4 rounded-lg shadow-lg w-1/4 mx-auto">
                    <div className="text-xl h-16 font-bold mb-4">Приводь друга!</div>
                    <div className="text-base mb-4">Отримай <span className="text-yellow-400 font-bold">20% знижки</span> якщо приведеш свого друга до нас!
                    </div>
                    <div className="text-sm mt-4">
                        <p>Знижка дійсна на весь час поки у тебе є друзі по інтересах ;)</p>
                    </div>
                </div>
                <div className="container bg-gradient-to-r from-tera-green to-tera-light-green text-white p-4 rounded-lg shadow-lg w-1/3 mx-auto">
                    <div className="text-xl h-16 font-bold mb-4">Для військовослужбовців</div>
                    <div className="text-base mb-4">Для захисників нашої держави надаємо <span className="text-yellow-400 font-bold">25% знижки!</span><br></br> Дякуємо нашим героям!!
                    </div>
                    <div className="text-sm mt-4">
                        <p>Знижка надається діючим військовим ЗСУ, НГУ, ТРО при пред’явленні посвідчення або військового квитка</p>
                    </div>
                </div>
            </div>*/}




            <div className="flex justify-between flex-wrap ">
                <div className="container bg-gradient-to-r from-tera-green to-tera-light-green text-white p-4 rounded-lg shadow min-w-[168px] lg w-1/4 mx-auto">
                    <div className="text-xl h-16 font-bold mb-4 align-middle">На кожен наступний курс</div>
                    <div className="text-base mb-4">Отримай <span className="text-yellow-400 font-bold">10% знижки</span> якщо раніше вже проходив в нас курс!
                    </div>
                    <div className="text-sm mt-4">
                        <p>Знижка дійсна <span className="font-semibold">протягом 2 років</span> після закінчення попереднього курсу</p>
                    </div>
                </div>
                <div className="container bg-gradient-to-r from-tera-green to-tera-light-green text-white p-4 rounded-lg shadow-lg w-1/3 mx-auto">
                    <div className="text-xl h-16 font-bold mb-4 align-middle">Для військових</div>
                    <div className="text-base mb-4">Для військовослужбовців надаємо <span className="text-yellow-400 font-bold">25% знижки!</span><br></br> Дякуємо нашим героям!!
                    </div>
                    <div className="text-sm mt-4">
                        <p>Знижка надається діючим військовим ЗСУ, НГУ, ТРО при пред’явленні посвідчення або військового квитка</p>
                    </div>
                </div>
                <div className="container bg-gradient-to-r from-tera-green to-tera-light-green text-white p-4 rounded-lg shadow-lg w-1/4 mx-auto">
                    <div className="text-xl h-16 font-bold mb-4">Приводь друга!</div>
                    <div className="text-base mb-4">Отримай <span className="text-yellow-400 font-bold">20% знижки</span> якщо приведеш свого друга до нас!
                    </div>
                    <div className="text-sm mt-4">
                        <p>Знижка дійсна на весь час поки у тебе є друзі по інтересах ;)</p>
                    </div>
                </div>
            </div>


            <h2 className="text-4xl font-bold mt-32">Акційні пропозиції</h2>
            
            {/*<Card className="px-6 pb-5">
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
            </Card>*/}
        
        </div>
    )
}

const PRICING_OPTIONS = [
    "20 занять",
    "40 академічних годин",
    "Доступ до платної версії",
    "Сертифікат про завершення курсу",
];
