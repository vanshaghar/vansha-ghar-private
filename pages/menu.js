import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Skyline";
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
                price: "AED 12.95",
                description: "Chilled shrimp served with cocktail sauce and lemon wedges.",
                ingredients: ["Shrimp", "Cocktail Sauce", "Lemon"]
            },
            {
                name: "Calamari",
                price: "AED 11.95",
                description: "Lightly breaded and fried, served with marinara sauce.",
                ingredients: ["Calamari", "Breading", "Marinara Sauce"]
            },
            {
                name: "Mussels",
                price: "AED 10.95",
                description: "Steamed in a white wine, garlic, and butter sauce.",
                ingredients: ["Mussels", "White Wine", "Garlic", "Butter"]
            },
            {
                name: "Clams",
                price: "AED 10.95",
                description: "Steamed in a white wine, garlic, and butter sauce.",
                ingredients: ["Clams", "White Wine", "Garlic", "Butter"]
            },
            {
                name: "Fried Zucchini",
                price: "AED 9.95",
                description: "Lightly breaded and fried, served with marinara sauce.",
                ingredients: ["Zucchini", "Breading", "Marinara Sauce"]
            },
        ],
    },
    {
        type: "Salads",
        link: "#salads",
        items: [
            {
                name: "Caesar Salad",
                price: "AED 10.95",
                description: "Romaine lettuce, croutons, and parmesan cheese tossed in Caesar dressing.",
                ingredients: ["Romaine Lettuce", "Croutons", "Parmesan Cheese", "Caesar Dressing"]
            },
            {
                name: "Garden Salad",
                price: "AED 9.95",
                description: "Mixed greens, tomatoes, cucumbers, and carrots with your choice of dressing.",
                ingredients: ["Mixed Greens", "Tomatoes", "Cucumbers", "Carrots", "Dressing Choice"]
            },
            {
                name: "Greek Salad",
                price: "AED 11.95",
                description: "Mixed greens, tomatoes, cucumbers, onions, feta cheese, and kalamata olives with Greek dressing.",
                ingredients: ["Mixed Greens", "Tomatoes", "Cucumbers", "Onions", "Feta Cheese", "Kalamata Olives", "Greek Dressing"]
            },
            {
                name: "Spinach Salad",
                price: "AED 11.95",
                description: "Fresh spinach, bacon, hard-boiled egg, and mushrooms with your choice of dressing.",
                ingredients: ["Spinach", "Bacon", "Hard-boiled Egg", "Mushrooms", "Dressing Choice"]
            },
            {
                name: "Antipasto",
                price: "AED 12.95",
                description: "Mixed greens, tomatoes, cucumbers, onions, pepperoni, salami, and provolone cheese with your choice of dressing.",
                ingredients: ["Mixed Greens", "Tomatoes", "Cucumbers", "Onions", "Pepperoni", "Salami", "Provolone Cheese", "Dressing Choice"]
            },
        ],
    },
    {
        type: "Seafood",
        link: "#seafood",
        items: [
            {
                name: "Shrimp Scampi",
                price: "AED 22.95",
                description: "Sautéed shrimp in a garlic, butter, and white wine sauce over linguine.",
                ingredients: ["Shrimp", "Garlic", "Butter", "White Wine", "Linguine"]
            },
            {
                name: "Lobster Ravioli",
                price: "AED 24.95",
                description: "Lobster-filled ravioli in a creamy tomato sauce.",
                ingredients: ["Lobster Ravioli", "Creamy Tomato Sauce"]
            },
            {
                name: "Seafood Alfredo",
                price: "AED 25.95",
                description: "Shrimp, scallops, and crab meat in a creamy alfredo sauce over fettuccine.",
                ingredients: ["Shrimp", "Scallops", "Crab Meat", "Alfredo Sauce", "Fettuccine"]
            },
            {
                name: "Linguine with Clam Sauce",
                price: "AED 21.95",
                description: "Linguine with your choice of red or white clam sauce.",
                ingredients: ["Linguine", "Clam Sauce (Red or White)"]
            },
            {
                name: "Salmon",
                price: "AED 23.95",
                description: "Grilled or blackened salmon served with your choice of two sides.",
                ingredients: ["Salmon", "Choice of Two Sides"]
            },
        ],
    },
    {
        type: "Pasta",
        link: "#pasta",
        items: [
            {
                name: "Spaghetti",
                price: "AED 15.95",
                description: "Your choice of marinara, meat sauce, or meatballs.",
                ingredients: ["Spaghetti", "Choice of Marinara, Meat Sauce, or Meatballs"]
            },
            {
                name: "Fettuccine Alfredo",
                price: "AED 17.95",
                description: "Fettuccine in a creamy alfredo sauce.",
                ingredients: ["Fettuccine", "Alfredo Sauce"]
            },
            {
                name: "Lasagna",
                price: "AED 18.95",
                description: "Layers of pasta, meat sauce, ricotta, and mozzarella cheese.",
                ingredients: ["Pasta", "Meat Sauce", "Ricotta Cheese", "Mozzarella Cheese"]
            },
            {
                name: "Ravioli",
                price: "AED 18.95",
                description: "Your choice of cheese or meat ravioli with marinara or meat sauce.",
                ingredients: ["Ravioli (Cheese or Meat)", "Choice of Marinara or Meat Sauce"]
            },
            {
                name: "Penne Vodka",
                price: "AED 18.95",
                description: "Penne in a creamy tomato vodka sauce.",
                ingredients: ["Penne", "Tomato Vodka Sauce"]
            },
        ],
    },
    {
        type: "Pizza",
        link: "#pizza",
        items: [
            {
                name: "Margherita",
                price: "AED 15.95",
                description: "Fresh mozzarella, tomatoes, and basil.",
                ingredients: ["Pizza Dough", "Mozzarella", "Tomatoes", "Basil"]
            },
            {
                name: "Pepperoni",
                price: "AED 16.95",
                description: "Pepperoni and mozzarella cheese.",
                ingredients: ["Pizza Dough", "Pepperoni", "Mozzarella"]
            },
            {
                name: "Meat Lovers",
                price: "AED 18.95",
                description: "Pepperoni, sausage, meatballs, and mozzarella cheese.",
                ingredients: ["Pizza Dough", "Pepperoni", "Sausage", "Meatballs", "Mozzarella"]
            },
            {
                name: "Veggie",
                price: "AED 17.95",
                description: "Mushrooms, onions, peppers, and mozzarella cheese.",
                ingredients: ["Pizza Dough", "Mushrooms", "Onions", "Peppers", "Mozzarella"]
            },
            {
                name: "White Pizza",
                price: "AED 16.95",
                description: "Ricotta, mozzarella, and parmesan cheese.",
                ingredients: ["Pizza Dough", "Ricotta", "Mozzarella", "Parmesan"]
            },
        ],
    },
    {
        type: "Desserts",
        link: "#desserts",
        items: [
            {
                name: "Tiramisu",
                price: "AED 8.95",
                description: "Espresso-soaked ladyfingers layered with mascarpone cheese and cocoa.",
                ingredients: ["Espresso", "Ladyfingers", "Mascarpone Cheese", "Cocoa"]
            },
            {
                name: "Cannoli",
                price: "AED 6.95",
                description: "Crispy pastry shell filled with sweet ricotta cheese and chocolate chips.",
                ingredients: ["Pastry Shell", "Ricotta Cheese", "Chocolate Chips"]
            },
            {
                name: "Cheesecake",
                price: "AED 7.95",
                description: "New York-style cheesecake with your choice of topping.",
                ingredients: ["Cheesecake Base", "Choice of Topping"]
            },
            {
                name: "Chocolate Cake",
                price: "AED 7.95",
                description: "Rich chocolate cake with chocolate frosting.",
                ingredients: ["Chocolate Cake", "Chocolate Frosting"]
            },
            {
                name: "Lemon Sorbet",
                price: "AED 6.95",
                description: "Lemon-flavored sorbet served in a lemon shell.",
                ingredients: ["Lemon Sorbet", "Lemon Shell"]
            },
        ],
    },
    {
        type: "Drinks",
        link: "#drinks",
        items: [
            {
                name: "Soda",
                price: "AED 2.95",
                description: "Coke, Diet Coke, Sprite, Ginger Ale, Root Beer, Lemonade, Iced Tea.",
                ingredients: ["Choice of Soda"]
            },
            {
                name: "Coffee",
                price: "AED 2.95",
                description: "Regular or Decaf.",
                ingredients: ["Coffee", "Regular or Decaf Option"]
            },
            {
                name: "Espresso",
                price: "AED 3.95",
                description: "Single or Double.",
                ingredients: ["Espresso", "Single or Double Option"]
            },
            {
                name: "Cappuccino",
                price: "AED 4.95",
                description: "Regular or Decaf.",
                ingredients: ["Cappuccino", "Regular or Decaf Option"]
            },
            {
                name: "Beer",
                price: "AED 5.95",
                description: "Domestic or Imported.",
                ingredients: ["Choice of Beer (Domestic or Imported)"]
            },
        ],
    },
    {
        type: "Specials",
        link: "#specials",
        items: [
            {
                name: "Chicken Parmesan",
                price: "AED 19.95",
                description: "Breaded chicken breast topped with marinara sauce and mozzarella cheese over spaghetti.",
                ingredients: ["Chicken Breast", "Breading", "Marinara Sauce", "Mozzarella Cheese", "Spaghetti"]
            },
            {
                name: "Eggplant Parmesan",
                price: "AED 18.95",
                description: "Breaded eggplant topped with marinara sauce and mozzarella cheese over spaghetti.",
                ingredients: ["Eggplant", "Breading", "Marinara Sauce", "Mozzarella Cheese", "Spaghetti"]
            },
            {
                name: "Veal Marsala",
                price: "AED 24.95",
                description: "Veal cutlets in a mushroom and Marsala wine sauce over spaghetti.",
                ingredients: ["Veal Cutlets", "Mushrooms", "Marsala Wine", "Spaghetti"]
            },
            {
                name: "Chicken Marsala",
                price: "AED 21.95",
                description: "Chicken breast in a mushroom and Marsala wine sauce over spaghetti.",
                ingredients: ["Chicken Breast", "Mushrooms", "Marsala Wine", "Spaghetti"]
            },
            {
                name: "Veal Piccata",
                price: "AED 24.95",
                description: "Veal cutlets in a lemon and caper sauce over spaghetti.",
                ingredients: ["Veal Cutlets", "Lemon", "Capers", "Spaghetti"]
            },
        ],
    },
];


