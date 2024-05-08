import React from 'react'
import './deposit.css'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
const Deposit = () => {
    return (
        <div className='depositbox1'>
            <div className="container-fluid">
                <div className="row">
                    <div className='cardbox_1'>
                        <div className='cardbox_3'>
                            <p className='cardheading_1'>Deposit</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='depsitbox3'>
                <Accordion  className='acod'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <span className='depsot_cardheading1'>By Crypto</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='depositbox2'>
                                <div className=' depositcardminibox_2 mt-3'>
                                    <p className='swapbox_para1'>Select Bank</p>
                                    <select name="cars" id="cars" className='depositcard_dropdown_1 form-select'>
                                        <option value="volvo" selected disabled>Select</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className=' depositcardminibox_2 mt-3'>
                                    <p className='swapbox_para1'>Select Cryto</p>
                                    <select name="cars" id="cars" className='depositcard_dropdown_1  form-select'>
                                        <option value="volvo" selected disabled>Select</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>
                            <div className='depositbox_btn'>
                                <Button>
                                    Play
                                </Button>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className='depsitbox3'>
                <Accordion className='acod'>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><span className='depsot_cardheading1'>By Bank Transfer</span></Accordion.Header>
                        <Accordion.Body>
                            <div className='depositbox2'>
                                <div className=' depositcardminibox_2 mt-3'>
                                    <p className='swapbox_para1'>Select Bank</p>
                                    <select name="cars" id="cars" className='depositcard_dropdown_1 form-select'>
                                        <option value="volvo" selected disabled>Select</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className=' depositcardminibox_2 mt-3'>
                                    <p className='swapbox_para1'>Select Cryto</p>
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
                                    <p className='swapbox_para1'>Select Bank</p>
                                    <select name="cars" id="cars" className='depositcard_dropdown_1 form-select'>
                                        <option value="volvo" selected disabled>Select</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                    <div>
                                    <input type='checkbox' className='depositcard_input' />
                                    <span className='depositcard_span'>I agree to the terms of the exchange</span>
                                    </div>
                                </div>
                                <div className=' depositcardminibox_2 mt-3'>
                                    <p className='swapbox_para1'>Select Cryto</p>
                                    <select name="cars" id="cars" className='depositcard_dropdown_1  form-select'>
                                        <option value="volvo" selected disabled>Select</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                    
                                </div>
                            </div>
                            <div className='depositbox_btn'>
                                <Button>
                                    Play
                                </Button>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default Deposit