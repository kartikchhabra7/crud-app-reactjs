import * as yup from "yup";
import {
  CONFIRM_PASSWORD_REQUIRED,
  PASSWORD,
  PASSWORD_MUST_MATCH,
  PASSWORD_REQUIRED,
  PASSWORD_REQUIRED_LOWER_CASE,
  PASSWORD_REQUIRED_NUMBER,
  PASSWORD_REQUIRED_SYMBOL,
  PASSWORD_REQUIRED_UPPER_CASE,
  PROFILE_REQUIRED,
} from "../constants/validationMessages";

export const validateschema = yup.object().shape({
  name: yup.string().max(15).min(4).required(),
  profile: yup.string().max(19).min(4).required(PROFILE_REQUIRED),
  email: yup.string().email().required(),
  password: yup
    .string()
    .max(15)
    .min(5)
    .matches(/[0-9]/, PASSWORD_REQUIRED_NUMBER)
    .matches(/[a-z]/, PASSWORD_REQUIRED_LOWER_CASE)
    .matches(/[A-Z]/, PASSWORD_REQUIRED_UPPER_CASE)
    .matches(/[^\w]/, PASSWORD_REQUIRED_SYMBOL)
    .required(PASSWORD_REQUIRED),
  confirmPassword: yup
    .string()
    .max(15)
    .min(5)
    .oneOf([yup.ref(PASSWORD), null], PASSWORD_MUST_MATCH)
    .required(CONFIRM_PASSWORD_REQUIRED),
});
