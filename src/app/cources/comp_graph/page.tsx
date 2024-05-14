import Discounts from "@/components/general/discounts"

export default function Page(){



    return(
        <div className="w-full flex  flex-col px-[20%] space-y-4">
            <div className="space-y-4">
                <h2 className="text-tera-green text-[52px] font-[600] ">Комп'ютерна графіка</h2>
                <p>
                    Курс <b>"Комп'ютерна графіка"</b> навчає роботі з програмами пакету <b>Photoshop та CorelDraw.</b>
                </p>
                <p>
                    <b>Photoshop</b> - це професійний растровий дизайнерський редактор. Основним призначенням програми є 
                    створення фотореалістичних зображень, ретушування, колірна корекція, створення колажів, а також 
                    web-дизайн і електронні публікації.
                </p>
                <p>
                    Навчаючись на курсі комп'ютерної графіки, слухачі не лише ознайомляться з роботою програм растрової та векторної графіки, а й зможуть підвищити якість робіт, освоїти тонкощі, що необхідні для виконання професійного дизайну.
                    <b>CorelDraw</b> - найпопулярніша програма для роботи із векторними зображеннями. Він активно 
                    застосовується у розробці логотипів, макетів печаток, веб-дизайні, створенні рекламного буклету тощо.
                </p>
                <p>
                    Навчаючись на курсі комп'ютерної графіки, слухачі не лише ознайомляться з роботою програм растрової 
                    та векторної графіки, а й зможуть підвищити якість робіт, освоїти тонкощі, що необхідні для 
                    `виконання професійного дизайну.
                </p>
            </div>
            <span className="font-[700]">Програма курсу (30 занять):</span>
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
    "Поняття комп'ютерної графіки",
    "Формати та моделі відображення кольору",
    "Ознайомлення з інтерфейсом програми CorelDraw та її інструментами",
    "Створення та редагування векторних примітивів",
    "Створення художніх ефектів на прикладі оформлення тексту",
    "Художній та звичайний текст. Текст на кривій",
    "Оформлення тексту для логотипу",
    "Макетування та верстка нескладного документу",
    "Складні векторні об'єкти з використанням Кривих Без'є та інструменту Форма (Sape tool)",
    "Створення фірмового логотипу за допомогою програми CorelDraw",
    "Операції растрування, обробка растрових об'єктів у CorelDraw. Конвертація растрових зображень у векторні (трасування)",
    "Знайомство з інтерфейсом програми Photoshop та робочими інструментами",
    "Робота з інструментами: малювання та редагування, ретуш, градієнт",
    "Робота з шарами. Режим суміщення шарів",
    "Основи колажування",
    "Робота з каналами та специфічна кольорокорекція",
    "Основи роботи з фільтрами",
    "Основи обробки зображень, тонова та кольорова корекція",
    "Створення спеціальних об'єктів",
    "Actions та стилізація зображень",
]