import React from 'react'
import Home from './Pages/home/Home'
import Location from './Pages/location/Location';
import Amenty from './Pages/amenty/Amenty';
import PaymentGet from './Pages/gateway/PaymentGet';
import Property from './Pages/property/Property';
import Users from './Pages/users/Users';
import Owners from './Pages/owners/Owners';
import PropertyType from './Pages/propertytype./PropertyType';
import Widthdrawal from './Pages/withdrawer/Withdrawer';
import Payment from './Pages/payment/Payment';
import './App.css'
import {BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  

  return (
    <div className='app'>
       <BrowserRouter>
         <Routes>
           <Route  index path='/' element={<Home/>}/>
           <Route  path='/location' element={< Location/>}/>
           <Route  path='/amenty' element={< Amenty/>}/>
           <Route  path='/geteway' element={< PaymentGet/>}/>
           <Route  path='/property' element={< Property/>}/>
           <Route  path='/user' element={< Users/>}/>
           <Route  path='/owners' element={< Owners/>}/>
           <Route  path='/type' element={< PropertyType/>}/>
           <Route  path='/withdrawals' element={<Widthdrawal/>}/>
           <Route  path='/payment' element={<Payment/>}/>
         </Routes>
       </BrowserRouter>

    
    
    </div>
  )
}

export default App
