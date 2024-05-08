import React from 'react'
import './swap.css'
import Button from 'react-bootstrap/Button';
import image1 from '../../../asset/images/a45.png'
import Table from 'react-bootstrap/Table';
const Swap = () => {
    return (
        <div className='swapcrypto_walletbox1'>
            <div className="container-fluid">
                <div className="row">
                    <div className='cardbox_1'>
                        <div className='cardbox_3'>
                            <p className='cardheading_1'>Swap</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className='swapbox_1'>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className='swapbox6'>
                                <h3 className='swapbox_heading1'>From</h3>
                                <div className='swap_minibox_1 mt-3'>
                                    <p className='swapbox_para1'>Enter Amount</p>
                                    <input
                                        type='text'
                                        placeholder='Enter Amount'
                                        className='swapbox1_input'
                                    />
                                </div>
                                <div className=' swapcardminibox_2 mt-3'>
                                    <p className='swapbox_para1'>Select Cryto</p>
                                    <select name="cars" id="cars" className='swapcard_dropdown_1 form-select'>
                                        <option value="volvo" selected disabled>Select</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className='swapbox3 mt-3'>
                                    <Button className='swap_wallet_tabelbox_btn'>Deposit</Button>
                                    <Button className='swap_wallet_tabelbox_btn'>Deposit</Button>
                                    <Button className='swap_wallet_tabelbox_btn'>Deposit</Button>
                                    <Button className='swap_wallet_tabelbox_btn'>Deposit</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className='text-center swapboximg'>
                                <img src={image1} />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <h3 className='swapbox_heading1 '>To</h3>
                            <div className='swap_minibox_1 mt-3'>
                                <div className='swap_minibox_11'>
                                    <p className='swapbox_para1'>You'll Get</p>
                                    <p className='swapbox_para11'>1 XRP = 0.47322 USDT</p>
                                </div>
                            </div>
                            <input
                                type='text'
                                placeholder='Enter Amount'
                                className='swapbox1_input'
                                style={{ marginBottom: '10px' }}
                            />
                            <div className=' swapcardminibox_2 mt-3'>
                                <p className='swapbox_para1'>Select Cryto</p>
                                <select name="cars" id="cars" className='swapcard_dropdown_1 form-select'>
                                    <option value="volvo" selected disabled>Select</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <p className='swapbox4_para1'>Please kindly note, the price and estimated amounts are for demonstrative purposes only. The results of the operation will be based on market price at execution time.</p>
                    <div className='swapbox_btn'>
                        <Button>
                            Exchange
                        </Button>
                        <p className='mt-2 m-1'>Commission</p>
                    </div>
                </div>
            </div>
            <h2 className='swapbox7_heading1'>History of Swap</h2>
            <div className='swapbox7'>
            <Table responsive>
            <thead>
                <tr className='card_table'>
                <th>id</th>
                <th>Status</th>
                <th>Sent</th>
                <th>Pair</th>
                <th>Recived</th>
                <th>Date/Time</th>
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
           
                </tr>
            </tbody>
            </Table>
            </div>
        </div>
    )
}

export default Swap