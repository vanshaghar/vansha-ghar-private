import Link from "next/link";
import Slider from "react-slick";
import Partners from "../src/components/Partners";
import { ReservationsFromLg3 } from "../src/components/ReservationsFrom";
import MenuSliderOne from "../src/components/slider/MenuSliderOne";
import TestimonialSliderThree from "../src/components/slider/TestimonialSliderThree";
import Layout from "../src/layout/Layout";
import { gallerySliderOne } from "../src/sliderProps";
const Index2 = () => {
  return (
    <Layout header={2}>
      <section className="banner-two p-r z-1">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/hero/hero-shape-1.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/hero/hot.png" alt="shape" />
          </span>
        </div>
        <div className="shape svg-shape">
          <svg
            height={435}
            viewBox="0 0 1920 435"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1330 0L0 435H1920V240L1330 0Z" />
          </svg>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="hero-content">
                <span className="tag-line wow fadeInUp" data-wow-delay=".5s">
                  Special Fastfood
                </span>
                <h1 className="wow fadeInDown" data-wow-delay=".7s">
                  Cheese Burger
                </h1>
                <div className="hero-button wow fadeInUp" data-wow-delay=".9s">
                  <Link legacyBehavior href="/products">
                    <a className="main-btn filled-btn">
                      Shop now
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              <div
                className="hero-img-box wow fadeInRight"
                data-wow-delay=".7s"
              >
                <img src="assets/images/hero/hero-2.png" alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Banner Section ===*/}
      {/*=== Start Features Section ===*/}
      <section className="features-section light-gray-bg pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-40">
                <span className="sub-title">What we offer</span>
                <h2>Why Choose Qichen Foods</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-features-item-two animate-hover-icon wow fadeInUp mb-40">
                <div className="inner-content">
                  <div className="icon">
                    <i className="flaticon-pizza-slice-1" />
                  </div>
                  <div className="text">
                    <h3 className="title">Fastfoods</h3>
                    <p>
                      Sit amet consectetur adipisci epsum nisi commodoy
                      elementum non
                    </p>
                    <Link legacyBehavior href="/about">
                      <a className="btn-link">
                        read more
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-features-item-two animate-hover-icon wow fadeInDown mb-40">
                <div className="inner-content">
                  <div className="icon">
                    <i className="flaticon-chef-1" />
                  </div>
                  <div className="text">
                    <h3 className="title">Experience Chefs</h3>
                    <p>
                      Sit amet consectetur adipisci epsum nisi commodoy
                      elementum non
                    </p>
                    <Link legacyBehavior href="/about">
                      <a className="btn-link">
                        read more
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-features-item-two animate-hover-icon wow fadeInUp mb-40">
                <div className="inner-content">
                  <div className="icon">
                    <i className="flaticon-delivery-man" />
                  </div>
                  <div className="text">
                    <h3 className="title">Online Delivery</h3>
                    <p>
                      Sit amet consectetur adipisci epsum nisi commodoy
                      elementum non
                    </p>
                    <Link legacyBehavior href="/about">
                      <a className="btn-link">
                        read more
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Features Section ===*/}
      {/*=== Start About Section ===*/}
      <section className="about-shape-two-section p-r z-1 pt-130 pb-80">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/about/net.png" alt="net image" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/about/shape-1.png" alt="Shape image" />
          </span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image-box mb-50 wow fadeInLeft">
                <img src="assets/images/about/image-6.jpg" alt="About Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-box content-box-gap mb-40">
                <div className="section-title section-title-left mb-30 wow fadeInUp">
                  <span className="sub-title">About Qichen</span>
                  <h2>The Cleanest, Most Delicious Vegan Cookie Dough Ever.</h2>
                </div>
                <p className="wow fadeInDown">
                  Sed ut perspiciatis unde omnis natus sit voluptatem
                  accusantium doloremque laudantium totam aperiam eaque
                  queabillo inventore veritatis et quasi architecto beatae vitae
                  sunt explicabo.
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
      {/*=== Start Menu Section ===*/}
      <section className="menu-section pt-70">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Best food menu</span>
                <h2>Choose Your Best Menus</h2>
              </div>
            </div>
          </div>
          <MenuSliderOne />
        </div>
      </section>
      {/*=== End Menu Section ===*/}
      {/*=== Start Menu Section ===*/}
      <section className="menu-section pt-120 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Best food menu</span>
                <h2>Choose Your Best Menus</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="menu-content-box pl-lg-30 mb-50">
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-5.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Pasta Fettuccine</a>
                      </Link>
                      <span className="dot-border" />
                      <span className="price">$25</span>
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-6.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Submarine Sandwich</a>
                      </Link>
                      <span className="dot-border" />
                      <span className="price">$78</span>
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-7.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Chicken Biryani</a>
                      </Link>
                      <span className="dot-border" />
                      <span className="price">$205</span>
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-8.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Shawarma-roll</a>
                      </Link>
                      <span className="dot-border" />
                      <span className="price">$352</span>
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="menu-img-box mb-50 pl-lg-40 wow fadeInRight">
                <img
                  src="assets/images/menu/menu-single-2.jpg"
                  alt="Menu Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Menu Section ===*/}
      {/*=== Start Testimonial Section ===*/}
      <section className="gallery-section pb-130">
        <div className="container-fluid">
          <Slider
            {...gallerySliderOne}
            className="gallery-slider-one wow fadeInUp"
          >
            <div className="gallery-item-one mb-60">
              <div className="gallery-img">
                <img
                  src="assets/images/gallery/gallery-1.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <div className="hover-content">
                    <span className="tag-btn">Fastfood</span>
                    <h3 className="title">Chicken Hamburger</h3>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-item-one mb-60">
              <div className="gallery-img">
                <img
                  src="assets/images/gallery/gallery-2.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <div className="hover-content">
                    <span className="tag-btn">Fastfood</span>
                    <h3 className="title">Chicken Hamburger</h3>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-item-one mb-60">
              <div className="gallery-img">
                <img
                  src="assets/images/gallery/gallery-3.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <div className="hover-content">
                    <span className="tag-btn">Fastfood</span>
                    <h3 className="title">Chicken Hamburger</h3>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-item-one mb-60">
              <div className="gallery-img">
                <img
                  src="assets/images/gallery/gallery-4.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <div className="hover-content">
                    <span className="tag-btn">Fastfood</span>
                    <h3 className="title">Chicken Hamburger</h3>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-item-one mb-60">
              <div className="gallery-img">
                <img
                  src="assets/images/gallery/gallery-2.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <div className="hover-content">
                    <span className="tag-btn">Fastfood</span>
                    <h3 className="title">Chicken Hamburger</h3>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*=== End Testimonial Section ===*/}
      {/*=== Start Reservation Section ===*/}
      <section className="reservation-section light-red-bg pt-90 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title">Booking table</span>
                <h2>Booking table</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="reservation-content-box wow fadeInUp">
                <div className="reservation-style-two">
                  <ReservationsFromLg3 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Reservation Section ===*/}
      {/*=== Start Testimonial Section ===*/}
      <section className="testimonial-section-three pt-120 pb-80">
        <div className="container">
          <TestimonialSliderThree />
        </div>
      </section>
      {/*=== End Testimonial Section ===*/}
      {/*=== Start Event Section ===*/}
      <section className="event-section pt-70 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="event-one_image-box text-center p-r z-1 wow fadeInLeft">
                <img
                  src="assets/images/gallery/event-1.png"
                  alt="Event Image"
                />
                <div className="shape circle-shape">
                  <span />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="event-content-box content-box-gap pl-lg-50 wow fadeInRight">
                <div className="section-title section-title-left mb-30">
                  <span className="sub-title">events &amp; party</span>
                  <h2>Reservations For Enjoying Your Events &amp; Party</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis natus voluptatem accusantium
                  doloremque laudantium totam aperiam eaque queab inventore
                  veritatis et quasi architecto beatae vitae sunt explicabo.
                </p>
                <a href="#" className="main-btn btn-red">
                  reservations
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Event Section ===*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};
export default Index2;
