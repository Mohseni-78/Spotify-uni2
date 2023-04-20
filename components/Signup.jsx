import React from "react";
import Link from "next/link";
import Image from "next/image";
// Imported Images ====>
import bgRegister from "@/public/bgRegister.jpg";
// Imported Fromik ====>
import { useFormik } from "formik";
// Imported yupSchema ====>
import { registerSchema } from "@/schema/yupSchema";
import { toast } from "react-hot-toast";

const Signup = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ ...values }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "Success") {
            toast.success("Register succefully Please login now !",{
              style:{
                fontSize:"15px"
              }
            });
            window.location.href = "/";
          } else {
            toast.error(`Error : ${data.message}`);
          }
        });
    },
  });
  return (
    <>
      <Image src={bgRegister} alt="" className="relative blur-sm"></Image>
      <div className="flex flex-col justify-center items-center my-auto h-screen  absolute top-0 right-auto left-auto w-full">
        <Link href="/">
          <picture>
            <img
              className="cursor-pointer text-[#1DB954] "
              src="https://rb.gy/xkacau"
              width={150}
              height={150}
              alt=""
            />
          </picture>
        </Link>
        <form className="w-1/2 grid gap-3" onSubmit={handleSubmit}>
          <div className="grid gap-1">
            <label className="labelStyle" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="inputStyle"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              id="name"
              placeholder="Enter Your Name..."
            />
            <span className=" text-xs  text-red-400">
              {errors.name && touched.name && errors.name}
            </span>
          </div>
          <div className="grid gap-1">
            <label className="labelStyle" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              className="inputStyle"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              id="lastName"
              placeholder="Enter Your Last Name..."
            />
            <span className=" text-xs  text-red-400">
              {errors.lastName && touched.lastName && errors.lastName}
            </span>
          </div>
          <div className="grid gap-1">
            <label className="labelStyle" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              className="inputStyle"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              placeholder="Enter Your Email..."
            />
            <span className=" text-xs  text-red-400">
              {errors.email && touched.email && errors.email}
            </span>
          </div>
          <div className="grid gap-1">
            <label className="labelStyle" htmlFor="password">
              Password
            </label>
            <input
              type="text"
              className="inputStyle"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              placeholder="Enter Your Password..."
            />
            <span className=" text-xs  text-red-400">
              {errors.password && touched.password && errors.password}
            </span>
          </div>
          <div className="grid gap-1">
            <label className="labelStyle" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="text"
              className="inputStyle"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              id="confirmPassword"
              placeholder="Enter Your Confirm Password..."
            />
            <span className=" text-xs  text-red-400">
              {errors.confirmPassword &&
                touched.confirmPassword &&
                errors.confirmPassword}
            </span>
          </div>
          <p className="text-red-600 text-sm">
            Already have an account?{" "}
            <Link className="text-white  hover:underline" href={"/login"}>
              Login
            </Link>
          </p>

          <div className="flex gap-3 mt-3 items-center justify-start">
            <button
              className={`btn ${isSubmitting && "disable"}`}
              type="submit"
            >
              {isSubmitting ? "Loading..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
