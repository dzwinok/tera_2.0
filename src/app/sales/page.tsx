"use client";
import React from "react";
import {Button, Card, CardBody, Typography} from "@material-tailwind/react";
import {CheckIcon} from "@heroicons/react/24/outline";
import Pricing from "@/app/homepage/pricing";

const styles={
    title: "text-[65px] leading-[72px] font-[750] text-tera-green ",
}

const PRICING_OPTIONS = [
    "20 занять",
    "40 академічних годин",
    "Доступ до платної версії",
    "Сертифікат про завершення курсу",
];

export default function Page() {


    return (
        <div className="px-[20%]">
            <div className="pt-16">
                <h2 className={styles.title}>Система <br></br>наших знижок</h2>
        
                <div className=" place-items-center">
                    <section className="gap-8 container mx-auto py-12 grid grid-cols-1 items-center lg:gap-0 lg:grid-cols-3 items-stretch">
                        <Card className=" flex flex-center bg-tera-dark-green bg-opacity-25 h-full lg:w-[80%] lg:justify-self-start">
                            <CardBody>
                                <div className="items-center">
                                    <div>
                                        
                                        <div className="flex flex-wrap items-center gap-x-20 gap-y-6">
                                            <Typography variant="h4" color="blue-gray" className="font-bold h-16">
                                                На кожен наступний курс
                                            </Typography>
                                            <Typography
                                                variant="paragraph"
                                                color="blue-gray"
                                                className="w-full font-medium"
                                            >
                                                Отримай <span className="text-red-800 font-bold">10% знижки</span> якщо раніше вже проходив в нас курс!
                                            </Typography>
                                            <Typography color="blue-gray" className="text-sm">
                                                *знижка дійсна протягом 2 років після закінчення попереднього курсу
                                            </Typography>
                                        </div>
                                    </div>
                                    
                                </div>
                            </CardBody>
                        </Card>
                        <Card className=" w-[110%] flex flex-center bg-tera-dark-green bg-opacity-25 h-full justify-self-center">
                            <CardBody>
                                <div className="items-center">
                                    <div>
    
                                        <div className="flex flex-wrap items-center gap-x-20 gap-y-6">
                                            <Typography variant="h4" color="blue-gray" className="font-bold h-16">
                                                Для військових
                                            </Typography>
                                            <Typography
                                                variant="paragraph"
                                                color="blue-gray"
                                                className="w-full font-medium"
                                            >
                                                Для військовослужбовців надаємо <span className="text-red-800 font-bold">25% знижки!</span><br></br> Дякуємо нашим героям!!!
                                            </Typography>
                                            <Typography color="blue-gray" className="text-sm">
                                                *знижка надається діючим військовим ЗСУ, НГУ, ТРО при пред’явленні посвідчення або військового квитка
                                            </Typography>
                                        </div>
                                    </div>
    
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="flex flex-center bg-tera-dark-green bg-opacity-25 h-full lg:w-[80%] lg:justify-self-end">
                            <CardBody>
                                <div className="items-center">
                                    <div>
    
                                        <div className="flex flex-wrap items-center gap-x-20 gap-y-6">
                                            <Typography variant="h4" color="blue-gray" className="font-bold h-16">
                                                Приводь друга!
                                            </Typography>
                                            <Typography
                                                variant="paragraph"
                                                color="blue-gray"
                                                className="w-full font-medium"
                                            >
                                                Отримай <span className="text-red-800 font-bold">20% знижки</span> якщо приведеш свого друга до нас!
                                            </Typography>
                                            <Typography color="blue-gray" className="text-sm">
                                                *знижка дійсна на весь час поки у тебе є друзі по інтересах ;)
                                            </Typography>
                                        </div>
                                    </div>
    
                                </div>
                            </CardBody>
                        </Card>
                    </section>
                </div>
            </div>
            
            

            <div className="pt-12">
                <h2 className={styles.title}>Акційні пропозиції</h2>
                <div className="grid place-items-center">
                    <section className="container mx-auto py-12">
                        <Card className="px-6 bg-tera-dark-green bg-opacity-25">
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
                                        <Button color="gray" className="my-4">
                                            Старт 5 січня
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
            </div>
            
        </div>
    )
}

