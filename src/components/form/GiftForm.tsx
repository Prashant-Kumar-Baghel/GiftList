import React from "react";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { GiftFormSchema } from "../../model/Schema.tsx";
import { FormHead } from "./FormHead.tsx";
export const GiftForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(GiftFormSchema),
    mode: "all",
  });
  return (
    <Box
      component="form"
      //   onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "50%",
        margin: "auto",
        mt: 5,
        padding: "50px 25px",
      }}
    >
      <FormHead heading="Help us find the right gift!" />
      <Box className=" !w-full">
        <Typography className=" text-left !mb-3">
          What's the occasion?
        </Typography>
        <Controller
          name="ocassion"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="!w-full"
              error={!!errors.ocassion}
              helperText={errors.ocassion ? errors.ocassion.message : ""}
            />
          )}
        />
      </Box>
      <Box className=" !w-full">
        <Typography className=" text-left !mb-3">
          What type of a gift would you like?
        </Typography>
        <Controller
          name="giftType"
          control={control}
          render={({ field }) => (
            <>
              <Select
                {...field}
                defaultValue="Select Option"
                className="!w-full"
                error={!!errors.giftType}
                helperText={errors.giftType ? errors.giftType.message : ""}
              >
                <MenuItem value={"Thoughtful"}>Thoughtful</MenuItem>
                <MenuItem value={"Practical"}>Practical</MenuItem>
                <MenuItem value={"Funny"}>Funny</MenuItem>

                <MenuItem value={"Romantic"}>Romantic</MenuItem>
                <MenuItem value={"Sentimental"}>Sentimental</MenuItem>
                <MenuItem value={"Entertaining"}>Entertaining</MenuItem>
              </Select>
            </>
          )}
        />
      </Box>
      <Box className=" !w-full">
        <Typography className=" text-left !mb-3">
          What’s the maximum you’re willing to spend?
        </Typography>
        <Box className=" flex gap-4">
          <Controller
            name="maximumSpend"
            control={control}
            render={({ field }) => (
              <>
                <Box>
                  <TextField {...field} className="!w-full  max-w-44 " 
                  error={!!errors.maximumSpend}
                helperText={errors.maximumSpend ? errors.maximumSpend.message : ""}
                   />
                </Box>
              </>
            )}
          />
          <Controller
            name="maximumSpend"
            control={control}
            render={({ field }) => (
              <>
                <Box>
                  <TextField {...field} className="!w-full  max-w-44 "
                  error={!!errors.maximumSpend}
                  helperText={errors.maximumSpend ? errors.maximumSpend.message : ""} />
                </Box>
              </>
            )}
          />
        </Box>
      </Box>
      <Box className=" !w-full">
        <Typography className=" text-left !mb-3">
          What country should we return the results for?
        </Typography>
        <Controller
          name="countryName"
          control={control}
          render={({ field }) => (
            <Select {...field} defaultValue="Select Option" className="!w-full"
            error={!!errors.countryName}
            helperText={errors.countryName ? errors.countryName.message : ""}>
              <MenuItem value={"Thoughtful"}>Thoughtful</MenuItem>
              <MenuItem value={"Practical"}>Practical</MenuItem>
              <MenuItem value={"Funny"}>Funny</MenuItem>

              <MenuItem value={"Romantic"}>Romantic</MenuItem>
              <MenuItem value={"Sentimental"}>Sentimental</MenuItem>
              <MenuItem value={"Entertaining"}>Entertaining</MenuItem>
            </Select>
          )}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Button
            className="w-full"
            variant="outlined"
            sx={{
              padding: "10px 16px",
            }}
          >
            Back
          </Button>
        </Grid>
        <Grid item xs={6} md={6}>
          <Button
            className="w-full"
            variant="contained"
            startIcon={
              <img src="/images/auto_awesome.png" className="pr-2" alt="" />
            }
            sx={{
              padding: "10px 16px",
              background:
                "linear-gradient(89.93deg, #50BCD9 -1.32%, #F14DFF 111.06%)",
            }}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
