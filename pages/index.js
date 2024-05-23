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

export async function getStaticProps() {

  const graphqlEndpoint = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(graphqlEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      'X-Auth-Token': `dsdsdsds`
    },
    body: JSON.stringify({
      query: `
        query {
          OrganizedMenu(id:"662e03ce152dafe3ff455b3c") {
            id
            name
            category {
              id
              name
              value
            }
            menus {
              menu {
                name
                id
                description
                price
                foodType {
                  type
                  value
                }
                image {
                  url
                  alt
                }
                ingredients
              }
              index
            }
          }
        }
      `
    })
  }).then((response) => response.json());
  const featured = await fetch(graphqlEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      'X-Auth-Token': `dsdsdsds`
    },
    body: JSON.stringify({
      query: `
        query {
          Featureds {
            docs {
              id
              name
              description
              image {
                alt
                url
              }
            }
          }
        }
      `
    })
  }).then((response) => response.json());

  const menus = res.data?.OrganizedMenu?.menus?.slice(0, 4).map(i => i.menu) ?? [];
  const featureds = featured.data?.Featureds?.docs ?? [];
  return {
    props: { menus, featureds }
  };
}
const Index = ({ menus, featureds }) => {
  return (
    <Layout header={1} footer={1}>
      <HeroSection
        data={featureds}
      />
      <PopularFood />
      <AboutSection />
      <BestMenuSection menus={menus} />
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
