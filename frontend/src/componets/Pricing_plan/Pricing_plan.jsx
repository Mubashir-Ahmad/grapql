import React from 'react'
import './pricingplan.css'
import image1 from '../../asset/images/a43.png'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
const Pricing_plan = () => {
  return (
    <div className='pricingplan_box'>
        <div className="container-fluid">
                <div className="row">
                    <div className='cardbox_1'>
                        <div className='cardbox_3'>
                            <p className='cardheading_1'>Swap</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='depsitbox3'>
                <Accordion className='acod'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header >
                            <span className='depsot_cardheading1'>Deposit / Withdraw Crypto</span>
                        </Accordion.Header>
                        <Accordion.Body>
                        <Table responsive>
            <thead>
                <tr className='card_table'>
                <th>Currency</th>
                <th>Deposit Fee</th>
                <th>Withdraw Fees</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>
                    <div className='crypto_wallet_tabelbox_1'>
                    <img src={image1}/>
                   <p className='crypto_wallet_para1'>XPR</p>
                    </div>
                </td>
                {/* <td >0.00</td> */}
                <td>0.00</td>
                <td>0.00</td>
              
                </tr>
                <tr>
                <td>
                    <div className='crypto_wallet_tabelbox_1'>
                    <img src={image1}/>
                   <p className='crypto_wallet_para1'>XPR</p>
                    </div>
                </td>
                {/* <td >0.00</td> */}
                <td>0.00</td>
                <td>0.00</td>
               
                </tr>
                <tr>
                <td>
                    <div className='crypto_wallet_tabelbox_1'>
                    <img src={image1}/>
                   <p className='crypto_wallet_para1'>XPR</p>
                    </div>
                </td>
                {/* <td >0.00</td> */}
                <td>0.00</td>
                <td>0.00</td>
              
                </tr>
                <tr>
                <td>
                    <div className='crypto_wallet_tabelbox_1'>
                    <img src={image1}/>
                   <p className='crypto_wallet_para1'>XPR</p>
                    </div>
                </td>
                {/* <td >0.00</td> */}
                <td>0.00</td>
                <td>0.00</td>
             
                </tr>
            </tbody>
            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className='depsitbox3'>
                <Accordion className='acod'>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span className='depsot_cardheading1'>Deposit / Withdraw EUR</span>
                        </Accordion.Header>
                        <Accordion.Body>
                        <Table responsive>
            <thead>
                <tr className='card_table'>
                <th>Currency</th>
                <th>Deposit Fee</th>
                <th>Withdraw Fees</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>
                    <div className='crypto_wallet_tabelbox_1'>
                    <img src={image1}/>
                   <p className='crypto_wallet_para1'>XPR</p>
                    </div>
                </td>
                {/* <td >0.00</td> */}
                <td>0.00</td>
                <td>0.00</td>
              
                </tr>
                <tr>
                <td>
                    <div className='crypto_wallet_tabelbox_1'>
                    <img src={image1}/>
                   <p className='crypto_wallet_para1'>XPR</p>
                    </div>
                </td>
                {/* <td >0.00</td> */}
                <td>0.00</td>
                <td>0.00</td>
               
                </tr>
                <tr>
                <td>
                    <div className='crypto_wallet_tabelbox_1'>
                    <img src={image1}/>
                   <p className='crypto_wallet_para1'>XPR</p>
                    </div>
                </td>
                {/* <td >0.00</td> */}
                <td>0.00</td>
                <td>0.00</td>
              
                </tr>
                <tr>
                <td>
                    <div className='crypto_wallet_tabelbox_1'>
                    <img src={image1}/>
                   <p className='crypto_wallet_para1'>XPR</p>
                    </div>
                </td>
                {/* <td >0.00</td> */}
                <td>0.00</td>
                <td>0.00</td>
                </tr>
            </tbody>
            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
    </div>
  )
}

export default Pricing_plan