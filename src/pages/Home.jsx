import React from 'react'
import Background3D from '../component/Background3D'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
   <>
     <div className="relative min-h-screen bg-black/30">
      <Background3D />
      <div className="relative z-10 text-white p-10 pt-15 font-bold">
        {/* Your main content here */}
        <motion.div
      initial={{ opacity: 0 ,scale: 0.5}}
      animate={{ opacity: 3 ,scale: 1 }}
      transition={{ duration: 3 }}
    >
      <h1 className='text-7xl bold text-center'>Book <br/>Trusted Doctors <br></br>Online </h1>
    </motion.div>
    <p className='text-center font-5xl'>Find the right doctor for you.<br></br> Schedule appointments instantly from the comfort of your home.</p>
    <div className='flex justify-center gap-2 mt-5'>
 <Link to={'/login'}>
 <button className='px-4 py-3  rounded-full bg-white  text-blue-700'>Get Started</button>
 </Link>

    
    </div>
      </div>
    </div></>
  )
}

export default Home