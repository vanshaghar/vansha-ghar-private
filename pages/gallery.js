import dynamic from "next/dynamic";
import PageBanner from "../src/components/PageBanner";
import Skyline from "../src/components/Skyline";
import Layout from "../src/layout/Layout";
const GalleryIsotope = dynamic(
  () => import("../src/components/GalleryIsotope"),
  {
    ssr: false,
  }
);
const Gallery = () => {
  return (
    <Layout>
      <PageBanner pageName={"Fastfood"} title="Our Gallery" />
      <section className="gallery-section pt-120 pb-90" id="gallery-filter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title">photo gallery</span>
                <h2>Look Inside Photo Gallery</h2>
              </div>
            </div>
          </div>
          <GalleryIsotope />
        </div>
      </section>{" "}
      <Skyline />
    </Layout>
  );
};
export default Gallery;
