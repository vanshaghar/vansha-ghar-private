import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollFunction = () => {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollFunction);
        return () => window.removeEventListener("scroll", scrollFunction);
    }, []);


    return (
        <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className={`!fixed z-[100] bottom-5 end-5 rounded-full bg-[#11492C] p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-[#11492C] hover:shadow-lg focus:bg-[#11492C] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#11492C] active:shadow-lg ${isVisible ? '' : 'hidden'}`}
            id="btn-back-to-top"
            onClick={backToTop}
        >

            <span className="[&>svg]:w-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
            </span>
        </button>

    );
};


export default ScrollToTop;
