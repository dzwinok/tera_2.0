import Discounts from "@/components/general/discounts"

export default function Page(){



    return(
        <div className="w-full flex  flex-col px-[20%] space-y-4">
            <div className="space-y-4">
                <h2 className="text-tera-green text-[52px] font-[600] ">3D Studio Max</h2>
                <p>3DStudioMax - це професійний пакет для роботи з тривимірною графікою. Він застосовується для створення, анімації і візуалізації тривимірних моделей. 3DStudioMax є універсальною програмою, що застосовується у різних сферах. Це і: дизайн інтер'єру, декорування інтер'єру, архітектурне проектування, комп'ютерна графіка, web-дизайн і багато іншого.</p>
                <p>Курс 3DStudioMax навчає базових знань, що необхідні для 3D-моделювання предметів, створення світлових та інших ефектів, а також основ дизайну предметів.</p>
                <p>Курс 3DStudioMax орієнтований  на роботу з інтер'єром: моделювання, робота з його елементами, текстурами, освітленням і безпосередня візуалізація у V-Ray.
                    Програма 3DStudioMax - це допомога дизайнеру у вираженні ідей, у експериментуванні з дизайном.</p>
                <p>Нашу програму курсу 3DStudioMax умовно можна поділити на 5 частин.</p>
                <p>Перша частина орієнтовна на вивчення інтерфейсу і функцій програми 3DStudioMax.</p>
                <p>Друга частина передбачає  використання інструментів і функцій програми 3DStudioMax на практиці для моделювання простих геометричних фігур, з  яких згодом і формують меблі та елементи інтер'єру. Навички, які отримують слухачі, можна застосовувати в роботі з  3D-принтером.</p>
                <p>Третя частина. Робота з  матеріалами, а саме: вірейними і процедурними текстурами.</p>
                <p>Четверта частина. Робота з освітленням у програмі 3DStudioMax. У цій частині курсу вивчаються властивості відбивання світла від різних поверхонь. Розглядаються також зміни вигляду текстур під впливом різного освітлення.</p>
                <p>П'ята  частина курсу орієнтовна на візуалізацію у програмі V-Ray та Corona</p>
                <p>В курсі розглядають не лише стандартні методи створення дизайну, а й складні приклади налаштування зовнішнього середовища, освітлення, конструювання 3D-макетів приміщень, дизайну в ньому тощо. Курс включає комплекс практичних занять, завдяки яким слухачі можуть створити самостійно повноцінний дизайн інтер'єру, розробити дизайн текстур тощо.</p>

            </div>
            <span className="font-[700]">Програма курсу:</span>
            <ul className="px-6 list-inside list-disc">
                {programmArray.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <Discounts/>
        </div>
    )
}


const programmArray = [
    "Поняття 3D графіки та її анімація",
    "Знайомство з програмою 3DStudioMax",
    "Ознайомлення та аналіз основних елементів інтерфейсу програми",
    "Об'єкти в 3DStudioMax та їх класифікація",
    "Виділення та маніпуляція об'єктами",
    "Створення об'єктів-примітивів",
    "Сплайни",
    "Модифікатори: основне призначення та особливості їх застосування",
    "Створення складних об'єктів методами Poly та Mesh",
    "Використання стандартних матеріалів, текстур та процедурних карт",
    "Архітектурні матеріали",
    "Стандартне освітлення (візуалізація). Фотометричні джерела світла",
    "V-Ray матеріали та візуалізація",
    "Фотореалістичний рендер",
    "Анімація 3D об'єктів",
    "Пряма та інверсна кінематики",
    "Контролери анімації"
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