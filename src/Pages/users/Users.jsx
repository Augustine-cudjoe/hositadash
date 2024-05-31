import React, { useEffect } from 'react'
import { BedDouble,CircleDot,Home,MapPin,Rows4 ,AlignJustify,
    CreditCard,Minimize,Search,Bell,CircleChevronDown } from 'lucide-react';
  import { FaWarehouse,FaExclamation } from "react-icons/fa";
  import { HiOutlineUsers } from "react-icons/hi";
 
  import { TbUsersGroup,TbBeta } from "react-icons/tb";
  import "./users.css"
import NavbarComponent from '../../component/NavbarComponent';
function Users() {
  useEffect(()=>{
     document.title=' users'
  },[])
  return (
    <div className='' id='users'>
       <div className="flex flex-col md:flex-row">
       <aside className=" md:min-h-screen flex-1 md:w-1/4  w-full">
        <NavbarComponent/>
    </aside>
    <div className=" md:w-3/4 w-full bg-slate-100 pt-24  md:mt-0 md:py-0">
       <nav id='user-logo'>
        <ul className='flex  flex-col md:flex-row items-center mx-5 py-3 '>
         <li className='me-3 mb-3 md:mb-0'> <Minimize size={16}/> </li>
         <li className='text-red-500 font-extrabold text-xs md:text-4xl me-3 mb-3 md:mb-0' >  HOTEL MANAGEMENT SYSTEM </li>
         <li className='mx-5 mb-3 md:mb-0'> <Search size={16}  className='text-slate-400'/></li>
         <li className='mx-5 text-violer-400 mb-3 md:mb-0'> <Bell size={16}  className='text-violet-500'/></li>
         <li className='p-2 bg-slate-500 rounded-full mx-5 mb-3 md:mb-0'> <TbBeta size={16} /></li>
         <li className='text-black mx-5 mb-3 md:mb-0'> Admin</li>
         <li className='text-black mx-5'>  <CircleChevronDown className='text-slate-400'/> </li>
        </ul>
       </nav>
       <div className=" pb-7 md:pb-0 md:px-10 " id='user-c'>
        <h4 className=' md:py-3 md:px-5 py-2 text-xl md:text-4xl text-center '>  OUR Hospital Management SYSTEM  </h4>
          <h6 className='text-xl font-semibold py-7'>What is Hospital Management ?</h6>
           <p className='mb-3 py-3 md:py-2'>Several research organizations are projecting that Hospital Management Software Systems are going to expand rapidly, with the US and Canada leading in popularity of maintaining digital health records and better hospital management.</p>
          <p className='mb-3 py-3 md:py-2'> There is no doubt that Hospital management software systems will have an intense impact on the healthcare industry in the years to come.
           There are so many benefits for hospitals and healthcare providers as well as better care for patients and an overall cost savings.</p>
           <h6 className='text-xl font-semibold mb-3 '> Benefits of Hospital Management Systems</h6>
           <ul>
            <li className='mb-1  md:px-3'> Enhanced information integrity and data security</li>
             <li className='mb-1  md:px-3'> Improved monitorin</li>
             <li className='mb-1  md:px-3'> Improved monitorin</li>
             <li className='mb-1  md:px-3'> Improved monitorin</li>
             <li className='mb-1  md:px-3'> Improved monitorin</li>
             <li className='mb-1  md:px-3'> Improved monitorin</li>
             <li className=' mb-1 md:px-3'> Improved monitorin</li>
             <li className=' mb-1 md:px-3'> Improved monitorin</li>
             <li className=' mb-1 md:px-3'> Improved monitorin</li>
             <li className=' mb-1 md:px-3'> Improved monitorin</li>
             <li className=' mb-1 md:px-3'> Improved monitorin</li>
             <li className=' mb-1 md:px-3'> Improved monitorin</li>
             <li className=' mb-1 md:px-3'> Improved monitorin</li>
             <li className=' mb-1 md:px-3'> Improved monitorin</li>
           </ul>
       </div>
    </div>
   </div>
    </div>
  )
}

export default Users;