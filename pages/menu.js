import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import MenuSliderOne from "../src/components/slider/MenuSliderOne";
import Layout from "../src/layout/Layout";
import { useEffect, useState } from "react";
const CATEGORIES = [
    {
        name: "Appetizers",
        link: "#appetizers",
    },
    {
        name: "Salads",
        link: "#salads",
    },
    {
        name: "Seafood",
        link: "#seafood",
    },
    {
        name: "Pasta",
        link: "#pasta",
    },
    {
        name: "Pizza",
        link: "#pizza",
    },
    {
        name: "Desserts",
        link: "#desserts",
    },
    {
        name: "Drinks",
        link: "#drinks",
    },
    {
        name: "Specials",
        link: "#specials",
    },

];

const MENU_ITEMS = [
    {
        type: "Appetizers",
        link: "#appetizers",
        items: [
            {
                name: "Shrimp Cocktail",
                price: "$12.95",
                description: "Chilled shrimp served with cocktail sauce and lemon wedges.",
            },
            {
                name: "Calamari",
                price: "$11.95",
                description: "Lightly breaded and fried, served with marinara sauce.",
            },
            {
                name: "Mussels",
                price: "$10.95",
                description: "Steamed in a white wine, garlic, and butter sauce.",
            },
            {
                name: "Clams",
                price: "$10.95",
                description: "Steamed in a white wine, garlic, and butter sauce.",
            },
            {
                name: "Fried Zucchini",
                price: "$9.95",
                description: "Lightly breaded and fried, served with marinara sauce.",
            },
        ],
    },
    {
        type: "Salads",
        link: "#salads",
        items: [
            {
                name: "Caesar Salad",
                price: "$10.95",
                description: "Romaine lettuce, croutons, and parmesan cheese tossed in Caesar dressing.",
            },
            {
                name: "Garden Salad",
                price: "$9.95",
                description: "Mixed greens, tomatoes, cucumbers, and carrots with your choice of dressing.",
            },
            {
                name: "Greek Salad",
                price: "$11.95",
                description: "Mixed greens, tomatoes, cucumbers, onions, feta cheese, and kalamata olives with Greek dressing.",
            },
            {
                name: "Spinach Salad",
                price: "$11.95",
                description: "Fresh spinach, bacon, hard-boiled egg, and mushrooms with your choice of dressing.",
            },
            {
                name: "Antipasto",
                price: "$12.95",
                description: "Mixed greens, tomatoes, cucumbers, onions, pepperoni, salami, and provolone cheese with your choice of dressing.",
            },
        ],
    },
    {
        type: "Seafood",
        link: "#seafood",
        items: [
            {
                name: "Shrimp Scampi",
                price: "$22.95",
                description: "Sautéed shrimp in a garlic, butter, and white wine sauce over linguine.",
            },
            {
                name: "Lobster Ravioli",
                price: "$24.95",
                description: "Lobster-filled ravioli in a creamy tomato sauce.",
            },
            {
                name: "Seafood Alfredo",
                price: "$25.95",
                description: "Shrimp, scallops, and crab meat in a creamy alfredo sauce over fettuccine.",
            },
            {
                name: "Linguine with Clam Sauce",
                price: "$21.95",
                description: "Linguine with your choice of red or white clam sauce.",
            },
            {
                name: "Salmon",
                price: "$23.95",
                description: "Grilled or blackened salmon served with your choice of two sides.",
            },
        ],
    },
    {
        type: "Pasta",
        link: "#pasta",
        items: [
            {
                name: "Spaghetti",
                price: "$15.95",
                description: "Your choice of marinara, meat sauce, or meatballs.",
            },
            {
                name: "Fettuccine Alfredo",
                price: "$17.95",
                description: "Fettuccine in a creamy alfredo sauce.",
            },
            {
                name: "Lasagna",
                price: "$18.95",
                description: "Layers of pasta, meat sauce, ricotta, and mozzarella cheese.",
            },
            {
                name: "Ravioli",
                price: "$18.95",
                description: "Your choice of cheese or meat ravioli with marinara or meat sauce.",
            },
            {
                name: "Penne Vodka",
                price: "$18.95",
                description: "Penne in a creamy tomato vodka sauce.",
            },
        ],
    },
    {
        type: "Pizza",
        link: "#pizza",
        items: [
            {
                name: "Margherita",
                price: "$15.95",
                description: "Fresh mozzarella, tomatoes, and basil.",
            },
            {
                name: "Pepperoni",
                price: "$16.95",
                description: "Pepperoni and mozzarella cheese.",
            },
            {
                name: "Meat Lovers",
                price: "$18.95",
                description: "Pepperoni, sausage, meatballs, and mozzarella cheese.",
            },
            {
                name: "Veggie",
                price: "$17.95",
                description: "Mushrooms, onions, peppers, and mozzarella cheese.",
            },
            {
                name: "White Pizza",
                price: "$16.95",
                description: "Ricotta, mozzarella, and parmesan cheese.",
            },
        ],
    },
    {
        type: "Desserts",
        link: "#desserts",
        items: [
            {
                name: "Tiramisu",
                price: "$8.95",
                description: "Espresso-soaked ladyfingers layered with mascarpone cheese and cocoa.",
            },
            {
                name: "Cannoli",
                price: "$6.95",
                description: "Crispy pastry shell filled with sweet ricotta cheese and chocolate chips.",
            },
            {
                name: "Cheesecake",
                price: "$7.95",
                description: "New York-style cheesecake with your choice of topping.",
            },
            {
                name: "Chocolate Cake",
                price: "$7.95",
                description: "Rich chocolate cake with chocolate frosting.",
            },
            {
                name: "Lemon Sorbet",
                price: "$6.95",
                description: "Lemon-flavored sorbet served in a lemon shell.",
            },
        ],
    },
    {
        type: "Drinks",
        link: "#drinks",
        items: [
            {
                name: "Soda",
                price: "$2.95",
                description: "Coke, Diet Coke, Sprite, Ginger Ale, Root Beer, Lemonade, Iced Tea.",
            },
            {
                name: "Coffee",
                price: "$2.95",
                description: "Regular or Decaf.",
            },
            {
                name: "Espresso",
                price: "$3.95",
                description: "Single or Double.",
            },
            {
                name: "Cappuccino",
                price: "$4.95",
                description: "Regular or Decaf.",
            },
            {
                name: "Beer",
                price: "$5.95",
                description: "Domestic or Imported.",
            },
        ],
    },
    {
        type: "Specials",
        link: "#specials",
        items: [
            {
                name: "Chicken Parmesan",
                price: "$19.95",
                description: "Breaded chicken breast topped with marinara sauce and mozzarella cheese over spaghetti.",
            },
            {
                name: "Eggplant Parmesan",
                price: "$18.95",
                description: "Breaded eggplant topped with marinara sauce and mozzarella cheese over spaghetti.",
            },
            {
                name: "Veal Marsala",
                price: "$24.95",
                description: "Veal cutlets in a mushroom and Marsala wine sauce over spaghetti.",
            },
            {
                name: "Chicken Marsala",
                price: "$21.95",
                description: "Chicken breast in a mushroom and Marsala wine sauce over spaghetti.",
            },
            {
                name: "Veal Piccata",
                price: "$24.95",
                description: "Veal cutlets in a lemon and caper sauce over spaghetti.",
            },
        ],
    },
];

