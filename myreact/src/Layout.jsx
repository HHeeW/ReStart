import React from 'react'
import { Outlet } from 'react-router-dom'
import Left from './Page/Left/Left';

const Layout = ({setLeftMenu, leftMenu}) => {
  return (
    <div className='Container'>
        <div className={leftMenu ? 'Left_Container' :'Left_Container w-40 -left-1/4 md:left-0 2xl:w-1/4'}>
          <Left setLeftMenu={setLeftMenu} leftMenu={leftMenu}/>
        </div>
        <main className='Main_Container'>
          <Outlet/>
        </main>
    </div>
  )
}

export default Layout