import React, { useState } from "react";
import styles from "./SignUp.module.css";
const axios = require("axios");

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const PostData = async () => {
    try {
      const response = await axios.post("http://localhost:8080/signup", {
        username: username,
        email: email,
        password: password,
      });
      console.log(response);
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className={`flex bg-gray-100 py-8 ${styles}`}>
      <div className="w-full max-w-md bg-gradient-to-br from-green-400 to-blue-500 m-auto rounded-lg border border-gray-200 shadow-lg py-10 px-10 md:px-20">
        <h2 className="text-2xl text-center pt-4 pb-5 text-primary	">
          Social App
        </h2>

        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={
              "w-full p-2 text-primary rounded-md transition duration-150 ease-in-out mb-4"
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={
              "w-full  p-2 text-primary rounded-md transition duration-150 ease-in-out mb-4"
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={
              "w-full  p-2 text-primary rounded-md transition duration-150 ease-in-out mb-4"
            }
          />
        </div>

        <div className="flex justify-center item-center">
          <button
            id="signup"
            type="submit"
            className={
              "py-2 px-4 text-white rounded bg-gray-700 hover:bg-gray-800  active:border-black"
            }
            onClick={() => PostData()}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
