import React from "react";
import Slider from "react-slick";
import { heroSliderOne } from "../../sliderProps";
import Link from "next/link";
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
                                className="row !flex lg:!flex-nowrap flex-wrap align-items-center">
                                <div className="order-lg-1 order-2 max-w-[51rem]">
                                    <div className="hero-content mb-40 pr-lg-40">
                                        <h1 className="wow fadeInUp">{slide.name}</h1>
                                        <p className="wow fadeInDown">
                                            {slide.description}
                                        </p>
                                        <div className="hero-button wow fadeInUp">
                                            <span>
                                                <img src="/assets/images/down-arrow.png" alt="" />
                                            </span>
                                            <Link legacyBehavior href={`https://api.whatsapp.com/send/?phone=971524729073&text=Hello+I+want+to+order+${slide.name}&type=phone_number&app_absent=0`}
                                            >
                                                <a className="main-btn btn-red">
                                                    order now
                                                    <i className="far fa-arrow-right" />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className=" order-lg-2 order-1">
                                    {/*=== Hero Image ===*/}
                                    <div className="hero-image-box rounded-full overflow-hidden aspect-square max-w-[600px] mb-40 wow fadeInRight">
                                        <img src={slide?.image?.url}
                                            className="h-full w-full object-cover"
                                            alt="Hero Image" />
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