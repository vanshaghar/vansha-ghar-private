import React, { useState } from 'react';
import { CloseButton } from 'react-bootstrap';
const InstagramGallerySection = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (url) => {
        setSelectedImage(url);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    };


    return (
        <section className="instagram-gallery pt-130 pb-100">
            <div className="container-fluid">
                <div className="row">
                    {
                        data.map((item, index) => (
                            <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                {/*=== Instagram Box ===*/}
                                <div className="instagram-box mb-30 cursor-pointer wow fadeInUp">
                                    <div className="instagram-img"
                                        onClick={() => openModal(item.url)}

                                    >
                                        <img
                                            src={item.url}
                                            alt={item.alt || "Instagram Image"}
                                            className='img-fluid w-full object-cover max-w-[100%] h-[100%] aspect-square rounded-10'
                                        />
                                        <div className="insta-overlay" />
                                        <div
                                            className="img-popup insta-icon"
                                        >
                                            <i className="fab fa-instagram" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 modal-overlay" onClick={handleOutsideClick}>
                    <div className="rounded-lg relative p-4 max-w-lg w-full">
                        <span className="text-red-700 bg-white w-10 flex items-center justify-center h-10 rounded-full cursor-pointer absolute top-7 right-0 text-4xl" onClick={closeModal}>
                            <CloseButton />
                        </span>

                        <div className="mt-4">
                            <div className="flex justify-center">
                                <img
                                    src={selectedImage}
                                    alt="Selected Instagram Image"
                                    className='img-fluid w-full object-cover max-w-[100%] h-[100%] rounded-10'
                                />
                            </div>
                        </div>
                    </div>

                </div>

            )}
        </section>
    );
};

export default InstagramGallerySection;
