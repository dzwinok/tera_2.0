"use client"
import Discounts from "@/components/general/discounts"
import Popup from "@/components/general/popup"
import CourseProgram from "@/components/general/program"
import Subscribe from "@/components/general/subscribe-course"
import OtherCourses from "@/app/homepage/other-courses"
import React, {useEffect, useState} from "react";
import {getCourseByCourseType} from "@/data/actions/course-types";
import {services} from "@/data/services";

const styles = {
    main: "w-full px-[20%] flex flex-col",
    text: "space-y-4 pb-4",
    header: "text-tera-green leading-[72px] text-[62px] font-[600] py-5",
    level_text: "text-[28px] font-bold font-[500] text-gray-800",
};

function formatNumberWithSpaces(value: number): string {
    return value.toLocaleString("en-US").replace(/,/g, " ");
}
function formatDate(date: string): string {
    if (!date) return "";

    const [year, month, day] = date.split("-");
    return `${day}.${month}.${year}`;
}

export default function Page(){
    const documentId = "ck2txy8xwrxy3n787mq15q09"
    const [courseTypeData, setCourseTypeData] = useState(null);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const [courses, setCourses]=useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getCourseByCourseType(documentId);
            setCourseTypeData(res);
            try {
                const response = await services.auth.getUserMeService();
                setCourses(response?.data.courses.map((item) => item.id))
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        }
        fetchUser();
    }, []);

    const course_list = [];
    console.log("COURSES DATA", courseTypeData)
    if (courseTypeData?.data?.courses) {
        for (let i = 0; i < courseTypeData.data.courses.length; i++) {
            const courseInfo = [
                {label: "Плановий старт:", value: formatDate(courseTypeData.data.courses[i].start_date)},
                {label: "Тривалість навчання:", value: courseTypeData.data.courses[i].duration + " місяці"},
                {label: "Кількість занять:", value: courseTypeData.data.courses[i].num_lessons + " занять"},
            ];
            {/*console.log("course: ", courses)
            console.log("courseTypeData: ", courseTypeData.data.courses[i].id)
            console.log("courses?includes: ", courses?.includes(courseTypeData.data.courses[i].id))*/}
            course_list.push(
                <Subscribe id={courseTypeData.data.courses[i].id}
                           title={courseTypeData.data.title}
                           price={formatNumberWithSpaces(courseTypeData.data.courses[i].price)}
                           courseInfo={courseInfo}
                           isSubscribed={courses?.includes(courseTypeData.data.courses[i].id)}
                />
            );
        }
    }
    
    {/*const avk5Info = [
        { label: "Плановий старт:", value: "02.02.2026" },
        { label: "Тривалість навчання:", value: "~4 місяці" },
        { label: "Кількість занять:", value: "16 занять" },
    ];*/}

    return(
        <div>
            <div className={styles.main}>
                <div className={styles.text}>
                    <h2 className={styles.header}>Кошторисна справа з використанням програмного комплексу АВК-5</h2>
                    <p><b>АВК-5</b> - це програма, що найчастіше використовується для автоматичного складання кошторисів. Популярність даної програми пояснюється не лише зручністю використання її інтерфейсу, а й функціональними можливостями, що допомагають фахівцям зі складання кошторисів оптимізувати фінансові і трудові ресурси і внормувати їх у відповідності до актуальних норм законодавства.</p>
                    <p><b>"Кошторисна справа з використанням програмного комплексу АВК-5"</b> - це спеціалізований курс для фахівців зі складання кошторисів, що бажають навчитись працювати з програмою АВК-5, а також для тих, хто бажає здобути спеціальність кошторисника.</p>
                    <p>Курси кошторисників в Навчальному центрі "Тераконсалт" орієнтовані на вивчення методології складання кошторисних планів та супровідної документації для об'єктів різних видів та складності будівництва. Цей курс містить два рівні вивчення: базовий та поглиблений.</p>
                    <Popup/>
                </div>

                <h3 className={styles.level_text}>Базовий рівень (10 занять)</h3>
                <p>Складається з двох модулів: теоретичного та практичного - вивчаються складання кошторисів та основні навички роботи з програмою АВК-5. </p>
                <CourseProgram title={"Програма теоретичного модуля (6 занять):"} programmArray={programmArray} />
                <CourseProgram title={"Програма практичного модуля (4 заняття):"} programmArray={secondProgrammArray} />
                <h3 className={styles.level_text}>Поглиблений рівень. Модуль "Спеціалізація" (6 занять)</h3>
                <p>Має за мету навчити роботі з кошторисами складних об'єктів, оволодіти вмінням виконувати перевірку кошторисів підрядних та субпідрядних організацій, навчити професійно використовувати програму АВК-5 для складання кошторисів згідно із актуальними нормативами в Україні, тощо.</p>
                <CourseProgram title={"Програма поглибленого курсу включає:"} programmArray={thirdProgrammArray} />

                <div>{course_list}</div>
                {/*<Subscribe title="Кошторисна справа" price="9 800" courseInfo={avk5Info}/>*/}
            </div>
            <OtherCourses />
            <Discounts/>
        </div>
    )
}


const programmArray = [
    "Основні поняття та терміни",
    "Підрахунок об'ємів будівельних робіт",
    "Створення кошторису, розрахунок відряджень та інших витрат",
    "Коефіцієнти та їх застосування",
    "Нововведення у ціноутворенні ",
    "Договірна ціна, її види та особливості",
    "Підсистема Підрядник, акти виконаних робіт КБ-2, КБ-3",
    "Дії над кошторисами",
    "Тендерна документація",
    "Особливості проходження експертизи"
]

const secondProgrammArray = [
    "5-6 прикладів складання кошторисів на різні види будівельних робіт з підрахунком об'ємів",
    "Акти КБ-2, КБ-3 з частковим виконанням",
    "Аналіз типових помилок"
]

const thirdProgrammArray = [
    "Вузькопрофільні кошториси",
    "Особливості аналізу та перевірки",
    "Індивідуальні консультації",
    "Оптимізація роботи кошторисника"
]

/*

 */

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