import Logo from './logo.png'
import ekka from './ekkako.png'

import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
export{
    Logo,
    ekka
}

export const products = [
    {
        id: 1,
        imgURL: shoe4,
        name: "سلسلة ذهبية",
        price: "$200.20",
        isFeatured: true,
        description: "varyyyyyyyyyy",
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
        isFeatured: true,
    }
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
