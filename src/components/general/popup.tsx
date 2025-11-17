"use client"
import { FaTimes } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";

interface ModalProps {
    isOpen: boolean;
    hasCloseBtn?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
                                         isOpen,
                                         hasCloseBtn = true,
                                         onClose,
                                         children
                                     }) => {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef<HTMLDialogElement | null>(null);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "Escape") {
            handleCloseModal();
        }
    };

    const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
        const dialog = event.currentTarget;
        const rect = dialog.getBoundingClientRect();
        const clickInside =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;

        if (!clickInside) {
            onClose?.();
        }
    };

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;

        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    return (
        <dialog ref={modalRef} 
                onKeyDown={handleKeyDown} 
                onClick={handleBackdropClick} 
                className="modal w-[350px] md:w-[500px] inset-0 bg-white rounded-lg shadow-lg p-8 max-w-[90%] w-[400px]">
            {hasCloseBtn && (
                <FaTimes size={20} className="modal-close-btn hover:bg-gray-200 rounded" onClick={handleCloseModal}/>
            )}
            {children}
        </dialog>
        
    );
};


interface NewsletterModalData {
    email: string;
    phone: string;
    digestType: string;
}

const initialNewsletterModalData: NewsletterModalData = {
    email: '',
    phone: '',
    digestType: 'Microsoft Office',
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
    "Програмування в 1С (BAS)"
]

interface NewsletterModalProps {
    isOpen: boolean;
    onSubmit: (data: NewsletterModalData) => void;
    onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({
                                                             onSubmit,
                                                             isOpen,
                                                             onClose,
                                                         }) => {

    const focusInputRef = useRef<HTMLInputElement | null>(null);
    const [formState, setFormState] = useState<NewsletterModalData>(
        initialNewsletterModalData
    );

    useEffect(() => {
        if (isOpen && focusInputRef.current) {
            setTimeout(() => {
                focusInputRef.current!.focus();
            }, 0);
        }
    }, [isOpen]);

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ): void => {
        const { name, value } = event.target;
        setFormState((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        onSubmit(formState);
        setFormState(initialNewsletterModalData);
    };


    return (
        <Modal
            hasCloseBtn={true}
            isOpen={isOpen}
            onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <h2 className="mb-2 text-gray-90 font-2xl"><b>Реєстрація на курс</b></h2>
                <div className="form-row">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input
                        ref={focusInputRef}
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="youremail@gmail.com"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Номер телефону</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleInputChange}
                        required
                        pattern="[0-9+() -]{7,15}"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="+380XXXXXXXXX"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="digestType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Обраний курс</label>
                    <select
                        id="digestType"
                        name="digestType"
                        value={formState.digestType}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    >
                        {courses.map(course => (
                            <option key={course} value={course}>{course}</option>
                        ))}
                        
                    </select>
                </div>
                <div className="form-row">
                    <button className="block text-white bg-tera-green hover:bg-tera-dark-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Підтвердити</button>
                </div>
            </form>
        </Modal>
    );
};


const Popup = () => {
    const [isNewsletterModalOpen, setNewsletterModalOpen] = useState<boolean>(false);
    const [newsletterFormData, setNewsletterFormData] = useState<NewsletterModalData | null>(null);

    const handleOpenNewsletterModal = () => {
        setNewsletterModalOpen(true);
    };

    const handleCloseNewsletterModal = () => {
        setNewsletterModalOpen(false);
    };

    const handleFormSubmit = (data: NewsletterModalData): void => {
        setNewsletterFormData(data);
        handleCloseNewsletterModal();
    };

    return (
        <>
            <div style={{ display: "flex", gap: "1em" }} className="flex justify-center pt-6">
                <button onClick={handleOpenNewsletterModal} 
                        /*className="block text-white bg-tera-green hover:bg-tera-dark-green font-medium rounded-lg text-xl px-8 py-4 text-center">*/
                    className="relative flex font-medium rounded-lg text-lg items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-tera-green before:duration-500 before:ease-out hover:shadow-tera-green hover:before:h-56 hover:before:w-56">
                    <span className="relative z-10 px-6 py-4">Записатись на курс</span>
                </button>
            </div>

            {newsletterFormData && newsletterFormData.email && (
                <div className="flex justify-center ">
                    <div className="msg-box text-center">
                        Запис на курс <b>{newsletterFormData.digestType}</b> підтверджено. Очікуйте листа в електронній пошті.
                    </div>
                </div>
            )}

            <NewsletterModal
                isOpen={isNewsletterModalOpen}
                onSubmit={handleFormSubmit}
                onClose={handleCloseNewsletterModal} />
        </>
    );
};

export default Popup;
