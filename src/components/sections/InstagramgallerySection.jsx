import React from 'react';
const INSTAGRAM_DATA = [
    "/assets/images/instagram/insta-1.jpg",
    "/assets/images/instagram/insta-2.jpg",
    "/assets/images/instagram/insta-3.jpg",
    "/assets/images/instagram/insta-4.jpg",
    "/assets/images/instagram/insta-5.jpg",
    "/assets/images/instagram/insta-6.jpg",
    "/assets/images/instagram/insta-7.jpg",
    "/assets/images/instagram/insta-8.jpg",
    "/assets/images/instagram/insta-9.jpg",
    "/assets/images/instagram/insta-10.jpg",
    "/assets/images/instagram/insta-11.jpg",
    "/assets/images/instagram/insta-12.jpg"];




const InstagramGallerySection = () => {
    return (
        <section className="instagram-gallery pt-130 pb-100">
            <div className="container-fluid">
                <div className="row">
                    {
                        INSTAGRAM_DATA.map((item, index) => (
                            <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                {/*=== Instagram Box ===*/}
                                <div className="instagram-box mb-30 wow fadeInUp">
                                    <div className="instagram-img">
                                        <img
                                            src={item}
                                            alt="Instagram Image"
                                        />
                                        <div className="insta-overlay" />
                                        <a
                                            href={item}
                                            className="img-popup insta-icon"
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default InstagramGallerySection;