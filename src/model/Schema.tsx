import * as Yup from "yup";

export const ReceipientFormSchema = Yup.object().shape({
  buying: Yup.string().required("This is a required field"),
  age: Yup.number().required("Age is required"),
  identify: Yup.string()
    .oneOf(["female", "male", "other"], "Invalid Gender")
    .required("Identify is required"),
  summary: Yup.string().max(250),
});

export const GiftFormSchema = Yup.object().shape({
  ocassion: Yup.string().required("This is a required field"),
  giftType: Yup.string()
    .oneOf([
      "Thoughtful",
      "Practical",
      "Funny",
      "Romantic",
      "Sentimental",
      "Entertaining",
    ], 'Invalid data')
    .required("Age is required"),
  maximumSpend: Yup.number().required(),
  countryName: Yup.string().required()
});
