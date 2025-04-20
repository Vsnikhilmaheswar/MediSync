import React from 'react'
import  { useState } from 'react';
import { AlignJustify , CalendarPlus, MapPin, User, X } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';

import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    
    
  } from "@material-tailwind/react"
function DoctorProfile() {
   const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);


  const [menu, setMenu] = useState("Appointments");
  
    return (
    <>
<nav>

<nav className="bg-blue-800 shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* App Title */}
        <div className="text-md font-bold text-white">
          MediSync <br/><span className='text-sm font-semibold'>Doctor Dashboard  </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-white   font-medium">
          <li className="hover:text-blue-200 cursor-pointer transition" onClick={()=>setMenu("Profile")}>My Profile</li>
          <li className="hover:text-blue-200 cursor-pointer transition" onClick={()=>setMenu("Appointments  ")}>My Appointments</li>
          <li className="hover:text-blue-200 cursor-pointer transition">Manage Time Slots</li>
        </ul>

        <div className='flex'>
        
        <Menu className="">
      <MenuHandler>
      <img className="rounded-full w-8 h-8 object-cover " src="https://img.freepik.com/free-photo/doctor-white-coat-using-digital-tablet-reading-medical-data-gadget-working-hospital-standin_1258-87435.jpg?ga=GA1.1.824016266.1742628767&semt=ais_hybrid&w=740" />
      </MenuHandler>
      <MenuList className='mt-3 '>
        <MenuItem className='F'>
        <h1 className='text-start'>Dr. V S Nikhil Maheswar</h1>
        <p className='text-[9px]'>Cardiologist</p>
        </MenuItem>
       <hr className='my-2'/>
    
        <MenuItem className='text-red-500 rounded-0'>  <div className='flex  gap-2 rounded'><LogOut />Log out</div></MenuItem>
      </MenuList>
    </Menu>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <AlignJustify  size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition" onClick={()=>setMenu("Profile")}>My Profile</li>
          <li className="hover:text-blue-600 cursor-pointer transition" onClick={()=>setMenu("Appointments")}>My Appointments</li>
          <li className="hover:text-blue-600 cursor-pointer transition" >Manage Time Slots</li>
        </ul>
      )}
    </nav>
</nav>
{menu === "Appointments" &&
  <Appointments/>
}
{menu === "Profile" &&
  <MyProfile/>}
    </>
  )
}

const MyProfile = () => {

    return (
        <div>
             <div className='flex justify-between items-center mt-5'>
                <h1 className=" font-semibold text-2xl text-blue-800 mt-6 mx-5">
                    My Profile
                </h1>
                <button className='bg-blue-700 text-white  mx-5 p-2 rounded'>Edit Profile</button>
                
                            </div>

                            <div className='flex rounded shadow-2xl border border-gray-300 p-4 m-8'>
                            <img className="rounded-full w-25 h-25 object-cover m-3" src="https://img.freepik.com/free-photo/doctor-white-coat-using-digital-tablet-reading-medical-data-gadget-working-hospital-standin_1258-87435.jpg?ga=GA1.1.824016266.1742628767&semt=ais_hybrid&w=740" />
                              <div className='flex flex-col  mt-2 w-full h-full'>
                                <h1 className='text-start font-semibold text-2xl'>Dr. V S Nikhil Maheswar</h1>
                                <div className='flex'><h1 className="border-gray-300  border rounded-full text-[10px] px-1 font-semibold">Cardiologist</h1></div>
                              
                              <p className='font-light text-sm' >
                              Dr. Sarah Smith is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases. She specializes in preventive cardiology, heart failure management, and cardiac rehabilitation.
                              </p>
                              {/* <p className='text-xs pt-2'>Professional Bio:</p>
                              <textarea placeholder="" value="Dr. Sarah Smith is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases. She specializes in preventive cardiology, heart failure management, and cardiac rehabilitation." rows={4} col={4} className=" border border-gray-400  "></textarea>    
                            
                              <div className='pt-2'> <button className='p-2 bg-blue-900 text-white'>Save Changes</button></div> */}
                              
                            </div>
                            
                            </div>

                           <div className='grid grid-cols-2 gap-4 '>
                           <div className='flex rounded shadow-2xl border border-gray-300 p-4 m-8 flex-col gap-5'> 
                              <h1 className='text-start font-semibold text-xl  '>Contact Information</h1>
                              <p className='text-sm flex gap-2'> <Mail size={20} />njnjn@gmail.com </p>
                              <p className='text-sm flex gap-2'><Phone size={20} /> +1 234 567 890</p>
                              <p className='text-sm flex gap-2'> <MapPin /> Some where under </p>
                          </div> 
                           <div className='flex flex-col rounded shadow-2xl border border-gray-300 p-4 m-8 gap-5'>  
                           <h1 className='text-start font-semibold text-xl'>Professional Information</h1>
                            <p className='text-sm flex gap-2 '><User size={20}/> Specialty: Cardiologist  </p>                   
                            <p className='text-sm flex gap-2'> <CalendarPlus size={20}/>Years of Experience: 15 years</p>
                            </div> 
                          
                           </div>
                            <div className='flex rounded shadow-md border border-gray-300 p-4 m-8 flex-col gap-5'>
                              <h1 className='text-start font-semibold text-xl'>Education & Training</h1>
                              <p>Your academic background and medical training</p>
                              <div>
                                <h1 className='font fw-bold'>MD in Cardiology</h1>
                                <p className='text-xs text-gray-500'>Harvard Medical School</p>
                                <p className='text-xs text-gray-500'>Completed: 2008</p>
                                <hr className='my-2'/>
                              </div>


                            </div>
        </div>
    );
}

const Appointments = () => {

  const [AppointmentsAge, setAppointmentsAge] = useState("upcoming");

  return(
   
   <div className=''>

<h1 className=" font-semibold text-2xl text-blue-800 mt-6 mx-5">
                 My Appointments
                </h1>
     
     <div className="flex w-[100%] justify-around p-1 h-10 rounded ">

     <div className="shadow-md bg-blue-300 flex  p-1 h-10 rounded w-full m-4">
      <div
        className={`w-[100%] flex justify-center items-center gap-1 text-[14px] rounded transition-all duration-300 ease-in-out ${
          AppointmentsAge === "upcoming" ? "bg-blue-500" : "bg-blue-300"
        }`}
        onClick={() => setAppointmentsAge("upcoming")}
      >
        
        Upcoming
      </div>
      <div
        className={`w-[100%] flex justify-center items-center gap-1 text-[14px] rounded transition-all duration-300 ease-in-out ${
          AppointmentsAge === "past" ? "bg-blue-500" : "bg-blue-300"
        }`}
        onClick={() => setAppointmentsAge("past")}
      >
                Past
      </div>
    </div>


     </div>
  
  <div className='border border-gray-300 rounded shadow-md m-5 mt-10 p-4'>
      <img className="rounded-full w-15 h-15 object-cover" src="https://img.freepik.com/free-photo/doctor-white-coat-using-digital-tablet-reading-medical-data-gadget-working-hospital-standin_1258-87435.jpg?ga=GA1.1.824016266.1742628767&semt=ais_hybrid&w=740" />
     <div></div>
  </div>
   </div>
   
  )
}

export default DoctorProfile