import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { store } from './App'
import axios from "axios"

const MyProfile = () => {
    const Navigate = useNavigate()
    const [token, setToken] = useContext(store)
    const [data ,setData] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:5000/myprofile",{
            headers : {
                 "x-token" : token
            }
        }).then (res => setData(res.data)).catch((error) => console.log("data error"))

    }, [])

    if(!token) {
        return Navigate("/login");
    }


  return (
    <div>
        <center>
        <h1>My Dash Board</h1>
        {console.log(data)}
        {
            data && <h1>welcome to : {data?.username}</h1>
        }
        </center>
    </div>
  )
}

export default MyProfile