export default function CourseProgram({title, programmArray}) {

    return(
        <div className="py-8 ">
            <div className="">
                <span className="text-[28px] font-[500] text-gray-800">{title ? title : "Програма курсу:"}</span>
                <ul className="space-y-4 pt-6 text-left text-gray-700 dark:text-gray-400">
                    {programmArray.map((item,index)=>(
                        /*<li key={index}>{item}</li>*/
                        <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                            <svg
                                className="flex shrink-0 w-3.5 h-3.5 text-green-600 dark:text-green-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 12"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5.917 5.724 10.5 15 1.5"
                                />
                            </svg>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
    }