import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const Layout = () => {
  const [activeSidebar, setActiveSidebar] = useState(true)

  const toggleSidebar = () => {
    setActiveSidebar((prev) => !prev)
  }

  return (
    <div className='flex'>
      {/* Sidebar */}
      <Sidebar activeSidebar={activeSidebar} toggleSidebar={toggleSidebar} />

      {/* Right side */}
      <div
        className={
          activeSidebar
            ? 'w-full transition-all duration-300 ml-64'
            : 'w-full transition-all duration-300'
        }
      >
        {/* Navbar */}
        <Navbar activeSidebar={activeSidebar} toggleSidebar={toggleSidebar} />

        {/* Content */}
        <div className='p-5'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
