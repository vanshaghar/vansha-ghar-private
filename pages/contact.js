import { useState } from "react";
import PageBanner from "../src/components/PageBanner";
import Skyline from "../src/components/Skyline";
import Layout from "../src/layout/Layout";
import { VANSHA_GHAR } from "../src/lib/constants/vanshaghar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <Layout>
      <PageBanner pageName={"Contact Us"} title="Contact" />
      <section className="contact-section py-30">
        <div className="container mt-50">
          <div className="contact-info-wrapper pt-30 pb-30 wow fadeInUp">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div className="section-title text-center mb-50">
                  <span className="sub-title">Contact Us</span>
                  <h2>Get In Touch For More Info</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-info-box mb-10">
                  <div className="icon">
                    <img src="/assets/images/icon/icon-7.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Location</span>
                    <p>
                      {VANSHA_GHAR.address}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-info-box mb-10">
                  <div className="icon">
                    <img src="/assets/images/icon/icon-8.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Email Address</span>
                    <p>
                      <a
                        className="underline"
                        href={`mailto:${VANSHA_GHAR.email}`}>{VANSHA_GHAR.email}</a>
                    </p>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-info-box mb-10">
                  <div className="icon">
                    <img src="/assets/images/icon/icon-9.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Contact Us</span>
                    <p>
                      Whatsapp :{" "}
                      <a
                        className="underline"
                        href={VANSHA_GHAR.whatsapp()}>
                        {VANSHA_GHAR.whatsappNumber}
                      </a>
                    </p>
                    <p>
                      Phone :{" "}<a
                        className="underline"
                        href={`tel:${VANSHA_GHAR.phoneNumber}`}>{VANSHA_GHAR.phoneNumber}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-wrapper-one my-10 pt-10 pb-20 wow fadeInUp">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-12">
                <div className="section-title text-center mb-10">
                  <span className="sub-title">
                    <span className="title-bg">Contact</span>
                  </span>
                  <h2>Send Us Message</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form onSubmit={handleSubmit} className="contact-form-one">
                  <div className="row justify-content-center">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          placeholder="Write Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <button type="submit" className="main-btn btn-red">
                          Send us message
                          <i className="far fa-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-page-map wow fadeInUp">
        <div className="map-box">
          <iframe src="https://maps.google.com/maps?q=vansha%20ghar%20restaurant%20abu%20dhabi&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy" allowFullScreen title="Vansha Ghar Restaurant Location" />
        </div>
      </section>
      <Skyline />
    </Layout>
  );
};

export default Contact;
