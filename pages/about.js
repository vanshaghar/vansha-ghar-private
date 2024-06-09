import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Skyline from "../src/components/Skyline";
import QichenCounter from "../src/components/QichenCounter";
import TestimonialSliderThree from "../src/components/slider/TestimonialSliderThree";
import Layout from "../src/layout/Layout";
import VideoSection from "../src/components/sections/VideoSection";
import { VANSHA_GHAR } from "../src/lib/constants/vanshaghar";
import Image from "next/image";
const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"About Us"} />
      <section className="about-shape-section py-32 p-r z-1">

        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-three_image-box text-lg-end mb-20">
                <div className="row align-items-center">
                  <div className="col-md-6 flex items-center justify-center flex-col">
                    <Image
                      src="https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar/images/vansha-ghar-building.webp"
                      className="about-img-one mb-30 max-h-[300px] aspect-[2/3] wow fadeInUp"
                      alt="About Image"
                      width={200}
                      height={200}
                    />
                    <Image
                      src="https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar/thakali.webp"
                      className="about-img-two aspect-[3/2] max-md:hidden object-cover w-50 h-30 overflow-hidden mb-30 wow fadeInDown"
                      alt="About Image"
                      width={200}
                      height={150}
                    />
                  </div>
                  <div className="col-md-6 h-full">
                    <Image
                      src="https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar/IMG_2352.jpeg"
                      className="about-img-three mb-10 max-w-[300px] h-full wow fadeInRight"
                      alt="About Image"
                      width={200}
                      height={1050}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-three_content-box content-box-gap pl-lg-45 ">
                <div className="section-title section-title-left mb-30 wow fadeInUp">
                  <span className="sub-title">About Vansha Ghar</span>
                  <h2
                    className="text-5xl"
                  >The Cleanest, Most Delicious Nepalese Food Ever</h2>
                </div>
                <p className="wow fadeInDown">
                  We source almost all of the most important spices used in our traditional Nepali dishes directly from Nepal, making Vansha Ghar one of the best restaurants in Abu Dhabi to try authentic Nepali cuisine.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="fancy-icon-box mb-50 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-food-serving" />
                      </div>
                      <div className="text">
                        <h5>171+ Popular Tasty Foods Menu</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-icon-box mb-50 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-discuss" />
                      </div>
                      <div className="text">
                        <h5>6534+ Satisfied Our Global Customers</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-icon-box mb-50 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-certificate" />
                      </div>
                      <div className="text">
                        <h5>We’ve 8+ Years Of Experience</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-icon-box mb-50 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-smartphone" />
                      </div>
                      <div className="text">
                        <h5>162+ Foods Items Available to Order Online</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-button wow fadeInUp">
                  <button className="main-btn btn-red"
                    onClick={(e) => {
                      window.location.href = `tel:${VANSHA_GHAR.phoneNumber}`;
                    }}
                  >
                    Call for Order <i className="far fa-arrow-right" />
                  </button>
                  {/* <a href="tel:000(123)45689" className="call-button">

                    <button className="text">
                      <span>Call For Order</span>
                      <h5>{VANSHA_GHAR.phoneNumber}</h5>
                    </button>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section className="fact-section dark-red-bg pt-75 pb-35">
        <div className="container">
          <QichenCounter />
        </div>
      </section>
      {/*=== End Fact Section ===*/}
      {/*=== Start Why_choose Section ===*/}
      <section className="why-choose-us pt-52 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-12">
              <div className="choose-content-box content-box-gap mb-30 wow fadeInLeft">
                <div className="section-title section-title-left mb-10">
                  <span className="sub-title">Why Choose us</span>
                  <h2
                    className="text-5xl"
                  >
                    8+ Years Of Experience In Restaurant Service                   </h2>
                </div>
                <p>
                  Vansha Ghar was founded in 2016 and providing service to nepelese cuisine lovers since then. Nepali cuisine has gained popularity among adventurous foodies worldwide.
                </p> <p>
                  Vansha Ghar's staff, from the head chef to the wait staff, are all exclusively Nepali.  We serve the dishes that we know and love from Nepal.
                </p>
                <ul className="check-style-one mb-35">
                  <li>Authentic Nepali Experience</li>
                  <li>Culinary Expertise</li>
                  <li>Quality Ingredients</li>
                  <li>Warm Hospitality</li>

                </ul>
                <Link legacyBehavior href="/about">
                  <a className="main-btn btn-red">
                    learn more
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="choose-item-list">
                <div className="row">
                  <div className="col-md-6">
                    <div className="fancy-features-item mb-30 wow fadeInUp">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M2.243 2.246v1.562m4.563-1.562v1.562M4.525 1.083v1.562" /><path d="M11.509 4.602a.955.955 0 1 0 1.91 0a.955.955 0 1 0-1.91 0" /><path stroke-linejoin="round" d="m10.841 8.677l.212.093c1.48.7 1.889 1.606 1.889 2.85v.298a1 1 0 0 1-1 1H1.64c-.327 0-.634-.161-.76-.463c-.277-.669-.599-2.013.238-3.685c1.21-2.416 4.187-2.947 6.094-1.947l.09.046" /><path d="M10.158 10.006c.928-1.018.976-2.485.108-3.275s-2.323-.605-3.25.413c-.843.925-.96 2.219-.325 3.04c.064.084.137.163.217.235" /><path stroke-linejoin="round" d="M11.806 5.296L10.32 6.781" /></g></svg>
                      </div>
                      <div className="text">
                        <h3 className="title">Nepali Cuisine</h3>
                        <p>Rich, Spicy, Flavorful, Diverse, Authentic</p>
                        {/* <Link legacyBehavior href="/about">
                          <a className="btn-link">Read more</a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-features-item mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-chef-1" />
                      </div>
                      <div className="text">
                        <h3 className="title">Experience Chefs</h3>
                        <p>Skilled Culinary Nepalese Experts</p>
                        {/* <Link legacyBehavior href="/about">
                          <a className="btn-link">Read more</a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-1">
                    <div className="fancy-features-item mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-delivery-man" />
                      </div>
                      <div className="text">
                        <h3 className="title">Online Delivery</h3>
                        <p>Convenient, Fast, Reliable, Delicious, Accessible.</p>
                        {/* <Link legacyBehavior href="/about">
                          <a className="btn-link">Read more</a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-features-item mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-food-serving" />
                      </div>
                      <div className="text">
                        <h3 className="title">Casual Dinning</h3>
                        <p>Comfortable, Informal, Welcoming, Enjoyable.</p>
                        {/* <Link legacyBehavior href="/about">
                          <a className="btn-link">Read more</a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VideoSection />
      <section className="testimonial-section-three pb-130">
        <div className="container">
          <TestimonialSliderThree />
        </div>
      </section>
      <Skyline />
    </Layout >
  );
};
export default About;
