import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import { Route, Router, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Patient from './pages/Patient'
import DoctorProfile from './pages/DoctorProfile'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    // Simulate 2-second loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
  //       <div className="text-center">
  //         <div className="w-10 h-10 border-4 border-blue-600 border-dashed rounded-full animate-spin mx-auto"></div>
  //         <p className="mt-4 text-blue-600 font-semibold">Loading...</p>
  //       </div>
  //     </div>
  //   );
  // }


  return (
    <>
      
    <Routes>
        <Route path='/' element={ <> <Nav/> <Home/></>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/Register' element={<Register/>}/> 
        <Route path='/patient' element={<Patient/>}/> 
        <Route path='/doctor' element={<DoctorProfile/>}/> 
      </Routes>



  

   
    </>
  )
}

export default App
