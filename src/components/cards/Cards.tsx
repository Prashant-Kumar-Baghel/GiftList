import { useDispatch } from "react-redux";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { setSelectedProduct } from "../../redux/productSlice.tsx";

interface ProductItem {
  quantity: string;
  name: string;
  rating: string;
  price: string;
  range: string;
  image: string;
  text: string;
}

interface CardsProps {
  productItem: ProductItem;
}

const Cards: React.FC<CardsProps> = ({ productItem }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedProduct(productItem));
  };

  return (
    <Card
      sx={{  height: 331.5 }}
      className="border-[1px] border-solid border-[#E8ECF1] relative w-[100%] lg:w-[207.5px]"
    >
      <CardMedia
        sx={{ height: 115.95, width: 143 }}
        image={productItem.image}
        title={productItem.name}
        className=" top-[6.49px] ml-[31px] mr-[33px] mb-[1.43px] mt-[6.49px]"
      />
      <CardContent sx={{ background: "#FAFBFD" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="text-left text-[#0F7B9B] "
          sx={{ fontSize: 11, fontWeight: 600, marginBottom: "4px" }}
        >
          {productItem.quantity}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="text-left text-[#101A34]"
          sx={{ fontSize: "15px", fontWeight: 600, marginBottom: "30px" }}
        >
          {productItem.name}
        </Typography>
        <Box className="flex items-center gap-[4px]">
          <Typography
            className="text-[#FFA31A]"
            sx={{ fontSize: "11px", fontWeight: 400 }}
          >
            {productItem.rating}
          </Typography>
          <Rating
            name="simple-controlled"
            value={4}
            max={4}
          />
          <Typography
            className="font-[400] text-[11px] text-[#A8ACB3]"
            sx={{ fontSize: "11px", fontWeight: 400 }}
          >
            (1000)
          </Typography>
        </Box>
        <CardActions sx={{ padding: "0px", marginTop: "14px" }}>
          <Button
            sx={{
              borderWidth: "1px",
              borderColor: "#E8ECF1",
              borderStyle: "solid",
              borderRadius: "4px",
              padding: "2px 6px 2px 6px",
            }}
            size="small"
            startIcon={
              <AttachMoneyIcon sx={{ color: "#A8ACB3", fontSize: "15px" }} />
            }
          >
            {productItem?.text === "Sale" ? (
              <p className="relative inline-block text-black">
              <span className="relative z-10 font-bold text-[15px]">{productItem.price}</span>
              <span
                className="absolute inset-0 line-through"
                style={{ color: 'red', top: '50%', transform: 'translateY(-50%)', width: '100%', height: '1px', backgroundColor: 'red' }}
              ></span>
            </p>
            ) : (
              <span className="text-[black] text-[15px] font-bold">
                {productItem.price}
              </span>
            )}
          </Button>
          {productItem?.text && productItem?.text === "Sale" && <div className="text-bold text-red-500 text-[14px] ml-[8px]">
            <span className="text-red-500 ">$</span>250
            </div>}
        </CardActions>
        <Typography
          className="text-left"
          sx={{
            fontSize: "11px",
            fontWeight: 400,
            color: "#101A34",
            marginTop: "8px",
          }}
        >
          Typical range: ${productItem.range}
        </Typography>
      </CardContent>
      <div className="absolute top-[6px] right-[6.5px] left-2 flex justify-between items-center">
        {productItem?.text && productItem?.text === "Top pick" && (
          <div className=" bg-[#56C984] text-white px-1.5 py-1.5 text-sm font-medium rounded-md">
            {productItem?.text}
          </div>
        )}
        {productItem?.text && productItem?.text === "Lower price" && (
          <div className=" bg-[#1E90D6] text-white px-1.5 py-1.5 text-sm font-medium rounded-md">
            {productItem?.text}
          </div>
        )}
        {productItem?.text && productItem?.text === "Sale" && (
          <div className=" bg-[#FF574D] text-white px-1.5 py-1.5 text-sm font-medium rounded-md">
            {productItem?.text}
          </div>
        )}
        <button className="absolute right-[6px] top-[4px]">
          <img src="/images/button.png" alt="" onClick={handleClick} />
        </button>
      </div>
    </Card>
  );
};

export default Cards;
