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
    const documentId = "abm8vip7y4c16po3yoylpwfn"
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

    {/*const universalInfo = [
        { label: "Плановий старт:", value: "23.12.2025" },
        { label: "Тривалість навчання:", value: "~3 місяці" },
        { label: "Кількість занять:", value: "20 занять" },
    ];*/}

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
                <div>{course_list}</div>
                {/*<Subscribe title="Універсальний" price="5 000" courseInfo={universalInfo}/>*/}
                
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