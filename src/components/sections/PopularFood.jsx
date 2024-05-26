import React from 'react';
import Link from 'next/link';

const POPULAR_FOODS_MENU = [
  {
    title: 'Momo',
    link: '/menu#steam-momo',
    icon: 'https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar/icons/momo.webp'
  },
  {
    title: 'Thakali',
    link: '/menu#thakali-set',
    icon: 'https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar/icons/thakali-set.webp'
  },
  {
    title: 'Thupka',
    link: '/menu#chowmein/thukpa',
    icon: 'https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar/icons/thupka.webp'
  },
  {
    title: 'Sekuwa',
    link: '/menu#sekuwa',
    icon: 'https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar/icons/sekuwa.webp'
  },
  {
    title: 'Khaja Set',
    link: '/menu#khaja-set',
    icon: 'https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar/icons/khaja-set.webp'
  },
  {
    title: 'Chef\'s Special',
    link: `/menu#chef-s-special`,
    icon: 'https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar/icons/chef-special.webp'
  }
];
const SPECIAL_FOODS_MENU_LINK = '/menu?category=special';

const PopularFood = () => {
  return (
    <section
      className="category-bg-section flex items-center justify-center pt-55 pb-55 p-r z-1"
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
            POPULAR_FOODS_MENU.map((food, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                {/*=== Single Category Item ===*/}
                <div className="single-category-item mb-30 wow fadeInUp">
                  <div className="icon rounded-full overflow-clip">
                    <img src={food.icon} alt="thumb icon" />
                  </div>

                  <div className="content d-flex">
                    <h3 className="title">
                      <Link legacyBehavior href={food.link}>
                        <a href={food.link}>{food.title}</a>
                      </Link>
                    </h3>
                    <Link legacyBehavior href={food.link}>
                      <a href={food.link} className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }

        </div>

      </div>
    </section>
  );
};

export default PopularFood;