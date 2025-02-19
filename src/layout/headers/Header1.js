import Link from "next/link";
import Menus from "./Menus";
import { VANSHA_GHAR } from "../../lib/constants/vanshaghar";
import Image from "next/image";
const Header1 = () => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    // href="/#reservation-section" this need to go to home page regardless of the page
    window.location.href = "/#reservation-section";
  };
  return (
    <header className="header-area mt-10 w-full  transparent-header">
      <div className="top-bar hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7">
              <div className="top-left">
                <span className="text">
                  Free delivery for all orders over AED 50. Order your food now!
                </span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="top-right d-flex align-items-center justify-content-lg-end">
                <span className="text">
                  <i className="far fa-envelope" />
                  Subscribe &amp; Get 10% Off
                </span>
                <ul className="social-link">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Header Navigation ===*/}
      <div className="header-navigation navigation-one">
        <div className="nav-overlay" />
        <div className="container-fluid">
          {/*=== Primary Menu ===*/}
          <div className="primary-menu rounded-2xl !px-10">
            {/*=== Site Branding ===*/}
            <div className="site-branding">
              <Link legacyBehavior href="/">
                <div className="p-3">
                  <Image
                    src="/assets/images/logo/logo-white.svg"
                    alt="Site Logo"
                    width={200}
                    height={200}
                  />
                </div>
              </Link>
            </div>
            {/*=== Nav Inner Menu ===*/}
            <div className="nav-inner-menu">
              <div className="nav-menu">
                {/*=== Mobile Logo ===*/}
                <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                  <Link legacyBehavior href="/">
                    <a className="brand-logo">
                      <img
                        src="/assets/images/logo/logo-white.svg"
                        alt="Site Logo"
                      />
                    </a>
                  </Link>
                </div>
                {/*=== Main Menu ===*/}
                <Menus />
                {/*=== Nav Button ===*/}
                <div className="menu-button mt-40 d-xl-none">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn btn-red">
                      Book a Table
                      <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              {/*=== Nav right Item ===*/}
              <div className="nav-right-item d-flex align-items-center">
                <div className="nav-call-button">
                  <span
                    className="flex items-center justify-center gap-2"
                  >
                    <img src="/assets/images/call.png" alt="icon" />
                    <a href={`tel:${VANSHA_GHAR.phoneNumber}`}>
                      {VANSHA_GHAR.phoneNumber.slice(0, 2) + ' ' + VANSHA_GHAR.phoneNumber.slice(2)}
                    </a>
                  </span>
                </div>
                <div className="menu-button d-xl-block d-none">
                  <button
                    onClick={handleButtonClick}
                  >
                    <span className="main-btn btn-red">
                      Order Food Online
                      <i className="fas fa-long-arrow-right" />
                    </span>
                  </button>
                </div>
                <div className="navbar-toggler">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header1;
