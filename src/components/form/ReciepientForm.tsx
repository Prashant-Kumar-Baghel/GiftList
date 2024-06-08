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
import { GiftForm } from "./GiftForm.tsx";
import { ReceipientFormSchema } from "../../model/Schema.tsx";
import { useStep } from "../../conext/stepContext.tsx";

export const ReceipientForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(ReceipientFormSchema),
    mode: "all",
    defaultValues: {
      identify: "female" as const,
    },
  });
  const { step, setStep } = useStep();
  const submit = (data: any) => {
    if (Object.keys(errors)?.length === 0) {
      setStep(2);
    }
    console.log("ReciepientFormData",data);
  };
  const error = (error: any) => {
    console.log(error);
  };
  return (
    <>
      {step === 1 ? (
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "50%",
            margin: "auto",
            mt: "18vh",
            paddingBottom: "15vh",
          }}
        >
          <FormHead heading="Tell us about your gift recipient " />
          <Box className=" !w-full">
            <Typography className=" text-left !mb-3">
              Who are you buying for?
            </Typography>
            <Controller
              name="buying"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="!w-full"
                  error={!!errors.buying}
                  helperText={errors.buying ? errors.buying.message : ""}
                />
              )}
            />
          </Box>
          <Box className=" !w-full">
            <Typography className=" text-left !mb-3">
              How old are they?
            </Typography>
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <>
                  <Box className=" flex items-center gap-4">
                    <TextField
                      {...field}
                      className="!w-full  max-w-44 "
                      error={!!errors.age}
                      helperText={errors.age ? errors.age.message : ""}
                    />
                    <Typography component="span">years old</Typography>
                  </Box>
                </>
              )}
            />
          </Box>
          <Box>
            <Typography className=" text-left !mb-3">
              They identify as:
            </Typography>
            <Controller
              name="identify"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  {...field}
                  onChange={(e) => setValue("identify", e.target.value as "female" | "male" | "other")}
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
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
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
              )}
            />
          </Box>
          <Box className=" !w-full">
            <Typography className=" text-left !mb-3">
              Who are you buying for?
            </Typography>
            <Controller
              name="summary"
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
                onClick={handleSubmit(submit, error)}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
          <span className="text-center text-[#5E6577] text-[16px] mt-[32px]">
            Step 1/2
          </span>
        </Box>
      ) : (
        <GiftForm setStep={setStep} />
      )}
    </>
  );
};
