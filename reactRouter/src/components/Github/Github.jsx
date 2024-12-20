import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data=useLoaderData()
    // //since we need to access data from api so use useEffect hook
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/eshhacb')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers} 
    <img src={data.avatar_url} alt="Git picture" width={300}/>
    
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
   const response= await fetch('https://api.github.com/users/eshhacb') //fetch returns a promise that resolves to a response object 
   //response.json() returns a promise 
   return response.json()

   //ukltimately promise returned
}