"use client"
import Discounts from "@/components/general/discounts"
import Table from "@/components/general/table"
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
    const documentId = "pftjdek1fydfbvplxur2e5iz"
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

    {/*const micOfficeInfo = [
        { label: "Плановий старт:", value: "10.02.2026" },
        { label: "Тривалість навчання:", value: "3 місяці" },
        { label: "Кількість занять:", value: "12 занять" },
    ];*/}

    return(
        <div>
            <div className={styles.main}>
                <div className={styles.text}>
                    <h2 className={styles.header}>Microsoft Office</h2>
                    <p>Орієнтований на слухачів, що вже мають навички роботи з ОС Windows і бажають навчитись працювати з програмами пакету <b>Microsoft Office: Word, Excel, PowerPoint.</b></p>
                    <p><b>MS Word</b> - це найпопулярніший текстовий редактор. За допомогою цього редактора користувачі мають змогу повноцінно працювати з текстом, редагувати його, додавати таблиці, графіки, діаграми, малюнки, фотографії і багато іншого.</p>
                    <p><b>MS Excel</b> - це табличний редактор, без якого важко уявити повноцінну роботу в офісі. Excel працює з числами і формулами, допомагає систематизувати дані, створювати таблиці, графіки, діаграми, сортувати та фільтрувати дані і багато іншого.</p>
                    <p><b>MS PowerPoint</b> - найпопулярніша програма для створення презентацій. Цей редактор дає можливість: самостійно створювати найрізноманітніші презентації і редагувати вже створені, використовувати у презентаціях складну графіку, зображення, анімацію тощо, зручно керувати презентацією і її етапами і багато інших можливостей</p>
                    <p>Після закінчення навчання, наші слухачі легко виконують прості функції вдома й складні офісні операції. А саме: повноцінну роботу з текстовим та табличним редакторами, оформлення документів, зведення даних для реєстру, підготовка презентацій тощо.</p>
                </div>

                <Popup/>
                <CourseProgram programmArray={programmArray} />
                <div>{course_list}</div>
                {/*<Subscribe title="Microsoft Office" price="8 500" courseInfo={micOfficeInfo}/>*/}

            </div>
            <OtherCourses/>
            <Discounts/>
        </div>
    )
}


const programmArray = [
    "Огляд офісних програм",
    "Ознайомлення з інтерфейсом програми MS Word",
    "Створення документу в програмі MS Word. Шаблони, зображення документа. Відкриття існуючого документа. Правила набору тексту",
    "Способи виділення тексту. Копіювання та переміщення блоків",
    "Поняття \"Буфер обміну Office\"",
    "Зміна шрифту, регістру. Параметри сторінки та абзацу",
    "Робота зі списками програми MS Word. Марковані, нумеровані, багато рівневі списки. Створення та формування списків. Табуляція",
    "MS Word.Форматування:границі і заливки, колонки, буквиця",
    "MS Word. Вставка об'єктів (малюнки, WordArt, примітки, посилання тощо)",
    "Робота з таблицями в програмі MS Word. Способи створення таблиць. Діаграми: створення та оформлення",
    "Сервіс-параметри, автозаміна, налаштування",
    "Підготовка до друку та друк",
    "Інтерфейс табличного редактора MS Exсel",
    "Структура книги MS Exel. операції з аркушами. Ввеення даних. Форматування Exсel",
    "Формули в Exсel (майстер функцій та вручну)",
    "Створення таблиць. Явна та неявна адресація у формулах",
    "Побудова діаграм",
    "Сортування даних",
    "Побудова презентації PowerPoint. Використання шаблонів",
    "Робота з графічними об'єктами в PowerPoint (анімація: ефекти, налаштування)"
]

