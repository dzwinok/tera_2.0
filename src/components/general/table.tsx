export default function Table() {


    return (

        <div className="px-[15%] relative overflow-x-auto">
            <table className=" my-6 border-separate border-spacing-2 border border-slate-400 w-full text-base text-center rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="border border-slate-300 px-6 py-3">
                        Кількість занять
                    </th>
                    <th scope="col" className="border border-slate-300 px-6 py-3">
                        Вартість курсу
                    </th>
                    <th scope="col" className="border border-slate-300 px-6 py-3">
                        Найближчий старт
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                    <th scope="row" className="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        20
                    </th>
                    <td className="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        7 500
                    </td>
                    <td className="border border-slate-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        27.05
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}