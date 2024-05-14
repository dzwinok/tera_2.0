import Discounts from "@/components/general/discounts"

export default function Page(){



    return(
        <div className="w-full flex  flex-col px-[20%] space-y-4">
            <div className="space-y-4">
                <h2 className="text-tera-green text-[52px] font-[600] ">Windows. Базовий</h2>
                
                <p>Навчальний курс <b>"Базовий"</b> - це курс для тих, хто ніколи раніше не працював за комп'ютером і бажає 
                    крок за кроком здобути стійкі навички роботи з ПК. Також цей курс буде корисним тим користувачам, 
                    чиї знання роботи з ПК обмежуються кількома елементарними операціями. Такі користувачі зможуть 
                    поглибити і систематизувати свої знання.</p>
                <p>Структура занять побудована таким чином, що теоретична частина починається з простих понять і з 
                    кожним разом поглиблюється, а акцент на практичній частині дає якісну підготовку для подальшої 
                    самостійної роботи.</p>

            </div>
            <span className="font-[700]">Програма курсу (10 занять):</span>
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
    "Апаратне забезпечення",
    "Поняття операційної системи (ОС)",
    "Основні елементи інтерфейсу ОС Windows",
    "Запуск програм головного меню та з робочого столу і їх налаштування",
    "Робота з клавіатурою",
    "Структура вікон ОС Windows",
    "Організація файлової системи Windows. Робота з файлами та папками",
    "Ознайомлення з текстовим редактором ОС Windows",
    "Операції з текстовими файлами (створення текстового файлу, збереження файлу, набір тексту, виділення фрагментів тесту, переміщення, копіювання, знищення та відновлення знищених фрагментів, редагування та форматування документу, маркери, пошук у тексті тощо)",
    "Робота з програмами головного меню",
    "Програма «Провідник»",
    "Інтернет",
]