import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import loginimg from "../assets/login.jpg";
import { Link } from "react-router-dom";
function Login() {
  const [user, setUser] = useState("Patient");
  const handleToggle = () => {
    setUser(user === "Patient" ? "Doctor" : "Patient");
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${loginimg})` }}
        className="bg-cover bg-center h-screen w-full"
      >


        
        
       { user==="Patient" ? <div className="flex justify-center items-center h-[90vh] ">
          <div className="  rounded-xl bg-white p-8 shadow-lg w-[400px] h-[450px]">
            <div className="">
              <h1 className="text-2xl font-bold text-center">Patient Login</h1>
              <p className="text-sm text-center">Hey welcome </p>

              <form className="pt-5">
                <div className="flex flex-col  gap-3">
                  <TextField
                    className=" bg-white"
                    id="outlined-basic"
                    label="Email/Phone"
                    variant="outlined"
                  />
                  <TextField
                    className="bg-white"
                    s
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                  />
                  <Link to={"/patient"} className="flex w-full">
                    
                    <button className="w-full p-2 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-400">
                      Login
                    </button>
                  </Link>

                  <div className="flex justify-between items-center">
                    <p className="text-xs text-blue-600 text-semibold cursor-pointer hover:text-blue-500">
                      forget password ?
                    </p>
                 <div >
                 <p  onClick={() => handleToggle()}  className="text-xs text-blue-600 text-semibold cursor-pointer hover:text-blue-500">
                      Doctor Login ?
                    </p> 
                 </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className=" bg-gray-400 w-[50%] h-[1px] "></div>
                    <div className="text-xs px-1 text-gray-400">OR</div>
                    <div className="w-[50%] bg-gray-400 h-[1px]"></div>
                  </div>
                  <button className="bg-gray-300 rounded-full flex justify-between pe-[30%] items-center  font-bold text-xs hover:bg-gray-200">
                  
                    <img
                      className="w-8 h-8 auto bg-cover "
                      src="https://pngimg.com/d/google_PNG19635.png "
                    />
                    Continue with Google
                  </button>
                  <p className="text-gray-500 text-[12px] flex justify-center font-semibold ">
                    Don't have an account ?
                    <Link to={"/register"}>
                      <span className="text-blue-500 text-bold px-1">
                
                        Sign up
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>:    
        <div className="flex justify-center items-center h-[90vh]">
          <div className="  rounded-xl bg-white p-8 shadow-lg w-[400px] h-[450px]">
            <div className="">
              <h1 className="text-2xl font-bold text-center">Doctor Login</h1>
              <p className="text-sm text-center">Hey welcome </p>

              <form className="pt-5">
                <div className="flex flex-col  gap-3">
                  <TextField
                    className=" bg-white"
                    id="outlined-basic"
                    label="Email/Phone"
                    variant="outlined"
                  />
                  <TextField
                    className="bg-white"
                    s
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                  />
                  <Link to={"/doctor"} className="flex w-full">
                    {" "}
                    <button className="w-full p-2 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-400">
                    Doctor  Login
                    </button>
                  </Link>

                  <div className="flex justify-between items-center">
                    <p className="text-xs text-blue-600 text-semibold cursor-pointer hover:text-blue-500">
                      forget password ?
                    </p>
                    <p  onClick={() => handleToggle()} className="text-xs text-blue-600 text-semibold cursor-pointer hover:text-blue-500">
                      Patient Login ?
                    </p> 
                  </div>
                  <div className="flex justify-between items-center">
                    <div className=" bg-gray-400 w-[50%] h-[1px] "></div>{" "}
                    <div className="text-xs px-1 text-gray-400">OR</div>{" "}
                    <div className="w-[50%] bg-gray-400 h-[1px]"></div>
                  </div>
                  <button className="bg-gray-300 rounded-full flex justify-between pe-[30%] items-center  font-bold text-xs hover:bg-gray-200">
                    {" "}
                    <img
                      className="w-8 h-8 auto bg-cover "
                      src="https://pngimg.com/d/google_PNG19635.png "
                    />
                    Continue with Google
                  </button>
                  <p className="text-gray-500 text-[12px] flex justify-center font-semibold ">
                    Don't have an account ?
                    <Link to={"/register"}>
                      <span className="text-blue-500 text-bold px-1">
                        {" "}
                        Sign up
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        }
      </div>
    </>
  );
}

export default Login;
