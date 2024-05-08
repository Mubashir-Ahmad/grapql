import React, {useState , useEffect} from 'react'
import './login.css'
import image1 from '../../asset/images/Group.png';
import image2 from '../../asset/images/a22.png'
import image3 from '../../asset/images/a21.png'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { forgetpassword, login } from '../../Redux/Action/userAction';
import Swal from 'sweetalert2'
const Login = () => {
  const [email,setemail] = useState();
  const [password,setpassword] = useState();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {users,isAuthenticated,error} = useSelector((item)=>item.user);
   console.log(useSelector((item)=>item.user))
  useEffect(() => {
    console.log(error,isAuthenticated)
    if(isAuthenticated){
        navigate('/dashbord');
    }
    if(error)
    {
        Swal.fire({
                    icon: 'error',
                    title: error,
                    confirmButtonColor: '#18a0fb',
                });
                dispatch({
                    type:'login_error_reset'
                });
    }
    const token = localStorage.getItem('Token')
    token && navigate("/dashbord")
}, [isAuthenticated,error,console])
  const handleforgetpassword = async () =>{
    if(!email){
      Swal.fire({
        icon: 'error',
        title: "Please enter email",
        confirmButtonColor: '#18a0fb',
    })
      return;
    }
    try {
      await dispatch(forgetpassword({ email}));
      // Redirect or do something after successful login
    } catch (error) {
      console.log('forget_errors', error);
    }
  }
  const handlelogin = async () => {
    try {
      await dispatch(login({ email, password }));
      // Redirect or do something after successful login
    } catch (error) {
      console.log('login_errors', error);
    }
  };
  return (
    <div className="accounts_main">
      <div className="accounts_card_main_div">
        <div className="accounts_card_body">
          <div className='loginbox1'>
            <img src={image1} />
          </div>
          <div className='accounts_title'>
            <h3 className='login_page_heading_1'>Sign in to Account</h3>
            <p className='login_page_para_1'>Send, spend and save smarter</p>
          </div>
          <div className="accounts_input">
            <input
              type='text'
              placeholder='Email'
              onChange={(e)=>{
                setemail(e.target.value)
              }}
            />
          </div>
          <div className="accounts_input">
            <input
              type='text'
              placeholder='Password'
              onChange={(e)=>{
                setpassword(e.target.value)
              }}
            />
          </div>
          <div className="login_forgot_main">
          <div className='login_minibox_3'>
            <input type='checkbox' id='Remember' />
            <label htmlFor="Remember">Remember me</label>
          </div>
          <Link to='/forgot'>Forgot Password?</Link>
          </div>
          
          <div className="accounts_btn">
            <button type='button' onClick={()=>handlelogin()}>Sign in</button>
          </div>
          
          <div className='accounts_last_text'>
            <h5>Don’t have an account? <Link to='/register'>Register </Link></h5>
          </div>
        </div>
      </div>
      <div className="accounts_right_card"></div>
    </div>
  )
}

export default Login
