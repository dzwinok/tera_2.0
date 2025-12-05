"use client"

export function Popup() {

    return (
        <>
            <div style={{ gap: "1em" }} className="flex justify-center pt-6">
                <button
                    onClick={() => {
                        const el = document.getElementById("subscribe-course");
                        el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="relative flex font-medium rounded-lg text-lg items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-tera-green before:duration-500 before:ease-out hover:shadow-tera-green hover:before:h-56 hover:before:w-56"
                >
                    <span className="relative z-10 px-6 py-4">Записатись на курс</span>
                </button>
            </div>
        </>
    )
}

export default Popup;
