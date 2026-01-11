import React, { useId, useState } from 'react'
import { IoEye, IoEyeOff } from 'react-icons/io5'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    showToggle = false,
    ...props
}, ref) {
    const id = useId()
    const [visible, setVisible] = useState(false)
    const isPassword = type === 'password'

    return (
        <div className='w-full relative'>
            {label && (
                <label className='inline-block mb-1 pl-1' htmlFor={id}>
                    {label}
                </label>
            )}

            <input
                type={isPassword && showToggle && visible ? 'text' : type}
                className={`px-3 py-2 rounded-lg input-surface outline-none focus:brightness-105 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />

            {isPassword && showToggle && (
                <button
                    type='button'
                    aria-label={visible ? 'Hide password' : 'Show password'}
                    onClick={() => setVisible((v) => !v)}
                    className='absolute right-2 top-9 text-gray-500'
                >
                    {visible ? <IoEyeOff /> : <IoEye />}
                </button>
            )}
        </div>
    )
})

export default Input