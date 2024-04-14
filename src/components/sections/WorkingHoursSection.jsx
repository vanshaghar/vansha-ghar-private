import React from 'react';
const WORKINF_HOURS_DATA = [
    {
        day: "Monday",
        time: "06am-11pm"
    },
    {
        day: "Tuesday",
        time: "06am-11pm"
    },
    {
        day: "Wednesday",
        time: "06am-11pm"
    },
    {
        day: "Thursday",
        time: "06am-11pm"
    },
    {
        day: "Friday",
        time: "06am-11pm"
    },
    {
        day: "Saturday",
        time: "06am-11pm"
    },
    {
        day: "Sunday",
        time: "06am-11pm"
    }
]
const WorkingHoursSection = () => {
    return (
        <section className="working-bg-section pt-130 pb-110 light-red-bg p-r z-1">
        <div
          className="dot-bg bg_cover"
          style={{ backgroundImage: "url(assets/images/bg/dot-bg.png)" }}
        />
        <div
          className="hours-bg bg_cover"
          style={{ backgroundImage: "url(assets/images/bg/hours-bg-1.jpg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/*=== Working Content Box ===*/}
              <div className="working-content-box wow fadeInLeft">
                <div className="section-title section-title-left mb-50">
                  <span className="sub-title">Working hour</span>
                  <h2>Enjoy Our Foods From 6 Days In a Week</h2>
                </div>
                {
                    WORKINF_HOURS_DATA.map((item, index) => (
                        <div key={item.day} className="single-hour-box mb-1">
                            <h4 className="title">
                                {item.day} <span className="dot-border" />
                                <span className="time">{item.time}</span>
                            </h4>
                        </div>
                    ))
                }
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default WorkingHoursSection;