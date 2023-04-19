import React from "react";
import SectionPage from "./SectionPage";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
const HomePage = () => {
  var [data, setData] = useState(null);
  debugger;
  useEffect(() => {
    const authToken = localStorage.getItem('jwt');
    axios.get(`http://127.0.0.1:8000/api/`,{
      headers:{
        Authorization: `Bearer ${authToken}`
      }

    }).then((res) => {
      const result = res.data;

      console.log(result);
      setData(result);
      
      debugger;
      console.log(data);
    });
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-8">
        <div className="text-2xl font-medium font-raleway ">
          All Movies List
        </div>

        <div className="flex justify-around">
          {/* 1st card */}

          {data?.map((item, index) => {
           {debugger}

            
            <>
            
            {console.log("description is:  "+item.description)}
            <h6>{item.description}</h6>
              {/* <h6>{ite}</h6> */}

              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item?.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Description: {"  "}
                    {item?.description}
                  </p>
                  <a
                    href={item?.link}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Click here to watch
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </>;
          })}

        </div>
      </div>
    </>
  );
};

export default HomePage;
