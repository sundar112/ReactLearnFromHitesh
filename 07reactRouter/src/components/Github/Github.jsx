import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
  const [data, setData] = useState([])
  useEffect(() => {
   
    fetch('https://api.github.com/users/sundar112')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data)
      
    })
  }, [])
  
  return (
    <div className='text-center bg-gray-600 text-3xl m-4 shadow-2xl p-4 text-white'>Github Folowers : {data.followers}</div>
  )
}

export default Github