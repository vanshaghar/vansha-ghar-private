import React from 'react';
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
const MenuOld = () => {
    return (
        <Layout>
            <PageBanner pageName={"OldMenu"} title="Old Menu" />
            <ScrollToTop />
            <div className="pt-[200px] md:pt-[300px]">
                <div className="max-w-7xl mx-auto p-5">
                    {MENU.map((item, i) =>
                        <Image src={item} alt={`${i + 1}-menu}`} loading="lazy"
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