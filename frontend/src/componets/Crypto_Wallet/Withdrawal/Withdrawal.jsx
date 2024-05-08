import React from 'react'
import './withdrawal.css'
import Button from 'react-bootstrap/Button';
const Withdrawal = () => {
  return (
    <div className='depositbox1'>
    <div className="container-fluid">
        <div className="row">
            <div className='cardbox_1'>
                <div className='cardbox_3'>
                    <p className='cardheading_1'>WithDrawal</p>
                </div>
            </div>
        </div>
    </div>
    <div className='depsitbox3'>
                    <div className='depositbox2'>
                        <div className=' depositcardminibox_2 mt-3'>
                            <p className='swapbox_para1'>Select Coin</p>
                            <select name="cars" id="cars" className='depositcard_dropdown_1 form-select'>
                                <option value="volvo" selected disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className=' depositcardminibox_2 mt-3'>
                            <p className='swapbox_para1'>Select Networks</p>
                            <select name="cars" id="cars" className='depositcard_dropdown_1  form-select'>
                                <option value="volvo" selected disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className='depositbox2'>
                        <div className=' depositcardminibox_2 mt-3'>
                            <p className='swapbox_para1'>Your Address</p>
                            <input type='text' placeholder='Enter Your Address' className='withdrawa_input' />
                        </div>
                        <div className=' depositcardminibox_2 mt-3'>
                            <p className='swapbox_para1'>Enter Amount</p>
                         <input type='text' placeholder='Enter Amount' className='withdrawa_input' />
                            
                        </div>
                    </div>
                    <div className='depositbox_btn'>
                        <Button>
                            WithDraw
                        </Button>
                    </div>
    </div>
</div>
  )
}

export default Withdrawal