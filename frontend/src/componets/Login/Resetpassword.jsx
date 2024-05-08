import React, { useState, useEffect } from 'react';
import './login.css';
import image1 from '../../asset/images/Group.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forgetpassword, login } from '../../Redux/Action/userAction';
import Swal from 'sweetalert2';

const Resetpassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useSelector((item) => item.user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashbord');
    }
    if (error) {
      Swal.fire({
        icon: 'error',
        title: error,
        confirmButtonColor: '#18a0fb',
      });
      dispatch({
        type: 'login_error_reset',
      });
    }
    const token = localStorage.getItem('Token');
    token && navigate('/dashbord');
  }, [isAuthenticated, error, navigate, dispatch]);

  const handleForgetPassword = async () => {
    if (!email) {
      Swal.fire({
        icon: 'error',
        title: 'Please enter email',
        confirmButtonColor: '#18a0fb',
      });
      return;
    }
    try {
      await dispatch(forgetpassword({ email }));
    } catch (error) {
      console.log('forget_errors', error);
    }
  };

  const handleLogin = async () => {
    try {
      await dispatch(login({ email, password }));
    } catch (error) {
      console.log('login_errors', error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="accounts_main">
      <div className="accounts_card_main_div">
        <div className="accounts_card_body">
          <div className='loginbox1'>
            <img src={image1} alt="Logo" />
          </div>
          <div className='accounts_title'>
            <h3 className='login_page_heading_1'>Reset Password</h3>
            <p className='login_page_para_1'>Send, spend and save smarter</p>
          </div>
          <div className="accounts_input">
            <i className={`far ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`} onClick={togglePasswordVisibility}></i>
            <input id="password" type={passwordVisible ? 'text' : 'password'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="accounts_input">
            <i className={`far ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`} onClick={togglePasswordVisibility}></i>
            <input id="password" type={passwordVisible ? 'text' : 'password'} placeholder="Confirm password" value={confirmpassword} onChange={(e) => setconfirmPassword(e.target.value)} />
          </div>
         
          <div className="accounts_btn">
            <button type='button' >Reset Password</button>
          </div>
        </div>
      </div>
      <div className="accounts_right_card"></div>
    </div>
  );
}

export default Resetpassword;
