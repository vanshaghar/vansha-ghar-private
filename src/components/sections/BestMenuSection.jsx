import React from 'react';
import Link from 'next/link';

const BEST_MENU_DATA = [
  {
    title: "Hamburger",
    price: "AED 25",
    description: "Roasted langoustine, consommé",
    image: "/assets/images/menu/thumb-1.png"
  },
  {
    title: "Pizza",
    price: "AED 63",
    description: "Roasted langoustine, consommé",
    image: "/assets/images/menu/thumb-2.png"
  },
  {
    title: "Baked Chicken Wings",
    price: "AED 199",
    description: "Roasted langoustine, consommé",
    image: "/assets/images/menu/thumb-3.png"
  },
  {
    title: "Seafood Pizza",
    price: "AED 352",
    description: "Roasted langoustine, consommé",
    image: "/assets/images/menu/thumb-4.png"
  }
];


const BestMenuSection = ({
  menus
}) => {
  React.useEffect(() => {
    console.log({
      "name": "Chicken Sizzler",
      "id": "661921f84851cffd6303d344",
      "description": "A sizzling hot platter featuring grilled or fried chicken served with sautéed vegetables, a choice of sauce, and often accompanied by rice, fries, or garlic bread, creating a flavorful and visually appealing dish served hot and sizzling on a cast iron plate.",
      "price": 30,
      "foodType": [
        {
          "type": "Non-veg",
          "value": "non-veg"
        }
      ],
      "image": null,
      "ingredients": "Grilled Chicken, Sautéed Vegetables (such as bell peppers, onions, carrots), French Fries or Mashed Potatoes, Sizzler Plate, Sauce or Gravy"
    });
  }, []);
  return (
    <section className="menu-section pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-10">
            {/*=== Section Title ===*/}
            <div className="section-title text-center mb-50 wow fadeInDown">
              <span className="sub-title">Chef's Special</span>
              <h2>Choose Your Best Food</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/*=== Menu Image Box ===*/}
            <div className="menu-image-box mb-50 pl-lg-30 wow fadeInLeft">
              <img
                src="https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar/images/butter-chicken.jpg"
                alt="Menu Image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            {/*=== Single Content Box ===*/}
            <div className="menu-content-box mb-50">
              {/*=== Single Menu Item ===*/}
              {
                menus.map((item, index) => (
                  <div key={index} className="single-menu-item mb-30 wow fadeInUp">
                    <div className="thumb">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="text">
                      <h3 className="item-title-price">
                        <Link legacyBehavior href="#">
                          <a className="item-title">{item.name}</a>
                        </Link>
                        <span className="dot-border" />
                        <span className="price"> {" "}{item.price} AED</span>
                      </h3>
                      <p
                        className='line-clamp-2'
                      >{item.ingredients}</p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="main-btn  btn-red cursor-pointer">Order Now</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestMenuSection;