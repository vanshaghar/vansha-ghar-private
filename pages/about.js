import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Skyline from "../src/components/Skyline";
import QichenCounter from "../src/components/QichenCounter";
import TestimonialSliderThree from "../src/components/slider/TestimonialSliderThree";
import Layout from "../src/layout/Layout";
import VideoSection from "../src/components/sections/VideoSection";
const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"About Us"} />
      <section className="about-shape-section pt-130 pb-80 p-r z-1">
        <div className="shape shape-one">
          <span>
            <img src="/assets/images/about/shape-1.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="/assets/images/about/shape-2.png" alt="shape" />
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-three_image-box text-lg-end mb-20">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img
                      src="/assets/images/about/image-7.jpg"
                      className="about-img-one mb-30 wow fadeInUp"
                      alt="About Image"
                    />
                    <img
                      src="/assets/images/about/image-8.jpg"
                      className="about-img-two mb-30 wow fadeInDown"
                      alt="About Image"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="/assets/images/about/image-9.jpg"
                      className="about-img-three mb-30 wow fadeInRight"
                      alt="About Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-three_content-box content-box-gap pl-lg-45 mb-50">
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
                        <h5>532+ Popular Testy Foods Menu</h5>
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
                        <h5>We’ve 25+ Years Of Experience</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-icon-box mb-50 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-smartphone" />
                      </div>
                      <div className="text">
                        <h5>432+ Foods Iteams Online Orders</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-button wow fadeInUp">
                  <Link legacyBehavior href="/about">
                    <a className="main-btn btn-red">
                      learn more
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <a href="tel:000(123)45689" className="call-button">
                    <div className="icon">
                      <i className="fas fa-headset" />
                    </div>
                    <div className="text">
                      <span>Call For Order</span>
                      <h5>000 (123) 456 89</h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End About Section ===*/}
      {/*=== Start Fact Section ===*/}
      <section className="fact-section dark-red-bg pt-75 pb-35">
        <div className="container">
          <QichenCounter />
        </div>
      </section>
      {/*=== End Fact Section ===*/}
      {/*=== Start Why_choose Section ===*/}
      <section className="why-choose-us pt-130 pb-100">
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
      {/*=== End Why_choose Section ===*/}
      {/*=== Start Team Section ===*/}
      <section className="team-section light-red-bg p-r z-1 pt-120 pb-100">
        <div
          className="dot-bg bg_cover"
          style={{ backgroundImage: "url(assets/images/bg/dot-bg.png)" }}
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Chef's Special</span>
                <h2>Meet Our Experience &amp; Master Chefs</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="chef-img">
                  <img src="/assets/images/team/chef-7.jpg" alt="Chef Image" />
                  <div className="chef-overlay" />
                  <div className="hover-content">
                    <h3 className="title">Jimmie K. Cryer</h3>
                    <p className="position">Senior Chef</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="chef-img">
                  <img src="/assets/images/team/chef-8.jpg" alt="Chef Image" />
                  <div className="chef-overlay" />
                  <div className="hover-content">
                    <h3 className="title">Jimmie K. Cryer</h3>
                    <p className="position">Senior Chef</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="chef-img">
                  <img src="/assets/images/team/chef-9.jpg" alt="Chef Image" />
                  <div className="chef-overlay" />
                  <div className="hover-content">
                    <h3 className="title">Jimmie K. Cryer</h3>
                    <p className="position">Senior Chef</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="chef-img">
                  <img src="/assets/images/team/chef-10.jpg" alt="Chef Image" />
                  <div className="chef-overlay" />
                  <div className="hover-content">
                    <h3 className="title">Jimmie K. Cryer</h3>
                    <p className="position">Senior Chef</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="team-button mt-30 text-center wow fadeInUp">
                <Link legacyBehavior href="/chefs">
                  <a className="main-btn btn-red">
                    Meet Our Chefs                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Team Section ===*/}
      {/*=== Start Video Section ===*/}
      <VideoSection />
      {/*=== End Video Section ===*/}
      {/*=== Start Team Section ===*/}
      <section className="testimonial-section-three pb-130">
        <div className="container">
          <TestimonialSliderThree />
        </div>
      </section>
      {/*=== End Team Section ===*/}
      {/*====== Start Skyline Section ======*/}
      <Skyline />
    </Layout>
  );
};
export default About;
