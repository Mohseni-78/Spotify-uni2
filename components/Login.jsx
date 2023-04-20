import React from "react";
import Link from "next/link";
import Image from "next/image";
// Imported next-auth ====>
import { signIn } from "next-auth/react";
// Imported Fromik ====>
import { useFormik } from "formik";
// Imported yupSchema ====>
import { loginSchema } from "@/schema/yupSchema";
// Imported Images ====>
import bgRegister from "@/public/bgRegister.jpg";
import { toast } from "react-hot-toast";

const SignIn = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const res = await signIn("credentials", {
        ...values,
        redirect: false,
      });
      if (res?.status === 200) {
        toast.success(`welcome Back !`);
        window.location.href = "/";
      } else {
        toast.error(`Error : ${res.error}`,{
          style:{
            fontSize:"14px"
          }
        });
      }
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
          <Link href={"/signup"} className="hover:underline text-red-600">
            Create new account ?
          </Link>
          <div className="flex gap-3 mt-3 items-center justify-start">
            <button
              className={`btn ${isSubmitting && "disable"}`}
              type="submit"
            >
              {isSubmitting ? "Loading..." : "Login"}
            </button>
            {/* <button className='btn text-red-500' type='button' onClick={resetForm}>Reset</button> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
