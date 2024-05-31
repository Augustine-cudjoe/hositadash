import React, { useState } from 'react'
import { BedDouble,CircleDot,Home,MapPin,Rows4 ,AlignJustify,
    CreditCard} from 'lucide-react';
  import { FaWarehouse,FaExclamation } from "react-icons/fa";
  import { HiOutlineUsers } from "react-icons/hi";
import {NavLink} from 'react-router-dom'
  import { TbUsersGroup } from "react-icons/tb";
  
  import { X } from 'lucide-react';
  
  
function NavbarComponent() {
    const [openMenu,setOpenMenu]=useState(false)
    const navItems=[
      {
        id:0,
        item:'Dashboard',
        link:'/',
        icon:Home
  
      },
      {
        id:1,
        item:'Location',
        link:'/location',
        icon:MapPin
  
      },
      {
        id:2,
        item:'Property Type',
        link:'/type',
        icon:MapPin
  
      },
      
      {
      id:3,
      item:'amenty',
      link:'/amenty',
      icon:AlignJustify

    },
    {
      id:4,
      item:'Property ',
      link:'/property',
      icon:FaWarehouse

    },
    {
      id:5,
      item:'Manage Users ',
      link:'/user',
      icon:TbUsersGroup

    },
    {
      id:6,
      item:'Manage Owners ',
      link:'/owners',
      icon:TbUsersGroup

    },
    {
      id:7,
      item:'Payment Gateway',
      link:'/geteway',
      icon:HiOutlineUsers

    },
    {
      id:8,
      item:'Payment ',
      link:'/payment',
      icon:CreditCard

    },
    {
      id:9,
      item:'Withdrawals ',
      link:'/withdrawals',
      icon:CreditCard

    },
  ]
  return (
    <div>
        
        <nav className=' h-full md:min-h-screen md:bg-blue-800 text-white flex flex-col md:border md:border-blue-600'>
            <div className="md:hidden">
            <div className=" flex py-3 items-center justify-between bg-slate-100     w-full fixed z-[150]">
            <div className='flex px-3 justify-center items-center '>
             <p className='bg-orange-600 text-white p-2 rounded-full me-1'> < BedDouble /> </p>
       
            <h6 className=' my-0 flex flex-col py-0 text-black'> Hotel <small className='text-black'>Online Hotel Booking Plateform </small> </h6>
          
        
            <p className='text-black'> <CircleDot  size={16} /> </p>
            </div>
             <div onClick={()=>setOpenMenu(!openMenu)} className='pe-2 text-black'>
               {
                openMenu?(< X />):( <AlignJustify />)
               }
             </div>
            </div>
          {/**mobile */}
          <div>
            
                
                  <div className={` ${openMenu?(' transition-all duration-300 mt-10  bg-blue-800  pt-10 min-h-screen fixed w-full right-0 left-100 top-[20px] z-[150]'):('w-0 h-0')}`} >
       
       {
            navItems.map(item=>{
                 const Icon=item.icon
                   return(
                    <div   key={item.id}>
                    
                    <ul  >
                      <li className='flex items-center ps-2'> 
                      <NavLink  to={item.link} className={({isActive})=>{
                        return(
                          (isActive?('bg-blue-300 w-64 py-2 rounded-[100px] px-2 '):('flex items-center font-semibold rounded-md py-1 px-3 my-1 hover:text-black cursor-pointer transition-colors'))
                          
                        )
                      }}>
                        <span className='flex items-center capitalize'>
                        <span> <Icon size={20} className=' me-2'/>  </span> {item.item}
                          </span> </NavLink>
                   
                      </li>
                    </ul>
                    </div>
                   )
                 } )
          } 
                    </div>
                
            
          </div>
            </div>

        <div className='hidden md:block desktop min-h-dvh lg:min-h-[1000px]'>
        <div className='flex p-3 justify-center items-center'>
       <p className='bg-orange-600 text-white p-2 rounded-full me-1'> < BedDouble/> </p>
       
        <h6 className=' my-0 flex flex-col py-0 lg:text-base md:text-sm text-base'> Hotel <small>Online Hotel Booking Plateform </small> </h6>
          
        
        <p> <CircleDot  size={16}/> </p>
      </div>
      <div>
      {
            navItems.map(item=>{
                 const Icon=item.icon
                   return(
                    <div className=' ' key={item.id}>
                    
                    <ul>
                      <li className='flex items-center ps-2'> 
                      <NavLink  to={item.link} className={({isActive})=>{
                        return(
                          (isActive?('bg-blue-200 w-64 py-2 rounded-[100px] px-2 '):('flex items-center font-semibold rounded-md py-1 px-3 my-1 hover:text-black cursor-pointer transition-colors'))
                          
                        )
                      }}>
                        <span className='flex items-center capitalize'>
                        <span> <Icon size={20} className=' me-2'/>  </span> {item.item}
                          </span> </NavLink>
                   
                      </li>
                    </ul>
                    </div>
                   )
                 } )
          }
         
      </div>
       
        </div>
      </nav>

    </div>
  )
}

export default NavbarComponent