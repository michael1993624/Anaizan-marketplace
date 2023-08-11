import { createSlice } from "@reduxjs/toolkit";
import Countdown from "react-countdown";
import { Timer } from "../../components/Minuteur/Minuteur";

import ProductImg4 from "../../assets/images/product/product-1.jpg";
import ProductImg2 from "../../assets/images/product/product-2.jpg";
import ProductImg3 from "../../assets/images/product/product-3.jpg";

import Product_1 from "../../assets/images/product/1.jpg"
import Product_2 from "../../assets/images/product/2.jpg"
import Product_3 from "../../assets/images/product/3.jpg"
import Product_4 from "../../assets/images/product/4.jpg"
import Product_5 from "../../assets/images/product/5.jpg"
import Product_6 from "../../assets/images/product/6.jpg"
import Product_10 from "../../assets/images/product/10.jpg"
import Product_11 from "../../assets/images/product/11.jpg"
import Product_12 from "../../assets/images/product/12.jpg"
import Product_13 from "../../assets/images/product/13.jpg"
import Product_14 from "../../assets/images/product/14.jpg"
import Product_15 from "../../assets/images/product/15.jpg"
import Product_16 from "../../assets/images/product/16.jpg"
import Product_17 from "../../assets/images/product/17.jpg"
import Product_21 from "../../assets/images/product/21.jpg"
import Product_22 from "../../assets/images/product/22.jpg"
import Product_23 from "../../assets/images/product/23.jpg"
import Product_24 from "../../assets/images/product/24.jpg"
import Product_25 from "../../assets/images/product/25.jpg"

import pash from "../../assets/images/product/pash.png"
import sacs from "../../assets/images/product/sacs.png"
import projecteur from "../../assets/images/product/projecteur.png"

import room1 from "../../assets/images/r1.png"
import room2 from "../../assets/images/r2.png"
import room3 from "../../assets/images/r3.png"

import Rfq from "../../assets/images/png9.png"
import tradeS from "../../assets/images/png10.png"
import diamond from "../../assets/images/png11.png"

import ProductT1 from "../../assets/images/product/p1.png"
import ProductT2 from "../../assets/images/product/p2.png"
import ProductT3 from "../../assets/images/product/p3.png"
import ProductT4 from "../../assets/images/product/p2.png"
import ProductT5 from "../../assets/images/product/p1.png"
import ProductT6 from "../../assets/images/product/p2.png"

import moto from "../../assets/images/product/moto.png"
import voiture from "../../assets/images/product/voit.png"
import pnue from "../../assets/images/product/pneu.png"

import prod1 from "../../assets/images/product/2.jpg"
import prod2 from "../../assets/images/product/3.jpg"
import prod3 from "../../assets/images/product/7.jpg"
import prod4 from "../../assets/images/product/6.jpg"

/* sub categorie */
import p1 from "../../assets/images/product/18.jpg"
import p2 from "../../assets/images/product/19.jpg"
import supplierShop from "../../assets/images/suppliers/supplier.png"
import topranking from "../../assets/svg/topranking.svg"
import sponsored from "../../assets/svg/sponsored.png"
import fr from "../../assets/images/flag/fr.png"
import buldozer from "../../assets/images/bulldozer.png"
import { DROPSHIPPING_PAGE, RANKING_PRODUCT_PAGE } from "../../settings/constants";



/* const allProduct = [
    {
        id: 1,
        name: "T-shirt",
        store: "by Wonder House Books | 25 April 2018",
        quantity_min: 20,
        quantity_max: 30,
        price: "$15.00",
        img: ProductImg4,
        amount: 1,
        sale: "-76",
        sold: "7984",
        type: "Ranking",
        color: ["red", "black", "green", "yellow", "blue"],
        size: ["XL", "S", "M", "L", "2XL"],
        description: "Wholesale custom fashionable style nurse uniform lingerie With apron scrub suit strech polyester",
        categorie: "Apparel"
    },
    {
        id: 2,
        name: "T-shirt",
        store: "by Wonder House Books | 25 April 2018",
        quantity_min: 20,
        quantity_max: 30,
        price: "$15.00",
        img: ProductImg2,
        amount: 1,
        sale: "-76",
        sold: "7984",
        type: "Ranking",
        color: ["red", "black", "green", "yellow", "blue"],
        size: ["XL", "S", "M", "L", "2XL"],
        description: "Wholesale custom fashionable style nurse uniform lingerie With apron scrub suit strech polyester",
        categorie: "Apparel"
    },
    {
        id: 1,
        name: "T-shirt",
        store: "by Wonder House Books | 25 April 2018",
        quantity_min: 20,
        quantity_max: 30,
        price: "$15.00",
        img: ProductImg3,
        amount: 1,
        sale: "-76",
        sold: "7984",
        type: "Ranking",
        color: ["red", "black", "green", "yellow", "blue"],
        size: ["XL", "S", "M", "L", "2XL"],
        description: "Wholesale custom fashionable style nurse uniform lingerie With apron scrub suit strech polyester",
        categorie: "Apparel"
    },
]; */

