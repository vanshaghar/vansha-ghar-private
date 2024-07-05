import React, { useEffect } from 'react';
import Image from 'next/image';
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import ScrollToTop from "../src/components/ScrollToTop";

const MENU = [
    "/assets/menu/1.jpg",
    "/assets/menu/2.jpg",
    "/assets/menu/3.jpg",
    "/assets/menu/4.jpg",
    "/assets/menu/5.jpg",
    "/assets/menu/6.jpg",
    "/assets/menu/7.jpg",
    "/assets/menu/8.jpg",
    "/assets/menu/9.jpg",
    "/assets/menu/10.jpg",
    "/assets/menu/11.jpg",
    "/assets/menu/12.jpg",
];
export async function getStaticProps() {
    const graphqlEndpoint = process.env.NEXT_PUBLIC_API_URL;

    const menu = await fetch(graphqlEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
            'X-Auth-Token': `dsdsdsds`
        },
        body: JSON.stringify({
            query: `
            query {
                MenuImage(id: "66882e7ef7bac65282655644") {
                    menuitems {
                    image {
                        url
                        alt
                    }
                    }
                }
            }
          `
        })
    }).then((response) => response.json());

    return {
        props: {
            menu: menu.data.MenuImage.menuitems.map((item) => {
                return {
                    src: item.image.url,
                    alt: item.image.alt,
                };
            })
        }
    };
}
const MenuOld = ({ menu }) => {
    return (
        <Layout>
            <PageBanner pageName={"OldMenu"} title="Old Menu" />
            <ScrollToTop />
            <div className="pt-[200px] md:pt-[300px]">
                <div className="max-w-7xl mx-auto p-5">
                    {menu.map((item, i) =>
                        <Image src={item.src} alt={item.alt} loading="lazy"
                            width={1200}
                            height={1000}
                            key={i}
                        />
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default MenuOld;