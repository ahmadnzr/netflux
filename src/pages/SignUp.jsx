import React from "react";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";

import batman from "../assets/batman.jpg";

const SignUp = () => {
  const validation = (field) => {
    const errors = {};

    // required validation
    if (!field.userId) {
      errors.userId = "Required";
    }
    if (!field.email) {
      errors.email = "Required";
    }
    if (!field.password) {
      errors.password = "Required";
    }
    if (!field.cPassword) {
      errors.cPassword = "Required";
    }

    // cPassword not same
    if (field.cPassword && field.password !== field.cPassword) {
      errors.cPassword = "Invalid password confirmation";
    }

    // invalid email
    if (field.email) {
      const testValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;
      if (!testValid.test(field.email)) {
        errors.email = "Invalid email";
      }
    }

    return errors;
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="h-screen w-full p-[150px] relative">
      <div className=" w-[1440px] absolute flex bg-white text-black top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-[24px] overflow-hidden">
        <div className="flex-1 flex flex-col justify-center text-center">
          <h1 className="mb-[15px] font-bold text-[48px] leading-[58px] text-[#0B2F8A]">
            Sign In
          </h1>
          <Form
            onSubmit={onSubmit}
            validate={validation}
            render={({ handleSubmit, values }) => (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-[10px] px-[100px]"
              >
                <Field name="userId">
                  {({ input, meta }) => (
                    <div className="flex flex-col items-start">
                      <label className="w-full text-left">User Id</label>
                      <input
                        {...input}
                        type="text"
                        placeholder="User id"
                        className="w-full form-control mt-[10px] px-[10px] py-[20px] border border-solid border-b-gray-300 rounded transition"
                      />
                      {meta.error && meta.touched && (
                        <span className="text-red-400 text-xs mt-[5px]">
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>
                <Field name="email">
                  {({ input, meta }) => (
                    <div className="flex flex-col items-start">
                      <label className="w-full text-left">Email</label>
                      <input
                        {...input}
                        type="text"
                        placeholder="Email"
                        className="w-full form-control mt-[10px] px-[10px] py-[20px] border border-solid border-b-gray-300 rounded transition"
                      />
                      {meta.error && meta.touched && (
                        <span className="text-red-400 text-xs mt-[5px]">
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <div className="flex flex-col items-start">
                      <label className="w-full text-left">Password</label>
                      <input
                        {...input}
                        type="password"
                        placeholder="Password"
                        className="w-full form-control mt-[10px] px-[10px] py-[20px] border border-solid border-b-gray-300 rounded transition"
                      />
                      {meta.error && meta.touched && (
                        <span className="text-red-400 text-xs mt-[5px]">
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>
                <Field name="cPassword">
                  {({ input, meta }) => (
                    <div className="flex flex-col items-start">
                      <label className="w-full text-left">
                        Confim Password
                      </label>
                      <input
                        {...input}
                        type="password"
                        placeholder="Password"
                        className="w-full form-control mt-[10px] px-[10px] py-[20px] border border-solid border-b-gray-300 rounded transition"
                      />
                      {meta.error && meta.touched && (
                        <span className="text-red-400 text-xs mt-[5px]">
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>
                <div className="text-center">
                  <button className="px-[75px] py-[14px] bg-[#0B2F8A] shadow-md text-white rounded-lg">
                    Sign Up
                  </button>
                </div>
              </form>
            )}
          />
          <span className="mt-[20px] text-sm">
            Sudah punya akun ?,&nbsp;
            <Link to={"/signin"} className="underline text-blue-400">
              Login sekarang
            </Link>
          </span>
        </div>
        <div
          className="flex-1 h-[720px] relative"
          style={{ backgroundImage: `url(${batman})` }}
        ></div>
      </div>
    </div>
  );
};

export default SignUp;