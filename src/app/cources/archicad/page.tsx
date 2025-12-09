"use client"
import OtherCourses from "@/app/homepage/other-courses"
import Popup from "@/components/general/popup"
import Discounts from "@/components/general/discounts"
import CourseProgram from "@/components/general/program"
import Subscribe from "@/components/general/subscribe-course"
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
    const documentId = "im9o0mdaucgvll5hab04nhhh"
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

    return(
        <div>
            <div className={styles.main}>
                <div className={styles.text}>
                    <h2 className={styles.header}>Проєктування в ArchiCad</h2>
                    <p><b>ArchiCad</b> - це програма для автоматизованого процесу розробки моделей будівельних споруд. Дана програма дає можливість проектантові детально розробити архітектурно-будівельні конструкції і документацію до неї.</p>
                    <p>Набір інструментів та функцій даної програми роблять її незамінною для роботи архітекторів та проектантів, оскільки передбачає можливість візуалізації у тривимірному вигляді розроблюваного проекту у будь-який момент роботи.</p>
                    <p>Важливе значення програма має при підготовці розрахунків, оскільки при завантаженні відповідної вихідної інформації в систему ArchiCad, програма видає характеристику і розрахунки кошторисного плану.</p>
                    <p>Кваліфіковані викладачі-практики зможуть швидко і ефективно навчити основам проєктування в програмі ArchiCad. Їхній багаторічний досвід допоможе слухачам освоїти основні прийоми, що значно полегшують роботу у програмі і уникати найтиповіших помилок, що могли б виникнути при самостійному вивченні програми.</p>
                </div>
                <Popup/>
                <CourseProgram programmArray={programmArray} />
                <div>{course_list}</div>
                {/*<Subscribe title="ArchiCad" price="8 500" courseInfo={archicadInfo}>*/}
    
            </div>
            <OtherCourses/>
            <Discounts/>
        </div>
    )
}


const programmArray = [
    "Концепція програми ArchiCAD",
    "Керування проектом (навігатор, плаваючі панелі і лінійки, шари)",
    "Основні методи роботи в ArchiCAD",
    "Базові методи креслення",
    "Робота з інструментами, їх налаштування",
    "Методи редагування",
    "Створення і редагування сходів",
    "Встановлення розмірів і їх редагування",
    "Побудова дахів і формування їх конструкції (розширення Roof Maker, Truss Maker)",
    "Розміщення рисунків. 3D-сітка",
    "Налаштування моделі в 3D-вікні",
    "Фотозображення",
    "Фільмування проекту",
    "Перерізи і фасади. Формування деталей і робочих аркушів",
    "Макетування конструкторської документації. Створення бібліотечних елементів",
    ]

// ДОДАТИ ТАБЛИЧКУ!!!!!!