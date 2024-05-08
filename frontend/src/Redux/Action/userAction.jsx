import axios from 'axios'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const login =(email,password) => async(dispatch)=>{
    try{
        // console.log(formdata)
        const headers = {
            "Content-Type": "application/json",
        };
        const response = await axios.post('http://localhost:4000/users/',{
            query: `
            mutation {
              login(email: "${email}", password: "${password}") {
                user {
                  id
                  username
                  email
                }
                token
              }
            }
          `
        });
        //   const { data } = response.data;
          console.log('redux_data',response)
        //   const token = response.data.token;
        //   localStorage.setItem("Token", token);
        //   dispatch({
        //     type: "login_success",
        //     payload: response.data.token
        //   });
        //   getuserprofile()
    }
    catch(error){
        console.log('login_error',error)
    }
}
const register =(formdata) => async(dispatch)=>{
    try{

        const headers = {
            "Content-Type": "application/json",
        };
        const response = await axios.post('http://127.0.0.1:8000/api/accounts/user/',formdata, headers);
        //   const { data } = response.data;
          console.log('redux_register_data',response)
       
            toast.success('User created successfully!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
        //   dispatch({
        //     type: "login_success",
        //     payload: data.login 
        //   });
    }
    catch(error){
        console.log('login_error',error)
        
    }
}

const forgetpassword =(formdata) => async(dispatch)=>{
    try{
        console.log(formdata)
        const headers = {
            "Content-Type": "application/json",
        };
        const response = await axios.post('http://127.0.0.1:8000/api/accounts/user/forget_password/',formdata, headers);
        //   const { data } = response.data;
          console.log('redux_register_data',response)
          toast.success('Please check your email',{
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        //   dispatch({
        //     type: "login_success",
        //     payload: data.login 
        //   });
    }
    catch(error){
        console.log('login_error',error)
        
    }
}
const getuserprofile =() => async(dispatch)=>{
    try{
        // console.log(formdata)
        const token = localStorage.getItem("Token");
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          };
        const response = await axios.get('http://127.0.0.1:8000/api/accounts/user/',{ headers: headers });
        //   const { data } = response.data;
          console.log('redux_userprofile_data',response)
          dispatch({
            type: "get_success",
            payload: response.data
          });
    }
    catch(error){
        console.log('login_error',error)
        
    }
}
const loaduser =() => async(dispatch)=>{
    try{
        // console.log(formdata)
        const token = localStorage.getItem("rToken");
        const response = await axios.post('http://localhost:5000/users/loaduser',{token});
        //   const { data } = response.data;
          console.log('redux_loaduser_data',response)
          dispatch({
            type: "get_success",
            payload: response.data
          });
    }
    catch(error){
        console.log('login_error',error)
        
    }
}
const updateprofile =(formdata) => async(dispatch)=>{
    try{
        const headers = {
            "Content-Type": "application/json",
        };
        const token = localStorage.getItem("Token");
        console.log(formdata)
        const requestBody = {
            formdata: formdata,
            token: token
        };
        const response = await axios.post('http://localhost:5000/users/updateprofile',requestBody,{headers:headers});
        //   const { data } = response.data;
          console.log('redux_updateprofile_user_data',response)
    }
    catch(error)
    {
        console.log('update_profile_error',error)
    }
}



export {login,register,forgetpassword,getuserprofile,loaduser,updateprofile}