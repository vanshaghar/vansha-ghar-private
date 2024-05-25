export const VANSHA_GHAR = {
    phoneNumber: "026440788",
    address: "Zayed The First St - Al Danah - Zone 1 - Abu Dhabi - United Arab Emirates",
    whatsapp: (text = "") => `https://api.whatsapp.com/send/?phone=971524729073&text=${text?.split(" ").join("+")}&type=phone_number&app_absent=0`,
    facebook: 'https://www.facebook.com/VanshaGhar',
    tiktok: "https://www.tiktok.com/@vanshaghar_restaurant",
    instagram: "https://www.instagram.com/vanshaghar",
    email: 'vanshaghar@gmail.com',
    whatsappNumber: "971524729073",
};