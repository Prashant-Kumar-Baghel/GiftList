
import React from "react";
import { TextField, Button, Box, Typography, Grid, FormHelperText } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { GiftFormSchema } from "../../model/Schema.tsx";
import { FormHead } from "./FormHead.tsx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFormData } from "../../redux/formSlice.tsx";

interface GiftProps {
  setStep: any;
}

export const GiftForm: React.FC<GiftProps> = ({ setStep }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(GiftFormSchema),
    mode: "all"
  });

  const submit = (data: any) => {
    dispatch(setFormData(data));
    navigate("/loading-page");
  };

  const onError = (error: any) => {
    console.log(error, "Error");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: { xs: "90%", sm: "80%", md: "60%", lg: "50%" },
        margin: "auto",
        mt: { xs: "10vh", sm: "12vh", md: "15vh", lg: "18vh" },
        padding: { xs: "20px", sm: "30px", md: "40px", lg: "50px" },
      }}
    >
      <FormHead heading="Help us find the right gift!" />
      <Box className="!w-full">
        <Typography className="text-left !mb-3">What's the occasion?</Typography>
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
      <Box className="!w-full">
        <Typography className="text-left !mb-3">What type of a gift would you like?</Typography>
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
        <FormHelperText className="!text-red-600">{errors?.giftType?.message}</FormHelperText>
      </Box>
      <Box className="!w-full">
        <Typography className="text-left !mb-3">What’s the maximum you’re willing to spend?</Typography>
        <Box className="flex gap-4">
          <Box>
            <TextField
              className="!w-full max-w-16"
              value="USD"
              inputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Controller
            name="maximumSpend"
            control={control}
            render={({ field }) => (
              <>
                <Box>
                  <TextField
                    {...field}
                    className="!w-full max-w-44"
                    error={!!errors.maximumSpend}
                    helperText={errors.maximumSpend ? errors.maximumSpend.message : ""}
                  />
                </Box>
              </>
            )}
          />
        </Box>
      </Box>
      <Box className="!w-full">
        <Typography className="text-left !mb-3">What country should we return the results for?</Typography>
        <Controller
          name="countryName"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              defaultValue="Select Option"
              className="!w-full"
              error={!!errors.countryName}
            >
              <MenuItem value={"UnitedStates"}>United States</MenuItem>
              <MenuItem value={"India"}>India</MenuItem>
            </Select>
          )}
        />
        <FormHelperText className="!text-red-600">{errors?.countryName?.message}</FormHelperText>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Button
            className="w-full"
            variant="outlined"
            sx={{
              padding: "10px 16px",
            }}
            onClick={() => setStep(1)}
          >
            Back
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            className="w-full"
            variant="contained"
            startIcon={
              <img src="/images/star.png" className="pr-2" alt="" />
            }
            sx={{
              padding: "10px 16px",
              background: "linear-gradient(89.93deg, #50BCD9 -1.32%, #F14DFF 111.06%)",
            }}
            onClick={handleSubmit(submit, onError)}
          >
            Generate Gift Ideas
          </Button>
        </Grid>
      </Grid>
      <span className="text-center text-[#5E6577] text-[16px] mt-[32px]">Step 2/2</span>
    </Box>
  );
};

