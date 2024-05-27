import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
const Popup = ({
    banner: popup
}) => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const popupShown = sessionStorage.getItem('popupShown');
        if (!popupShown) {
            setShowPopup(true);
        }
    }, []);

    if (!showPopup) return null;

    const handleClose = () => {
        setShowPopup(false);
        sessionStorage.setItem('popupShown', 'true');
    };
    console.log(popup);
    if (!popup) return null;

    return (
        <div className="fixed bg-black bg-opacity-25 z-[1000] inset-0 flex items-center justify-center ">
            <div className="bg-white rounded-lg shadow-lg  p-3 max-w-2xl mx-2 sm:mx-auto relative">
                <button
                    className="absolute -top-2 -right-2 text-gray-700"
                    onClick={handleClose}
                >
                    <span className="text-red-700 bg-white w-10 flex items-center justify-center h-10 rounded-full cursor-pointer text-4xl" >
                        <CloseButton />
                    </span>
                </button>

                {
                    popup.link ?
                        <a href={popup?.link}
                            onClick={handleClose}
                            className='w-full h-auto rounded-md'
                        >
                            <Image
                                width={500}
                                height={500}
                                src={popup?.banner?.url} alt={popup?.banner?.alt} className="w-full h-auto rounded-md" />
                        </a>
                        : <Image width={500}
                            height={500} src={popup?.banner?.url} alt={popup?.banner?.alt} className="w-full h-auto rounded-md" />
                }
            </div>
        </div>
    );
};

export default Popup;
