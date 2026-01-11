import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-1 duration-200 text-base font-medium text-black hover:text-[#FF7A7A] hover:underline rounded-xl'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn