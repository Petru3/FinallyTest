import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Importing Pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
// import Login from './pages/Login'
import Error from './pages/NotFound'
import AppLayout from "./ui/AppLayout"

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error/>,

      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/projects',
          element: <Projects />
        },
        // {
        //   path: '/login',
        //   element: <Login/> 
        // },
        {
          path: '/dashboard',
          element: <Dashboard />
        },
      ]
    }
  ])

  return (
    <RouterProvider 
      router={router}
    />
  )
}

export default App
