import { Fragment, useEffect, useState } from "react";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import BackToTop from "./BackToTop";
import Footer from "./footer/Index";
import Header from "./headers/Index";
import SearchModal from "./SearchModal";
const Layout = ({ header, children, footer }) => {
  useEffect(() => {
    animation();
    // niceSelect();
  }, []);
  const [searchModal, setSearchModal] = useState(false);
  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <SearchModal
        show={searchModal}
        handleClose={() => setSearchModal(false)}
      />
      <Header header={header} openSearchModal={setSearchModal} />
      {children}
      <Footer footer={footer} />
      <BackToTop />
    </Fragment>
  );
};
export default Layout;
