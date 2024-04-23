import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Skyline from "../src/components/Skyline";
import Layout from "../src/layout/Layout";
import { useEffect, useState } from "react";


export async function getStaticProps() {

    const graphqlEndpoint = process.env.NEXT_PUBLIC_API_URL;
    console.log(graphqlEndpoint);

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
            Menus(limit: 1000) {
              docs {
                name
                id
                description
                price
                category {
                  name
                  value
                }
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
            }
          }
        `
        })
    }).then((response) => response.json());

    const menus = res.data.Menus.docs ?? [];

    const formattedMenu = menus && menus.length ?
        menus.reduce((acc, menu) => {
            const category = menu?.category?.name || 'No Category';
            const existingCategory = acc.find(item => item?.type === category);

            if (existingCategory) {
                existingCategory.items.push({
                    name: menu?.name || '',
                    price: menu?.price || 0,
                    description: menu?.description || '',
                    ingredients: menu?.ingredients || []
                });
            } else {
                acc.push({
                    type: category,
                    link: `#${category.toLowerCase().replace(/\s/g, '-')}`,
                    items: [
                        {
                            name: menu?.name || '',
                            price: menu?.price || 0,
                            description: menu?.description || '',
                            ingredients: menu?.ingredients || []
                        }
                    ]
                });
            }

            return acc;
        }, []) : [];


    const categories = Array.from(new Set(menus.map(menu => menu?.category?.name ?? "No Category"))).map(category => ({
        type: category,
        link: `#${category.toLowerCase().replace(/\s/g, '-')}`,
    }));
    return {
        props: { menus: formattedMenu, categories }
    };
}



const Menu = ({
    menus, categories
}) => {
    const [activeCategory, setActiveCategory] = useState('');

    useEffect(() => {
        console.log({ menus, categories });
    });
    return (
        <Layout>
            <PageBanner pageName={"Menu"} title="Menu" />
            <div className="mx-auto py-10">

                <section
                    className="sticky py-1  top-0 z-50 bg-white "
                >
                    <div className="">
                        <div className="flex flex-nowrap justify-start md:justify-center hide-scrollbar items-center overflow-x-auto">
                            {
                                categories.map((category, index) => (
                                    <div
                                        className={`p-2 m-2 text-center  bg-[#008249] hover:bg-[#11492C]  !text-nowrap text-white rounded-md font-medium cursor-pointer ${activeCategory === category.link.replace("#", "") ? "bg-[#11492C] text-white" : ""}`}
                                        key={categories.type}
                                    >
                                        <Link href={category.link}
                                        >
                                            <span
                                                className="text-white !text-nowrap w-full"
                                            >

                                                {category.type}
                                            </span>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section
                    className=" rounded-lg  my-4"
                >
                    <div className="w-screen relative">
                        {
                            menus.map((category, index) => (
                                <div
                                    key={category.type}
                                    className={`w-full my-[200px] ${index === 0 && "mt-5"}`}
                                    id={category.link?.replace("#", "")}
                                >
                                    <h2 className="text-4xl relative hidden md:block w-[400px] mx-auto text-center p-3 font-bold mb-1" >
                                        {category.type}
                                        <span className="absolute top-1/2 left-0 w-1/4 h-[2px] bg-gray-900 transform -translate-y-1/2" />
                                        <span className="absolute top-1/2 right-0 w-1/4 h-[2px] bg-gray-900 transform -translate-y-1/2" />
                                    </h2>
                                    <div className="relative md:hidden w-screen h-[250px] bg-slate-500 flex mb-10">
                                        <div className="bg-[#11492C] relative w-1/3 flex items-center justify-center">
                                            <div className="rotate-[-90deg] transform  w-[220px] max-w-[250px]  text-[42px]  text-white p-2  text-center mb-2 absolute left-1/2 -translate-x-1/2 font-cabinet font-bold flex justify-start items-center"
                                                style={{
                                                    lineHeight: "1",
                                                }}
                                            >{category.type}</div>

                                        </div>
                                        <div className="h-full w-full  relative flex items-center justify-center overflow-hidden  rounded-lg"
                                        >
                                            <img src="/assets/images/hero/hero-1.png" alt="seafood" className="object-contain p-1 w-full h-full" />
                                        </div>
                                    </div>
                                    <div className="grid px-3 grid-cols-1 gap-1 !gap-x-3 md:grid-cols-2 place-items-center place-content-center">
                                        {
                                            category.items.map((item, index) => (
                                                <div
                                                    key={item.name}
                                                    className="flex w-full flex-col  items-start bg-white rounded-lg md:flex-col md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                                                    <div className="w-full flex gap-4 flex-row  justify-between relative mb-4">
                                                        {/* dashed underline below this block */}
                                                        <div
                                                            className="absolute bottom-0 left-0 w-full h-0 border-b-2 border-dashed border-gray-300"
                                                        />

                                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                                            {item.name}
                                                        </h5>

                                                        <span className="text-xl font-bold flex-shrink-0 text-gray-900">
                                                            AED {item.price}
                                                        </span>


                                                    </div>
                                                    <p className="mb-3 font-sans italic text-[12px] text-gray-700 line-clamp-2">
                                                        {item.ingredients}
                                                    </p>
                                                    <p className="mb-3 font-sans text-sm text-gray-700 line-clamp-2 hidden lg:block">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </section>
            </div >

            <Skyline />
        </Layout >
    );
};

export default Menu;