const MenuSeaFood = () => {
    // i wanna observe and keep track of which menu category is currenly being viewed 

    const [activeCategory, setActiveCategory] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveCategory(entry.target.id);
                    }
                });
            },
            {
                root: null, // relative to the viewport
                threshold: 0.7, // 50% of the item's area is visible
            }
        );



        MENU_ITEMS.forEach((elem) => {
            const categoryElements = document.getElementById(elem.link.replace("#", ""));
            observer.observe(categoryElements);
        });

        return () => {
            MENU_ITEMS.forEach((elem) => {
                const categoryElements = document.getElementById(elem.link.replace("#", ""));
                observer.unobserve(categoryElements);
            });
        };
    }, []);


    useEffect(() => {
        console.log(activeCategory);
    }, [activeCategory]);



    return (
        <Layout>
            <PageBanner pageName={"Seafood"} title="Menu" />
            <section
                className="sticky top-0 z-50 bg-white "
            >
                <div className="">
                    <div className="flex flex-nowrap justify-center items-center overflow-x-auto">
                        {
                            CATEGORIES.map((category, index) => (
                                <div
                                    key={index}
                                    className={`p-2 m-2 text-center font-medium cursor-pointer hover:bg-gray-100 ${activeCategory === category.link.replace("#", "") ? "bg-[#11492C] text-white" : ""}`}
                                >
                                    <Link href={category.link}
                                    >
                                        {category.name}
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section
                className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-lg my-4"
            >
                <div className="">
                    {
                        MENU_ITEMS.map((category, index) => (
                            <div
                                key={index}
                                className="w-full my-20 p-2"
                                id={category.link.replace("#", "")}
                            >
                                <h2 className="text-4xl relative block w-[400px] mx-auto text-center p-3 font-bold mb-2" >
                                    {category.type}
                                    <span className="absolute top-1/2 left-0 w-1/4 h-[2px] bg-gray-900 transform -translate-y-1/2" />
                                    <span className="absolute top-1/2 right-0 w-1/4 h-[2px] bg-gray-900 transform -translate-y-1/2" />
                                </h2>
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 place-items-center place-content-center">
                                    {
                                        category.items.map((item, index) => (
                                            <div
                                                key={item.name}
                                                className="flex w-full flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://picsum.photos/200/200" alt="" />
                                                <div className="flex flex-col justify-between p-4 leading-normal">
                                                    <div className="">

                                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                                            {item.name}
                                                        </h5>
                                                        <p className="mb-3 font-sans text-sm text-gray-700 line-clamp-2">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-xl font-bold text-gray-900">
                                                            {item.price}
                                                        </span>

                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>

            <Partners />
        </Layout >
    );
};
export default MenuSeaFood;
