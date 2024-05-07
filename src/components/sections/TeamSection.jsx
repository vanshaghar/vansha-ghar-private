import React from 'react';
import Link from 'next/link';
const TeamSection = () => {
  return (
    <section className="chefs-bg-section light-red-bg pt-100 pb-100 bg_cover p-r z-1">
      <div
        className="dot-bg bg_cover"
        style={{ backgroundImage: "url(assets/images/bg/dot-bg.png)" }}
      />
      <div className="container">
        <div className="row w-full align-items-center">
          <div className="col-xl-4 col-lg-12">
            {/*=== Chef Content Box ===*/}
            <div className="chef-content-box content-box-gap mb-30 pr-lg-30 wow fadeInLeft">
              <div className="section-title section-title-left mb-30">
                <span className="sub-title">Vansha Ghar Family</span>
                <h2>Meet our Passionate Team</h2>
              </div>
              <ul className="check-style-one">
                <li>A Symphony of Culinary Experts and Hospitality Maestros</li>
                <li>
                  Crafters of Your Exceptional Dining Moments
                </li>
                <li>
                  United in Crafting Unforgettable Gastronomic Journeys
                </li>
              </ul>
              <p>
                At the core of our restaurant lies our dedicated team — a blend of chefs, sommeliers, and service staff who bring to life the essence of our cuisine and the spirit of our hospitality. Their combined expertise and passion are poured into every dish, every recommendation, every interaction. Together, they create more than just meals; they create experiences that linger on the palate and in memory.
              </p>

            </div>
          </div>
          <div className="col-xl-8 col-lg-12">
            <img src="/assets/images/partners/staff.JPG"
              className=" w-full h-full wow fadeInRight"
              alt="groupphoto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;