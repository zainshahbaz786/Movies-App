import React from "react";

import axios from "axios";
import { useState } from "react";
const Login = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    
    e.preventDefault();
console.log("handleSubmit");
    
    try {
     
     debugger;
      const response = await axios.post("http://127.0.0.1:8000/authenticate/", {
        
        username:Username,
        password:password,
      });
debugger;
console.log(response.data.access);

      // Store the JWT in local storage
      localStorage.setItem("jwt", response.data.access);
      debugger;
      // Redirect the user to the dashboard page
      window.location.href = "/explore";
    }
    
    
    
    catch (error) {
       console.error(error);
       window.location.href = "/";
    }
  };
  const loginProfile = () => {
    debugger;
    console.log("loginProfile");
  };

  return (
    <>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center dark:bg-slate-800">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 ">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl  dark:text-white">
              Start watching today with us.
            </h1>

            <p className="mt-4 text-gray-500">
              Login to JustWatch Movies to watch movies online.
            </p>
          </div>

          <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
            <div>
              <label htmlFor="Username" className="sr-only">
                Username
              </label>

              <div className="relative">
                <input
                  type="text"
                  id="Username"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter Username"
                  // value={{Username}}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className=" rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white flex justify-center hover:bg-red-700"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src="https://images.unsplash.com/photo-1597575732103-9f6d068cfa9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      {/* end iof login page */}
    </>
  );
};

export default Login;