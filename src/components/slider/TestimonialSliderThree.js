import Slider from "react-slick";
import { testimonialSliderThree } from "../../sliderProps";
import Image from "next/image";
import { Component, Fragment } from "react";
const DATA = [
  {
    "review": "Absolutely loved the momos and the Thakali set at Vansha Ghar! The flavors are authentic and remind me of my trip to Nepal. The service is excellent, making the whole dining experience delightful.",
    "name": "Aarav Singh",
    "date": "2024-05-23",
    "intials": "AS",
    "avatar": "https://avatar.iran.liara.run/public/3",
    "feeling": "Mind Blowing"
  },
  {
    "review": "Vansha Ghar is a gem in Abu Dhabi for Nepali cuisine. The sekuwa was perfectly seasoned and cooked just right. The staff are very friendly and make you feel at home.",
    "name": "Fatima Al Hashimi",
    "date": "2024-05-15",
    "intials": "FH",
    "avatar": "https://avatar.iran.liara.run/public/70",
    "feeling": "Delicious"
  },
  {
    "review": "I had the best dining experience at Vansha Ghar! The momos were to die for, and the Thakali set was a hearty meal. Highly recommend to anyone looking for great Nepali food.",
    "name": "John Doe",
    "date": "2024-04-10",
    "intials": "JD",
    "avatar": "https://avatar.iran.liara.run/public/6",
    "feeling": "Yummy"
  },
  {
    "review": "Every dish at Vansha Ghar tells a story of Nepal. The ingredients are fresh, and the flavors are incredible. It's definitely my go-to place for Nepali food in Abu Dhabi.",
    "name": "Sara Al Maktoum",
    "date": "2024-05-01",
    "intials": "SM",
    "avatar": "https://avatar.iran.liara.run/public/74",
    "feeling": "Incredible"
  },
  {
    "review": "The authenticity of the Nepali dishes at Vansha Ghar is unmatched! I am a regular here because of their consistent quality and excellent service.",
    "name": "Mohammed Al Bahrani",
    "date": "2024-03-22",
    "intials": "MB",
    "avatar": "https://avatar.iran.liara.run/public/1",
    "feeling": "Unmatched"
  },
  {
    "review": "Vansha Ghar offers a cozy atmosphere with delicious Nepali food. The momos are a must-try! The staff are very attentive and ensure a pleasant dining experience.",
    "name": "Emily Zhang",
    "date": "2024-05-20",
    "intials": "EZ",
    "avatar": "https://avatar.iran.liara.run/public/77",
    "feeling": "Cozy"
  },
  {
    "review": "If you want to try real Nepali cuisine, Vansha Ghar in Abu Dhabi is the place to go. Their Thakali set is absolutely delicious and filling!",
    "name": "Rashid Al Falasi",
    "date": "2024-04-29",
    "intials": "RF",
    "avatar": "https://avatar.iran.liara.run/public/4",
    "feeling": "Filling"
  },
  {
    "review": "Great food, excellent service, and a warm ambiance. Vansha Ghar does Nepali cuisine justice. It's been a wonderful find for me and my family.",
    "name": "Chen Wei",
    "date": "2024-05-05",
    "intials": "CW",
    "avatar": "https://avatar.iran.liara.run/public/6",
    "feeling": "Wonderful"
  },
  {
    "review": "The sekuwa and momos at Vansha Ghar are simply amazing. The spices they use are authentic and give a real taste of Nepal. Highly recommend!",
    "name": "Lisa Green",
    "date": "2024-02-17",
    "intials": "LG",
    "avatar": "https://avatar.iran.liara.run/public/52",
    "feeling": "Amazing"
  },
  {
    "review": "From the moment you step in, Vansha Ghar offers a welcoming atmosphere with a fantastic menu. The Thakali sets are my favorite and a great way to explore Nepali cuisine.",
    "name": "Ali Al Khoori",
    "date": "2024-01-30",
    "intials": "AK",
    "avatar": "https://avatar.iran.liara.run/public/8",
    "feeling": "Welcoming"
  }
];
export class TestimonialSliderThree extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <Fragment>
        <div className="row align-items-end">
          <div className="col-md-8">
            <div className="section-title section-title-left mb-50 wow fadeInLeft">
              <span className="sub-title">Foods reviews</span>
              <h2>Global Customer Feedback</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-arrows wow fadeInRight mb-10">
              <div className="prev slick-arrow" onClick={this.previous}>
                <i className="far fa-arrow-left" />
              </div>
              <div className="next slick-arrow" onClick={this.next}>
                <i className="far fa-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <Slider
          ref={(c) => (this.slider = c)}
          {...testimonialSliderThree}
          className="testimonial-slider-three wow fadeInUp"
        >
          {DATA.map((item, index) => (
            <div className="single-testimonial-three" key={index}>
              <div className="testimonial-inner-content">
                <div className="rating-quote-box d-flex align-items-center justify-content-between">
                  <div className="ratings-box">
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
                    </ul>
                  </div>
                  <div className="quote">
                    <i className="flaticon-right-quote" />
                  </div>
                </div>
                <h3>
                  "{item.feeling}"
                </h3>
                <p
                  className="text-left"
                >
                  {item.review}
                </p>
                <div className="author-title-thumb">
                  <div className="author-thumb">
                    <img
                      src={item.avatar}
                      alt="Author Thumb"
                    />
                  </div>
                  <div className="author-title">
                    <h3 className="title ">
                      {item.name}
                    </h3>
                    <p className="position">
                      {new Date(item.date).toDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}



        </Slider>
      </Fragment>
    );
  }
}

export default TestimonialSliderThree;
