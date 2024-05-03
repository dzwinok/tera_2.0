import Discounts from "@/components/general/discounts"

export default function Page(){



    return(
        <div className="w-full flex  flex-col px-[20%] space-y-4">
            <div className="space-y-4">
                <h2 className="text-tera-green text-[52px] font-[600] ">Програмування в 1С (BAS)</h2>
                <p>Оскільки сама програма для автоматизованого обліку 1С найбільш використовувана на підприємствах України і не тільки, а конфігурація цієї програми має бути налаштована із врахуванням конкретних потреб підприємства, то виникає потреба у кваліфікованому програмістові програми 1С, який би зміг адаптувати програму 1С під особливості діяльності підприємства і ведення обліку на ньому. Будучи програмістом 1С, Ви легко зможете знайти високооплачувану роботу.</p>
                <p><b>"Тераконсалт"</b> пропонує навчання на курсі <b>"Програмування 1С"</b>, в програмі якого розглядаються механізми для вирішення практичних завдань конфігурації програми 1С різної складності. Програма курсу включає в себе вивчення базових понять, а також конкретних прикладів, котрі дозволять засвоїти основні принципи і правила у роботі над конфігурацією 1С.</p>
                <p>Є можливість обирати версію програми 1С 7.7 або 8</p>

            </div>
            <span className="font-[700]">Програма курсу:</span>
            <ul className="px-6 list-inside list-disc">
                {programmArray.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p><b>Форма навчання: індивідуальні заняття.</b></p>
        </div>
    )
}


const programmArray = [
    "Мова програмування",
    "Система класів платформи та конфігурації",
    "Довідники, документи, звіти, обробки, регістри накопичення",
    "Бухгалтерські підсумки",
    "SQL–запити",
    "Застосування синтакс–помічника",
    "Технологія зовнішнього з’єднання з іншими інформаційними базами 1С",
    "Складні елементи форм",
    "Вертикальні секції макетів",
    "Таблиці та списки значень"
]



/*
const programmArray = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
]
 */