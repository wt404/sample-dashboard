import MenuButton from './MenuButton'

const Sidebar = ({ activeSidebar, toggleSidebar }) => {
  return (
    <aside
      className={
        activeSidebar
          ? 'bg-blue-500 fixed z-10 w-full md:w-64 h-screen transition-all duration-300'
          : 'bg-blue-500 fixed z-10 w-64 h-screen transition-all duration-300 -ml-64'
      }
    >
      {/* Toggle */}
      <div className='h-16 flex items-center px-5'>
        <button
          className='block md:hidden bg-blue-600 text-white font-medium p-2 rounded hover:bg-blue-500'
          onClick={toggleSidebar}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12'
            />
          </svg>
        </button>
      </div>
      {/* Menu */}
      <nav>
        <ul className='flex flex-col space-y-5 p-5'>
          <li>
            <p className='p-5 text-center bg-black text-white rounded'>
              Welcome, User
            </p>
          </li>
          <li className='flex'>
            <MenuButton name='Dashboard' to='' />
          </li>
          <li className='flex'>
            <MenuButton name='User' to='user' />
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
