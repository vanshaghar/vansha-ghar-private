import React from 'react';
import Link from 'next/link';

const VideoSection = () => {
  return (
    <section className="video-line-section pt-60 pb-60 p-r z-1">
      <div className="line-shape line-shape-one">
        <span>
          <img src="/assets/images/shape/line-1.png" alt="Shape" />
        </span>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            {/*=== Video Image Box ===*/}
            <div className="video-one_image-box mb-50 p-r z-1 wow fadeInLeft">
              <img
                src="https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar/images/vansha-ghar.webp"
                alt="Video Image"
              />
              {/* <div className="image-overlay" /> */}
              <div className="play-content-box">
                <a
                  href="https://youtu.be/qPhevxOg1FM?si=XUrnuTt5gtaV5fSA"
                  className="video-popup"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            {/*=== Video Content Box ===*/}
            <div className="video-content-box content-box-gap pl-lg-40 mb-50 wow fadeInRight">
              <div className="section-title section-title-left">
                <span className="sub-title">Watch Videos</span>
                <h2>How Can We Made Foods For Customers</h2>
              </div>
              <p>
                Dive into our collection of videos where we explore the vibrant world of family heritage, cultural traditions, and ancestral stories.
              </p>
              <ul className="check-style-one mb-30">
                <li>Best Way to Serve Our Foods</li>
                <li>Low Cost &amp; Online Orders</li>
              </ul>
              <Link legacyBehavior href="/about">
                <a className="main-btn btn-black">
                  watch more
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;