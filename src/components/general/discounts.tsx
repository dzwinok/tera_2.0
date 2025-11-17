import {Card, CardBody, Typography} from "@material-tailwind/react";
import React from "react";

export default function Discounts(){


    return(
        <div>
                  
            <div className="pt-8 bg-tera-dark-green bg-opacity-25 place-items-center">
                
                <span className="px-[20%] text-[28px] font-[500] text-gray-800">Система наших ЗНИЖОК:</span>
                <section className="px-[10%] gap-8 container mx-auto py-12 grid grid-cols-1 items-center lg:gap-0 lg:grid-cols-3 items-stretch">
                    <Card className=" flex flex-center bg-white h-full lg:w-[80%] lg:justify-self-start">
                        <CardBody>
                            <div className="items-center">
                                <div>
        
                                    <div className="flex flex-wrap items-center gap-x-20 ">
                                        <Typography variant="h4" color="blue-gray" className="font-bold h-24">
                                            На кожен наступний курс
                                        </Typography>
                                        <Typography
                                            variant="paragraph"
                                            color="blue-gray"
                                            className="w-full font-medium h-24"
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
                    <Card className=" w-[110%] flex flex-center bg-white h-full justify-self-center">
                        <CardBody>
                            <div className="items-center">
                                <div>
        
                                    <div className="flex flex-wrap items-center gap-x-20">
                                        <Typography variant="h4" color="blue-gray" className="font-bold h-24">
                                            Для військових
                                        </Typography>
                                        <Typography
                                            variant="paragraph"
                                            color="blue-gray"
                                            className="w-full font-medium h-24"
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
                    <Card className="flex flex-center bg-white h-full lg:w-[80%] lg:justify-self-end">
                        <CardBody>
                            <div className="items-center">
                                <div>
        
                                    <div className="flex flex-wrap items-center gap-x-20">
                                        <Typography variant="h4" color="blue-gray" className="font-bold h-24">
                                            Приводь друга!
                                        </Typography>
                                        <Typography
                                            variant="paragraph"
                                            color="blue-gray"
                                            className="w-full font-medium h-24"
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
        



  /*  <>
            <span>Система наших ЗНИЖОК:</span>
            <ul className="list-disc list-inside px-6	">
                <li><span className="text-red-500 font-[600]">10%</span> на кожен наступний курс</li>
                <li><span className="text-red-500 font-[600]">20%</span> при запису в групу двох осіб разом</li>
                <li><span className="text-red-500 font-[600]">*25%</span> при запису в групу трьох і більше осіб разом</li>
            </ul>
        
            </>*/
    )
}