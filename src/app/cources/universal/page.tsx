"use client"
import Discounts from "@/components/general/discounts"
import Popup from "@/components/general/popup"
import CourseProgram from "@/components/general/program"
import Subscribe from "@/components/general/subscribe-course"
import OtherCourses from "@/app/homepage/other-courses"

const styles = {
    main: "w-full px-[20%] flex flex-col",
    text: "space-y-4 pb-4",
    header: "text-tera-green leading-[72px] text-[62px] font-[600] py-5",
    level_text: "text-[28px] font-bold font-[500] text-gray-800",
};

export default function Page(){
    
    const universalInfo = [
        { label: "Плановий старт:", value: "23.12.2025" },
        { label: "Тривалість навчання:", value: "~3 місяці" },
        { label: "Кількість занять:", value: "20 занять" },
    ];

    return(
        <div>
            <div className={styles.main}>
                <div className={styles.text}>
                    <h2 className={styles.header}>Універсальний. ("Windows. Базовий" + "Microsoft Office")</h2>
                    <p>Навчальний курс "Універсальний" допоможе освоїти базовий рівень користування ПК для повноцінної та грамотної роботи з комп'ютерною технікою.</p>
                    <p>Набуті знання на курсі "Універсальний" слухачі зможуть легко застосовувати на практиці як для виконання завдань, так і як основу для вивчення більш складних програм.</p>
                    <p>Навчання на курсі "Універсальний" складається з кількох блоків. Перший блок - це навчання роботі з Windows - найпопулярнішою операційною системою у світі та її стандартними програмами. В наступному блоці вивчаються програми пакету Microsoft Office: Word, Excel, PowerPoint та інше. </p>
                </div>
    
                <Popup/>
                <Subscribe title="Універсальний" price="5 000" courseInfo={universalInfo}/>
                
            </div>
            <OtherCourses/>
            <Discounts/>
        </div>
    )
}


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