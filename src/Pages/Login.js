import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";

const Login = () => {
  let [userId, setUserId] = useState("");
  let [password, setPassword] = useState("");
  let [passwordType, setPasswordType] = useState("password");

  const userIdHandler = (e) => {
    setUserId(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const togglePassword = () => {
    if (passwordType == "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("form submission", userId, password);
  };

  return (
    <>
      <LoginComponent>
        <section className="h-full">
          <div className="container px-6 py-6 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                <div className="container px-8 py-8 rounded-xl bg-blue-500/25">
                  <form onSubmit={formSubmitHandler}>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Email address / Phone Number"
                        onChange={userIdHandler}
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type={passwordType}
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Password"
                        onChange={passwordHandler}
                      />

                      {passwordType === "password" ? (
                        <a
                          className="float-right font-bold text-blue-600 hover:text-black focus:text-black transition duration-200 ease-in-out"
                          onClick={togglePassword}
                        >
                          Show Password
                        </a>
                      ) : (
                        <a
                          className="float-right font-bold text-blue-600 hover:text-black focus:text-black transition duration-200 ease-in-out"
                          onClick={togglePassword}
                        >
                          Hide Password
                        </a>
                      )}
                    </div>

                    <div className="flex justify-between items-center mb-6 mt-8">
                      <div className="form-group form-check">
                        <input
                          type="checkbox"
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          id="exampleCheck3"
                        />

                        <label className="form-check-label inline-block text-gray-800">
                          Remember me
                        </label>
                      </div>
                      <a
                        href="#!"
                        className="font-bold text-blue-600 hover:text-black focus:text-black active:text-blue-800 duration-200 transition ease-in-out"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Sign in
                    </button>
                  </form>
                </div>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
                <p className="text-md font-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <Link
                    to="/register"
                    className="mx-4 text-blue-600 hover:text-black focus:text-black transition duration-200 ease-in-out"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </LoginComponent>
    </>
  );
};

export default Login;
