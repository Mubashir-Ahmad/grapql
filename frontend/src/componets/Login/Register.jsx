import React, { useState } from 'react'
import './login.css'
import image1 from '../../asset/images/Group.png';
import image2 from '../../asset/images/a22.png'
import image3 from '../../asset/images/a21.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/Action/userAction';
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const [email, setemail] = useState();
  const dispatch = useDispatch()
  const [password, setpassword] = useState();
  const [confirm_password, setconfirmpassword] = useState();
  const handleregister = async () => {
    if (password !== confirm_password) {
      toast.warning('Password not matched!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

        });
      return;
    }
    try {
      await dispatch(register({ email, password, confirm_password }));
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
            <h3>Register Your Account</h3>
            <p>Send, spend and save smarter</p>
          </div>
          <div className="accounts_input">
            <input
              type='text'
              placeholder='Email'
              className='loginpage_input'
              onChange={(e) => {
                setemail(e.target.value)
              }}
            />
          </div>
          <div className="accounts_input">
            <input
              type='text'
              placeholder='Password'
              onChange={(e) => {
                setpassword(e.target.value)
              }}
            />
          </div>
          <div className="accounts_input">
            <input
              type='text'
              placeholder='Confirm Password'
              onChange={(e) => {
                setconfirmpassword(e.target.value)
              }}
            />
          </div>
          {/* <div className="login_forgot_main">
          <div className='login_minibox_3'>
            <input type='checkbox' id='Remember' />
            <label htmlFor="Remember">Terms & Cinditions</label>
          </div>
          </div> */}

          <div className="accounts_btn">
            <button type='submit' onClick={() => handleregister()}>Register</button>
          </div>

          <div className='accounts_last_text'>
            <h5>Don’t have an account? <Link to='/login'>Login </Link></h5>
          </div>
        </div>
      </div>
      <div className="accounts_right_card"></div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />

    </div>
  )
}

export default Register