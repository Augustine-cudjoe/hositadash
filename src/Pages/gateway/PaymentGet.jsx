import React, { useEffect } from 'react'
import "./paymentgate.css"
import {
    Minimize,Search,Bell,CircleChevronDown } from 'lucide-react';
  
 
  import { TbBeta } from "react-icons/tb";
import NavbarComponent from '../../component/NavbarComponent';
  
function PaymentGet() {
    useEffect(()=>{
        document.title='gateway'
    },[])
  return (
    <div className='payment' >
      <div className="flex flex-col md:flex-row">
      <aside className=" md:min-h-screen flex-1 md:w-1/4  w-full">
        <NavbarComponent/>
    </aside>
    <div className=" md:w-3/4 w-full bg-slate-100 pt-24 md:mt-0 md:py-0">
       <nav id='nav'>
        <ul className='flex  flex-col md:flex-row items-center mx-5 py-3 space-y-5 md:space-y-0'>
         <li className='me-3 mb-3 md:mb-0'> <Minimize size={16}/> </li>
         <li className='text-red-500 font-extrabold text-xs md:text-4xl me-3 mb-3 md:mb-0' >  HOTEL MANAGEMENT SYSTEM </li>
         <li className='mx-5 mb-3 md:mb-0'> <Search size={16}  className='text-slate-400'/></li>
         <li className='mx-5 text-violer-400 mb-3 md:mb-0'> <Bell size={16}  className='text-violet-500'/></li>
         <li className='p-2 bg-slate-500 rounded-full mx-5 mb-3 md:mb-0'> <TbBeta size={16} /></li>
         <li className='text-black mx-5 mb-3 md:mb-0'> Admin</li>
         <li className='text-black mx-5'>  <CircleChevronDown className='text-slate-400'/> </li>
        </ul>
       </nav>
       <div className=" pb-7 md:pb-0 ">
        <h4 className=' md:py-3 md:px-5 py-2 text-xl md:text-4xl text-center '>  OUR SECURE PAYMENT SYSTEM  </h4>
        <div className=" md:px-5 ">
      <div className="min-w-screen md:min-h-screen pt-10 flex items-center justify-center px-5 pb-10 md:pt-16 ">
    <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700 w-[600px]" >
        <div className="w-full pt-1 pb-5">
            <div className="bg-blue-600 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                <i className=" mdi-credit-card-outline text-3xl"></i>
            </div>
        </div>
        <div className="mb-10">
            <h1 className="text-center text-xl font-bold md:text-2xl uppercase">Make Your Payment </h1>
        </div>
        <div className="mb-3 flex -mx-2">
          
            
            <div className="px-2 flex items-center justify-between gap-10">
             <label htmlFor="html" className='flex items-center gap-[5px]'>
             <input type="radio" className='m-radio h-5 w-5 text-violet-500' id="html" name="fav_language" value="HTML"/>
              <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8  md:ml-3"/>
                
                </label>
                <label htmlFor="css" className='flex items-center gap-[5px]'>
                <input type="radio" id="css" name="fav_language" value="CSS" className='m-radio h-5 w-5 text-violet-500'/> 
                 <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" />
               
                 </label>
                
            </div>
            
        </div>
        <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
            <div>
                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-violet-500 transition-colors" placeholder="Ak cudjoe" type="text"/>
            </div>
        </div>
        <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Card number</label>
            <div>
                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-violet-500 transition-colors" placeholder="0000 0000 0000 0000" type="text"/>
            </div>
        </div>
        <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
                <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                <div>
                    <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-violet-600 transition-colors cursor-pointer">
                        <option value="01">01 - January</option>
                        <option value="02">02 - February</option>
                        <option value="03">03 - March</option>
                        <option value="04">04 - April</option>
                        <option value="05">05 - May</option>
                        <option value="06">06 - June</option>
                        <option value="07">07 - July</option>
                        <option value="08">08 - August</option>
                        <option value="09">09 - September</option>
                        <option value="10">10 - October</option>
                        <option value="11">11 - November</option>
                        <option value="12">12 - December</option>
                    </select>
                </div>
            </div>
            <div className="px-2 w-1/2">
                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-violet-600 transition-colors cursor-pointer">
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                </select>
            </div>
        </div>
        <div className="mb-10">
            <label className="font-bold text-sm mb-2 ml-1">CVV code</label>
            <div>
                <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-violet-500 transition-colors" placeholder="000" type="text"/>
            </div>
        </div>
        <div>
            <button className="block w-full max-w-xs mx-auto bg-blue-600 hover:bg-slate-300 focus:bg-slate-300 text-white rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
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

export default PaymentGet;
