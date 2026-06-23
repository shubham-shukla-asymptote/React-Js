import { useState } from 'react'
import UserContextProvider from '../context/UserContextProvider'
import Login from '../components/Login'
import Profile from '../components/Profile'



function App() {
 

 return(
  <UserContextProvider >
 <div className='bg-yellow-700 text-white flex items-center justify-center p-4 m-3 flex-col mx-auto'>

  <h1 className='m-2'>React With Chai Aur Code</h1>
  <Login/>
  <Profile/>
 </div>
  </UserContextProvider>
 )
}

export default App
