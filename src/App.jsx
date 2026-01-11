import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { ProductShimmer } from './components/Shimmer'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const location = useLocation()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  // show a short transition shimmer while route changes
  useEffect(() => {
    setIsTransitioning(true)
    const t = setTimeout(() => setIsTransitioning(false), 380)
    return () => clearTimeout(t)
  }, [location.pathname])
  
  return !loading ? (
    <div className='min-h-screen flex flex-col bg-aurora-bg'>
      <div className='w-full'>
        <Header />
        <main className='flex-1'>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <motion.div animate={{ y: isTransitioning ? -20 : 0 }} transition={{ duration: 0.28 }}>
          <Footer />
        </motion.div>

        {/* small bottom shimmer that lifts while transitioning */}
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: isTransitioning ? -28 : 0, opacity: isTransitioning ? 1 : 0 }}
          transition={{ duration: 0.28 }}
          className='pointer-events-none fixed left-0 right-0 bottom-0 h-8'
        >
          <div className='w-full h-full bg-gradient-to-r from-white/0 via-[#FFDCE0]/60 to-white/0'></div>
        </motion.div>
      </div>
    </div>
  ) : null
}

export default App
