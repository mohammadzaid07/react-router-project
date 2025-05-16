import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
import Footer from './components/Footer/Footer.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='user/' element={<User />}>
        <Route path=':userid' element={<User />} />
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route
      loader={githubInfoLoader}
       path='Github' 
       element={<Github />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
