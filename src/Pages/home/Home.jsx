import React,{useEffect} from 'react'
import "./home.css"
import { 
  Minimize,Search,Bell,CircleChevronDown ,TreeDeciduous,MailMinus } from 'lucide-react';


import { BsBoxArrowRight } from "react-icons/bs";
import { TbUsersGroup,TbBeta } from "react-icons/tb";
import NavbarComponent from '../../component/NavbarComponent';


 


function HomeComponent() {
  useEffect(()=>{
    document.title='home'
  },[])
  return (
<div id="home">
   <div className="flex flex-col md:flex-row md:pb-0 md:mb-0">
   <aside className=" md:min-h-screen flex-1 md:w-1/4 w-full">
      <NavbarComponent/>
    </aside>
    <div className=" md:w-3/4 w-full bg-slate-100 md:pb-0 md:mb-0 pt-24 md:pt-0" id='middle'>
       <nav id='middle-nav'>
        <ul className='flex  flex-col md:flex-row items-center mx-5 py-3 space-y-5 md:space-y-0 '>
         <li className='me-3'> <Minimize size={16}/> </li>
         <li className='text-red-500 font-extrabold text-xs md:text-base lg:text-4xl me-3' >  HOTEL MANAGEMENT SYSTEM </li>
         <li className='mx-5'> <Search size={16}  className='text-slate-400'/></li>
         <li className='mx-5 text-violer-400'> <Bell size={16}  className='text-violet-500'/></li>
         <li className='p-2 bg-slate-500 rounded-full mx-5'> <TbBeta size={16} /></li>
         <li className='text-black mx-5'> Admin</li>
         <li className='text-black mx-5'>  <CircleChevronDown className='text-slate-400'/> </li>
        </ul>
       </nav>
       <div className="bg-slate-100 mb-0 pb-14">
        <h4 className=' md:py-3 md:px-5 p-3 md:text-2xl text-base my-3 md:text-start text-center ' id="dash">  Dashboard</h4>
        <div className="grid md:md-0 mb-5 md:pb-0 pb-5 md:grid-cols-3  lg:grid-cols-4 gap-x-5 gap-y-3 md:px-5" id='midddle-c'>
          <div className="flex flex-col  bg-violet-600 pt-7 rounded-lg card"  >
           <h4 className='text-end text-white md:text-2xl text-base pe-3 mb-2' > 16</h4>
           <p className='text-end pe-3 mb-2 text-white text-sm total py-2'> Total Users</p>
           <div className="flex justify-between views gap-20 md:gap-10 md:items-start w-full">
           <p className='groups-icon text-violet-500  '><TbUsersGroup size={50}  className=''/> </p>
           <p className=' pe-3 ' >  <small className='bg-white p-2 view'> View All</small></p>
         
           </div>
          </div>
          <div className="flex flex-col justify-end bg-cyan-400 pt-7 rounded-lg card" >
           <h4 className='text-end text-white pe-3 mb-2' > 16</h4>
           <p className='text-end pe-3 mb-2 text-white text-sm total py-2'> Total verified Users</p>
           <div className="flex justify-between gap-10 views">
           <p className='groups-icon text-cyan-300 groups-icon '><TbUsersGroup size={50}/> </p>
            <p className=' pe-3' >  <small className='bg-white p-2 view'> View All</small></p>
          
            </div>
          </div>
          <div className="flex flex-col justify-end bg-orange-500 pt-7 rounded-lg card" >
           <h4 className='text-end text-white pe-3 mb-2' > 16</h4>
           <p className='text-end pe-3 mb-2 text-white text-sm total py-2'> Total Email unverified Users</p>
           <div className="flex justify-between gap-10 views">
            <p className='text-orange-300 groups-icon '> <MailMinus  size={50}/></p>
            <p className='text-end pe-3' >  <small className='bg-white p-2 view'> View All</small></p>
          
            </div>
          </div>
          <div className="flex flex-col justify-end bg-red-600 pt-7 rounded-lg card" >
           <h4 className='text-end text-white pe-3 mb-2' > 0</h4>
           <p className='text-end pe-3 mb-2 text-white text-sm total py-2'> Total SMS unverified Users</p>
           <div className="flex justify-between gap-10 views">
           <p className='text-red-500 groups-icon '> <MailMinus  size={50}/></p>
            <p className='text-end pe-3' >  <small className='bg-white p-2 view'> View All</small></p>
          
            </div>
          </div>
          <div className="flex flex-col justify-end bg-green-500 pt-7 card rounded-lg" >
           <h4 className='text-end text-white pe-3 mb-2' > 8</h4>
           <p className='text-end pe-3 mb-2 text-white text-sm total py-2'> Total Owners</p>
           <div className="flex justify-between views gap-10">
             <p className='groups-icon text-green-300'><TbUsersGroup size={50}/> </p>
            <p className='text-end pe-3' >  <small className='bg-white p-2 view'> View All</small></p>
          
            </div>
          </div>
          <div className="flex flex-col justify-end bg-indigo-600 pt-7 card rounded-lg" >
           <h4 className='text-end text-white pe-3 mb-2' > 7</h4>
           <p className='text-end pe-3 mb-2 text-white text-sm total py-2'> Total  verified Owners</p>
           <div className="flex justify-between gap-10 views">
           <p className='groups-icon text-indigo-400'><TbUsersGroup size={50}/> </p>
            <p className='text-end pe-3' >  <small className='bg-white p-2 view'> View All</small></p>
          
            </div>
          </div>
          <div className="flex flex-col justify-end bg-rose-600 card pt-7 rounded-lg" >
           <h4 className='text-end text-white pe-3 mb-2' > 3</h4>
           <p className='text-end pe-3 mb-2 text-white text-sm total py-2'> Total Email unverified   Owners</p>
           <div className="flex justify-between gap-10 views">
           <p className='text-rose-400 groups-icon '> <MailMinus  size={50}/></p>
            <p className='text-end pe-3' >  <small className='bg-white p-2 view'> View All</small></p>
          
            </div>
          </div>
          <div className="flex flex-col justify-end bg-pink-600 pt-7 card rounded-lg" >
           <h4 className='text-end text-white pe-3 mb-2' > 0</h4>
           <p className='text-end pe-3 mb-2 text-white text-sm total py-2'> Total SMS unverified Owners</p>
           <div className="flex justify-between gap-10 views">
           <p className='text-pink-400  groups-icon '> <MailMinus  size={50}/></p>
            <p className='text-end pe-3' >  <small className='bg-white p-2 view'> View All</small></p>
          
            </div>
          </div>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:mt-5 mx-md-5 " id="button-holder">
             <div className="left-bar md:ms-5  md:md-0 mb-5 md:pb-0 pb-5">
                <div className="bar-wrapper ">
                <p className='text-center pt-5 ps-5'> Monthly Payment & and Withdrawal Report </p>
                  <div className="bar-group ">
                    
                    <ul className="x-axis">
                      <li> 2021</li>
                    </ul>
                    <ul className="y-axis">
                      <li> <span>50 </span></li>
                      <li> <span>40 </span></li>
                      <li> <span>30 </span></li>
                      <li> <span>20 </span></li>
                      <li> <span>10 </span></li>
                      <li> <span>0 </span></li>
                    </ul>
                    <div className="bars">
                       <div className="bars-group">
                        <div className="bar bar-1" ></div>
   
                        
                       </div>
                    </div>
                  </div>
                </div>
             </div>
             <div className="right-bar flex md:me-5 md:px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-5  md-mx-0 px-0">
              <div className="flex flex-col justify-end bg-green-600   rounded-lg   h-auto lg:h-[220px] mb-0 pb-0  " id="green">
                <div className='mb-3'>
                <h4 className='text-center text-white pe-3 mb-2' > 0.00  USD</h4>
               <p className='text-center pe-3 mb-2 text-white text-sm'> Total Payment</p>
                </div>
                <div className='pb-4'>
                <h4 className='text-center text-white pe-3 mb-2' > 0.00  USD</h4>
               <p className='text-center pe-3 mb-2 text-white text-sm'> Total Payment Charge</p>
                </div>
             </div>
             <div className="flex flex-col justify-end bg-red-600  px-7 rounded-lg  h-auto lg:h-[220px] mb-0 pb-0" >
                <div className='mb-3'>
                <h4 className='text-center text-white pe-3 mb-2' > 50.00  USD</h4>
               <p className='text-center pe-3 mb-2 text-white text-sm'> Total Withdrawer</p>
                </div>
                <div className='pb-4'>
                <h4 className='text-center text-white pe-3 mb-2' > 1.200  USD</h4>
               <p className='text-center  mb-2 text-white text-sm'> Total Withdrawer Charge</p>
                </div>
              
             </div>
             <div className="flex items-center justify-center  bg-white  rounded-lg h-auto lg:h-[150px] pt-0 mt-0 mb-0" >
                <p className='text-center items-center py-5 icon '>  <TreeDeciduous size={60} className='bg-violet-600 p-3 mx-auto text-center  text-white  rounded-full ' /></p>
              
             </div>
             <div className="flex  justify-center  bg-white  text-center rounded-lg h-auto lg:h-[150px] pt-0 mt-0" >
                <p className='text-center py-5  flex items-center '>  <BsBoxArrowRight  size={60} className='bg-orange-400 p-3 text-white rounded-full text-center items-center  ' /></p>
              
             </div>

              </div>
             </div>
         </div>
       </div>
    </div>
   </div>
</div>
  )
}

export default HomeComponent;



