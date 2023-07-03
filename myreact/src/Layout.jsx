import React from 'react'
import { Outlet } from 'react-router-dom'
import Left from './Page/Left/Left';

const Layout = ({setLeftMenu, leftMenu}) => {
  return (
    <div className='Container'>
      {leftMenu && 
        <div className="Left_Container">
          <Left setLeftMenu={setLeftMenu} leftMenu={leftMenu}/>
        </div>
      }
        <main className='Main_Container'>
          <Outlet/>
        </main>
    </div>
  )
}

export default Layout