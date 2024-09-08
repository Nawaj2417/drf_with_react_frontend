import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Layout.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Categories from './components/Categories/Categories.jsx'
import Createpost from './components/Createpost/Createpost.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import Forgetpassword from './components/Forgotpassword/Forgotpassword.jsx'

import Blogdetail from './components/Blogdetail/Blogdetail.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>} >
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/createpost" element={<Createpost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<Forgetpassword />} />
        <Route path="/blogdetail/:blogid" element={<Blogdetail />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