const dataProductType = [
    {
        id: 1,
        title: "My First Book of Pencil Control",
        author: "by Wonder House Books | 25 April 2018",
        price: 15.00,
        img: ProductImg4,
        quantity: 20,
        amount: 1,
        sale: "-76",
        sold: "7984",
        type: "Ranking",
        src: [
            ProductImg4
        ],
        color: ["red", "black", "green", "yellow", "blue"],
        size: ["Free", "XL", "S", "M", "L", "2XL"],
        description: "Wholesale custom fashionable style nurse uniform lingerie With apron scrub suit strech polyester"
    },
    {
        id: 2,
        title: "108 Panchatantra Stories",
        author: "by Maple Press  | 1 September 2020",
        price: 98,
        img: ProductImg3,
        quantity: 20,
        amount: 1,
        sale: "-76", soldOut: "7984",
        sold: "7984",
        type: "Ranking",
        src: [
            ProductImg4,
        ],
        color: ["red", "black", "green", "yellow", "blue"],
        size: ["Free", "XL", "S", "M", "L", "2XL"],
        description: "Wholesale custom fashionable style nurse uniform lingerie With apron scrub suit strech polyester"
    },
    {
        id: 3,
        title: "Amazing Questions & Answers Science",
        author: "by Om Books Editorial Team  | 25 November 2018",
        price: 143,
        img: ProductImg2,
        amount: 1,
        sale: "-76", soldOut: "7984",
        sold: "7984",
        type: "Ranking",
        src: [
            ProductImg4,
        ],
        color: ["red", "black", "green", "yellow", "blue"],
        size: ["Free", "XL", "S", "M", "L", "2XL"],
        description: "Wholesale custom fashionable style nurse uniform lingerie With apron scrub suit strech polyester"
    }
]

const dataProductType3 = [
    {
        id: 1,
        title: "My First Book of Pencil Control",
        author: "by Wonder House Books | 25 April 2018",
        price: 15.00,
        img: Product_4,
        quantity: 20,
        amount: 1,
        sale: "-76",
        sold: "7984",
        type: "Ranking",
        src: [
            Product_4,
            "https://www.gemo.gp/CYJE_WEB/photos/Web/B520601_1.jpg",
            "https://www.gemo.gp/CYJE_WEB/photos/Web/B520601_4.jpg",
            "https://www.gemo.gp/CYJE_WEB/photos/Web/B520301_4.jpg"
        ],
        color: ["red", "black", "green", "yellow", "blue"],
        size: ["Free", "XL", "S", "M", "L", "2XL"],
        description: "Wholesale custom fashionable style nurse uniform lingerie With apron scrub suit strech polyester"
    },
    {
        id: 2,
        title: "108 Panchatantra Stories",
        author: "by Maple Press  | 1 September 2020",
        price: 98,
        img: Product_6,
        quantity: 20,
        amount: 1,
        sale: "-76", soldOut: "7984",
        sold: "7984",
        type: "Ranking",
        src: [
            Product_6,
            "https://www.gemo.gp/CYJE_WEB/photos/Web/B520601_1.jpg",
            "https://www.gemo.gp/CYJE_WEB/photos/Web/B520601_4.jpg",
            "https://www.gemo.gp/CYJE_WEB/photos/Web/B520301_4.jpg"
        ],
        color: ["red", "black", "green", "yellow", "blue"],
        size: ["Free", "XL", "S", "M", "L", "2XL"],
        description: "Wholesale custom fashionable style nurse uniform lingerie With apron scrub suit strech polyester"
    },
    {
        id: 3,
        title: "Amazing Questions & Answers Science",
        author: "by Om Books Editorial Team  | 25 November 2018",
        price: 143,
        img: Product_5,
        quantity: 20,
        amount: 1,
        sale: "-76", soldOut: "7984",
        sold: "7984",
        type: "Ranking",
        src: [
            Product_5,
            "https://www.gemo.gp/CYJE_WEB/photos/Web/B520601_1.jpg",
            "https://www.gemo.gp/CYJE_WEB/photos/Web/B520601_4.jpg",
            "https://www.gemo.gp/CYJE_WEB/photos/Web/B520301_4.jpg"
        ],
        color: ["red", "black", "green", "yellow", "blue"],
        size: ["Free", "XL", "S", "M", "L", "2XL"],
        description: "Wholesale custom fashionable style nurse uniform lingerie With apron scrub suit strech polyester"
    }
]

