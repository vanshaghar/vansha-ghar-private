import Link from "next/link";

const PageBanner = ({ title, pageName }) => {
  return (
    <section
      className="page-banner light-red-bg p-r z-1 bg_cover"
      style={{ backgroundImage: "url(https://vanshaghar.s3.me-central-1.amazonaws.com/payload/vansha-ghar-items.jpeg)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="page-banner-content text-center wow fadeInDown">
              <h1 className="page-title">{title ? title : pageName}</h1>
              <ul className="breadcrumb-link text-white">
                <li>
                  <Link legacyBehavior href="/">
                    Home
                  </Link>
                </li>
                <li className="active">{pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
