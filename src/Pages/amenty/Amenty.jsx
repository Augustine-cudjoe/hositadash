import React, { useEffect } from 'react'
import { Minimize,Search,Bell,CircleChevronDown } from 'lucide-react';
 
 
  import { TbBeta } from "react-icons/tb";
  import "./amenty.css"
import NavbarComponent from '../../component/NavbarComponent';

function Amenty() {
  useEffect(()=>{
    document.title="amenty"
  },[])
  return (
    <div className='Amenty' id='amenty'>
    <div className="flex flex-col md:flex-row">
    <aside className=" md:min-h-screen flex-1 md:w-1/4  sm:w-full">
       <NavbarComponent/>
    </aside>
    <div className=" md:w-3/4 w-full bg-slate-100 md:mb-0 md:pb-0 pt-24  md:mt-0 md:py-0">
       <nav>
        <ul className='flex  flex-col md:flex-row items-center mx-5 py-3 space-y-5 md:space-y-0 ' id='content-m'>
         <li className='me-3 md:mb-0 mb-3'> <Minimize size={16}/> </li>
         <li className='text-red-500 font-extrabold text-xs md:text-4xl me-3 md:mb-0 mb-3' >  HOTEL MANAGEMENT SYSTEM </li>
         <li className='mx-5 md:mb-0 mb-3'> <Search size={16}  className='text-slate-400'/></li>
         <li className='mx-5 text-violer-400 md:mb-0 mb-3'> <Bell size={16}  className='text-violet-500'/></li>
         <li className='p-2 bg-slate-500 rounded-full mx-5 md:mb-0 mb-3'> <TbBeta size={16} /></li>
         <li className='text-black mx-5 md:mb-0 mb-3'> Admin</li>
         <li className='text-black mx-5'>  <CircleChevronDown className='text-slate-400'/> </li>
        </ul>
       </nav>
       <div className=" md:pb-7">
        <h4 className=' md:py-3 md:px-5 p-3 md:text-4xl text-center text-xl '>  OUR HOSPITAL AMENITIES </h4>
        <div className="grid   md:grid-cols-4 gap-x-5 gap-y-3 md:px-5"  id='images-h'>
          <div className="flex    rounded-lg">
           
            <img className='max-w-100 h-auto' src='https://media.istockphoto.com/id/1364971557/photo/hospital-recovery-room-with-beds-and-chairs-3d-rendering.jpg?s=612x612&w=0&k=20&c=qpLCCYKBxWiVpV74zLbsV69Trb0ga8plCIsx7h7CLAw='/>
          </div>
          <div className="flex    rounded-lg">
           <img src="https://www.shutterstock.com/image-photo/hospital-ward-beds-medical-equipment-260nw-102915128.jpg" alt="..." className="max-w-100 h-auto" />
          </div>
         
          <div className="flex    rounded-lg">
           
           <img className='max-w-100 h-auto' src='https://media.istockphoto.com/id/1364971557/photo/hospital-recovery-room-with-beds-and-chairs-3d-rendering.jpg?s=612x612&w=0&k=20&c=qpLCCYKBxWiVpV74zLbsV69Trb0ga8plCIsx7h7CLAw='/>
         </div>
         <div className="flex    rounded-lg">
          <img src="https://www.shutterstock.com/image-photo/hospital-ward-beds-medical-equipment-260nw-102915128.jpg" alt="..." className="max-w-100 h-auto" />
         </div>
         <div className="flex    rounded-lg">
           
            <img className='max-w-100 h-auto' src='https://media.istockphoto.com/id/1364971557/photo/hospital-recovery-room-with-beds-and-chairs-3d-rendering.jpg?s=612x612&w=0&k=20&c=qpLCCYKBxWiVpV74zLbsV69Trb0ga8plCIsx7h7CLAw='/>
          </div>
          <div className="flex    rounded-lg">
           <img src="https://thumbs.dreamstime.com/b/hospital-emergency-room-new-modern-entrance-33513208.jpg?w=768" alt="..." className="max-w-100 h-auto" />
          </div>
          <div className="flex    rounded-lg">
           
            <img className='max-w-100 h-auto' src='https://media.istockphoto.com/id/1364971557/photo/hospital-recovery-room-with-beds-and-chairs-3d-rendering.jpg?s=612x612&w=0&k=20&c=qpLCCYKBxWiVpV74zLbsV69Trb0ga8plCIsx7h7CLAw='/>
          </div>
          <div className="flex    rounded-lg">
           <img src="https://thumbs.dreamstime.com/b/hospital-emergency-room-new-modern-entrance-33513208.jpg?w=768" alt="..." className="max-w-100 h-auto" />
          </div>
          <div className="flex    rounded-lg">
           
            <img className='max-w-100 h-auto' src='https://media.istockphoto.com/id/1364971557/photo/hospital-recovery-room-with-beds-and-chairs-3d-rendering.jpg?s=612x612&w=0&k=20&c=qpLCCYKBxWiVpV74zLbsV69Trb0ga8plCIsx7h7CLAw='/>
          </div>
          <div className="flex    rounded-lg">
           <img src="https://th-thumbnailer.cdn-si-edu.com/F6MN7vfNd8zeHpNYi58PzoC_OAo=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b4/c6/b4c65fd0-01ba-4262-9b3d-f16b53bca617/istock-172463472.jpg" alt="..." className="max-w-100 h-auto" />
          </div>
          <div className="flex    rounded-lg">
           
            <img className='max-w-100 h-auto' src='https://media.istockphoto.com/id/1364971557/photo/hospital-recovery-room-with-beds-and-chairs-3d-rendering.jpg?s=612x612&w=0&k=20&c=qpLCCYKBxWiVpV74zLbsV69Trb0ga8plCIsx7h7CLAw='/>
          </div>
          <div className="flex    rounded-lg">
           <img src="https://th-thumbnailer.cdn-si-edu.com/F6MN7vfNd8zeHpNYi58PzoC_OAo=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b4/c6/b4c65fd0-01ba-4262-9b3d-f16b53bca617/istock-172463472.jpg" alt="..." className="max-w-100 h-auto" />
          </div>
         
        </div>
        
       </div>
    </div>
   </div>
    </div>
  )
}

export default Amenty;