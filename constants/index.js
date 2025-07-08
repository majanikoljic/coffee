const navLinks = [
    {
        id: "coffee",
        title: "Coffee",
    },
    {
        id: "about",
        title: "About Us",
    },
    {
        id: "work",
        title: "The Art",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const hotDrinks = [
    {
        name: "Vanilla Cold Brew",
        origin: "Colombia",
        detail: "16 oz",
        price: "$5"
    },

    {
        name: "Iced Caramel Latte",
        origin: "Guatemala",
        detail: "16 oz",
        price: "$6"
    },
    {
        name: "Coconut Milk Mocha",
        origin: "Brazil",
        detail: "12 oz",
        price: "$5.50"
    },
    {
        name: "Hazelnut Espresso",
        origin: "Ethiopia",
        detail: "8 oz",
        price: "$4"
    },
];

const icedDrinks = [
    {
        name: "Iced Caramel Macchiato",
        origin: "Colombia",
        detail: "16 oz",
        price: "$5.50"
    },
    {
        name: "Citrus Iced Tea",
        origin: "India",
        detail: "20 oz",
        price: "$4"
    },
    {
        name: "Berry Hibiscus",
        origin: "Kenya",
        detail: "20 oz",
        price: "$4.75"
    },
    {
        name: "Lavender Lemon Cold Brew",
        origin: "USA",
        detail: "16 oz",
        price: "$5.25"
    },
];

const profileLists = [
    {
        imgPath: "/images/profile1.png",
    },
    {
        imgPath: "/images/profile2.png",
    },
    {
        imgPath: "/images/profile3.png",
    },
    {
        imgPath: "/images/profile4.png",
    },
];

const featureLists = [
    "Single-origin beans only",
    "Expertly pulled espresso shots",
    "Smooth cold brews",
    "Sustainably sourced ingredients",
];

const goodLists = [
    "Freshly ground daily",
    "Seasonal house specials",
    "Barista-crafted with care",
    "Beautiful latte art in every cup",
];

const storeInfo = {
    heading: "Where to Find Us",
    address: "123 Roast Ave, Brewtown, NY 10001",
    contact: {
        phone: "(255) 123-4567",
        email: "hello@dailyroast.com",
    },
};

const openingHours = [
    { day: "Mon–Thu", time: "7:00am – 7:00pm" },
    { day: "Fri", time: "7:00am – 9:00pm" },
    { day: "Sat", time: "8:00am – 9:00pm" },
    { day: "Sun", time: "8:00am – 5:00pm" },
];

const socials = [
    {
        name: "Instagram",
        icon: "/images/insta.png",
        url: "#",
    },
    {
        name: "X (Twitter)",
        icon: "/images/x.png",
        url: "#",
    },
    {
        name: "Facebook",
        icon: "/images/fb.png",
        url: "#",
    },
];

const allCoffees = [
    {
        id: 1,
        name: "Caramel Cloud Cold Brew",
        image: "/images/coffee1.png",
        title: "Creamy, Dreamy, Chilled Bliss",
        description: "A slow-steeped cold brew topped with our house-made caramel foam and a drizzle of sweet cream. Silky, rich, and bold.",
    },
    {
        id: 2,
        name: "Honey Almond Latte",
        image: "/images/coffee2.png",
        title: "Sweet Meets Strong",
        description: "Smooth espresso blended with steamed almond milk and a hint of wild honey. A perfect balance of nutty and sweet.",
    },
    {
        id: 3,
        name: "Matcha Espresso Fusion",
        image: "/images/coffee3.png",
        title: "East Meets West in a Cup",
        description: "Vibrant matcha layered with espresso over ice. Refreshing, bold, and naturally energizing.",
    },
    {
        id: 4,
        name: "Chai Spiced Mocha",
        image: "/images/coffee4.png",
        title: "Warm Spice, Dark Roast",
        description: "A cozy blend of chocolate, espresso, and spiced chai. Finished with cinnamon dust and steamed oat milk.",
    },
];

export {
    navLinks,
    hotDrinks,
    icedDrinks,
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    allCoffees,
};