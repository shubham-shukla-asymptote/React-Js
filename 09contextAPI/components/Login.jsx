import React, { useState, useContext } from 'react'
import UserContext from '../context/Context'

function Login() {
    const [userName, SetUserName] = useState("")
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ userName, password })
    }
    return (
        <div>
            <h2 className='text-3xl bold text-white text-center m-3'>Login</h2>
            <input className='h-10 w-45 m-3 border-black bg-blue'
                type='text'
                value={userName}
                onChange={(e) => SetUserName(e.target.value)}
                placeholder='Username' />
            <input className='h-10 w-45 m-3'
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' />
            <button onClick={handleSubmit}>Submit</button>


        </div>
    )
}

export default Login