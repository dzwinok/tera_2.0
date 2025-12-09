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
    const documentId = "x7zpaism8z2bi1172j84u8m4"
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

    {/*const liraInfo = [
        { label: "Плановий старт:", value: "3.01.2026" },
        { label: "Тривалість навчання:", value: "~1 місяць" },
        { label: "Кількість занять:", value: "6 занять" },
    ];*/}

    return(
        <div>
            <div className={styles.main}>
                <div className={styles.text}>
                    <h2 className={styles.header}>Програмний комплекс Ліра-САПР</h2>
                    <p><b>Програма ЛІРА</b> є багатофункціональним програмним комплексом, який призначений для проєктування і
                        проведення розрахунків. Своє застосування програма отримала у сфері будівництва та машинобудування.
                        Активно програма використовується й у проектуванні мостів.</p>
                    <p>Багатий функціонал програми дозволяє підібрати і зробити перевірку елементів конструкції. Це
                        програмне середовище дозволяє запроектувати найекономніші конструкції з найменшими затратами часу,
                        враховуючи чинні будівельні норми.</p>
                    <p>
                        Однією із найважливіших можливостей програми, що відрізняє її від інших проектно-конструкторських
                        програм, є визначення поведінки будівель під час монтажу, її взаємодію з основою, а також дозволяє
                        врахувати різні динамічні впливи.
                    </p>
                    <p>
                        Зручність використання програми полягає не лише у широких і унікальних функціях, а й у можливості
                        інтеграції програми з іншими проектними програмами, що дозволяє залучати до роботи над проектом
                        різні графічні програми, що мають переваги у певних аспектах робіт
                    </p>
                </div>
                <Popup/>
                <CourseProgram programmArray={programmArray} />
                <div>{course_list}</div>
                {/*<Subscribe title="Ліра-САПР" price="4 500" courseInfo={liraInfo}/>*/}

            </div>
            <OtherCourses/>
            <Discounts/>
        </div>
    )
}

const programmArray = [
    "Розрахунок плоских стрижневих систем на статичні навантаження (ферма, нерозрізна балка, плоска залізобетонна і металева рами)",
    "Розрахунок просторових рамних і рамно-в'язних систем на статичні навантаження",
    "Призначення і застосування розрахункових сполучень зусиль (РСУ), а також розрахункових сполучень навантажень (РСН)",
    "Конструювання в системі ЛІР-АРМ: розрахунок армування з подальшою видачею результатів, завдання і застосування конструктивних елементів, а також уніфікації стрижневих елементів, налагодження шкали видачі результатів армування",
    "Конструювання в системі ЛІР-СТК: видача результатів підбору та перевірки перерізів стрижневих елементів, завдання і застосування конструктивних елементів, а також уніфікації стрижневих елементів",
    "Отримання табличних та графічних результатів розрахунку",
    "Розрахунок плоских стрижневих систем на динамічні впливи (сейсмічний вплив)",
    "Аналіз результатів розрахунку ЛІР-ВІЗОР, ЛІР-СТК та ЛІР-АРМ",
]