import PageBanner from "../src/components/PageBanner";
import Skyline from "../src/components/Skyline";
import Layout from "../src/layout/Layout";
import { useState, useEffect, useRef } from "react";
import ScrollToTop from "../src/components/ScrollToTop";
import { CloseButton } from 'react-bootstrap';
import Image from "next/image";

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
            OrganizedMenus(limit: 100) {
                docs {
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
          }
        `
        })
    }).then((response) => response.json());

    const menus = res.data?.OrganizedMenus?.docs ?? [];
    function formatMenu(data) {
        const formattedData = data.sort((a, b) => {
            if (a.category.index > b.category.index) return 1;
            if (a.category.index < b.category.index) return -1;
            return 0;
        }).map(menu => {
            const { menus, ...rest } = menu;
            return {
                ...rest,
                category: {
                    ...menu.category,
                    link: `#${menu.category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`
                },
                menus: menus.sort((a, b) => {
                    if (a.index > b.index) return 1;
                    if (a.index < b.index) return -1;
                    return 0;
                }).map(menu => menu.menu)
            };
        });

        return formattedData;
    }
    const formattedMenu = formatMenu(menus);

    const categories = Array.from(new Set(menus.map(menu => menu?.category?.name ?? "No Category"))).map(category => ({
        type: category,
        link: `#${category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`,
    }));
    return {
        props: { menus: formattedMenu, categories }
    };
}

const EyeIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" width="20px" height="20px" viewBox="0 0 442.04 442.04" xmlSpace="preserve">
            <g>
                <g>
                    <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203    c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219    c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367    c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021    c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212    c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071    c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z" />
                </g>
                <g>
                    <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188    c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993    c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5    s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z" />
                </g>
                <g>
                    <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z" />
                </g>
            </g>
        </svg>
    );
};

const Dialog = ({ image, onClose }) => {
    return (
        <div
            className="fixed inset-0  z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="relative m-4 bg-white max-w-[500px] w-full rounded-lg p-4"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute -top-2 -right-2 text-gray-700"
                    onClick={onClose}
                >
                    <span className="text-red-700 bg-white w-10 flex items-center justify-center h-10 rounded-full cursor-pointer text-4xl" >
                        <CloseButton />
                    </span>
                </button>
                <Image
                    width={500}
                    height={500}
                    src={image.url} alt={image.alt} className="max-w-[500px] w-full  h-auto" />
            </div>
        </div>
    );
};

