import React, {useState , useEffect} from 'react'
import './login.css'
import image1 from '../../asset/images/Group.png';
import image2 from '../../asset/images/a22.png'
import image3 from '../../asset/images/a21.png'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { forgetpassword,} from '../../Redux/Action/userAction';
import Swal from 'sweetalert2'
const Forget = () => {
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
 const handleforgot =() =>{
  const formdata = new FormData();
  formdata.append('email',email);
  dispatch(forgetpassword(formdata));
 }
  return (
    <div className="accounts_main">
      <div className="accounts_card_main_div">
        <div className="accounts_card_body">
          <div className='loginbox1'>
            <img src={image1} />
          </div>
          <div className='accounts_title'>
            <h3 className='login_page_heading_1'>Forgot Password</h3>
            <p className='login_page_para_1'>Send, spend and save smarter</p>
          </div>
          <div className="accounts_input">
            <input
              type='text'
              placeholder='Type email'
              onChange={(e)=>{
                setemail(e.target.value)
              }}
            />
          </div>
          {/* <div className="login_forgot_main">
          <div className='login_minibox_3'>
            <input type='checkbox' id='Remember' />
            <label htmlFor="Remember">Remember me</label>
          </div>
          <Link to='/forgot'>Forgot Password?</Link>
          </div> */}
          
          <div className="accounts_btn">
            <button type='button' onClick={()=>
              {
                handleforgot()
                // navigate('/otp')
              }
              }>Send code</button>
          </div>
        </div>
      </div>
      <div className="accounts_right_card"></div>
    </div>
  )
}

export default Forget
