import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="bg-gray-300 flex h-screen">

      
        <Sidebar/>
       <div className="flex-1 m-3 border rounded-md">
           <Navbar/>
        <Outlet/>
       </div>
    </div>
  )
}

export default MainLayout