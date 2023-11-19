import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteUser } from '../redux/Data/userReducer'

function User() {
    const userData=useSelector((state)=>state.user)
const dispatch=useDispatch()

const handleDelete=(id)=>{
    dispatch(deleteUser({id:id}))
}
  return (
    <div className='m-4 p-5'>
       <h4 className='text-center'>CRUD Operation Using Redux</h4>
      <Link className='btn btn-success' to='/create'>Create</Link>
      <table className='table'>
    <thead >
        <tr className="table-dark">
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
        </tr>
    </thead>
    <tbody className="table-success" >
{userData.map((user)=>(
    <tr className='bg-success ' key={user.id}>
        <td className='text-primary'>{user.Name}</td>
        <td className='text-primary'>{user.Email}</td>
        <td><Link className='btn btn-primary' to={`/Edit/${user.id}`}>Edit</Link>
        <button className='btn btn-danger' onClick={()=>handleDelete(user.id)}>Delete</button></td>
        </tr>
))}
    </tbody>
   </table>
      </div>

  )
}

export default User