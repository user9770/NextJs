import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className='h-[80px] flex justify-center gap-3 bg-amber-500 text-[20px]'>
        <ul className='flex justify-center gap-3'> 
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/Register/signUp">SignUp</Link>
            </li>
            <li>
                <Link href="/Register">SignIn</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