const Menu = ({
    menus, categories
}) => {
    const [activeCategory, setActiveCategory] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMenus, setFilteredMenus] = useState(menus);

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredMenus(menus);
        } else {
            const lowerCaseQuery = searchQuery.toLowerCase();
            setFilteredMenus(
                menus.map((category) => ({
                    ...category,
                    menus: category.menus.filter(
                        (menu) =>
                            menu?.name?.toLowerCase()?.includes(lowerCaseQuery) ||
                            menu?.description?.toLowerCase()?.includes(lowerCaseQuery) ||
                            menu?.ingredients?.toLowerCase()?.includes(lowerCaseQuery)
                    ),
                })).filter(category => category.menus.length > 0)
            );
        }
    }, [searchQuery, menus]);

    const handleClick = (category) => {
        setActiveCategory(category.link.replace("#", ""));
        const element = document.getElementById(category.link.replace("#", ""));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
        setSelectedImage(null);
    };

    return (
        <Layout>
            <PageBanner pageName={"Menu"} title="Menu" />
            <ScrollToTop />
            <div className="mx-auto py-10">
                <section className="sticky py-2 top-0 z-50 bg-white">
                    <div className="px-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="p-2 w-full min-w-[200px] border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="max-w-[1300px] mx-auto flex  justify-between items-center">
                        <div className="flex max-w-[1300px] parent-category flex-nowrap justify-start hide-scrollbar items-center overflow-x-auto">
                            {
                                categories.map((category, index) => (
                                    <div
                                        className={`p-2 m-2 text-center bg-[#008249] hover:bg-[#11492C] !text-nowrap text-white rounded-md font-medium cursor-pointer ${activeCategory === category.link.replace("#", "") ? "bg-[#11492C] text-white" : ""}`}
                                        key={category.type}
                                        onClick={() => handleClick(category)}
                                        data-category={category.link.replace("#", "")}
                                    >
                                        <span className="text-white !text-nowrap w-full">
                                            {category.type}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className="rounded-lg my-4">
                    <div className="w-screen max-w-[1300px] mx-auto relative">
                        {
                            filteredMenus.map((item, index) => (
                                <div
                                    key={item.category.name}
                                    className={`w-full my-[50px] ${index === 0 && "mt-5"}`}
                                    id={item.category.link?.replace("#", "")}
                                >
                                    <h2 className="text-4xl relative hidden md:block mx-auto text-center p-3 font-bold mb-1">
                                        {item.category.name}
                                        <span className="absolute top-1/2 left-0 w-1/4 h-[2px] bg-gray-900 transform -translate-y-1/2" />
                                        <span className="absolute top-1/2 right-0 w-1/4 h-[2px] bg-gray-900 transform -translate-y-1/2" />
                                    </h2>
                                    <div className="relative md:hidden w-screen h-[250px] bg-slate-500 flex mb-10">
                                        <div className="bg-[#11492C] relative w-1/3 flex items-center justify-center">
                                            <div className="rotate-[-90deg] overflow-clip line-clamp-2 h-[3em] transform w-[220px] max-w-[250px] text-[42px] text-white p-2 text-center mb-2 absolute left-1/2 -translate-x-1/2 font-cabinet font-bold flex justify-start items-center"
                                                style={{
                                                    lineHeight: "1",
                                                }}
                                            >
                                                {item.category.name}
                                            </div>
                                        </div>
                                        <FadingImages
                                            images={item?.menus?.map((menuitem) => menuitem.image).filter((image) => image)}
                                            duration={10000}
                                        />
                                    </div>
                                    <div className="grid px-3 grid-cols-1 gap-1 !gap-x-3 md:grid-cols-2 place-items-center place-content-center">
                                        {
                                            item?.menus?.map((menuitem, index) => (
                                                <div
                                                    key={menuitem?.name ?? index}
                                                    className="flex w-full flex-col items-start bg-white rounded-lg md:flex-col md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                                >
                                                    <div className="w-full flex gap-4 flex-row justify-between relative mb-4">
                                                        <div className="absolute bottom-0 left-0 w-full h-0 border-b-2 border-dashed border-gray-300" />
                                                        <h5 className="mb-2 text-2xl flex justify-start gap-4 font-bold tracking-tight text-gray-900">
                                                            <span>{menuitem?.name}</span>
                                                            {
                                                                menuitem?.image?.url &&
                                                                <button
                                                                    className="flex items-center justify-center"
                                                                    onClick={() => handleImageClick(menuitem.image)}
                                                                >
                                                                    <EyeIcon />
                                                                </button>
                                                            }
                                                        </h5>
                                                        <span className="text-xl font-bold flex-shrink-0 text-gray-900">
                                                            AED {menuitem?.price}
                                                        </span>
                                                    </div>
                                                    <p className="mb-3 font-sans italic text-[12px] text-gray-700 line-clamp-2">
                                                        {menuitem?.ingredients}
                                                    </p>
                                                    <p className="mb-3 font-sans text-sm text-gray-700 line-clamp-2 hidden lg:block">
                                                        {menuitem?.description}
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
            </div>
            {dialogOpen && selectedImage && <Dialog image={selectedImage} onClose={closeDialog} />}
            <Skyline />
        </Layout>
    );
};

const FadingImages = ({ images, duration }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, duration);

        return () => clearInterval(interval);
    }, [images.length, duration]);

    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].screenX;
        handleSwipe();
    };

    const handleSwipe = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }

        if (touchEndX.current - touchStartX.current > 50) {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        }
    };

    return (
        <div
            className="h-full w-full relative flex items-center justify-center overflow-hidden rounded-lg"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {images.length === 0 ? (
                <Image
                    width={400}
                    height={400}
                    src='/assets/images/logo/logo-white-bg.jpg'
                    alt='default image'
                    className={`object-cover p-1 w-full h-full  transition-opacity duration-1000 opacity-100`}
                    style={{ position: 'absolute' }}
                />
            ) : (
                images.map((image, index) => (
                    index === currentImageIndex && (
                        <Image
                            key={index}
                            width={400}
                            height={400}
                            src={image?.url ?? '/assets/images/logo/logo-white-bg.jpg'}
                            alt={image?.alt}
                            className={`object-cover p-1 w-full h-full  transition-opacity duration-1000 opacity-100`}
                            style={{ position: 'absolute' }}
                        />
                    )
                ))
            )}
        </div>
    );
};

export default Menu;
