import { createReducer } from "@reduxjs/toolkit";

const initialState ={
    users:[],
    isAuthenticated:null,
    loading:false,
    error:'',
    user:[],
    success:false,
    message:'',
    overseeuser:null
};

const userReducer =createReducer(initialState,builder=>{
    builder.addCase('login_request',(state,action)=>{
        state.loading = false
        state.isAuthenticated = false
    });
    builder.addCase('login_success',(state,action)=>{
        state.loading = true
        state.isAuthenticated = true
        state.users = action.payload
    });
    builder.addCase('create_user_success',(state,action)=>{
        state.loading = true
        state.isAuthenticated = true
        state.success = true
    });
    builder.addCase('get_success',(state,action)=>{
        state.loading = true
        state.isAuthenticated = true
        state.user = action.payload
    });
    builder.addCase('oversee_user_success',(state,action)=>{
        state.loading = true
        state.isAuthenticated = true
        state.overseeuser = action.payload
    });
    builder.addCase('logout',(state,action)=>{
        state.loading = false
        state.isAuthenticated = false
        state.users = null
    });

    builder.addCase('reset_overseeuser',(state,action)=>{
        state.loading = false
        state.isAuthenticated = false
        state.overseeuser = null
    });
    builder.addCase('login_error',(state,action)=>{
        state.loading = false
        state.isAuthenticated = false
        state.error = action.payload
    });
    builder.addCase('login_error_reset',(state,action)=>{
        state.loading = false
        state.isAuthenticated = false
        state.error =''
    });
    builder.addCase('savedpassword',(state,action)=>{
        state.success = true
        state.message = action.payload
    });
})

export default  userReducer