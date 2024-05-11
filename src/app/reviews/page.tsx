
"use client";
import { CardStack } from "@/components/ui/card_reviews";
import { cn } from "@/lib/utils";
import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function CardStackDemo() {
    return (
    <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center">
            <div className="h-[58rem] flex items-center justify-center w-full">
                <CardStack  items={CARDS} />
            </div>
        </div>
    </BackgroundGradientAnimation>
    );
}


// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
                              children,
                              className,
                          }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className
            )}
        >
      {children}
    </span>
    );
};

const CARDS = [
    {
        id: 0,
        name: "Наталія Скуратова",
        designation: 'Студентка курсу "ArchaCad базовий"',
        content: (
            <p>
                Доброго дня! Проходила курси АВК (кошторисна справа), <Highlight>дуже задоволена.</Highlight> Загалом
                можу стверджувати: висококваліфіковано, зрозуміло, якісно, практичні заняття -величезний плюс. 
                Після курсів - <Highlight>готова до роботи.</Highlight> Дякую команді Тераконсалт.
            </p>
        ),
    },
    {
        id: 1,
        name: "Elon Musk",
        designation: "Senior Shitposter",
        content: (
            <p>
                Курси дійсно дієві. Раніше проходила курс в іншій компанії, половину такого результату не отримала, 
                як в " Тераконсалт ". За таку ціну дають <Highlight>максимально знань</Highlight>, дуже хороший 
                викладач. Та і великий плюс, що курс складається з +- 40 занять , тальки так можна дійсно щось 
                осягнути в 3D max. Дякую)
            </p>
        ),
    },
    {
        id: 2,
        name: "Tyler Durden",
        designation: "Manager Project Mayhem",
        content: (
            <p>
                Довго обирала де б хотіла проходити навчання, обрала Teraconsult. <Highlight>Із задоволення почала і 
                закінчила курс.</Highlight> Викладачі кваліфіковані, з пояснень все ставало зрозумілим з першого разу. 
                Якщо буде необхідність ще чомусь навчитись, не буду вже нічого шукати, <Highlight>одразу в 
                Teraconsult:)</Highlight> тут Вас навчать! Рекомендую
            </p>
        ),
    },
    {
        id: 3,
        name: "Tyler Durden",
        designation: "Manager Project Mayhem",
        content: (
            <p>
                Дуже класні курси 3d максу, <Highlight>отримала дуже хорошу базу</Highlight> , навчалась в Варшаві на 
                парах з 3d максу, вони не дали навіть 10 частини того, що в Тереконсалт. <Highlight>За 1 місяць
                </Highlight>  роботи на фрілансі 3d візуалізатором <Highlight>відбила ціну цілого курсу.</Highlight>
            </p>
        ),
    },
    {
        id: 4,
        name: "Tyler Durden",
        designation: "Manager Project Mayhem",
        content: (
            <p>
                Проходила індивідуальні заняття по курсу InDesign. Прийшла, практично, з нульовим уявленням про 
                програму. Викладач доступно та якісно подав матеріал, враховуючи всі можливі нюанси й практичні деталі. 
                <Highlight>Тепер можу зверстати та підготувати до друку будь-який макет.</Highlight> Також хочу 
                відзначити приязний та ввічливий персонал.
            </p>
        ),
    },
];
