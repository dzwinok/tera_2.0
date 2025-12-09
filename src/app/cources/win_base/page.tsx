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
    const documentId = "kerpsywg1vqmywl7fdzcigj7"
    const [courseTypeData, setCourseTypeData] = useState(null);

    const [courses, setCourses]=useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getCourseByCourseType(documentId);
            setCourseTypeData(res);
            try {
                const response = await services.auth.getUserMeService();
                setCourses(response?.data.courses.map((item) => item.id))
                console.log("await response: ", await services.auth.getUserMeService())
                console.log("response: ", response?.data.courses.map((item) => item.id))
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

    {/*const windowsInfo = [
        { label: "Плановий старт:", value: "15.01.2026" },
        { label: "Тривалість навчання:", value: "4 місяці" },
        { label: "Кількість занять:", value: "20 занять" },
    ];*/}

    return(
        <div>
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
                <div>{course_list}</div>
                {/*<Subscribe title="Windows Базовий" price="5 000" courseInfo={windowsInfo}/>*/}            
                
            </div>
            <OtherCourses/>
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