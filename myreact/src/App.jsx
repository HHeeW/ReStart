import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Page/Home/Home'
import { useState } from 'react'
// import SignInPage from './Page/SignInPage'
// import SignUpPage from './Page/SignUpPage'
// import UserHome from './Page/User/UserHome'
// import UserInfoPage from './Page/User/UserInfoPage'
// import ListHome from './Page/ToDoList/ListHome'`

const App = () => {
  const [leftMenu, setLeftMenu] = useState(true) //처음은 전체 화면 기준으로 왼쪽 보이기
  return (
    <Routes>
      <Route element={<Layout setLeftMenu={setLeftMenu} leftMenu={leftMenu} />}>
        <Route path='/'element={<Home setLeftMenu={setLeftMenu}/>}/>
        {/* <Route path='/listhome' element={<ListHome/>} />
        <Route path='/userhome/:username' element={<UserHome/>} />
        <Route path='/signin' element={<SignInPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/userinfo' element={<UserInfoPage/>} /> */}
      </Route>
    </Routes>
  )
}

export default App