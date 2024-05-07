import React from 'react';
import { ReservationsFromLg12 } from "../../components/ReservationsFrom";
const ReservationSection = () => {
  return (
    <section className="reservation-line-section p-r z-1 pt-130 pb-40">
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
              <div className="grid grid-cols-2 gap-4">
                {
                  [1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div
                      key={item}
                      className="border cursor-pointer bg-white hover:shadow-sm border-gray-300 rounded-md p-4 flex flex-col justify-center items-center">
                      Zomato
                    </div>
                  ))
                }


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;