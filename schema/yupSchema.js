import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "cannot be less than two letters")
    .required("Name is required"),
  lastName: Yup.string()
    .min(2, "cannot be less than two letters")
    .required("Last Name is required"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "cannot be less than six letters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password is required"),
});

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "cannot be less than six letters"),
});

export { registerSchema, loginSchema };
