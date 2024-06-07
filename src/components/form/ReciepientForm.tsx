import React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Stack,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormHead } from "./FormHead.tsx";
// import
import { ReceipientFormSchema } from "../../model/Schema.tsx";
export const ReceipientForm: React.FC = () => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(ReceipientFormSchema),
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
      }}
    >
      <FormHead heading="Tell us about your gift recipient "/>
      <Box className=" !w-full">
        <Typography className=" text-left !mb-3">
          Who are you buying for?
        </Typography>
        <Controller
          name="buying"
          control={control}
          render={({ field }) => <TextField {...field} className="!w-full"  />}
        />
      </Box>
      <Box className=" !w-full">
        <Typography className=" text-left !mb-3">How old are they?</Typography>
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <>
              <Box className=" flex items-center gap-4">
                <TextField {...field} className="!w-full  max-w-44 " />
                <Typography component="span">years old</Typography>
              </Box>
            </>
          )}
        />
      </Box>
      <Box>
        <Typography className=" text-left !mb-3">They identify as:</Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <Stack direction="row" spacing={2}>
            <Box className="!w-full  border-2 border-[#50BCD9] rounded">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </Box>
            <Box className="!w-full  border-2 border-[#50BCD9] rounded">
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </Box>
            <Box className="!w-full  border-2 border-[#50BCD9] rounded">
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </Box>
          </Stack>
        </RadioGroup>
      </Box>
      <Box className=" !w-full">
        <Typography className=" text-left !mb-3">
          Who are you buying for?
        </Typography>
        <Controller
          name="buying"
          control={control}
          render={({ field }) => (
            <TextField
              multiline
              rows={4}
              {...field}
              placeholder="Enter interests and hobbies"
              variant="outlined"
              className="!w-full"
            />
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
            sx={{
              padding: "10px 16px",
              background: "#50BCD9",
            }}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
