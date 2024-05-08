import React,{useState} from 'react'
import './account.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { updateprofile } from '../../Redux/Action/userAction';
const Account = () => {
    const dispatch = useDispatch();
  const [isAccountActive, setIsAccountActive] = useState(true);
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [number,setNumber] = useState();
  const [telegram,setTelegram] = useState();
  const handleFalse = () => {
    setIsAccountActive(false);
  };

  const handleTrue = () => {
    setIsAccountActive(true);
  };
  const handleUpdate = (e) => {
    const formdata = new FormData();
    formdata.append("first_name",name);
    formdata.append("email",email);
    formdata.append("phone",number);
    formdata.append("telegram",telegram);
    console.log('dd',formdata,name,email)
    dispatch(updateprofile(formdata));
  }
  return (
    <div className='account_box1'>
        <div className="container-fluid">
        <div className="row">
            <div className='cardbox_1'>
                <div className='cardbox_3'>
                    <p className='cardheading_1'>Profile Setting</p>
                </div>
            </div>
        </div>
    </div>
    <div className='depsitbox3'>
    <div className='account_linkbox'>
      <Link className={isAccountActive? 'account_link actives' :'account_link'} onClick={handleTrue}>Account</Link>
      <Link className={!isAccountActive ? 'account_link actives' :'account_link'} onClick={handleFalse}>Security</Link>
      </div>
      {isAccountActive && (
        <>
        <div className='depositbox2'>
                        <div className=' depositcardminibox_2 mt-3'>
                            <p className='swapbox_para1'>Name</p>
                            <input type='text' placeholder='Enter Name' className='withdrawa_input' 
                            onChange={(e)=>{
                                setName(e.target.value)
                            }}
                            />
                        </div>
                        <div className=' depositcardminibox_2 mt-3'>
                            <p className='swapbox_para1'>Email</p>
                         <input type='email' placeholder='Enter Email' className='withdrawa_input' 
                         onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                         />
                        </div>
                    </div>
                    <div className='depositbox2'>
                    <div className=' depositcardminibox_2 mt-3'>
                        <p className='swapbox_para1'>Mobile Number</p>
                        <input type='number' placeholder='Enter Mobile Number' className='withdrawa_input' 
                        onChange={(e)=>{
                            setNumber(e.target.value)
                        }}
                        />
                    </div>
                    <div className='depositcardminibox_2 mt-3'>
                        <p className='swapbox_para1'>Telegram</p>
                     <input type='text' placeholder='Enter Telegram' className='withdrawa_input' 
                     onChange={(e)=>{
                        setTelegram(e.target.value)
                    }}
                     />
                    </div>
                </div>
                <div className='depositbox_btn'>
                        <Button onClick={()=>{handleUpdate()}}>
                            Update
                        </Button>
                    </div>
                </>
                    
      )}
      {!isAccountActive &&(
        <>
        <div className='depositbox2'>
                        <div className=' depositcardminibox_2 mt-3'>
                            <p className='swapbox_para1'>Old Password</p>
                            <input type='password' placeholder='*****' className='withdrawa_input' style={{width:'98%'}}/>
                        </div>
                    </div>
                    <div className='depositbox2'>
                    <div className=' depositcardminibox_2 mt-3'>
                        <p className='swapbox_para1'>New Password</p>
                        <input type='password' placeholder='*****' className='withdrawa_input' />
                    </div>
                    <div className='depositcardminibox_2 mt-3'>
                        <p className='swapbox_para1'>Confirm New Password</p>
                     <input type='password' placeholder='*****' className='withdrawa_input' />
                        
                    </div>
                </div>
                <div className='depositbox_btn'>
                        <Button>
                           Change Password
                        </Button>
                    </div>
        </>
      )}

                   
                    
    </div>
    </div>
  )
}

export default Account