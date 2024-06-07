import { Box, Container, Typography } from "@mui/material";
import React from "react";
interface FormProps {
  heading: string;
}
export const FormHead: React.FC<FormProps> = ({ heading }) => {
  return (
    <Container className=" !flex flex-col justify-center items-center">
      <Box
        component={"img"}
        alt=""
        className=" h-28 w-28  object-contain  "
        src="/images/gift.png"
      />
      <Typography component={"h1"} className="!text-4xl !mt-5">
        {heading}
      </Typography>
    </Container>
  );
};
