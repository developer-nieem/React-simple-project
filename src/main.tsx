import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main.tsx'
import Home from './pages/Home/Home/Home.tsx'
import Dashboard from './layout/Dashboard.tsx'
import Admin from './pages/Dashboard/Admin.tsx'





const router = createBrowserRouter([
  {
    path:'/',
    element : <Main></Main>,
    children:[
      {
        path:'/',
      element : <Home></Home>
      }
    ]
  },
  {
    path:"/dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'admin',
        element:<Admin></Admin>

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)
