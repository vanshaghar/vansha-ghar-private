import React from "react";
import Slider from "react-slick";
import { heroSliderOne } from "../../sliderProps";
import Link from "next/link";
import Image from "next/image";

const HeroSection = ({
    data
}) => {

    return (
        <section className="banner-one p-r z-1">
            <div className="max-w-[1690px] px-[min(20px,5vw)] mx-auto">
                <div className="shape line-shape-one">
                    <span>
                        <img src="/assets/images/shape/line-1.png" alt="shape" />
                    </span>
                </div>
                <Slider
                    {...heroSliderOne}
                    className="max-w-[1690px]  hero-slider-one p-r z-1"
                >

                    {
                        data.map((slide) => (
                            <div
                                key={slide.id}
                                className="relative w-full max-w-[1690px] !flex lg:!flex-nowrap justify-center lg:justify-between flex-wrap align-items-center">
                                <div className="order-lg-1 bottom-[-10px] bg-white flex lg:block items-center justify-center absolute h-68 py-4 lg:py-0 lg:!bg-transparent lg:relative order-2 nax-lg:w-[calc(100%-2rem)] w-full lg:max-w-[40vw]">
                                    <div className="hero-content mx-2 lg:mb-40 pr-lg-40">
                                        <h1 className="wow fadeInUp max-md:line-clamp-1">{slide.name}</h1>
                                        <p className="wow fadeInDown line-clamp-3 h-[5em]">
                                            {slide.description}
                                        </p>
                                        <div className="hero-button wow fadeInUp">
                                            <span>
                                                <img src="/assets/images/down-arrow.png" alt="" />
                                            </span>
                                            <Link legacyBehavior href="#reservation-section"
                                            >
                                                <a className="main-btn btn-red">
                                                    order now
                                                    <i className="far fa-arrow-right" />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="!p-4 lg:block flex items-center justify-center order-1">
                                    {/*=== Hero Image ===*/}
                                    <div className=" rounded-full overflow-hidden aspect-square max-w-[600px] mb-40 fadeInRight">
                                        <Image src={slide?.image?.url}
                                            className="h-full min-h-[300px] md:block hidden w-full object-cover"
                                            alt="Hero Image"
                                            width={500}
                                            height={500}
                                        />

                                    </div>
                                </div>
                            </div>))
                    }
                </Slider>
            </div>
        </section>
    );
};

export default HeroSection;