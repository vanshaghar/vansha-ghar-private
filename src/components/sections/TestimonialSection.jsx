import React from 'react';
import { testimonialSliderOne } from "../../sliderProps";
import Slider from "react-slick";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section-one dark-black-bg p-r z-1 pt-120 pb-120">
      <div className="shape line-shape-one">
        <span>
          <img src="/assets/images/shape/line-1.png" alt="Shape" />
        </span>
      </div>
      <div className="shape shape-one">
        <span>
          <img src="/assets/images/shape/element-1.png" alt="" />
        </span>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-10">
            {/*=== Section Title ===*/}
            <div className="section-title text-center text-white mb-50 wow fadeInDown">
              <span className="sub-title">Foods reviews</span>
              <h2>Global Customer Feedback</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              {/*=== Testimonial Image Box ===*/}
              <div className="testimonial-one_image-box p-r wow fadeInLeft">
                <img
                  src="/assets/images/testimonial/thumb-1.jpg"
                  className="testimonial-img-one"
                  alt="Testimonial Image"
                />
                <img
                  src="/assets/images/testimonial/thumb-2.jpg"
                  className="testimonial-img-two"
                  alt="Testimonial Image"
                />
                <img
                  src="/assets/images/testimonial/thumb-3.jpg"
                  className="testimonial-img-three"
                  alt="Testimonial Image"
                />
              </div>
            </div>
            <div className="col-lg-8">
              {/*=== Testimonial Wrapper ===*/}
              <div className="testimonial-wrapper-one wow fadeInRight mr-lg-100">
                {/*=== Testimonial Slider ===*/}
                <Slider
                  {...testimonialSliderOne}
                  className="testimonial-slider-one"
                >
                  {/*=== Single Testimonial ===*/}
                  <div className="single-testimonial-one">
                    <div className="testimonial-inner-content">
                      <p>
                        Sit amet consectetur adipiscing elit A sapien
                        pellentesque nisl dignissim ultrices enim amet
                        elementum. Eu ut velit elit posuere fusce ullamcorper
                        maecenas fermentum nam elit dolor ornare nec sociis
                        aliquet facilisis.
                      </p>
                      <div className="author-quote-box d-flex justify-content-between">
                        <div className="author-title-thumb d-flex">
                          <div className="author-thumb">
                            <img
                              src="/assets/images/testimonial/author-thumb-1.jpg"
                              alt="Author Thumb"
                            />
                          </div>
                          <div className="author-title">
                            <h3 className="title">Brian A. Barnes</h3>
                            <p className="position">CEO &amp; Founder</p>
                          </div>
                        </div>
                        <div className="quote">
                          <i className="flaticon-right-quote" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*=== Single Testimonial ===*/}
                  <div className="single-testimonial-one">
                    <div className="testimonial-inner-content">
                      <p>
                        Sit amet consectetur adipiscing elit A sapien
                        pellentesque nisl dignissim ultrices enim amet
                        elementum. Eu ut velit elit posuere fusce ullamcorper
                        maecenas fermentum nam elit dolor ornare nec sociis
                        aliquet facilisis.
                      </p>
                      <div className="author-quote-box d-flex justify-content-between">
                        <div className="author-title-thumb d-flex">
                          <div className="author-thumb">
                            <img
                              src="/assets/images/testimonial/author-thumb-1.jpg"
                              alt="Author Thumb"
                            />
                          </div>
                          <div className="author-title">
                            <h3 className="title">Brian A. Barnes</h3>
                            <p className="position">CEO &amp; Founder</p>
                          </div>
                        </div>
                        <div className="quote">
                          <i className="flaticon-right-quote" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*=== Single Testimonial ===*/}
                  <div className="single-testimonial-one">
                    <div className="testimonial-inner-content">
                      <p>
                        Sit amet consectetur adipiscing elit A sapien
                        pellentesque nisl dignissim ultrices enim amet
                        elementum. Eu ut velit elit posuere fusce ullamcorper
                        maecenas fermentum nam elit dolor ornare nec sociis
                        aliquet facilisis.
                      </p>
                      <div className="author-quote-box d-flex justify-content-between">
                        <div className="author-title-thumb d-flex">
                          <div className="author-thumb">
                            <img
                              src="/assets/images/testimonial/author-thumb-1.jpg"
                              alt="Author Thumb"
                            />
                          </div>
                          <div className="author-title">
                            <h3 className="title">Brian A. Barnes</h3>
                            <p className="position">CEO &amp; Founder</p>
                          </div>
                        </div>
                        <div className="quote">
                          <i className="flaticon-right-quote" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;