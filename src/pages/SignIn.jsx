import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import batman from "../assets/batman.jpg";
import { login } from "../store/user/service";

const SignIn = () => {
  const [error, setError] = useState("");

  const { data } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const required = (value) => (value ? undefined : "required");

  const onSubmit = (values) => {
    const { userId, password } = values;

    const user = data.find(
      (usr) => usr.userId === userId && usr.password === password
    );

    if (user) {
      dispatch(login(user));
      navigate("/");
      return;
    }
    setError("invalid userid or password");
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
            render={({ handleSubmit, values }) => (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-[30px] px-[100px]"
              >
                <Field name="userId" validate={required}>
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
                <Field name="password" validate={required}>
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
                {error.length ? (
                  <span className="text-xs text-red-500">{error}</span>
                ) : null}
                <div className="text-center">
                  <button
                    className="px-[75px] py-[14px] bg-[#0B2F8A] shadow-md text-white rounded-lg"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            )}
          />
          <span className="mt-[20px] text-sm">
            Belum punya akun ?,&nbsp;
            <Link to={"/signup"} className="underline text-blue-400">
              Daftar sekarang
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

export default SignIn;
