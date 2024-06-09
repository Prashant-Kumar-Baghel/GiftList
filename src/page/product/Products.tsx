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
  text: string;
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Navbar authorize={false} />
      <main>
        <section className="max-w-[1086px] mx-auto mt-[45px] px-[20px] lg:px-4 lg:mt-[104px]">
          <div className="text-3xl font-semibold text-left">
            <span className="bg-gradient-to-r from-sky-400 to-fuchsia-500 h-10 text-transparent bg-clip-text">
              Genie
            </span>
            : AI Gift Ideas
          </div>

          <div className="relative mt-4">
            <input
              type="text"
              className="w-full h-[92px] border border-[#CAD3DD] focus:border-white focus:outline outline-[1.5px] outline-[#50BCD9] rounded-md pl-8 pr-20 font-normal placeholder-large"
              placeholder="Recommend birthday gift ideas for my 55 year old mother. She likes pickleball, g..."
            />
            <div className="bg-gradient-to-r from-sky-400 to-fuchsia-500 justify-center items-center gap-1 flex rounded-full w-[44px] lg:w-[49px] h-[44px] absolute top-6 right-4">
              <img
                className="w-11 h-11 lg:w-12 lg:h-12"
                src="/images/6.png"
                alt=""
              />
            </div>
          </div>
          <div className="text-base text-gray-700 mt-[20px]">
            Not liking these suggestions? Try again with more details or{" "}
            <span className="text-[#50BCD9] font-semibold">
              get help from Genie
            </span>
          </div>
        </section>

        <div className="max-w-[1086px] mx-auto mt-[121px] px-[20px] lg:px-[0px]">
          <div className="flex justify-between items-start lg:items-center">
            <h2 className="text-[20px] lg:text-[30px] font-[600] h-[36px] text-left mb-[32px]">
              1. Beauty gift basket
            </h2>
            <div className="text-sm text-[#50BCD9] flex items-centers">
              See more{" "}
             <img src="/images/arrow.png" className="w-[18px] h-[18px]" alt="" />
            </div>
          </div>
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
        <div className="flex justify-between items-start lg:items-center">
            <h2 className="text-[20px] lg:text-[30px] font-[600] h-[36px] text-left mb-[32px]">
              2. Title here
            </h2>
            <div className="text-sm text-[#50BCD9] flex items-centers">
              See more{" "}
             <img src="/images/arrow.png" className="w-[18px] h-[18px]" alt="" />
            </div>
          </div>
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
        <div className="flex justify-between items-start lg:items-center">
            <h2 className="text-[20px] lg:text-[30px] font-[600] h-[36px] text-left mb-[32px]">
              3. Title here
            </h2>
            <div className="text-sm text-[#50BCD9] flex items-centers">
              See more{" "}
             <img src="/images/arrow.png" className="w-[18px] h-[18px]" alt="" />
            </div>
          </div>
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
        <div className="flex justify-between items-start lg:items-center">
            <h2 className="text-[20px] lg:text-[30px] font-[600] h-[36px] text-left mb-[32px]">
              4. Title here
            </h2>
            <div className="text-sm text-[#50BCD9] flex items-centers">
              See more{" "}
             <img src="/images/arrow.png" className="w-[18px] h-[18px]" alt="" />
            </div>
          </div>
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
        <Footer />
      </main>
    </>
  );
};

export default Products;
