import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../Components/UserList";

const userSlice=createSlice({
    name:"user",
    initialState:userList,
    reducers:{
        addUser:(state,action)=>{
state.push(action.payload)
        },
        editUser:(state,action)=>{
            const{id,Name,Email}=action.payload
            const uu = state.find(user=>user.id==id)
            if(uu){
               uu.Name=Name
               uu.Email=Email
            }
        },
        deleteUser:(state,action)=>{
            const {id} = action.payload
            const uu =state.find(user=>user.id==id)

            if(uu){
              return  state.filter(f => f.id!== id)
            }
        }
    }
       
  
  
    
})
export const {addUser,editUser,deleteUser}=userSlice.actions
export default userSlice.reducer