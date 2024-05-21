import Link from "next/link";
import Slider from "react-slick";

import Layout from "../src/layout/Layout";
import HeroSection from "../src/components/sections/HeroSection";
import PopularFood from "../src/components/sections/PopularFood";
import AboutSection from "../src/components/sections/AboutSection";
import BestMenuSection from "../src/components/sections/BestMenuSection";
import TeamSection from "../src/components/sections/TeamSection";
import VideoSection from "../src/components/sections/VideoSection";
import WorkingHoursSection from "../src/components/sections/WorkingHoursSection";
import ReservationSection from "../src/components/sections/ReservationSection.";
import TestimonialSection from "../src/components/sections/TestimonialSection";
import InstagramGallerySection from "../src/components/sections/InstagramgallerySection";
import Skyline from "../src/components/Skyline";

const getStaticProps = async () => {
  const graphqlEndpoint = process.env.NEXT_PUBLIC_API_URL;
  
};
const Index = () => {
  return (
    <Layout header={1} footer={1}>
      <HeroSection />
      <PopularFood />
      <AboutSection />
      <BestMenuSection />
      <TeamSection />
      <VideoSection />
      <WorkingHoursSection />
      <ReservationSection />
      <TestimonialSection />
      <InstagramGallerySection />
      <Skyline />
    </Layout>
  );
};
export default Index;
