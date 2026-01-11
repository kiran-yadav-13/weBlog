import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"
import LogoLog from "../assets/logoDark.svg"
function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='flex w-full items-center justify-center '>
        <div className={`mx-auto w-full max-w-lg bg-white auth-card rounded-xl p-10 border border-aurora-border shadow-soft-lg m-4`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                    <div className='flex items-center text-center'>
                     <img src={LogoLog} className='h-20 md:h-28  '/>
    
    </div>
                    </span>
        </div>
        <h2 className="text-center font-serif text-2xl font-semibold">Welcome Back</h2>
        <p className="mt-2 text-center text-base text-aurora-muted">
                    Sign in to continue your writing journey.
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                                <Input
                                    label="Password: "
                                    type="password"
                                    placeholder="Enter your password"
                                    showToggle={true}
                                    {...register('password', {
                                        required: true,
                                    })}
                                />
                <Button
                type="submit"
                className="w-full"
                >Sign In</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login