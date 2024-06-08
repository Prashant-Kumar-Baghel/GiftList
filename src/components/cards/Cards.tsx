

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
}

interface CardsProps {
  productItem: ProductItem;
}

const Cards: React.FC<CardsProps> = ({ productItem }) => {
  const [value, setValue] = React.useState<number | null>(2);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedProduct(productItem));
  };

  return (
    <Card sx={{ width:207.5, height:331.5 }} className="border-[1px] border-solid border-[#E8ECF1] relative" onClick={handleClick}>
      <CardMedia
        sx={{ height: 115.95, width:143 }}
        image={productItem.image}
        title={productItem.name}
        className=" top-[6.49px] ml-[31px] mr-[33px] mb-[1.43px] mt-[6.49px]"
      />
      <CardContent sx={{background:"#FAFBFD"}}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="text-left text-[#0F7B9B] "
          sx={{fontSize:11,fontWeight:600,marginBottom:"4px"}}
        >
          {productItem.quantity}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="text-left text-[#101A34]"
          sx={{fontSize:"15px",fontWeight:600,marginBottom:"30px"}}
        >
          {productItem.name}
        </Typography>
        <Box className="flex items-center gap-[4px]">
          <Typography className="text-[#FFA31A]"
          sx={{fontSize:"11px",fontWeight:400}}>{productItem.rating}</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography className="font-[400] text-[11px] text-[#A8ACB3]"
          sx={{fontSize:"11px",fontWeight:400}}>(1000)</Typography>
        </Box>
        <CardActions sx={{padding:"0px",marginTop:"14px"}}>
          <Button  sx={{
    borderWidth: "1px",
    borderColor: "#E8ECF1",
    borderStyle: "solid",
    borderRadius: "4px",
    padding: "2px 6px 2px 6px"
  }} size="small" startIcon={<AttachMoneyIcon sx={{color:"#A8ACB3",fontSize:"15px"}} />}>
            <span className="text-[black] text-[15px] font-bold">{productItem.price}</span>
          </Button>
        </CardActions>
        <Typography className="text-left" sx={{fontSize:"11px",fontWeight:400,color:"#101A34",marginTop:"8px"}}>Typical range: ${productItem.range}</Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
