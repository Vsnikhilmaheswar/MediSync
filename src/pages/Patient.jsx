import { Option } from "@material-tailwind/react";
import React from "react";
import doctordata from "../data/doctor.json";
import { IoMdSearch } from "react-icons/io";

function Patient() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  return (
    <>
      <div>
        <h1 className=" font-semibold text-2xl text-blue-700 mt-6 mx-5 text-center">
          Welcome back, Nikhil!
        </h1>
        <div className="grid md:grid-cols-3">
          <div className="py-8 px-4 hidden md:flex ">
            {" "}
            <img
              className="rounded-3xl object-cover"
              src="https://img.freepik.com/free-photo/doctor-white-coat-using-digital-tablet-reading-medical-data-gadget-working-hospital-standin_1258-87435.jpg?ga=GA1.1.824016266.1742628767&semt=ais_hybrid&w=740"
            />
          </div>
          <div className="p-4 rounded">
            {" "}
            <img
              className="rounded-3xl object-cover"
              src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?ga=GA1.1.824016266.1742628767&semt=ais_hybrid&w=740"
            />
          </div>
          <div className="p-4 flex items-center">
            {" "}
            <img
              className="rounded-3xl object-cover"
              src="https://img.freepik.com/free-photo/asian-female-doctor-physician-medical-uniform-with-stethoscope-cross-arms-chest-smiling-looking-like-professional-white-background_1258-83205.jpg?ga=GA1.1.824016266.1742628767&semt=ais_hybrid&w=740"
            />
          </div>
        </div>
        <h1 className="text-center text-4xl font-semibold text-blue-600">
          Ready to book your next consultation?
        </h1>
        <p className="text-center text-lg text-blue-500">
          Choose a doctor,
          <br /> check availability, <br />
          book your appointment in seconds.
        </p>
      </div>

      <div>
        <h1 className=" font-semibold text-3xl text-blue-800 mt-6 mx-5">
          Book Appointment
        </h1>
        <div className="flex justify-between items-center gap-0 mx-5 mt-5">
          <div className="flex items-center border border-gray-300 rounded p-2 w-auto">
            <IoMdSearch size={20}/>
            <input className="px-2 w-100 border-none focus:outline-none" placeholder="Search Doctor by name or specialty..." />
          </div>

          <div className="flex gap-0 ml-4 ">
          
          {days.map((item)=>(
             <div className="flex items-center p-1  m-1 border border-blue-800 rounded">
             <input type="checkbox" className="" />
             <span className="text-blue-600">{item}</span>
           </div>
          )) }
            <select className="border font-normal border-gray-300 rounded p-2 w-[100%]">
              <option value="">All Specialties</option> {/* Default option */}
              {doctordata.specializations.map((spec, index) => (
                <option key={index} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-3 ">
             <div className="p-4 border border-gray-400 rounded m-4" >
                 <div className="flex justify-center">
                   <img className="rounded-full w-25 h-25 object-cover" src="https://img.freepik.com/free-photo/doctor-white-coat-using-digital-tablet-reading-medical-data-gadget-working-hospital-standin_1258-87435.jpg?ga=GA1.1.824016266.1742628767&semt=ais_hybrid&w=740" />
                 </div>
                <div className="flex flex-col items-center mt-2">
                  <h1 className="text-md font-semibold text-center">Dr. Sarah Smith</h1>
                <h1 className="border-gray-300 border rounded-full text-[10px] px-1 font-semibold">Cardiologist</h1>
                
                </div>
                <div className="flex justify-between  mt-2">
                  <h1 className="text-sm">Experience:</h1>
                  <h1 className="text-sm ">5 Years</h1>
                </div>
                <div className="flex justify-between  mt-2">
                  <h1 className="text-sm">Availability:</h1>
                  <h1 className="text-sm "><span>Mon, </span></h1>
                </div>
                <div className="flex justify-center gap-1  mt-2">
                  <button className="border bg-white text-blue-600 p-2 rounded-sm hover:bg-blue-600 hover:text-white">View Profile</button>
                  <button className="border bg-blue-600 text-white p-2 rounded-sm hover:bg-white hover:text-blue-600 transition-100 duration-200"> Book Appointment </button>
                </div>
             </div>



             
        </div>
      </div>
    </>
  );
}

export default Patient;
