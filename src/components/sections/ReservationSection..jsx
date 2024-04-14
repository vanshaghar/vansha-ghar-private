import React from 'react';
import { ReservationsFromLg12 } from "../../components/ReservationsFrom";
const ReservationSection = () => {
    return (
        <section className="reservation-line-section p-r z-1 pt-130 pb-80">
        <div className="line-shape line-shape-one">
          <span>
            <img src="assets/images/shape/line-1.png" alt="Shape" />
          </span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*=== Reservation Image Box ===*/}
              <div className="reservation-image-box wow fadeInLeft mb-50 mb-20">
                <img
                  src="assets/images/contact/contact-1.jpg"
                  alt="Reservation Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Reservation Content Box ===*/}
              <div className="reservation-content-box content-box-gap wow fadeInRight mb-50 pl-lg-70">
                <div className="section-title section-title-left mb-20">
                  <span className="sub-title">Booking table</span>
                  <h2>Make A Reservations</h2>
                </div>
                <p>
                  Sit amet consectetur adipiscing elitsue risus mauris
                  adipiscing phasellus aene ante orcirat
                </p>
                {/*=== Reservation Form ===*/}
                <div className="reservation-style-one">
                  <ReservationsFromLg12 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ReservationSection;