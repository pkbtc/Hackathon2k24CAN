import { useState } from 'react'
import './App.css'
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import Apply from './pages/Apply'
import Profile from './pages/Profile'
import Jobs from './pages/Jobs'
import AddJobs from './pages/AddJobs'
import Search from './pages/Search'

function App() {
  const router=createBrowserRouter([
      {path:'/',element:<Home/>},
      {path:'/Login',element:<Login/>},
      {path:'/signup',element:<Signup/>},
      {path:'/apply',element:<Apply/>},
      {path:'/profile',element:<Profile/>},
      {path:'/jobs',element:<Jobs/>},
      {path:'/add',element:<AddJobs/>},
      {path:'/search',element:<Search/>},
  ])

  return (
    <>
    <RouterProvider router={router}/>

    </>
  )
}

export default App
