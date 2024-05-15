import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"
export default function Page(){



    return(
        <div className="flex flex-col items-center">
            <h2 className="text-[56px] font-[750] text-tera-green self-start px-[20%] py-5">Навчання</h2>
            <div className="px-[20%] flex justify-between flex-wrap ">
                {dataArray.map((item,index)=>(
                    <Card className="group w-[100%] mr-1 mb-[3%] md:w-[42%] lg:w-[28%] hover:bg-tera-green" key={`${item} - ${index}`}>
                        <CardHeader><Link href={item.link ? item.link :"/study"} className="text-tera-green uppercase font-[600] text-[18px] font-bold group-hover:text-white">{item.nameOfCourse}</Link></CardHeader>
                        <CardFooter><Link href={item.link ? item.link :"/study"} className="font-semibold group-hover:text-yellow-400">{item.description}</Link></CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

// ПОМІНЯТИ ВСІ DESCRIPTIONS
const dataArray = [
    {
        nameOfCourse:"Windows. Базовий (ОС Windows, Інтернет)",
        description: "Курс для початківців, що бажають опанувати основи роботи на персональному комп'ютері",
        link: "/cources/win_base"
    }, {
        nameOfCourse:"Microsoft Office (Word, Excel, PowerPoint) ",
        description: "Вивчення програм пакету Microsoft Office: Word, Excel, PowerPoint",
        link: "/cources/microsoft_office"
    }, {
        nameOfCourse:"Універсальний. (\"Windows. Базовий\" + \"Microsoft Office\")",
        description: "Курс вивчення комп'ютера для початківців у Львові",
        link: "/cources/universal"
    }, /*{
        nameOfCourse:"Microsoft Excel для професіоналів*",
        description: "Основи програмування на мові С  та об'єктно-орієнтоване програмування на мові С++. Курси програмістів.",
        link: null        
    },*/   {
        nameOfCourse:"Кошторисна справа з використанням програми АВК-5",
        description: "Курс для тих, хто бажає навчитись складати кошториси в програмі АВК-5 і здобути спеціальність кошторисника",
        link: "/cources/avk"
    }, {
        nameOfCourse:"Комп'ютерна графіка (CorelDraw, Photoshop)",
        description: "Вивчення програм CorelDraw та Photoshop.",
        link: "/cources/comp_graph"
    }, {
        nameOfCourse:"Adobe Indesign",
        description: "Курси InDesign у Львові. Верстка і макетування, додрукова підготовка в InDesign",
        link: "/cources/indesign"
    }, {
        nameOfCourse:"Проектування в системі AutoCAD",
        description: "Проектування в AutoCad та тривимірне моделювання",
        link: "/cources/autocad"
    }, /*{
        nameOfCourse:"AutoCAD. Тривимірне моделювання (ІІ рівень)",
        description: "Курс вивчення комп'ютера для початківців у Львові.",
        link: null
    },*/ {
        nameOfCourse:"ArchiCAD базовий",
        description: "Основи проектування в системі ArchiCad.",
        link: "/cources/archicad"
    }, {
        nameOfCourse:"Програмний комплекс Ліра-САПР",
        description: "Навчання проектуванню в програмному комплексі ЛІРА.",
        link: "/cources/lira"
    }, /*{
        nameOfCourse:"Adobe Illustrator",
        description: "Проектування в AutoCad та тривимірне моделювання.",
        link: null
    },*/ {
        nameOfCourse:"3D Studio Max",
        description: "Проектування 3D-моделей за допомогою програми 3D Studio Max та її візуалізація у V-Ray, Corona",
        link: "/cources/3dmax"
    }, {
        nameOfCourse:"Основи програмування на мовах С/С++",
        description: "Основи програмування на мові С  та об'єктно-орієнтоване програмування на мові С++. Курси програмістів",
        link: "/cources/c_plus_plus"
    }, /*{
        nameOfCourse:"Об'єктно-орієнтоване програмування на мові С++",
        description: "Вивчення програм пакету Microsoft Office: Word, Excel, PowerPoint.",
        link: null
    },*/ {
        nameOfCourse:"Програмування в 1С (BAS) 8*",
        description: "Навчальні курси програмування в програмному середовищі 1С (BAS)",
        link: "/cources/1-c"
    }
]