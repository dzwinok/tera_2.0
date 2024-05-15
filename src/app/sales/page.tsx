import React from "react";

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
        
        </div>
    )
}