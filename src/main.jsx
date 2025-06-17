import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import './index.css'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      children: [{
        
      }]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/sign-up",
      element: <Signup />
    }
  ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
