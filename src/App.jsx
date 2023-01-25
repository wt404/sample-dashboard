
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Layout from './components/layouts/Layout'
import Dashboard from './pages/dashboard'
import User from './pages/user'


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Dashboard />
      },
      {
        path: 'user',
        element: <User />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
