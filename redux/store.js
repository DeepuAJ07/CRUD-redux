import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Data/userReducer";
const store = configureStore({
    reducer:{
        user:userReducer
    }
})

export default store;