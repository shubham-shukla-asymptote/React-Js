import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function GitHub() {
    const data=useLoaderData()
    // const [data,setData]=useState(0)
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/shubham-shukla-asymptote').then(response=>response.json()).then((data)=>setData(data))
    // },[])
  return (
    <div className='bg-gray-600 text-white text-3xl p-4 flex justify-center text-center flex-col'>GitHub Followers:{data.followers}
    <img className='mx-auto rounded-lg p-4' src={data.avatar_url} alt="Git picture"  width={200}/></div>
  )
}

export default GitHub
export const gitHubInLoader=async()=>{
    const response=await fetch("https://api.github.com/users/shubham-shukla-asymptote")
    return response.json()
}