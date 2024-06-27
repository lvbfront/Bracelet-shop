import Logo from './logo.png'
import ekka from './ekkako.png'
import neck from './necklace.jpg'
export const brac = '/images/Bracelets.jpg'; // Web path accessible from the public directory

import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
export{
    Logo,
    ekka,
    neck,
    
}

export const necklaces = [
    {
        id: 1,
        name: 'Pearl Necklace',
        description: 'Elegant pearl necklace.',
        price: 99,
        imageUrl: Logo,  // replace 'Logo' with the actual path to the image
        images: [
            {id:"im1", url: Logo,},
            { id:"im2", url:ekka}
        ]
    },
    {
        id: 2,
        name: 'Silver Pendant',
        description: 'Sterling silver pendant with a chain.',
        price: 75,
        imageUrl: ekka // replace 'ekka' with the actual path to the image
    },
    {
        id: 3,
        name: 'Gold Chain',
        description: '24-karat gold chain, simple and luxurious.',
        price: 200,
        imageUrl: 'path/to/gold_chain.jpg'
    },
    {
        id: 4,
        name: 'Diamond Solitaire Necklace',
        description: 'A stunning diamond solitaire on a delicate gold chain.',
        price: 300,
        imageUrl: 'path/to/diamond_necklace.jpg'
    },
    {
        id: 5,
        name: 'Sapphire Necklace',
        description: 'Beautiful sapphire stones set in a sterling silver necklace.',
        price: 150,
        imageUrl: 'path/to/sapphire_necklace.jpg'
    },
    {
        id: 6,
        name: 'Ruby Heart Pendant',
        description: 'Heart-shaped ruby pendant, perfect for gifting.',
        price: 120,
        imageUrl: 'path/to/ruby_heart.jpg'
    },
    {
        id: 7,
        name: 'Emerald Drop Necklace',
        description: 'Elegant emerald stones arranged in a drop fashion on a fine chain.',
        price: 175,
        imageUrl: 'path/to/emerald_drop.jpg'
    },
    {
        id: 8,
        name: 'Turquoise Beaded Necklace',
        description: 'Vibrant turquoise beads on a long, wrap-around chain.',
        price: 90,
        imageUrl: 'path/to/turquoise_beaded.jpg'
    },
    {
        id: 9,
        name: 'Black Onyx Necklace',
        description: 'Bold black onyx beads with a silver clasp.',
        price: 85,
        imageUrl: 'path/to/black_onyx.jpg'
    },
    {
        id: 10,
        name: 'Layered Pearl Necklace',
        description: 'Multi-layered pearls for a classic, elegant look.',
        price: 130,
        imageUrl: 'path/to/layered_pearl.jpg'
    },
    {
        id: 11,
        name: 'Amethyst Pendant',
        description: 'Purple amethyst pendant on a simple silver chain.',
        price: 110,
        imageUrl: 'path/to/amethyst_pendant.jpg'
    },
    {
        id: 12,
        name: 'Citrine Minimalist Necklace',
        description: 'Minimalist design featuring a single citrine stone.',
        price: 70,
        imageUrl: neck,
        images: [
            {
                id: "im1",
                url: Logo,


            },
            {
                id: "im2",
                url: ekka,
            }

        ]

        
    }
];


export const products = [
    {
        id: 1,
        imgURL: shoe4,
        name: "سلسلة ذهبية",
        price: "$200.20",
        isFeatured: true,
        description: "varyyyyyyyyyy",
        isNew: true,
        images: [
            {
                id: "im1",
                url: Logo,



            },
            {
                id: "im2",
                url: ekka,

            }
        ]
    },
    {
        id: 2,
        imgURL: shoe5,
        name: "اسورة فضية",
        price: "$210.20",
        isFeatured: true,
        description: "varyyyyyyyyyy",
        isNew: true,
        images: [
            {
                id: "im1",
                url: shoe5,



            },
            {
                id: "im2",
                url: bigShoe3,
            },
            {
                id: "im3",
                url: thumbnailShoe2,
                
            }
        ]
    },
    {
        id: 3,
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        description: "varyyyyyyyyyy",
    },
    {
        id: 4,
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
        description: "varyyyyyyyyyy",
    },
    {
        id: 5,
        imgURL : Logo,
        name : "the logo",
        price : "$333",
        isFeatured: true,
    },
    {
        id: 6,
        imgURL : thumbnailShoe1,
        name : "the logo",
        price : "$333",
        isFeatured: true,
    },
    {
        id: 7,
        imgURL : thumbnailShoe2,
        name : "the logo",
        price : "$333",
        isFeatured: false,
        isNew: true,
    },
    {
        id: 8,
        imgURL : customer1,
        name : "the logo",
        price : "$333",
        isFeatured: false,
    },
    {
        id: 9,
        imgURL : customer2,
        name : "the logo",
        price : "$333",
        isFeatured: false,
    },
    {
        id: 10,
        imgURL : customer2,
        name : "the logo",
        price : "$333",
        isFeatured: false, 
    },
    {
        id: 11,
        imgURL : customer2,
        name : "the logo",
        price : "$333",
        isFeatured: false, 
    },
    {
        id: 12,
        imgURL : customer2,
        name : "the logo",
        price : "$333",
        isFeatured: false, 
    },
];

export const Data_product = [
    {
        id: 1,
        name: 'ekkako',
        image: ekka,
        price: 30
    },
    {
        id: 2,
        name: 'ekkako',
        image: Logo,
        price: 50

    },
    {
        id: 3,
        name: 'ekkako',
        image: ekka,
        price: 20

    }
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

let coco = [
    {costoumers: 333,
    money: '555K'}
];
