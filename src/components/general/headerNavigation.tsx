import { INavigationData } from "@/types/navigationTypes/navigationDataType"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link"
export default function HeaderNavigation() {



    return (
       <div className="h-[100px] bg-tera-green flex items-center flex-1 justify-center ">
       <div className="w-1/2 flex justify-center">
            {navigationDataArray.map((item, index) => (
                <HoverCard key={`${item.navigationName}-${index}`} openDelay={100} closeDelay={0}>
                    <div className="group w-full text-center">
                        <HoverCardTrigger asChild>
                            <Link href={item.link ? item.link :"/"}  className="bg-tera-green text-white w-full group-hover:bg-green-500 px-4 py-2 group-hover:text-black">{item.navigationName} </Link></HoverCardTrigger>
                        {item.navigationItems && <HoverCardContent avoidCollisions={false} className=" bg-green-500 group-hover:bg-green-500 flex flex-col p-0     " >

                            {item.navigationItems.map((item, index) => (
                                <div key={`${item}-${index}`} className="text-black font-[600] hover:rounded-md text-[13px] hover:bg-green-700 py-[6px] px-2  ">{item}</div>
                                    
                            ))}

                        </HoverCardContent>}
                    </div>
                </HoverCard>
            ))}
        </div>
        </div>
    )
}


const navigationDataArray: INavigationData[] = [
    {
        navigationName: "Головна",
        navigationItems: null,
        link: "/"
    },
    {
        navigationName: "Навчання",
        navigationItems: [
            "Комп'ютерні курси"
            , "Початковий"
            , "Універсальний"
            , "Microsoft Office"
            , "Кошторисна справа з використанням АВК-5"
            , "Світ Інтернету"
            , "Проектування в AutoCAD"
            , "Проектування в ArchiCAD"
            , "Програмний комплекс ЛІРА-САПР"
            , "Комп'ютерна графіка"
            , "inDesign"
            , "3D Studio Max"
            , "Фотошкола"
            , "Основи операторської майстерності та монтажу"
            , "Курси 1С: Підприємство 8"
            , "Основи бухобліку та 1С:Підприємство 8"
            , "Основи алгоритмізації та програмування"
            , "Web-програмування"
            , "Програмування на 1С"
            , "Мови програмування С,С++"
            , "Курси програмування PHP, SQL"
            , "Програмування засобів для мобільних пристроїв"
            , "Web-дизайн. UI/UX Design"
            , "Мова програмування Python"
            , "Програмування Java"
            , "Програмування JavaScript, FrontEnd"
            , "Онлайн запис"
        ],
        link: "/study"
    },
    {
        navigationName: "Пропозиції",
        navigationItems: null,
        link: null
    },
    {
        navigationName: "Відгуки",
        navigationItems: null,
        link: null
    },
    {
        navigationName: "Контакти",
        navigationItems: null,
        link: "/contacts"
    },
    {
        navigationName: "Компанія",
        navigationItems: [
            "Про компанію",
            "Вакансії",
            "Контакти",
            "Контакти Навчального центру",
            "Сертифікати"
        ],
        link: null
    },

]