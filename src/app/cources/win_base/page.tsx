import Discounts from "@/components/general/discounts"
import Popup from "@/components/general/popup"
import CourseProgram from "@/components/general/program"
import Subscribe from "@/components/general/subscribe-course"

const styles = {
    main: "w-full px-[20%] flex flex-col",
    text: "space-y-4 pb-4",
    header: "text-tera-green text-[62px] font-[600] py-5",
};

export default function Page(){

    const windowsInfo = [
        { label: "Плановий старт:", value: "15.01.2026" },
        { label: "Тривалість навчання:", value: "4 місяці" },
        { label: "Кількість занять:", value: "20 занять" },
    ];

    return(
        <div className={styles.main}>
            <div className={styles.text}>
                <h2 className={styles.header}>Windows. Базовий</h2>

                <p>Навчальний курс <b>"Базовий"</b> - це курс для тих, хто ніколи раніше не працював за комп'ютером і бажає
                    крок за кроком здобути стійкі навички роботи з ПК. Також цей курс буде корисним тим користувачам,
                    чиї знання роботи з ПК обмежуються кількома елементарними операціями. Такі користувачі зможуть
                    поглибити і систематизувати свої знання.</p>
                <p>Структура занять побудована таким чином, що теоретична частина починається з простих понять і з
                    кожним разом поглиблюється, а акцент на практичній частині дає якісну підготовку для подальшої
                    самостійної роботи.</p>

            </div>
            <Popup/>
            <CourseProgram programmArray={programmArray} />
            <Subscribe title="Windows Базовий" price="5 000" courseInfo={windowsInfo}/>            
            
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