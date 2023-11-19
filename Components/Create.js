import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/Data/userReducer'
import { useNavigate } from 'react-router-dom'

function Create() {
    const[Name,setName]=useState('')
    const[Email,setEmail]=useState('')
    const Navigate = useNavigate()
const userData=useSelector((state)=>state.user)
const dispatch=useDispatch()
    const handleSubmit=(event)=>{
event.preventDefault()
dispatch(addUser({id:Math.floor(Math.random()),Name,Email}))
alert('Submitted')
Navigate("/")
    }
   
  return (
    <div >
        <div className='input-group mt-4'>
            <h3 className='text-info text-center'>Add New User</h3>
            <form  onSubmit={handleSubmit}>
            <input className='form-control' type='text'name='Name' required placeholder='Enter the Name'onChange={(e)=>{setName(e.target.value)}}></input><br>
            </br>
            <input className='form-control' type ='email'name='Email' required placeholder='Enter your Email'onChange={(e)=>{setEmail(e.target.value)}}></input>
            <br>
            </br>
            <button className='btn btn-primary'>Submit</button>
            </form>
         
        </div>
        </div>
  )
}

export default Create