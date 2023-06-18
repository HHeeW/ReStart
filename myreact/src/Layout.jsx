import React from 'react'
import { Outlet } from 'react-router-dom'
import Left from './Page/Left/Left';

const Layout = () => {

  return (
    <div className='Container'>
        <div className="Left_Container">
          <Left/>
        </div>
        <main className='Main_Container'>
          <Outlet />
        </main>
    </div>
  )
}

export default Layout