const myStore = createSlice({
    name: "myStore",
    initialState: {
        /*  home page */
        dataProductType: [...dataProductType3],
        dataProductGroup: [
            { icon: "vetor1.svg", type: "Flash Deals", linkPage: "/", table1: dataProductType, timer: true },
            { icon: "vector2.svg", type: "Customized Product", linkPage: "/", table1: dataProductType3, timer: false },
            { icon: "vector3.svg", type: "DropShipping", linkPage: DROPSHIPPING_PAGE, table1: dataProductType3, timer: false },
            { icon: "vector4.svg", type: "Top-Ranked Product", linkPage: RANKING_PRODUCT_PAGE, table1: dataProductType, timer: false },
        ],
        dataCardInfos: [
            { icon: "s1.svg", label: "Premium OEM Factories", backColor: "#BE0000", backColor2: "" },
            { icon: "s2.svg", label: "Officail Shops", backColor: "#0040CE", backColor2: "#77a2ff" },
            { icon: "s3.svg", label: "Top Ranking Suppliers", backColor: "#2B88DE", backColor2: "#91b4ff" },
            { icon: "s4.svg", label: "African Products", backColor: "#FF9900", backColor2: "#ffd9a0" }
        ],
        dataCategorie: [
            { img: "png/prod1.png", nameCategorie: "apparel" },
            { img: "png/prod2.png", nameCategorie: "fabric&textile" },
            { img: "png/prod3.png", nameCategorie: "electronics" },
            { img: "png/prod4.png", nameCategorie: "phones" },
            { img: "png/prod5.png", nameCategorie: "jewelry&watches" },
            { img: "png/prod6.png", nameCategorie: "bags&accessories" },
            { img: "png/prod2.png", nameCategorie: "weddings&events" },
        ],
        dataProduct: [
            { img: "/assets/png/cam.png", nam: "", categorie: "Consumer" },
            { img: Product_14, nam: "Télévision", categorie: "Consumer" },
            { img: Product_10, nam: "Laptop", categorie: "Consumer" },
            { img: Product_12, nam: "Télévision", categorie: "Consumer" },
            { img: "/assets/product/computer.png", nam: "Computer Hardware & Software", categorie: "Consumer" },
            { img: Product_15, nam: "Camera, Photo & Accessories", categorie: "Mobile" },
            { img: Product_11, nam: "Mobile Phone & Accessories", categorie: "Mobile" },
            { img: Product_13, nam: "Earphone & Headphone ", categorie: "Smart" },
            { img: "/assets/product/projecteur.png", nam: "Other Consumer Electronics", categorie: "Smart" },
            { img: "/assets/product/cam_tof.png", nam: "Speaker", categorie: "Smart" },
            { img: Product_13, nam: "Baffe", categorie: "Consumer" },
            { img: Product_17, nam: "Télévision", categorie: "Consumer" },
            { img: Product_14, nam: "Computer Hardware & Software", categorie: "Consumer" },
            { img: "/assets/product/cam_tof.png", nam: "Camera, Photo & Accessories", categorie: "Mobile" },
            { img: Product_10, nam: "Mobile Phone & Accessories", categorie: "Mobile" },
            { img: Product_12, nam: "Earphone & Headphone ", categorie: "Smart" },
            { img: Product_13, nam: "Other Consumer Electronics", categorie: "Smart" },

        ],
        dataListSupplier: [
            {
                img: "url(/assets/png/back5.png",
                text: "Trade Assurance is a free order protection service offered by Anaizan",
                activity: "Trade Assurance",
                desc: "ORDER PROTECTION",
                logo: "svg1.svg"
            },
            {
                img: "url(/assets/png/back5.png",
                text: " Fast, reliable shipping by sea or air",
                activity: " INSPECTION",
                desc: "INSPECTION SOLUTION",
                logo: "sv3.svg"
            },
            {
                img: "url(/assets/png/back5.png",
                text: " Fast, reliable shipping by sea or air",
                activity: " Logistics",
                desc: "SEA AND AIR SHIPPING",
                logo: "sv4.svg"
            },
            {
                img: "url(/assets/png/back5.png",
                text: " Fast, reliable shipping by sea or air",
                activity: " Logistics",
                desc: "SEA AND AIR SHIPPING",
                logo: "sv4.svg"
            },
        ],
        dataListBuyer: [
            {
                img: "url(/assets/png/service.jpg)",
                text: "Trade Assurance is a free order protection service offered by Anaizan",
                activity: "Trade Assurance",
                desc: "ORDER PROTECTION",
                logo: "svg1.svg"
            },
            {
                img: "url(/assets/png/service.jpg)",
                text: " Fast, reliable shipping by sea or air",
                activity: " INSPECTION",
                desc: "INSPECTION SOLUTION",
                logo: "sv3.svg"
            },
            {
                img: "url(/assets/png/service.jpg)",
                text: " Fast, reliable shipping by sea or air",
                activity: " Logistics",
                desc: "SEA AND AIR SHIPPING",
                logo: "sv4.svg"
            },
            {
                img: "url(/assets/png/service.jpg)",
                text: " Fast, reliable shipping by sea or air",
                activity: " Logistics",
                desc: "SEA AND AIR SHIPPING",
                logo: "sv4.svg"
            }
        ],
        dataCatProd: [
            {
                img: moto,
                desc: "Vetements Bien Finis Avec Des Design À La",
                infos: " High Quality A AMI LEVEL 3 blue green Disposable sterile 60 gms Go",
                year: "2"
            },
            {
                img: pnue,
                desc: "Vetements Bien Finis Avec Des Design À La",
                infos: " High Quality A AMI LEVEL 3 blue green Disposable sterile 60 gms Go",
                year: "2"
            },
            {
                img: voiture,
                desc: "Vetements Bien Finis Avec Des Design À La",
                infos: " High Quality A AMI LEVEL 3 blue green Disposable sterile 60 gms Go",
                year: "2"
            }
        ],
        services: [
            {
                img: Rfq,
                title: "Request for quotation",
                desc: "One Request, Multiple Quotes"
            },
            {
                img: tradeS,
                title: "Our trade  services",
                desc: "Best tools to Grow your bsuines"
            },
            {
                img: diamond,
                title: "Premium membership",
                desc: "Get Verified, Build Trust"
            }
        ],

        /* categorie page product */
        /* section 1 */
        productTopRight: [
            {
                img: pash,
                label: "Mobile Accessories & phone"
            },
            {
                img: sacs,
                label: "Mobile Accessories & phone"
            },
            {
                img: pash,
                label: "Mobile Accessories & phone"
            },
            {
                img: sacs,
                label: "Mobile Accessories & phone"
            },
        ],
        productTop2: [
            {
                img: Product_16,
                desc: "Catch Big DEALS on The Camera",
            },
            {
                img: Product_15,
                desc: "Catch Big DEALS on The Cameras",
            },
            {
                img: Product_13,
                desc: "Catch Big DEALS on The Cameras",
            }
        ],
        ProductOnline: [
            {
                img: Product_16,
                names: "Lorem Inpsum",
                desc: "  sit amet, consecteture adipisciing wlit."
            },
            {
                img: Product_16,
                names: "Lorem Inpsum",
                desc: "  sit amet, consecteture adipisciing wlit."
            },
            {
                img: Product_16,
                names: "Lorem Inpsum",
                desc: "  sit amet, consecteture adipisciing wlit."
            }
        ],
        DealsProduct: [
            {
                img: Product_16,
                names: " Game Console Controllerer USB 3.0 cable",
                price: "$ 70.50",
                priceThrought: "$17.30",
                available: "50",
                sold: "28"
            },
        ],
        RoomActivity: [
            {
                img: room1,
                yearExp: "15",
            },
            {
                img: room2,
                yearExp: "10",
            },
            {
                img: room3,
                yearExp: "5",
            },
            {
                img: room1,
                yearExp: "5",
            }
        ],
        ProductSale: [
            { img: ProductT1, lib: "nikon DSLR 2840", top: "Rated" },
            { img: ProductT2, lib: "nikon DSLR 2840", top: "Ranked" },
            { img: ProductT3, lib: "nikon DSLR 2840", top: "Ranked" },
            { img: ProductT4, lib: "nikon DSLR 2840", top: "Ranked" },
            { img: ProductT5, lib: "nikon DSLR 2840", top: "Ranked" },
            { img: ProductT6, lib: "nikon DSLR 2840", top: "Sales" }, ,
            { img: ProductT1, lib: "nikon DSLR 2840", top: "Sales" },
            { img: ProductT2, lib: "nikon DSLR 2840", top: "Sales" },
            { img: ProductT6, lib: "nikon DSLR 2840", top: "Rated" },
            { img: ProductT5, lib: "nikon DSLR 2840", top: "Rated" },
            { img: ProductT6, lib: "nikon DSLR 2840", top: "Rated" },
            { img: ProductT6, lib: "nikon DSLR 2840", top: "Rated" },
            { img: ProductT6, lib: "nikon DSLR 2840", top: "Rated" },
            { img: ProductT2, lib: "nikon DSLR 2840", top: "Rated" },
            { img: ProductT3, lib: "nikon DSLR 2840", top: "Rated" },
            { img: ProductT1, lib: "nikon DSLR 2840", top: "Rated" },
            { img: ProductT6, lib: "nikon DSLR 2840", top: "Rated" },
            { img: ProductT1, lib: "nikon DSLR 2840", top: "Rated" },
            { img: ProductT6, lib: "nikon DSLR 2840", top: "Rated" },
            { img: ProductT6, lib: "nikon DSLR 2840", top: "Sales" },
            { img: ProductT4, lib: "nikon DSLR 2840", top: "Rated" },
            { img: ProductT6, lib: "nikon DSLR 2840", top: "Ranked" },
            { img: ProductT2, lib: "nikon DSLR 2840", top: "Ranked" },
            { img: ProductT3, lib: "nikon DSLR 2840", top: "Ranked" },
            { img: ProductT2, lib: "nikon DSLR 2840", top: "Ranked" },
            { img: ProductT6, lib: "nikon DSLR 2840", top: "Sales" }, ,
            { img: ProductT1, lib: "nikon DSLR 2840", top: "Sales" },
            { img: ProductT2, lib: "nikon DSLR 2840", top: "Sales" },
            { img: ProductT3, lib: "nikon DSLR 2840", top: "Rated" },
            { img: ProductT2, lib: "nikon DSLR 2840", top: "Rated" },
            { img: ProductT6, lib: "nikon DSLR 2840", top: "Rated" },
        ],
        TopProduct: [
            {
                img: ProductT1,
                desc: " Notebook Black spire VNitro VN7-591G",
                priceThrougth: "$200",
                price: "$17.39"
            },
            {
                img: ProductT2,
                desc: " Notebook Black spire VNitro VN7-591G",
                priceThrougth: "$200",
                price: "$17.39"
            },
            {
                img: ProductT3,
                desc: " Notebook Black spire VNitro VN7-591G",
                priceThrougth: "$200",
                price: "$17.39"
            },
            {
                img: ProductT4,
                desc: " Notebook Black spire VNitro VN7-591G",
                priceThrougth: "$200",
                price: "$17.39"
            }
        ],
        DataProducts3: [
            { img: ProductT2, desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
            { img: ProductT2, desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
            { img: ProductT1, desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
            { img: ProductT3, desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
            { img: ProductT4, desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
            { img: ProductT2, desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
            { img: ProductT2, desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
            { img: ProductT1, desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
            { img: ProductT1, desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." },
            { img: ProductT3, desc: "High Quality A AMI LEVEL 3 blue green Disposable steri..." }
        ],
        CatProd2: [
            {
                img: moto,
                desc: "Vetements Bien Finis Avec Des Design À La",
                infos: " High Quality A AMI LEVEL 3 blue green Disposable sterile 60 gms Go",
                year: "2"
            },
            {
                img: pnue,
                desc: "Vetements Bien Finis Avec Des Design À La",
                infos: " High Quality A AMI LEVEL 3 blue green Disposable sterile 60 gms Go",
                year: "2"
            },
            {
                img: voiture,
                desc: "Vetements Bien Finis Avec Des Design À La",
                infos: " High Quality A AMI LEVEL 3 blue green Disposable sterile 60 gms Go",
                year: "2"
            },
            {
                img: moto,
                desc: "Vetements Bien Finis Avec Des Design À La",
                infos: " High Quality A AMI LEVEL 3 blue green Disposable sterile 60 gms Go",
                year: "2"
            },
            {
                img: pnue,
                desc: "Vetements Bien Finis Avec Des Design À La",
                infos: " High Quality A AMI LEVEL 3 blue green Disposable sterile 60 gms Go",
                year: "2"
            },
            {
                img: voiture,
                desc: "Vetements Bien Finis Avec Des Design À La",
                infos: " High Quality A AMI LEVEL 3 blue green Disposable sterile 60 gms Go",
                year: "2"
            },
        ],
        ProductSlide: [
            { img: prod1, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
            { img: prod2, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
            { img: prod3, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." },
            { img: prod4, desc: " Ready To Ship High Quality 3 Pieces Formal Suit with..." }
        ],
        faq: [
            {
                quiz: "Are you a manufacturer or trading company",
                rep: `We are a trading company, and we have a close partnership with several manufacturers and
                shipping carriers, so the price of our products and shipping cost can be much lower. Besides,
                better service can be provided`
            },
            {
                quiz: "Q: What is the sample cost with shipping by express?",
                rep: `A: According to our company's rule, the sample is freely provided. You can tell us the products you
                want to get. But the sample cost and the shipping cost need to be paid, and the sample cost will
                be returned when you place the first order (over 10 pcs) with us.`
            },
            {
                quiz: "Can you provide OEM service? Can we add our logo to this item?",
                rep: `Of Couse yes, we have provided OEM service for many clients,
                 and your logo can be added to the items.`
            },
            {
                quiz: "If so, where can the logo be added and what is the MOQ for logo applied products",
                rep: `The logo be added on neckline or chest, 
                and the MOQ for logo applied products is over 10 pcs.`
            },
            {
                quiz: "Can we make our customization packaging? What is the MOQ for customization packaging?",
                rep: `Of course yes, customization packaging service is available. The MOQ for customization packaging
                is over 100 pcs.`
            },
            {
                quiz: "Is the price negotiable",
                rep: ` Yes, if the quantity is over 200pcs, the price is negotiable.`
            },
            {
                quiz: "About the delivery period.",
                rep: `After the order is placed and paid, we will process the order and ship it out in 48 hours. You will get
                the product during 5 to 20days.`
            },
        ],
        overview: [
            { detail: "Place of Origin", value: "okdodod" },
            { detail: "Model Number", value: "okdodod" },
            { detail: "Feature", value: "okdodod" },
            { detail: "Supply type", value: "okdodod" },
            { detail: "Control level", value: "okdodod" },
            { detail: "Decoration", value: "okdodod" },
            { detail: "Place of Origin", value: "okdodod" },
        ],

        /* sub categorie */
        supplierAr: [
            {
                company: "WhenzHou FaBric Trade C., Ltd",
                flag: fr,
                expYear: "2",
                etoil: "4.9",
                reviews: 49,
                businessType: "Manufacturer/Factory",
                mainProduct: "Wrist Watch",
                city: "Shenzhen",
                province: "Guangdong",
                product: [
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" }
                ],
                typeProduct: topranking,
                imgSupplier: supplierShop,
                product2: [
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" },
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" }
                ]
            },
            {
                company: "WhenzHou FaBric Trade C., Ltd",
                flag: fr,
                expYear: "2",
                etoil: "5.0",
                reviews: 20,
                businessType: "Manufacturer/Factory",
                mainProduct: "Wrist Watch",
                city: "Shenzhen",
                province: "Guangdong",
                product: [
                    { img: p1, price: "30.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" }
                ],
                typeProduct: sponsored,
                imgSupplier: supplierShop,
                product2: [
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" },
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" }
                ]
            },
            {
                company: "WhenzHou FaBric Trade C., Ltd",
                flag: fr,
                expYear: "2",
                etoil: "4.9",
                reviews: 49,
                businessType: "Manufacturer/Factory",
                mainProduct: "Wrist Watch",
                city: "Shenzhen",
                province: "Guangdong",
                product: [
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" }
                ],
                typeProduct: topranking,
                imgSupplier: supplierShop,
                product2: [
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" },
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" }
                ]
            },
            {
                company: "WhenzHou FaBric Trade C., Ltd",
                flag: fr,
                expYear: "2",
                etoil: "4.9",
                reviews: 49,
                businessType: "Manufacturer/Factory",
                mainProduct: "Wrist Watch",
                city: "Shenzhen",
                province: "Guangdong",
                product: [
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" }
                ],
                typeProduct: topranking,
                imgSupplier: supplierShop,
                product2: [
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" },
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" }
                ]
            },
            {
                company: "WhenzHou FaBric Trade C., Ltd",
                flag: fr,
                expYear: "2",
                etoil: "4.9",
                reviews: 49,
                businessType: "Manufacturer/Factory",
                mainProduct: "Wrist Watch",
                city: "Shenzhen",
                province: "Guangdong",
                product: [
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" }
                ],
                typeProduct: topranking,
                imgSupplier: supplierShop,
                product2: [
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" },
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" }
                ]
            },
            {
                company: "WhenzHou FaBric Trade C., Ltd",
                flag: fr,
                expYear: "2",
                etoil: "4.9",
                reviews: 49,
                businessType: "Manufacturer/Factory",
                mainProduct: "Wrist Watch",
                city: "Shenzhen",
                province: "Guangdong",
                product: [
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" }
                ],
                typeProduct: topranking,
                imgSupplier: supplierShop,
                product2: [
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" },
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" }
                ]
            },
            {
                company: "WhenzHou FaBric Trade C., Ltd",
                flag: fr,
                expYear: "2",
                etoil: "4.9",
                reviews: 49,
                businessType: "Manufacturer/Factory",
                mainProduct: "Wrist Watch",
                city: "Shenzhen",
                province: "Guangdong",
                product: [
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" }
                ],
                typeProduct: topranking,
                imgSupplier: supplierShop,
                product2: [
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" },
                    { img: p1, price: "19.00" },
                    { img: p2, price: "19.00" },
                    { img: p1, price: "29.00" }
                ]
            }
        ],
        productList: [
            {
                img: Product_21,
                nameProduct: "Wholesale factory custom fashion gift",
                priceInf: "7,20",
                priceSup: "10.88",
                nbPiece: "100",
                gender: "Men",
                caseShap: "Round",
                Movement: "Quartz",
                feature: "Day/Date, Luminous, chro..",
                clashType: "Buckle",
                surfaceMaterial: "Mineral Glass",
                company: "Shenzhen Feiny Co., Ltd",
                flagCountry: fr,
                expYear: "3",
            },
            {
                img: Product_22,
                nameProduct: "Wholesale factory custom fashion gift",
                priceInf: "7,20",
                priceSup: "10.88",
                nbPiece: "100",
                gender: "Men",
                caseShap: "Round",
                Movement: "Quartz",
                feature: "Day/Date, Luminous, chro..",
                clashType: "Buckle",
                surfaceMaterial: "Mineral Glass",
                company: "Shenzhen Feiny Co., Ltd",
                flagCountry: fr,
                expYear: "3",
            },
            {
                img: Product_23,
                nameProduct: "Wholesale factory custom fashion gift",
                priceInf: "7,20",
                priceSup: "10.88",
                nbPiece: "100",
                gender: "Men",
                caseShap: "Round",
                Movement: "Quartz",
                feature: "Day/Date, Luminous, chro..",
                clashType: "Buckle",
                surfaceMaterial: "Mineral Glass",
                company: "Shenzhen Feiny Co., Ltd",
                flagCountry: fr,
                expYear: "3",
            },
            {
                img: Product_24,
                nameProduct: "Wholesale factory custom fashion gift",
                priceInf: "7,20",
                priceSup: "10.88",
                nbPiece: "100",
                gender: "Men",
                caseShap: "Round",
                Movement: "Quartz",
                feature: "Day/Date, Luminous, chro..",
                clashType: "Buckle",
                surfaceMaterial: "Mineral Glass",
                company: "Shenzhen Feiny Co., Ltd",
                flagCountry: fr,
                expYear: "3",
            },
            {
                img: Product_25,
                nameProduct: "Wholesale factory custom fashion gift",
                priceInf: "7,20",
                priceSup: "10.88",
                nbPiece: "100",
                gender: "Men",
                caseShap: "Round",
                Movement: "Quartz",
                feature: "Day/Date, Luminous, chro..",
                clashType: "Buckle",
                surfaceMaterial: "Mineral Glass",
                company: "Shenzhen Feiny Co., Ltd",
                flagCountry: fr,
                expYear: "3",
            },
            {
                img: Product_21,
                nameProduct: "Wholesale factory custom fashion gift",
                priceInf: "7,20",
                priceSup: "10.88",
                nbPiece: "100",
                gender: "Men",
                caseShap: "Round",
                Movement: "Quartz",
                feature: "Day/Date, Luminous, chro..",
                clashType: "Buckle",
                surfaceMaterial: "Mineral Glass",
                company: "Shenzhen Feiny Co., Ltd",
                flagCountry: fr,
                expYear: "3",
            },
            {
                img: Product_22,
                nameProduct: "Wholesale factory custom fashion gift",
                priceInf: "7,20",
                priceSup: "10.88",
                nbPiece: "100",
                gender: "Men",
                caseShap: "Round",
                Movement: "Quartz",
                feature: "Day/Date, Luminous, chro..",
                clashType: "Buckle",
                surfaceMaterial: "Mineral Glass",
                company: "Shenzhen Feiny Co., Ltd",
                flagCountry: fr,
                expYear: "3",
            },
            {
                img: Product_23,
                nameProduct: "Wholesale factory custom fashion gift",
                priceInf: "7,20",
                priceSup: "10.88",
                nbPiece: "100",
                gender: "Men",
                caseShap: "Round",
                Movement: "Quartz",
                feature: "Day/Date, Luminous, chro..",
                clashType: "Buckle",
                surfaceMaterial: "Mineral Glass",
                company: "Shenzhen Feiny Co., Ltd",
                flagCountry: fr,
                expYear: "3",
            },
            {
                img: Product_24,
                nameProduct: "Wholesale factory custom fashion gift",
                priceInf: "7,20",
                priceSup: "10.88",
                nbPiece: "100",
                gender: "Men",
                caseShap: "Round",
                Movement: "Quartz",
                feature: "Day/Date, Luminous, chro..",
                clashType: "Buckle",
                surfaceMaterial: "Mineral Glass",
                company: "Shenzhen Feiny Co., Ltd",
                flagCountry: fr,
                expYear: "3",
            },
            {
                img: Product_25,
                nameProduct: "Wholesale factory custom fashion gift",
                priceInf: "7,20",
                priceSup: "10.88",
                nbPiece: "100",
                gender: "Men",
                caseShap: "Round",
                Movement: "Quartz",
                feature: "Day/Date, Luminous, chro..",
                clashType: "Buckle",
                surfaceMaterial: "Mineral Glass",
                company: "Shenzhen Feiny Co., Ltd",
                flagCountry: fr,
                expYear: "3",
            },
            {
                img: Product_25,
                nameProduct: "Wholesale factory custom fashion gift",
                priceInf: "7,20",
                priceSup: "10.88",
                nbPiece: "100",
                gender: "Men",
                caseShap: "Round",
                Movement: "Quartz",
                feature: "Day/Date, Luminous, chro..",
                clashType: "Buckle",
                surfaceMaterial: "Mineral Glass",
                company: "Shenzhen Feiny Co., Ltd",
                flagCountry: fr,
                expYear: "3",
            },
            {
                img: Product_25,
                nameProduct: "Wholesale factory custom fashion gift",
                priceInf: "7,20",
                priceSup: "10.88",
                nbPiece: "100",
                gender: "Men",
                caseShap: "Round",
                Movement: "Quartz",
                feature: "Day/Date, Luminous, chro..",
                clashType: "Buckle",
                surfaceMaterial: "Mineral Glass",
                company: "Shenzhen Feiny Co., Ltd",
                flagCountry: fr,
                expYear: "3",
            },
        ],
        productPromo: [
            {img: buldozer},
            {img: buldozer},
            {img: buldozer},
            {img: buldozer},
        ]
    },
    reducers: {}
})

export default myStore.reducer