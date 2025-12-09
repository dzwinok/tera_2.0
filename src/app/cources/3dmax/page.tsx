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
    const documentId = "rggdndl42xjhypusqp89h3rl"
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

    {/*const max3dInfo = [
        { label: "Плановий старт:", value: "18.01.2026" },
        { label: "Тривалість навчання:", value: "~6 місяців" },
        { label: "Кількість занять:", value: "35 занять" },
    ];*/}

    return(
        <div>
            <div className={styles.main}>
                <div className={styles.text}>
                    <h2 className={styles.header}>3D Studio Max</h2>
                    <p>3DStudioMax - це професійний пакет для роботи з тривимірною графікою. Він застосовується для створення, анімації і візуалізації тривимірних моделей. 3DStudioMax є універсальною програмою, що застосовується у різних сферах. Це і: дизайн інтер'єру, декорування інтер'єру, архітектурне проєктування, комп'ютерна графіка, web-дизайн і багато іншого.</p>
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
                <Popup/>
                <CourseProgram programmArray={programmArray} />
                <div>{course_list}</div>
                {/*<Subscribe title="3D Studio Max" price="10 500" courseInfo={max3dInfo}/>*/}

            </div>
            <OtherCourses/>
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