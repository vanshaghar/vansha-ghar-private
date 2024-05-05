import React from 'react';
import Link from 'next/link';

const POPULAR_FOODS_MENU = [
  {
    title: 'Momo',
    link: '/menu',
    icon: 'assets/images/icon/icon-1.png'
  },
  {
    title: 'Thakali',
    link: '#',
    icon: 'assets/images/icon/icon-2.png'
  },
  {
    title: 'Thupka',
    link: '#',
    icon: 'assets/images/icon/icon-3.png'
  },
  {
    title: 'Sekuwa',
    link: '#',
    icon: 'assets/images/icon/icon-4.png'
  },
  {
    title: 'Khaja Set',
    link: '#',
    icon: 'assets/images/icon/icon-5.png'
  }
];
const SPECIAL_FOODS_MENU_LINK = '/menu?category=special';

const PopularFood = () => {
  return (
    <section
      className="category-bg-section pt-70 pb-80 p-r z-1"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-10">
            {/*=== Section Title ===*/}
            <div className="section-title text-center text-white mb-50 wow fadeInDown">
              <span className="sub-title">Our Popular Food</span>
              <h2>Best Category Foods Menu</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {
            POPULAR_FOODS_MENU.map((food
            ) => (
              <div className="col-lg-4 col-md-6 col-sm-12">
                {/*=== Single Category Item ===*/}
                <div className="single-category-item mb-30 wow fadeInUp">
                  <div className="icon">
                    <img src={food.icon} alt="thumb icon" />
                  </div>
                  <div className="content d-flex">
                    <h3 className="title">
                      <Link legacyBehavior href={food.link}
                      >
                        <a>{food.title}</a>
                      </Link>
                    </h3>
                    <Link legacyBehavior href={food.link}
                    >
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            {/*=== Quote Box ===*/}
            <div className="quote-box text-center text-white wow fadeInUp">
              <p>
                Need any Special Food?{" "}
                <Link legacyBehavior href={SPECIAL_FOODS_MENU_LINK}>
                  <a>Order Now</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularFood;