import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const ABOUT_IMAGE = {
  image1: "https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar/images/vansha-ghar-building.webp",
  image2: "https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar/images/tandoori-momo.jpg"
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
                  The Best Tasty &amp; Yummy Food Based In Nepal
                </h2>
              </div>
              <p>
                Discover the warmth of Nepali hospitality at Vansha Ghar. We bring the authentic flavours of Nepal to your table. Enjoy traditional dishes like momos, sekuwa, and Thakali sets, made with the freshest ingredients and a love for Nepali cuisine.
              </p>
              <Link legacyBehavior href="/about">
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
                <div className="col-md-12">
                  <Image
                    src={ABOUT_IMAGE.image1}
                    className="mb-40 wow md:max-h-[500px] md:max-w-[750px] w-full h-full object-cover fadeInDown"
                    alt="About Image"
                    width={500}
                    height={380}
                  />
                </div>
                {/* <div className="col-md-6 hidden md:block">
                  <img
                    src={ABOUT_IMAGE.image2}
                    className="mb-40 wow max-h-[500px] max-w-[380px] fadeInDown"
                    alt="About Image"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;