import React, { useState } from 'react'
import './transaction.css'
import Button from 'react-bootstrap/Button';
import image1 from '../../../../asset/images/a31.png'
import image2 from '../../../../asset/images/a33.png'
import image3 from '../../../../asset/images/a35.png'
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
const Transaction = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='transactioncard_box'>
            <Modal show={show} onHide={handleClose} animation={false} centered backdrop="static" >
                <Modal.Header closeButton>
                </Modal.Header>
                <div className='modal_box1'>
                    {/* <Modal.Title> */}
                    <h4 className='modal_heading1'>Card Wallet Top Up</h4>
                    <div className='modal_dashbord'>
                        <span className='modal_span'>Available USDT:</span>
                        <span className='modal_span'>0 USDT</span>
                    </div>
                </div>
                <Modal.Body>
                    <div className='modal_box2'>
                        <label>Enter Amount in USDT</label>
                        <input
                            type='number'
                            placeholder='Enter Amount'
                            className='modal_input'
                        />
                        <div className='modal_box3'>
                            <Button variant='outline-primary'>25%</Button>
                            <Button variant='outline-primary'>50%</Button>
                            <Button variant='outline-primary'>75%</Button>
                            <Button variant='outline-primary'>100%</Button>
                        </div>
                        <div className='modal_box4'>
                            <span className='modal_span1'>
                                Commission:
                            </span>
                            <span className='modal_span1'>4.5%</span>
                        </div>
                        <div className='modal_box4'>
                            <span className='modal_span1'>
                                You’ll Get
                            </span>
                            <span className='modal_span2'>0 USDT</span>
                        </div>
                        <Button variant="primary" className='modal_btn1'>Primary</Button>
                    </div>

                </Modal.Body>

            </Modal>
            <div className="container-fluid">
                <div className="row">
                    <div className='cardbox_1'>
                        <div className='cardbox_3'>
                            <p className='cardheading_1'>Transactions</p>
                        </div>
                        <Button variant="outline-primary card_btn_1" onClick={() => { handleShow() }}>
                            <img src={image1} />
                            <p className='card_para_1'>
                                Top Up
                            </p>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className='transaction_cardbox_2'>
                    <div className='transaction_card_1'>
                        <div className=' transactioncardminibox_2'>
                            <p className='cardbox_para_2'>Card Search</p>
                            <input placeholder='Search via last 4 digits of card' className='cardbox_input1' />
                        </div>
                        <div className=' transactioncardminibox_2'>
                            <p className='cardbox_para_3'>Type</p>
                            <select name="cars" id="cars" className='transactioncard_dropdown_1 form-select'>
                                <option value="volvo" selected disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className=' transactioncardminibox_2'>
                            <p className='cardbox_para_3'>Bin</p>
                            <select name="cars" id="cars" className='transactioncard_dropdown_1 form-select'>
                                <option value="volvo" selected disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className=' transactioncardminibox_2'>
                            <p className='cardbox_para_3'>Status</p>
                            <select name="cars" id="cars" className='transactioncard_dropdown_1 form-select'>
                                <option value="volvo" selected disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className=' transactioncardminibox_2'>
                            <p className='cardbox_para_3'>Date</p>
                            <select name="cars" id="cars" className='transactioncard_dropdown_1 form-select'>
                                <option value="volvo" selected disabled>Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className='transaction_card_2'>
                        <div className='transactioncardminibox_3'>
                            <Button variant="primary" className='cardminibox_btn'>
                                <p className='cardminibox_btn_para'>Show Return</p>
                            </Button>
                            <Button variant="outline-primary" className='cardminibox_btnn'>
                                <p className='cardminibox_btn_para'>Clear</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction