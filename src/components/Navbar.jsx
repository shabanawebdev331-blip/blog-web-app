import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const location = useLocation()

  return (
    <header className='flex justify-between items-center p-5'>
      <div className='flex jusitify-center items-center gap-1'>
        <Link to="/"><Logo /></Link>
      </div>
      <nav className='hidden md:block sm:block'>
        <Link to='/' className={`hover:bg-primary hover:text-white py-2 px-5 duration-200 rounded-md ${location.pathname === "/" ? 'text-primary font-semibold' : 'text-black'}`} >Home</Link>
        <Link to='/blog' className={`hover:bg-primary hover:text-white py-2 px-5 duration-200 rounded-md ${location.pathname === "/blog" ? 'text-primary font-semibold' : 'text-black'}`} >Blog</Link>
        <Link to='/blog/newblog' className={`hover:bg-primary hover:text-white py-2 px-5 duration-200 rounded-md ${location.pathname === "/blog/newblog" ? 'text-primary font-semibold' : 'text-black'}`} >Add Blog</Link>
        <Link to='/contact' className={`hover:bg-primary hover:text-white py-2 px-5 duration-200 rounded-md ${location.pathname === "/contact" ? 'text-primary font-semibold' : 'text-black'}`} >Contact</Link>
      </nav>
      <nav className='block sm:hidden'>
        hello
      </nav>
    </header>
  )
}

export default Navbar
