import React from 'react';
import Link from 'next/link';

const ABOUT_IMAGE = {
  image1: "/assets/images/about/image-1.jpg",
  image2: "/assets/images/about/image-2.jpg"
};

const AboutSection = () => {
  return (
    <section className="about-section pt-130 pb-50">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            {/*=== About Content Box ===*/}
            <div className="about-content-box content-box-gap mb-40 wow fadeInLeft">
              <div className="section-title section-title-left mb-30">
                <span className="sub-title">About Vansha Ghar</span>
                <h2>
                  The Best Tasty &amp; Yummy Food and Chief Based on London
                </h2>
              </div>
              <p>
                Sit amet consectetur adipiscing elitsue risus mauris quam
                neque adipiscing phasellus aenean ante orcirat scelerisque
                enim ut nulla vestibulum velvitae ut at elementum mauris,
                etiam ornare diame
              </p>
              <Link legacyBehavior href="#">
                <a className="main-btn btn-red">
                  learn more
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            {/*=== About Content Box ===*/}
            <div className="about-image-gallery ml-lg-40">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={ABOUT_IMAGE.image1}
                    className="mb-40 wow fadeInUp"
                    alt="About Image"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src={ABOUT_IMAGE.image2}
                    className="mb-40 wow fadeInDown"
                    alt="About Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;