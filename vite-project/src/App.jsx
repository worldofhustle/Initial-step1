import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Addabovenav from './Components/addabovenav'
import Accountsdropdown from './Components/Accountsdropdown'
import Sidebar from './Components/Sidebar'
import Sellersform from './Pages/Sellersform'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Register from './Pages/Register'
import Login from './Pages/Login'
import Orders from './Pages/Orders'
import Myaccount from './Pages/Myaccount'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/register' element={<Register/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/orders' element={<Orders/>}/>
     <Route path='/myaccount' element={<Myaccount/>}/>
    
     {/* <Route path='/logout' element={<Logout/>}/> */}
    </Routes>
    {/* <Addabovenav/>*/}
    {/* <Navbar/>  */}
    <Register/>
    {/* <Login/> */}
    {/*  */}
    {/*  */}
    {/* <Sellersform/> */}
    </BrowserRouter>
  
   
   
    </>
  )
}

export default App
