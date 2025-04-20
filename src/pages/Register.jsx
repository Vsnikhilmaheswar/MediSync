import React from "react";
import { GoPerson } from "react-icons/go";
import { LuStethoscope } from "react-icons/lu";
import register from "../assets/register.jpg";
import { useState } from "react";
import Patient from "./Patient";
import { Link } from "react-router-dom";
import doctordata from "../data/doctor.json";

function Register() {
  const [user, setUser] = useState("patient");
 
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-auto" style={{backgroundImage:`url(${register})`}} >
          <h1 className="text-3xl font-semibold text-center">
            Create an Account
          </h1>
          <p className="text-center text-xs text-gray-500">
            Join our healthcare platform as a patient or healthcare provider.
          </p>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[500px] border-1 border-gray-300 mt-5">
          <div className="shadow-md bg-gray-200 flex justify-around p-1 h-10 rounded">
  <div
    className={`w-100 flex justify-center items-center gap-1 text-[14px] rounded transition-all duration-300 ease-in-out ${
      user === "patient" ? "bg-white" : "bg-gray-200"
    }`}
    onClick={() => setUser("patient")}
  >
    <GoPerson />
    Patient
  </div>
  <div
    className={`w-100 flex justify-center items-center gap-1 text-[14px] rounded transition-all duration-300 ease-in-out ${
      user === "doctor" ? "bg-white" : "bg-gray-200"
    }`}
    onClick={() => setUser("doctor")}
  >
    <LuStethoscope />
    Doctor
  </div>
</div>

{user === "patient" ? 
   <form>
            <div>
                 
                 <div className="flex flex-col gap-2 mt-5">    
                   <label className="text-sm">Full Name</label>
                   <input className="border font-normal border-gray-300 rounded p-2 " placeholder="Enter your full Name"/>
                 </div>
                 <div className="flex flex-col gap-2 mt-5">    
                   <label  className="text-sm">Email</label>
                   <input className="border font-normal border-gray-300 rounded p-2 " placeholder="Enter your email"/>
                 </div>
                 <div className="flex justify-between mt-5 ">   

                <div  className="flex flex-col gap-2 ">
                <label className="text-sm" >Password</label>
                <input className="text-[15px] font-normal border border-gray-300 rounded p-2" placeholder="Create a password"/>
                </div>
                <div className="flex flex-col gap-2 ">
                <label className="text-sm" >Confirm password </label>
                <input className="text-[15px] font-normal border border-gray-300 rounded p-2" placeholder="Confirm your pasword"/>
                </div>
                 </div>
                 <button className="w-[100%] bg-black text-white rounded   p-2 mt-6">Register</button>
          
            </div>
            </form>
            :
            <form>
            <div>
                 
                 <div className="flex flex-col gap-2 mt-3">    
                   <label className="text-sm">Full Name</label>
                   <input className="border font-normal border-gray-300 rounded p-2 " placeholder="Enter your full Name" required/>
                 </div>
                 <div className="flex flex-col gap-2 mt-3">    
                   <label  className="text-sm">Email</label>
                   <input className="border font-normal border-gray-300 rounded p-2 " placeholder="Enter your email" required/>
                 </div>
                 <div className="flex flex-col gap-2 mt-3">    
                   <label  className="text-sm">Phone</label>
                   <input className="border font-normal border-gray-300 rounded p-2 appearance-none" type="text" inputMode="numeric" pattern="[0-9]*"  placeholder="Enter your Phone" required/>
                 </div>
                 <div className="flex justify-between mt-3 ">   

                <div  className="flex flex-col gap-2 ">
                <label className="text-sm" >Password</label>
                <input className="text-[15px] font-normal border border-gray-300 rounded p-2" type="password" placeholder="Create a password" required/>
                </div>
                <div className="flex flex-col gap-2 ">
                <label className="text-sm" >Confirm password </label>
                <input className="text-[15px] font-normal border border-gray-300 rounded p-2" type="password" placeholder="Confirm your pasword" required/>
                </div>
                 </div>

                 <div className="mt-3">
                  <label className="text-sm mt-5">Specialization</label>
                  <select className="border font-normal border-gray-300 rounded p-2 w-[100%]">
                    {doctordata.specializations.map((spec, index) => (
                      <option key={index} value={spec}>
                        {spec}
                      </option>
                    ))}
                  </select>

                 </div>

                 <div className="mt-3">
                  <label className="text-sm mt-5">Experience</label>
                  <input className="border font-normal border-gray-300 rounded p-2 w-[100%]" placeholder="Enter your experience in years"/>
                 </div>
                 <div className="mt-3">
                  <label className="text-sm mt-5">Qualifications</label>
                  <select className="border font-normal border-gray-300 rounded p-2 w-[100%]">
                    {doctordata.qualifications.map((spec, index) => (
                      <option key={index} value={spec}>
                        {spec}
                      </option>
                    ))}
                  </select>
                 </div>
                 <div className="mt-3">
                    <label className="text-sm mt-5">Available Days</label>
                    <select className="border font-normal border-gray-300 rounded p-2 w-[100%]">
                    {doctordata.availableDaysOptions.map((spec, index) => (
                      <option key={index} value={spec}>
                        {spec}
                      </option>
                    ))}
                  </select>
                 </div>
               <div className="flex justify-between mt-3 items-center">
                 <div className="flex flex-col">
                  <label>Start Time</label>
                  <input className="border  border-gray-300 rounded p-2 px-6" type="time" id="timeInput" name="time"/>
                 </div>
                 <div className="h-[2px] w-15 bg-gray-700 mt-6"></div>
                 <div className="flex flex-col">
                  <label >End Time</label>
                  <input className="border   border-gray-300 rounded p-2 px-6" type="time" id="timeInput" name="time"/>

                  </div>
                
               
               </div>
                 <button className="w-[100%] bg-black text-white rounded   p-2 mt-6">Register</button>
          
            </div>
            </form>

}
<div className="h-[2px] w-full mt-5  bg-gray-300"></div>
  <p className="text-center mt-2 text-sm ">Already have an account? <Link to={'/login'}><span className="text-blue-400">Login</span></Link></p>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default Register;
