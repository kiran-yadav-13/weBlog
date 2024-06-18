import React, { useState } from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

function NavLinks({className}){
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return(
   <>
    {navItems.map((item) => 
    item.active ? (
      <div key={item.name}  className={` flex items-center justify-center ${className} `}>
        <button
        onClick={() => navigate(item.slug)}
        className={` inline-block px-6 py-1 duration-200 hover:bg-cyan-500 hover:text-black rounded-xl text-[min(3vw,1.1rem)] `}
        >{item.name}</button>
      </div> 
    ) : null
    )}
    {authStatus && (
      <div className={`text-[min(2.5vw,1.1rem)]  flex items-center justify-center  ${className}`}>
        <LogoutBtn  />
      </div>
    )}
</>
  )
}

function Header() {
  
  const [isOpen, setIsOpen]=useState(false)
  const toggleNavbar =() =>{
    setIsOpen(!isOpen)
  }
  

  return (
    <header className='py-2 shadow bg-gray-800 bg-opacity-95 top-0  border-b sticky  text-white shadow-xl shadow-gray-400 '>
      <Container>
        <nav className='flex '>

          <div className='mr-4 flex items-center '>
            <Link to='/'>
              <Logo width='70px'   />
              </Link>
              <p className='text-2xl text-gray-100 font-sans text-[min(4.1vw,1.5rem)] '> .weBlog</p>
          </div>

          <div className='hidden md:flex  ml-auto items-center justify-between'>
              <NavLinks />
          </div>
          <div className=' md:hidden  flex ml-auto  items-center '>
            <button className='text-[1.5rem]' onClick={toggleNavbar}><IoMenu /></button>
          </div>

        </nav>
        {isOpen ? (
          <div className='flex md:hidden flex-col justify-center items-center basis-full '>
            <NavLinks className={"w-full border-gray-200 border-b-[0.002rem]"}/>
          </div>
        ):null}
        
        </Container>
    </header>
  )
}

export default Header