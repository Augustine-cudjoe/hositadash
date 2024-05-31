import React,{useEffect} from 'react'
import { BedDouble,CircleDot,Home,MapPin,Rows4 ,AlignJustify,
    CreditCard,Minimize,Search,Bell,CircleChevronDown } from 'lucide-react';
  import { FaWarehouse,FaExclamation } from "react-icons/fa";
  import { HiOutlineUsers } from "react-icons/hi";
 
  import { TbUsersGroup,TbBeta } from "react-icons/tb";
  import "./property.css"
import NavbarComponent from '../../component/NavbarComponent';

function Property() {
  useEffect(()=>{
    document.title='property'
  })
  return (
    <div className='property'>
      <div className="flex flex-col md:flex-row">
      <aside className=" md:min-h-screen flex-1 md:w-1/4  w-full">
        <NavbarComponent/>
    </aside>
    <div className=" md:w-3/4 w-full bg-slate-100 pt-24 md:py-0  md:mt-0 md:pb-0">
       <nav >
        <ul className='flex  flex-col md:flex-row items-center mx-5 py-3  space-y-5 md:space-y-0' id='prop-menu'>
         <li className='me-3 md:md-0 mb-3'> <Minimize size={16}/> </li>
         <li className='text-red-500 font-extrabold text-xs md:text-4xl me-3 md:md-0 mb-3' >  HOTEL MANAGEMENT SYSTEM </li>
         <li className='mx-5 md:md-0 mb-3'> <Search size={16}  className='text-slate-400'/></li>
         <li className='mx-5 text-violer-400 md:md-0 mb-3'> <Bell size={16}  className='text-violet-500'/></li>
         <li className='p-2 bg-slate-500 rounded-full mx-5 md:md-0 mb-3'> <TbBeta size={16} /></li>
         <li className='text-black mx-5 md:md-0 mb-3'> Admin</li>
         <li className='text-black mx-5'>  <CircleChevronDown className='text-slate-400'/> </li>
        </ul>
       </nav>
       <div className=" md:min-h md:pb-0 md:mb-0" id='property-c'>
        <h4 className=' md:py-7 md:px-5 p-3 md:text-4xl text-center  upper font-semibold'>  OUR HOSPITAL PROPERTIES </h4>
        <div className="property-h md:px-16">
         <div className='md:px-md-5 md:mb-3 py-5'>
         <h4 className='text-xl md:text-4xl ms-5 mb-3 font-semibold'> Hospital Campuses</h4>
         <p className='text-base md:text-xl px-5'> A hospital campus is likely the first property type that comes to mind when someone says the phrase “healthcare real estate.” 
            Hospital campuses create solid referral bases for medical practices. Facilities on a hospital campus allow patients to easily 
            visit the specialists in those facilities after they have received hospital care. 
            Likewise, patients visiting individual medical buildings are in proximity to the hospital in the event they need emergency surgery or extended care.</p>
         </div>
         <div className='md:px-md-5 md:mb-3 py-5'>
         <h4 className='text-xl md:text-4xl ms-5 mb-3 font-semibold'> Office Buildings</h4>
         <p className='text-base md:text-xl px-5'> 
            This is where medical real estate intersects with the traditional office CRE sector.
            Some health systems lease or own commercial office properties. Their corporate teams work in 
            these settings rather than within the walls of a clinic or hospital property. In some cases, 
            these types of office spaces are more affordable, and tenants all share janitorial or maintenance services.
         </p>
         </div>
         <div className='md:px-md-5 md:mb-3 py-5'>
         <h4 className='text-xl md:text-4xl mx-7 mb-3 font-semibold'> Medical Offices</h4>
         <p className='text-base md:text-xl px-7'> 
          Medical office properties include anything from small doctors’ offices to healthcare systems. 
         The facilities, usually about 40,000 square feet, make up 10% of office properties in the U.S. 
         These spaces are usually dedicated to medical tenants, which can create opportunities for referral 
         sources and opportunities for patients to see different physicians under the same roof.
         </p>
         </div>
         <div className='md:px-md-5 md:mb-3 py-5'>
         <h4 className='text-xl md:text-4xl mx-7 mb-3 font-semibold'> Retail Medical Facilities</h4>
         <p className='text-base md:text-xl px-7'> 
         As we’ve mentioned in a previous article, Drugstores, Clinics, and CRE, healthcare real estate has shifted more and more from the hospital setting over the years.
          More retail giants have opened healthcare services under their brand names. Walmart, Walgreens, and CVS are a few of the notable companies to offer new or unique health offerings. 
          But these types of medical facilities are not the only representations of retail healthcare properties.
         </p>
         </div>
         <div className='md:px-md-5 md:mb-0 md:pb-0'>
         <h4 className='text-xl md:text-4xl md:mx-7 mb-3 font-semibold '> Experts in Commercial, Medical Real Estate</h4>
         <p className='text-base md:text-xl md: px-7 '> 
         As we’ve mentioned in a previous article, Drugstores, Clinics, and CRE, healthcare real estate has shifted more and more from the hospital setting over the years.
          More retail giants have opened healthcare services under their brand names. Walmart, Walgreens, and CVS are a few of the notable companies to offer new or unique health offerings. 
          But these types of medical facilities are not the only representations of retail healthcare properties.
         
         </p>
         </div>
        </div> 
        
       </div>
    </div>
   </div>
    </div>
  )
}

export default Property;