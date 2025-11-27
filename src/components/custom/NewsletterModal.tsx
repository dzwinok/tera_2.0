// components/NewsletterModal.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

interface NewsletterModalData {
    email: string;
    phone: string;
    digestType: string;
}

const initialNewsletterModalData: NewsletterModalData = {
    email: "",
    phone: "",
    digestType: "Microsoft Office",
};

const courses = [
    "Microsoft Office",
    "Універсальний",
    "Windows. Базовий",
    "Кошторисна справа з використанням програми АВК-5",
    "Комп'ютерна графіка",
    "Adobe Indesign",
    "Проєктування в системі AutoCAD",
    "ArchiCAD базовий",
    "Програмний комплекс Ліра-САПР",
    "3D Studio Max",
    "Основи програмування на мовах С/С++",
    "Програмування в 1С (BAS)",
];

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: NewsletterModalData) => void;
    hasCloseBtn?: boolean;
}

export default function NewsletterModal({
                                            isOpen,
                                            onClose,
                                            onSubmit,
                                            hasCloseBtn = true,
                                        }: Props) {
    const focusInputRef = useRef<HTMLInputElement | null>(null);
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const [formState, setFormState] = useState<NewsletterModalData>(
        initialNewsletterModalData
    );

    // контролюємо відкриття діалогу
    useEffect(() => {
        const dlg = dialogRef.current;
        if (!dlg) return;

        if (isOpen) {
            // showModal може кидати помилки у SSR, тому виконуємо тільки на клієнті (це "use client" файл)
            try {
                dlg.showModal();
            } catch (e) {
                // деякі браузери/полифіли можуть поводитись інакше — fallback:
                dlg.setAttribute("open", "");
            }
        } else {
            try {
                dlg.close();
            } catch (e) {}
        }
    }, [isOpen]);

    // автофокус на input при відкритті
    useEffect(() => {
        if (isOpen && focusInputRef.current) {
            setTimeout(() => focusInputRef.current?.focus(), 0);
        }
    }, [isOpen]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormState((s) => ({ ...s, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formState);
        setFormState(initialNewsletterModalData);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
        if (e.key === "Escape") onClose();
    };

    // закриття при кліку по бекдропу
    const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
        const dialog = event.currentTarget;
        const rect = dialog.getBoundingClientRect();
        const clickInside =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;

        if (!clickInside) {
            onClose();
        }
    };

    return (
        <dialog
            ref={dialogRef}
            className="modal bg-white rounded-lg shadow-lg p-6 max-w-[90%] w-[400px]"
            onKeyDown={handleKeyDown}
            onClick={handleBackdropClick}
        >
            {hasCloseBtn && (
                <button
                    className="absolute right-4 top-4 text-gray-700"
                    onClick={onClose}
                    aria-label="close"
                >
                    <FaTimes />
                </button>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-lg font-semibold">Реєстрація на курс</h2>

                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        ref={focusInputRef}
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded border p-2"
                        placeholder="youremail@gmail.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Номер телефону</label>
                    <input
                        name="phone"
                        type="tel"
                        pattern="[0-9+() -]{7,15}"
                        value={formState.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded border p-2"
                        placeholder="+380XXXXXXXXX"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Обраний курс</label>
                    <select
                        name="digestType"
                        value={formState.digestType}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded border p-2"
                    >
                        {courses.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        className="w-full bg-tera-green text-white py-2 rounded"
                    >
                        Підтвердити
                    </button>
                </div>
            </form>
        </dialog>
    );
}
