
import React, {
    useEffect,
    useRef,
    useState,
    type FormEvent,
    type ChangeEvent,
    type KeyboardEvent,
    type MouseEvent,
} from "react";
import { FaTimes } from "react-icons/fa";
import { LoggedInUser } from "@/components/custom/logged-in-user";
import {services} from "@/data/services";
import Link from "next/link";
import {TAuthUser, TStrapiResponse} from "@/types";

export interface NewsletterModalData {
    email: string;
    phone: string;
}

export interface NewsletterModalProps {
    /** Чи відкрита модалка */
    isOpen: boolean;
    /** Закрити модалку (Esc, клік по бекдропу, хрестик) */
    onClose: () => void;
    /** Сабміт форми – дані йдуть нагору */
    onSubmit: (data: NewsletterModalData) => void;
    /** Показувати хрестик зверху справа */
    hasCloseBtn?: boolean;
}


const createInitialData = (): NewsletterModalData => ({
    email: "",
    phone: "",
});




function LoginWindow() {
    
    return (
        <div>
            <h3>Вхід в акаунт не виявлено</h3>
            Будь ласка, 
            <Link className="underline ml-2" href="/signIn">
                увійдіть
            </Link>
            {" "}або
            <Link className="underline ml-2" href="/signUp">
                створіть
            </Link>
            {" "}новий акаунт
        </div>
    )
}

function CourseConfirm() {
    return(
        <div>
            <h2 className="text-lg font-semibold text-center">
                Ви впевнені, що хочете записатись на курс ?
            </h2>
            <div className="pt-6">
                <span className="text-gray-500 text-xs">
                    *підтвердивши реєстрацію, Ви подаєте заявку на даний курс (жодної попередньої оплати не потрібно)
                </span>
                <button type="submit" className="w-full rounded bg-tera-green py-2 mt-4 text-white">
                    Підтвердити
                </button>
            </div>
        </div>
    )
} 
        
        /*<form onSubmit={handleSubmit} className="space-y-4 pt-6">
        <h2 className="text-lg font-semibold">Реєстрація на курс "{title}"</h2>
        <div className="px-8 pt-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    ref={emailInputRef}
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded border px-3 py-2 text-sm"
                    placeholder="you@example.com"
                />
            </div>

            <div className="pt-4">
                <label className="block text-sm font-medium text-gray-700">
                    Номер телефону
                </label>
                <input
                    type="tel"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded border px-3 py-2 text-sm"
                    placeholder="+380XXXXXXXXX"
                    pattern="[0-9+() -]{7,15}"
                />
            </div>
        </div>

        <div className="pt-6">
                        <span className="text-gray-500 text-xs">
                            *підтвердивши реєстрацію, Ви подаєте заявку на даний курс (жодної попередньої оплати не потрібно)
                        </span>
            <button
                type="submit"
                className="w-full rounded bg-tera-green py-2 mt-4 text-white"
            >
                Підтвердити
            </button>
        </div>
    </form>*/
    

export const NewsletterModal: React.FC<NewsletterModalProps> = ({
                                                                    isOpen,
                                                                    onClose,
                                                                    onSubmit,
                                                                    title,
                                                                    hasCloseBtn = true,
                                                                }) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const emailInputRef = useRef<HTMLInputElement | null>(null);

    const [formState, setFormState] = useState<NewsletterModalData>(
        () => createInitialData()
    );
    
    //const user = await services.auth.getUserMeService();
    //console.log("user1122", user)
    //const [user, setUser] = useState<any | null>(null); // 🧩 store user data here
    let user = null
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                user = await services.auth.getUserMeService();
                console.log("user12", user)
            } catch (error) {
                console.log("Error fetching user:", error);
                
            }
        };
        fetchUser();
    }, []);

    // Відкриття / закриття <dialog> при зміні isOpen
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        try {
            if (isOpen && !dialog.open) {
                dialog.showModal();
            } else if (!isOpen && dialog.open) {
                dialog.close();
            }
        } catch {
            // Фолбек, якщо showModal/close недоступні
            if (isOpen) {
                dialog.setAttribute("open", "true");
            } else {
                dialog.removeAttribute("open");
            }
        }
    }, [isOpen]);

    // Фокус на Email при відкритті
    useEffect(() => {
        if (!isOpen) return;
        emailInputRef.current?.focus();
    }, [isOpen]);

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(formState);
        // очищаємо форму після сабміту
        setFormState(createInitialData());
        // саме закриття модалки вирішує батьківський компонент (onClose)
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
        if (e.key === "Escape") {
            e.preventDefault();
            onClose();
        }
    };

    // Клік по бекдропу (поза “вікном” модалки)
    const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const rect = dialog.getBoundingClientRect();
        const clickX = e.clientX;
        const clickY = e.clientY;

        const isOutside =
            clickX < rect.left ||
            clickX > rect.right ||
            clickY < rect.top ||
            clickY > rect.bottom;

        if (isOutside) onClose();
    };
    

    return (
        <dialog
            ref={dialogRef}
            className="backdrop:bg-black/40 rounded-lg p-0"
            onKeyDown={handleKeyDown}
            onClick={handleBackdropClick}
        >
            <div
                className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
                onClick={e => e.stopPropagation()} // щоб клік всередині не триггерив бекдроп
            >
                {hasCloseBtn && (
                    <button
                        type="button"
                        className="absolute right-4 top-4 text-gray-700"
                        onClick={onClose}
                        aria-label="close"
                    >
                        <FaTimes />
                    </button>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 pt-6">
                    {user ?
                        (<LoginWindow />) :
                        (<CourseConfirm  />) 
                    }
                </form>

                
            </div>
        </dialog>
    );
};

export default NewsletterModal;
