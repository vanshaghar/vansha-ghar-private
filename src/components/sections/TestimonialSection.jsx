import React from 'react';
import { testimonialSliderOne } from "../../sliderProps";
import Slider from "react-slick";
export const DATA = [
  {
    "review": "Absolutely loved the momos and the Thakali set at Vansha Ghar! The flavors are authentic and remind me of my trip to Nepal. The service is excellent, making the whole dining experience delightful.",
    "name": "Rohan Sharma",
    "date": "2024-05-23",
    "intials": "RS",
    "avatar": "https://avatar.iran.liara.run/public/3"
  },
  {
    "review": "Vansha Ghar is a gem in Abu Dhabi for Nepali cuisine. The sekuwa was perfectly seasoned and cooked just right. The staff are very friendly and make you feel at home.",
    "name": "Anjali Mehta",
    "date": "2024-05-15",
    "intials": "AM",
    "avatar": "https://avatar.iran.liara.run/public/70"
  },
  {
    "review": "I had the best dining experience at Vansha Ghar! The momos were to die for, and the Thakali set was a hearty meal. Highly recommend to anyone looking for great Nepali food.",
    "name": "Rahul Thapa",
    "date": "2024-04-10",
    "intials": "RT",
    "avatar": "https://avatar.iran.liara.run/public/6"
  },
  {
    "review": "Every dish at Vansha Ghar tells a story of Nepal. The ingredients are fresh, and the flavors are incredible. It's definitely my go-to place for Nepali food in Abu Dhabi.",
    "name": "Priya Koirala",
    "date": "2024-05-01",
    "intials": "PK",
    "avatar": "https://avatar.iran.liara.run/public/74"
  },
  {
    "review": "The authenticity of the Nepali dishes at Vansha Ghar is unmatched! I am a regular here because of their consistent quality and excellent service.",
    "name": "Amit Joshi",
    "date": "2024-03-22",
    "intials": "AJ",
    "avatar": "https://avatar.iran.liara.run/public/1"
  },
  {
    "review": "Vansha Ghar offers a cozy atmosphere with delicious Nepali food. The momos are a must-try! The staff are very attentive and ensure a pleasant dining experience.",
    "name": "Sneha Patel",
    "date": "2024-05-20",
    "intials": "SP",
    "avatar": "https://avatar.iran.liara.run/public/77"
  },
  {
    "review": "If you want to try real Nepali cuisine, Vansha Ghar in Abu Dhabi is the place to go. Their Thakali set is absolutely delicious and filling!",
    "name": "Ravi Shrestha",
    "date": "2024-04-29",
    "intials": "RS",
    "avatar": "https://avatar.iran.liara.run/public/4"
  },
  {
    "review": "Great food, excellent service, and a warm ambiance. Vansha Ghar does Nepali cuisine justice. It's been a wonderful find for me and my family.",
    "name": "Meera Desai",
    "date": "2024-05-05",
    "intials": "MD",
    "avatar": "https://avatar.iran.liara.run/public/6"
  },
  {
    "review": "The sekuwa and momos at Vansha Ghar are simply amazing. The spices they use are authentic and give a real taste of Nepal. Highly recommend!",
    "name": "Kiran Gupta",
    "date": "2024-02-17",
    "intials": "KG",
    "avatar": "https://avatar.iran.liara.run/public/52"
  },
  {
    "review": "From the moment you step in, Vansha Ghar offers a welcoming atmosphere with a fantastic menu. The Thakali sets are my favorite and a great way to explore Nepali cuisine.",
    "name": "Arjun Rana",
    "date": "2024-01-30",
    "intials": "AR",
    "avatar": "https://avatar.iran.liara.run/public/8"
  }
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section-one dark-black-bg overflow-hidden p-r z-1 pt-120 pb-120">
      <div className="shape line-shape-one">
        <span>
          <img src="/assets/images/shape/line-1.png" alt="Shape" />
        </span>
      </div>
      {/* <div className="max-w-[600px] absolute !right-[-100px] bottom-0">
        <span>
          <img src="https://vanshaghar.s3.me-central-1.amazonaws.com/payload/images/paratha.webp"
            className='img-fluid w-full'
            alt="" />
        </span>
      </div> */}
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
                  src="https://avatar.iran.liara.run/public/1"
                  className="testimonial-img-one"
                  alt="Testimonial Image"
                />
                <img
                  src="https://avatar.iran.liara.run/public/34"
                  className="testimonial-img-two w-20"
                  alt="Testimonial Image"
                />
                <img
                  src="https://avatar.iran.liara.run/public/6"
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
                  {DATA.map((testimonial, index) => (
                    <div className="single-testimonial-one" key={index}>
                      <div className="testimonial-inner-content">
                        <p
                          className='line-clamp-3'
                        >{testimonial.review}</p>
                        <div className="author-quote-box d-flex justify-content-between">
                          <div className="author-title-thumb d-flex">
                            <div className="author-thumb flex items-center justify-center border-gray-100 !border-1">
                              <img src={testimonial.avatar} alt="Testimonial Author" />
                            </div>
                            <div className="author-title">
                              <h3 className="title">{testimonial.name}</h3>
                              <p className="position">{new Date(testimonial.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                            </div>
                          </div>
                          <div className="quote">
                            <i className="flaticon-right-quote" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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