import React, { useEffect } from 'react';
import Image from 'next/image';
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import ScrollToTop from "../src/components/ScrollToTop";

const MENU = [
    "/assets/menu/1.webp",
    "/assets/menu/2.webp",
    "/assets/menu/3.webp",
    "/assets/menu/4.webp",
    "/assets/menu/5.webp",
    "/assets/menu/6.webp",
    "/assets/menu/7.webp",
    "/assets/menu/8.webp",
    "/assets/menu/9.webp",
    "/assets/menu/10.webp",
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
            <PageBanner pageName={"Table Menu"} title="Table Menu" />
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