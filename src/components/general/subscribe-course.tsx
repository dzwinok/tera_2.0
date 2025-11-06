"use client";
import React from "react";
import { Card, CardBody, Button, Typography } from "@material-tailwind/react";


export function Subscribe({title, price, courseInfo}) {
    return (
        <div className="py-8 grid place-items-center">
            <section className="container mx-auto px-[20%]">
                
                <Card className="px-6 pb-5 bg-tera-dark-green bg-opacity-25">
                    <CardBody>
                        <Typography variant="h3" color="blue-gray">
                            Курс "{title}"
                        </Typography>
                        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
                            <div>
                                <div className="pt-6">
                                    <hr className="w-72 border-gray-500" />
                                </div>

                                <div className="mt-8 ">
                                    {courseInfo.map((item, key) => (
                                        <div key={key} className="flex items-center gap-4">
                                            <Typography
                                                variant="paragraph"
                                                className="font-medium text-gray-500"
                                            >
                                                {item.label}
                                            </Typography>
                                            {item.value && (
                                                <Typography
                                                    variant="paragraph"
                                                    className="text-gray-500 font-medium"
                                                >
                                                    {item.value}
                                                </Typography>
                                            )}
                                        </div>
                                    ))}
                                    <div className="flex items-center gap-4 pt-4">
                                        <Typography
                                            variant="paragraph"
                                            className="font-medium text-gray-600"
                                        >
                                            🎓 Ви отримаєте сертифікат про завершення курсу
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <div className="grid place-items-center lg:justify-end">
                                <Typography variant="h1" color="blue-gray" className="text-3xl">
                                    {price} грн
                                </Typography>
                                <Button color="gray" className="py-4 px-8 my-4">
                                    Записатись
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


export default Subscribe;
