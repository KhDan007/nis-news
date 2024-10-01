import { useState, useEffect } from "react";

export const ErrorPopup = ({ message, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div
                className={`
            bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg text-center 
            max-w-sm mx-4 transition-all duration-300 ease-in-out
            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
            >
                {message}
            </div>
        </div>
    );
};
