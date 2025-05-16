import React from 'react'
import {useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data, setData] = React.useState(0)
    // useEffect(() => {
    //     fetch('https://api.github.com/users/mohammadzaid07')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center m-4  bg-gray-600 text-white p-4 text-3xl'> Github Public Repos : {data.public_repos}
    <img src={data.avatar_url} alt="Avatar" width={300} className='rounded-full mt-4 mx-auto'/> 
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/mohammadzaid07')
    return response.json()
}