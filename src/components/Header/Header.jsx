import React, { useState } from 'react'
import { Container, LogoutBtn } from '../index'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IoMenu, IoClose, IoMoon, IoSunny, IoPersonCircle } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

// Auth-based nav
function NavLinks({ onNavigate, vertical = false }) {
  const authStatus = useSelector((state) => state.auth.status)

  const items = [
    { name: 'Home', to: '/', show: true },
    { name: 'All Posts', to: '/all-posts', show: true },
    { name: 'Add Post', to: '/add-post', show: authStatus },
    { name: 'Login', to: '/login', show: !authStatus },
    { name: 'Sign Up', to: '/signup', show: !authStatus },
  ]

  if (authStatus) items.push({ name: 'Profile', to: '/profile', show: true, icon: IoPersonCircle })

  return (
    <ul className={`flex ${vertical ? 'flex-col' : 'flex-row'} items-center gap-4`}>
      {items.map((item) =>
        item.show ? (
          <li key={item.name}>
            <NavLink
              to={item.to}
              onClick={onNavigate}
              className={({ isActive }) =>
                `px-4 py-3 rounded-md text-base font-medium transition-all focus:outline-none ${
                  isActive ? 'text-[#FF7A7A] underline' : 'text-black hover:text-[#FF7A7A]'
                }`
              }
            >
              {item.icon ? (
                <span className='inline-flex items-center gap-2'><item.icon className='text-lg'/> {item.name}</span>
              ) : (
                item.name
              )}
            </NavLink>
          </li>
        ) : null
      )}

      {authStatus && (
        <li>
          <LogoutBtn />
        </li>
      )}
    </ul>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => !!localStorage.getItem('weblog-dark'))

  React.useEffect(() => {
    if (dark) document.documentElement.classList.add('dark-mode')
    else document.documentElement.classList.remove('dark-mode')
    localStorage.setItem('weblog-dark', dark ? '1' : '')
  }, [dark])

  return (
    <header className='sticky top-0 z-50'>
      <div className='header-gradient rounded-b-2xl shadow-md text-black text-[min(3.6vw,1.25rem)] '>
        <Container>
          <div className='flex items-center justify-between py-4 md:py-6'>
            {/* Logo */}
            <NavLink to='/' className='weblog-logo'>
              <div className='weblog-logo text-[1.25rem] md:text-[1.5rem]'>WEBLOG</div>
            </NavLink>

            {/* Desktop Nav */}
            <nav className='hidden md:flex'>
              <NavLinks onNavigate={() => setOpen(false)} />
            </nav>

            <div className='hidden md:flex items-center gap-3'>
              <button
                aria-label='Toggle dark mode'
                onClick={() => setDark((d) => !d)}
                className='p-2 rounded-md text-black hover:text-[#FF7A7A]'
              >
                {dark ? <IoSunny /> : <IoMoon />}
              </button>
            </div>

            {/* Mobile Button */}
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              className='md:hidden p-2 text-2xl'
              onClick={() => setOpen((s) => !s)}
            >
              {open ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </Container>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className='md:hidden border-t border-white/30 overflow-hidden'
            >
              <Container>
                <div className='py-3'>
                  <NavLinks
                    onNavigate={() => setOpen(false)}
                    vertical={true}
                  />
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
