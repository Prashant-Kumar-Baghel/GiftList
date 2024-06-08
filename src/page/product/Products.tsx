

import React from "react";
import data from "../../data/data.json";
import { useParams } from "react-router-dom";
import Cards from "../../components/cards/Cards.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../components/Navbar/Navbar.tsx";
import Footer from "../../components/Footer/Footer.tsx";
interface ProductItem {
  quantity: string;
  name: string;
  rating: string;
  price: string;
  range: string;
  image: string;
  id: string;
}

const Products: React.FC = () => {
  const { giftType } = useParams<{ giftType: string }>();
  const selectedProducts = useSelector(
    (state: RootState) => state.product.selectedProduct
  );
  console.log("selectedProducts", selectedProducts);
  const getProductByKey = (giftType: string | undefined): ProductItem[] => {
    if (!giftType) {
      return [];
    }
    return data[giftType] || [];
  };

  const products = getProductByKey(giftType);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: products.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <Navbar authorize={false} />
    <main>
      <section className="max-w-[1086px] mx-auto mt-[104px] px-[20px]">
        <div className="text-[30px] font-[600] text-left">
          <span className="bg-gradient-to-r from-sky-400 to-fuchsia-500 h-10 text-transparent bg-clip-text">
            Genie
          </span>
          : AI Gift Ideas
        </div>
        
        <div className="border-[2px] border-solid h-[92px] rounded-[10px] p-[24px] border-[#CAD3DD] flex mt-[32px]">
          <span className="mr-[10px] text-[24px] text-[#5E6577] h-[39px] w-[984px] text-left">Recommend birthday gift ideas for my 55 year old mother. She likes pickleball, gardening....</span>
          <img className="w-[44px] h-[44px]" src="/images/6.png" alt="" />
        </div>
        <div className="text-[16px] text-gray-700 font-[400] mt-[20px] text-left">
            Not liking these suggestion? try again with more details or{" "}
            <span className="text-[#50BCD9] font-[600]">
              get help from Genie
            </span>
          </div>
          
      </section>
      <div className="max-w-[1086px] mx-auto mt-[121px] px-[20px] lg:px-[0px]">
        <h2 className="text-[30px] font-[600] h-[36px] text-left mb-[32px]">1. Beauty gift basket</h2>
        <Slider {...settings}>
          {products.length > 0 ? (
            products.map((productItem: ProductItem, index: number) => (
              <Cards key={productItem?.id} productItem={productItem} />
            ))
          ) : (
            <p>No products found for {giftType}</p>
          )}
        </Slider>
      </div>

      <div className="max-w-[1086px] mx-auto mt-[80px] px-[20px] lg:px-[0px]">
        <h2 className="text-[30px] font-[600] h-[36px] text-left mb-[32px]">2. Title here</h2>
        <Slider {...settings}>
          {products.length > 0 ? (
            products.map((productItem: ProductItem, index: number) => (
              <Cards key={productItem?.id} productItem={productItem} />
            ))
          ) : (
            <p>No products found for {giftType}</p>
          )}
        </Slider>
      </div>

      <div className="max-w-[1086px] mx-auto mt-[80px] px-[20px] lg:px-[0px]">
        <h2 className="text-[30px] font-[600] h-[36px] text-left mb-[32px]">3. Title here</h2>
        <Slider {...settings}>
          {products.length > 0 ? (
            products.map((productItem: ProductItem, index: number) => (
              <Cards key={productItem?.id} productItem={productItem} />
            ))
          ) : (
            <p>No products found for {giftType}</p>
          )}
        </Slider>
      </div>

      <div className="max-w-[1086px] mx-auto mt-[80px] px-[20px] lg:px-[0px]">
        <h2 className="text-[30px] font-[600] h-[36px] text-left mb-[32px]">4. Title here</h2>
        <Slider {...settings}>
          {products.length > 0 ? (
            products.map((productItem: ProductItem, index: number) => (
              <Cards key={productItem?.id} productItem={productItem} />
            ))
          ) : (
            <p>No products found for {giftType}</p>
          )}
        </Slider>
      </div>
      <Footer/>
    </main>
    </>
  );
};

export default Products;
