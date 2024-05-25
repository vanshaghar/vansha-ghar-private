import React from "react";
import Slider from "react-slick";
import { heroSliderOne } from "../../sliderProps";
import Link from "next/link";
import Image from "next/image";
// Define the array of data for the slider
const sliderData = [
    {
        title: "Kurkure mo-mo",
        description: "Sit amet consectetur adipiscing Malesuada morbigrave ullamore alesuada nec pulvinar nisle",
        image: "/assets/images/hero/hero-1.png",
        link: "#"
    },
    //add 3 more data here with different title, description, but same image
    {
        title: "Tasty momo",
        description: "Sit amet consectetur adipiscing Malesuada morbigrave ullamore alesuada nec pulvinar nisle",
        image: "/assets/images/hero/hero-1.png",
        link: "#"
    },
    {
        title: "Dhido Set",
        description: "Sit amet consectetur adipiscing Malesuada morbigrave ullamore alesuada nec pulvinar nisle",
        image: "/assets/images/hero/hero-1.png",
        link: "#"
    },
    {
        title: "Thakali set",
        description: "Sit amet consectetur adipiscing Malesuada morbigrave ullamore alesuada nec pulvinar nisle",
        image: "/assets/images/hero/hero-1.png",
        link: "#"
    }


];
const HeroSection = ({
    data
}) => {

    React.useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <section className="banner-one p-r z-1">
            <div className="container">
                <div className="shape line-shape-one">
                    <span>
                        <img src="/assets/images/shape/line-1.png" alt="shape" />
                    </span>
                </div>
                <Slider
                    {...heroSliderOne}
                    className="container hero-slider-one p-r z-1"
                >

                    {
                        data.map((slide) => (
                            <div
                                key={slide.id}
                                className="row relative w-full !flex lg:!flex-nowrap justify-center lg:justify-start flex-wrap align-items-center">
                                <div className="order-lg-1 bottom-0 bg-white flex lg:block items-center justify-center absolute h-68 py-4 lg:py-0 lg:!bg-transparent lg:relative order-2 w-full lg:max-w-[40vw]">
                                    <div className="hero-content mx-2 lg:mb-40 pr-lg-40">
                                        <h1 className="wow fadeInUp">{slide.name}</h1>
                                        <p className="wow fadeInDown line-clamp-2 h-[2rem]">
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
                                <div className=" order-lg-2 flex-shrink-0 w-full  lg:block flex items-center justify-center order-1">
                                    {/*=== Hero Image ===*/}
                                    <div className="hero-image-box rounded-full overflow-hidden aspect-square max-w-[600px] mb-40 wow fadeInRight">
                                        <Image src={slide?.image?.url}
                                            className="h-full w-full object-cover"
                                            alt="Hero Image"
                                            width={1000}
                                            height={1000}
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