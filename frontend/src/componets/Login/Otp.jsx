import React, { useState, useEffect } from 'react'
import './login.css'
import image1 from '../../asset/images/Group.png';
import image2 from '../../asset/images/a22.png'
import image3 from '../../asset/images/a21.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forgetpassword, login } from '../../Redux/Action/userAction';
import Swal from 'sweetalert2'
const Otp = () => {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const dispatch = useDispatch()
    const navigate = useNavigate();
  
 
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
                        <h3 className='login_page_heading_1'>Check your email</h3>
                        <p className='login_page_para_1'>we was send 4 length verification code, enter it on blow entery</p>
                    </div>
                    <div className="accounts_input">
                        <section class="verification__fields">
                            <fieldset class="verification__field">
                            

                                <input type="text" class="verification__input verification__input--1" id="verification-input-1" placeholder="-" maxlength="1" />
                                <input type="text" class="verification__input verification__input--2" id="verification-input-2" placeholder="-" maxlength="1" />
                                <input type="text" class="verification__input verification__input--3" id="verification-input-3" placeholder="-" maxlength="1" />
                                <input type="text" class="verification__input verification__input--4" id="verification-input-4" placeholder="-" maxlength="1" />
                            </fieldset>
                        </section>
                    </div>
                    <div className="accounts_btn">
                        <button type='button' onClick={()=>navigate('/resetpassword')}>Verify Code</button>
                    </div>
                </div>
            </div>
            <div className="accounts_right_card"></div>
        </div>
    )
}

export default Otp
