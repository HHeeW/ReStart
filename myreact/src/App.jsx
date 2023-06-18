import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Page/Home/Home'
// import SignInPage from './Page/SignInPage'
// import SignUpPage from './Page/SignUpPage'
// import UserHome from './Page/User/UserHome'
// import UserInfoPage from './Page/User/UserInfoPage'
// import ListHome from './Page/ToDoList/ListHome'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/'element={<Home/>}/>
        {/* <Route path='/listhome' element={<ListHome/>} />
        <Route path='/userhome/:username' element={<UserHome/>} /> */}
        {/* <Route path='/signin' element={<SignInPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/userinfo' element={<UserInfoPage/>} /> */}
      </Route>
    </Routes>
  )
}

export default App