const MenuSeaFood = () => {

    const [activeCategory, setActiveCategory] = useState('');

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
                                CATEGORIES.map((category, index) => (
                                    <div
                                        key={index}
                                        className={`p-2 m-2 text-center bg-[#008249] hover:bg-[#11492C] text-white rounded-md font-medium cursor-pointer ${activeCategory === category.link.replace("#", "") ? "bg-[#11492C] text-white" : ""}`}
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
                    className=" rounded-lg  my-4"
                >
                    <div className="w-screen relative">
                        {
                            MENU_ITEMS.map((category, index) => (
                                <div
                                    key={category.type}
                                    className="w-full my-1"
                                    id={category.link.replace("#", "")}
                                >
                                    <h2 className="text-4xl relative hidden md:block w-[400px] mx-auto text-center p-3 font-bold mb-1" >
                                        {category.type}
                                        <span className="absolute top-1/2 left-0 w-1/4 h-[2px] bg-gray-900 transform -translate-y-1/2" />
                                        <span className="absolute top-1/2 right-0 w-1/4 h-[2px] bg-gray-900 transform -translate-y-1/2" />
                                    </h2>
                                    <div className="relative md:hidden w-screen h-[250px] bg-slate-500 flex mb-10">
                                        <div className="bg-[#11492C] relative w-1/3 flex items-center justify-center">
                                            <div className="rotate-[-90deg] transform  w-[220px] max-w-[250px]  text-[42px]  text-white p-2  text-center mb-2 absolute left-1/2 -translate-x-1/2 font-cabinet font-bold flex justify-start items-center"
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

                                                    <div className="w-full flex flex-row  justify-between relative mb-4">
                                                        {/* dashed underline below this block */}
                                                        <div
                                                            className="absolute bottom-0 left-0 w-full h-0 border-b-2 border-dashed border-gray-300"
                                                        />

                                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                                            {item.name}
                                                        </h5>

                                                        <span className="text-xl font-bold flex-shrink-0 text-gray-900">
                                                            {item.price}
                                                        </span>


                                                    </div>
                                                    <p className="mb-3 font-sans italic text-[12px] text-gray-700 line-clamp-2">
                                                        {item.ingredients.join(", ")}
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
            </div>

            <Skyline />
        </Layout >
    );
};
export default MenuSeaFood;
