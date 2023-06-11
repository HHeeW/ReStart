import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    // const goNewsHome = () => {
    //     navigate('/newshome');
    // }

  return (
    <div className='box-border max-w-[1920px]'>
        {/* <button onClick={goBack}>뒤로가기</button> */}
        <Header/>
        <main className='container'>
            <Outlet />
        </main>
        <Footer/>
    </div>
  )
}

export default Layout