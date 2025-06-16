import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Landing from './Pages/Landing'
import LoginPage from './Pages/Login'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
        {/* <Landing /> */}
    </>
  )
}

export default App