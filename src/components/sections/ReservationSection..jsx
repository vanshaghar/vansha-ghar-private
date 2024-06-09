import React from 'react';
import Image from 'next/image';
const DATA = [
  {
    partner: "Smile",
    image: "https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar/Smiles_logo_EN.svg",
    link: "https://smilesuae.ae/Smiles-Portal-1.0.0",
    bg: "#fff"
  },
  {
    partner: "Talabat",
    image: "https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar/images/Talabat-logo.webp",
    link: "https://www.talabat.com/uae/vansha-ghar-restaurant",
    bg: "#F67005"
  }, {
    partner: "Noon",
    image: "https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar/images/noon-food-logo.webp",
    link: "https://food.noon.com/outlet/VNSHGHDUO6",
    bg: "#FCE719"
  }, {
    partner: "Deliveroo",
    image: "https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar/images/Deliveroo_Logo.webp",
    link: "https://deliveroo.ae/menu/abu-dhabi/al-danah/vansha-ghar-restaurant",
    bg: "#41CBBB"
  }
];

const ReservationSection = () => {

  const handleOnClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <section
      id="reservation-section"
      className="reservation-line-section p-r z-1 pt-130 pb-40">
      <div className="line-shape line-shape-one">
        <span>
          <img src="/assets/images/shape/line-1.png" alt="Shape" />
        </span>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/*=== Reservation Image Box ===*/}
            <div className="reservation-image-box wow fadeInLeft mb-50 mb-20 ">
              <img
                src="/assets/images/partners/delivery.png"
                alt="Reservation Image"
                className='img-fluid w-full object-cover max-w-[500px]'
              />
            </div>
          </div>
          <div className="col-lg-6">
            {/*=== Reservation Content Box ===*/}
            <div className="reservation-content-box content-box-gap wow fadeInRight mb-50 pl-lg-70">
              <div className="section-title section-title-left mb-20">
                <span className="sub-title">Delivery Partners</span>
                <h2>
                  Order Food Online From Our Partners
                </h2>
              </div>

              {/*=== Reservation Form ===*/}
              <div className="grid grid-cols-2 place-content-center justify-items-center gap-4">
                {/* Zomato */}
                <button
                  onClick={() => handleOnClick(DATA[0].link)}
                  key={DATA[0].partner}
                  className={`flex items-center cursor-pointer relative  justify-center w-full max-w-[250px] h-[100px] rounded-md`}
                  style={{ backgroundColor: DATA[0].bg }}
                >
                  <Image
                    width={250}
                    height={100}
                    src={DATA[0].image}
                    alt={DATA[0].partner}
                    className='img-fluid w-full max-h-[100px] h-auto object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '

                  />
                </button>
                {/* Talabat */}
                <button
                  onClick={() => handleOnClick(DATA[1].link)}
                  key={DATA[1].partner}
                  className={`flex items-center cursor-pointer relative  justify-center w-full max-w-[250px] h-[100px] rounded-md`}
                  style={{ backgroundColor: DATA[1].bg }}
                >
                  <Image
                    width={250}
                    height={100}
                    src={DATA[1].image}
                    alt={DATA[1].partner}
                    className='img-fluid w-full max-h-[100px] h-auto object-contain  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '
                  />
                </button>
                {/* Noon */}
                <button
                  onClick={() => handleOnClick(DATA[2].link)}
                  key={DATA[2].partner}
                  className={`flex items-center cursor-pointer relative  justify-center w-full max-w-[250px] h-[100px] rounded-md`}
                  style={{ backgroundColor: DATA[2].bg }}
                >
                  <Image
                    width={250}
                    height={100}
                    src={DATA[2].image}
                    alt={DATA[2].partner}
                    className='img-fluid w-full max-h-[100px] h-auto object-contain p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '
                  />
                </button>
                {/* Deliveroo */}
                <button
                  onClick={() => handleOnClick(DATA[3].link)}
                  key={DATA[3].partner}
                  className={`flex items-center cursor-pointer relative  justify-center w-full max-w-[250px] h-[100px] rounded-md`}
                  style={{ backgroundColor: DATA[3].bg }}
                >
                  <Image
                    width={250}
                    height={100}
                    src={DATA[3].image}
                    alt={DATA[3].partner}
                    className='img-fluid w-full max-h-[100px] h-auto object-contain p-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '
                  />
                </button>



              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;