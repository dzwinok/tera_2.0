"use client";
import React, { useState } from "react";
import NewsletterModal from "@/components/custom/NewsletterModal"
import { useNewsletterModal } from "/backend/node_modules/@dnd-kit/utilities/dist/hooks/useNewsletterModal"
import { Card, CardBody, Button, Typography } from "@material-tailwind/react";
//TODO: path to file useNewsletterModal is local (i have to crate a copy of this file in /src/hooks/useNewsletterModal.tsx)

export function Subscribe({title, price, courseInfo}) {
    const { isOpen, openModal, closeModal } = useNewsletterModal();
    const [confirmed, setConfirmed] = useState<null | { email: string; phone: string; }>(null);

    const handleSubmit = (data: { email: string; phone: string; digestType: string }) => {
        // тут ти можеш відправити запит на сервер або зберегти дані
        console.log("Підтверджено:", data);
        setConfirmed(data);
        // Закриваємо модалку через closeModal
        closeModal();
    };
    return (
        <div id="subscribe-course" className="py-8 grid place-items-center">
            <section className="container mx-auto px-[20%]">
                
                <Card className="px-6 pb-5 bg-tera-dark-green bg-opacity-25">
                    <CardBody>
                        <Typography variant="h3" color="blue-gray">
                            Курс "{title}"
                        </Typography>
                        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
                            <div>
                                <div className="pt-6">
                                    <hr className="sm:mx-auto border-gray-500" />
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
                                <Button onClick={openModal} color="gray" className="py-4 px-8 my-4">
                                    Записатись
                                </Button>
                                
                                <NewsletterModal isOpen={isOpen} onClose={closeModal} onSubmit={handleSubmit} title={title}/>
                                
                            </div>
                        </div>
                    </CardBody>
                </Card>
                {confirmed && (
                    <div className="flex justify-center ">
                        <div className="mt-4 msg-box text-center">
                            Запис на курс підтверджено. Очікуйте листа в електронній пошті.
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}


export default Subscribe;
