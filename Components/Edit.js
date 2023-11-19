
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editUser } from '../redux/Data/userReducer'

function Edit() {
    const userData=useSelector((state)=>state.user)
   const {id}=useParams()
   const existingUser=userData.filter(f=>f.id==id)
   const{Name,Email}=existingUser[0]
   const[uname,setName]=useState(Name)
   const[uemail,setEmail]=useState(Email)
   const dispatch=useDispatch()
   const Navigate=useNavigate()
const handleEdit = (event)=>{
event.preventDefault()
dispatch(editUser({id:id,Name:uname,Email:uemail}))
Navigate('/')
}
  return (
    <div className='m-4 d-flex justify-content-center flex-row '>
        <div className='border border-5 w-75 mt-4'>
            <h3 className='text-info text-center'>Edit User</h3>
            <form className='align-items-center' onSubmit={handleEdit}>
            <input className='form-control w-50 justify-content-center' type='text'name='Name'placeholder='Enter the Name' value={uname}onChange={(e)=>{setName(e.target.value)}}></input><br>
            </br>
            <input className='form-control  w-50' type ='email'name='Name'placeholder='Enter your Email'value={uemail}onChange={(e)=>{setEmail(e.target.value)}}></input>
            <br>
            </br>
            <button className='btn btn-primary'>Edit</button>
            </form>
         
        </div>
        </div>
  )
}

export default Edit