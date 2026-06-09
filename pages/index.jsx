import React from 'react'
import Head from 'next/head'

import Navbar from '@/Components/Navbar'

const Home = () => {
  return (
    <div>
      
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <Navbar />
      
      <h1 className='text-center mt-7 text-2xl'> <i className="text-blue-500 fa-solid fa-diamond"></i> Salom page Home</h1>
  
    </div>
  )
}

export default Home
