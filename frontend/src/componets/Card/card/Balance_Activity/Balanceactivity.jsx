import React, { useState } from 'react'
import './balance.css'
import Modal from 'react-bootstrap/Modal';
import image1 from '../../../../asset/images/a31.png'
import image2 from '../../../../asset/images/a33.png'
import image3 from '../../../../asset/images/a35.png'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
const Balanceactivity = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='card_container_box'>
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
                            <p className='cardheading_1'>Balance Activity</p>
                        </div>
                        <Button variant="outline-primary card_btn_1" onClick={() => handleShow()}>
                            <img src={image1} />
                            <p className='card_para_1'>
                                Top Up
                            </p>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                {/* <div className="row"> */}
                    <div className='balanceactivity_box7'>
                    <div className='balancebox_2'>
                        <div className='cardminibox_2'>
                            <p className='cardbox_para_2'>Card Number.</p>
                            <input
                                placeholder='Search Card Number'
                                className='cardbox_input1'
                            />
                        </div>

                        <div className='cardminibox_2'>
                            <div className=' transactioncardminibox_2'>
                                <p className='cardbox_para_3'>Type</p>
                                <select name="cars" id="cars" className='cards_dropdown_1 form-select'>
                                    <option value="volvo" selected disabled>Select</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>
                        <div className='cardminibox_2'>
                            <div className=' transactioncardminibox_2'>
                                <p className='cardbox_para_3'>period</p>
                                <select name="cars" id="cars" className='cards_dropdown_1 form-select'>
                                    <option value="volvo" selected disabled>Select</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>
                        <div className='cardminibox_2'>
                            <div className=' transactioncardminibox_2'>
                                <p className='cardbox_para_3'>period</p>
                                <select name="cars" id="cars" className='cards_dropdown_1 form-select'>
                                    <option value="volvo" selected disabled>Select</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>  
                        </div>
                        <div className='cardminibox_2'>
                            <div className=' transactioncardminibox_2'>
                                <p className='cardbox_para_3'>period</p>
                                <select name="cars" id="cars" className='cards_dropdown_1 form-select'>
                                    <option value="volvo" selected disabled>Select</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='balancebox_02'>
                        <div className='balancebox_03'>
                        <div className='cardminibox_2'>
                            <div className=' transactioncardminibox_2'>
                                <p className='cardbox_para_3'>period</p>
                                <select name="cars" id="cars" className='cards_dropdown_1 form-select'>
                                    <option value="volvo" selected disabled>Select</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>
                        <div className='cardbox_3_uperlink'>
                            <Link to='/' className='cardminibox_3_uperlink'>
                                <p className='cardminibox_3_link'>View all Transactions</p>
                            </Link>
                        </div>
                        </div>
                        <div className='cardminibox_3'>
                            <Button variant="primary" className='cardminibox_btn'>
                                <p className='cardminibox_btn_para'>Search card</p>
                            </Button>
                            <Button variant="outline-primary" className='cardminibox_btnn'>
                                <p className='cardminibox_btn_para'>Clear</p>
                            </Button>
                        </div>
                        </div>
                    </div>
                </div>
                
            {/* </div> */}
            <div className='container-fluid'>
                <div className='balanceactivity_box'>
                    {/* <div className="row "> */}
                        <div className='cardbox_1 cardbox_04'>
                            <div className='cardminibox_4'>
                                <p className='cardminibox_4_para_1'>Results</p>
                            </div>
                            <div className='cardminibox_4'>
                                <Button variant="outline-primary" className='cardBalanceminibox_btnn'>
                                    <img src={image3} />
                                    <p className='cardminibox_btn_para'>Result</p>
                                </Button>
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <div className="row"> */}
                        <div className='balanceactivity_box2'>
                            <Table responsive>
                                <thead>
                                    <tr className='card_table'>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Balance</th>
                                        <th>Card</th>
                                        <th>Avalible</th>
                                        <th>Tx Type</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                    </tr>
                                    <tr>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                    </tr>
                                    <tr>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                    </tr>
                                    <tr>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                    </tr>
                                    <tr>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                    </tr>
                                    <tr>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                        <td><p className='dashbord_table_para'>
                                            Row 1 Data 1
                                        </p></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
   </div> 
        // </div>
    )
}

export default Balanceactivity