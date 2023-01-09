import React, { useState } from "react";
import { Product } from "../Product/Product";
import Header from "../Header/Header";
import "./Home.css";
import { Footer } from "../Footer/Footer";

function Home() {
  const products = [
    {
      id: 1,
      title:
        "Apple 2021 iMac with 4.5K Retina Display (24-inch/60.96 cm, M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB) - Pink",
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/31-thesnl6S._SY445_SX342_QL70_FMwebp_.jpg",
      category: "Desktop",
      price: 148490.38,
      rating: 5,
    },
    {
      id: 2,
      title:
        "Acer EK220Q 21.5 Inch (54.61 cm) Full HD (1920x1080) VA Panel LCD Monitor with LED Back Light I 250 Nits I HDMI, VGA Ports I Eye Care Features",
      img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SX450_.jpg",
      category: "Desktop",
      price: 8000,
      rating: 4,
    },
    {
      id: 3,
      title:
        "LG 22Mp68Vq 22 Inch (55 Cm) LCD 1920 X 1080 Pixels IPS Monitor - Full Hd, with Vga, Hdmi, Dvi, Audio Out Ports (Black)",
      img: "https://m.media-amazon.com/images/I/61YgrcTh29L._SX450_.jpg",
      category: "Desktop",
      price: 9000,
      rating: 4,
    },

    {
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71T5NVOgbpL._SX679_.jpg",
      id: 4,
      title:
        "Apple iPhone 14 Pro 1TB Gold 15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion",
      category: "Mobile",
      price: 139900,
      rating: 4,
    },

    {
      img: "https://m.media-amazon.com/images/I/71ZOtNdaZCL._SX679_.jpg",
      id: 5,
      title:
        "Apple iPhone 12 (128GB) - Blue 6.1-inch (15.5 cm diagonal) Super Retina XDR display Ceramic Shield",
      price: 58000,
      category: "Mobile",
      rating: 5,
    },
    {
      img: "https://m.media-amazon.com/images/I/31p5cVyRLmL._SY445_SX342_QL70_FMwebp_.jpg",
      id: 6,
      title:
        "Apple iPhone 13 (128GB) - Pink 15 cm (6.1-inch) Super Retina XDR display Cinematic mode adds shallow depth of field",
      category: "Mobile",
      price: 62000,
      rating: 4,
    },

    {
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71jG+e7roXL._SX679_.jpg",
      id: 7,
      title:
        "2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard",
      category: "Laptop",
      price: 87000.58,
      rating: 5,
    },
    {
      img: "https://m.media-amazon.com/images/I/71umlOrdukL._SY450_.jpg",
      id: 8,
      title:
        "Fujitsu UH-X 11th Gen Intel Core i7 13.3 FHD IPS 400Nits 2-in1 Touch Convertible Laptop (16GB/1TB SSD/Windows11/MS Office 2021",
      category: "Laptop",
      price: 94000,
      rating: 5,
    },
    {
      img: "https://m.media-amazon.com/images/I/31ZmZ7rdDSL._SY300_SX300_QL70_FMwebp_.jpg",
      id: 9,
      title:
        "Lenovo V15 Intel Celeron N4020 15.6 (39.62 cm) HD 220 nits Antiglare Thin and Light Laptop (4GB RAM/256GB SSD/DOS/Iron Grey/1.85 kg",
      category: "Laptop",
      price: 38000,
      rating: 5,
    },

    {
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71NTi82uBEL._SX679_.jpg",
      id: 10,
      title:
        "Apple AirPods (2nd Generation) Automatically on, automatically connected Easy setup for all your Apple devices",
      category: "Airpod",
      price: 11999,
      rating: 5,
    },
    {
      img: "https://m.media-amazon.com/images/I/71W+F-nbBQL._SY450_.jpg",
      id: 11,
      title:
        "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with mic, 42H Playtime, Beast Mode(Low Latency Upto 80ms) for Gaming",
      category: "Airpod",
      price: 1400,
      rating: 4,
    },
    {
      img: "https://m.media-amazon.com/images/I/51uhVdzxBkL._SY450_.jpg",
      id: 12,
      title:
        "JBL Tune 125TWS True Wireless In-Ear Headphones - JBL Pure Bass Sound, 32H Battery, Bluetooth, Fast Pair, Comfortable",
      category: "Airpod",
      price: 5000,
      rating: 4,
    },
    {
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61EKBk5dQyL._UX625_.jpg",
      id: 13,
      title: "MACTREE Men's Mid Top Ankle Lace Up Biker Boots",
      category: "Shoes",
      price: 1200,
      rating: 4,
    },

    {
      img: "https://m.media-amazon.com/images/I/71JWqQB7N7L._UY695_.jpg",
      id: 14,
      title:
        "BRUTON Shoes for Trendy Shoes | Casual Shoes | Sports Shoes | Running Shoes |",
      category: "Shoes",
      price: 500,
      rating: 4,
    },

    {
      id: 15,
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61s5dFtibjL._AC_UL320_.jpg",
      category: "Jacket",
      price: 2500.65,
      title:
        "TACVASEN Mens Jacket-Casual Winter Cotton Military Jacket Thicken Hooded Cargo Coat",
      rating: 5,
    },

    {
      id: 16,
      img: "https://m.media-amazon.com/images/I/61eMJalktNL._UY741_.jpg",
      category: "Jacket",
      price: 900,
      title:
        "Ben Martin Men's Quilted Bomber Jacket Stylish Polyster Jacket Trendy Zip-through Bomber Quilted Jacket Colour : Black",
      rating: 5,
    },

    {
      id: 17,
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61XnPWdRAWL._UY741_.jpg",
      title:
        "Majestic Man Slim Fit Cotton Blend Formal Shirts for Men abric - Cotton Blend, Pre-Washed for extremely soft",
      category: "Shirt",
      price: 800,
      rating: 3,
    },

    {
      id: 18,
      img: "https://m.media-amazon.com/images/I/61nnukoFE+L._UY741_.jpg",
      title:
        "Dennis Lingo Men's Slim Fit Casual Shirt Fabric - 100% Premium Cotton, Pre-Washed for extremely soft finish and Guaranteed 0% Shrinkage",
      category: "Shirt",
      price: 700,
      rating: 3,
    },

    {
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/31IbJbwbdLL.jpg",
      id: 19,
      title:
        "SHIMLA COLLECTION Nice Black Blazer for Men Black Coat for Men Stylish Single Breasted Formal Regular Slim Fit Casual Full Sleeves Solid Latest Suit Coat",
      category: "Suit",
      price: 2500,
      rating: 3,
    },

    {
      img: "https://m.media-amazon.com/images/I/61dG2ZrTQNL._UX679_.jpg",
      id: 20,
      title:
        "Men's Slim Fit Casual 1 Button Notched Lapel Blazer Jacket MATERIAL:Polyester and Cotton; Lining:Polyester DESIGN:One-button closure, Long sleeves",
      category: "Suit",
      price: 7000,
      rating: 3,
    },
    {
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61fyjzIZzVL._UX679_.jpg",
      id: 21,
      title:
        "GAINX Rectangular Branded Latest and Stylish Sunglasses | 100% UV Protected | Men & Women | Medium",
      category: "Sunglass",
      price: 700,
      rating: 3,
    },
    {
      img: "https://m.media-amazon.com/images/I/51sbb1ZeycL._UX679_.jpg",
      id: 22,
      title: "ELEGANTE Tony Stark Steampunk Metal Round Sunglass for Men",
      category: "Sunglass",
      price: 400,
      rating: 3,
    },
    {
      img: "https://m.media-amazon.com/images/I/31Z9cEy0-jL._SY445_SX342_QL70_FMwebp_.jpg",
      id: 23,
      title:
        "Samsung 23 L Solo Microwave Oven (MS23J5133AG/TL, Healthy Cook, Black) Capacity 23 L : Suitable for families with 3 to 4 members Solo Microwave Oven ",
      category: "Oven",
      price: 8000,
      rating: 4,
    },
  ];

  // eslint-disable-next-line
  const [items, setItems] = useState(products);

  const selectCat = (cat) => {
    const newcat = products.filter((elem) => {
      return cat === elem.category;
    });
    setItems(newcat);
    console.log(newcat);
  };

  const newArray = [];

  products.forEach(function (x) {
    if (!newArray.includes(x.category)) newArray.push(x.category);
  });

  console.log(newArray);

  return (
    <>
      <Header />
      <div className="Home">
        <div className="category">
          <b>Select Categories: </b>
          <span className="cat_items" onClick={() => setItems(products)}>
            All
          </span>

          {newArray.map((elem, i) => {
            return (
              <span
                className="cat_items"
                key={i}
                onClick={() => selectCat(elem)}
              > {elem}
              </span>
            );
          })}
        </div>

        <div className="homeImg"></div>

  

        <div className="home_row">
          {items.map((elem, i) => {
            return (
              <Product
                key={i}
                id={elem.id}
                title={elem.title}
                img={elem.img}
                price={elem.price}
                rating={elem.rating}
              />
            );
          })}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
