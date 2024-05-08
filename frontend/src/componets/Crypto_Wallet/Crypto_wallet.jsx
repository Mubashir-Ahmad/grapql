import React from 'react'
import './cryptowallet.css'
import Table from 'react-bootstrap/Table';
import image1 from '../../asset/images/a43.png'
import image2 from '../../asset/images/a44.png'
import Button from 'react-bootstrap/Button';
const Crypto_wallet = () => {
  return (
  <div className='crypto_walletbox1'>
    <div className="container-fluid">
                <div className="row">
                    <div className='cardbox_1'>
                        <div className='cardbox_3'>
                            <p className='cardheading_1'>Crypto Wallet</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='crypto_walletbox2'>
            <Table responsive>
            <thead>
                <tr className='card_table'>
                <th>Currency</th>
                <th>Balance</th>
                <th>Looked By Aml</th>
                <th>Actions</th>
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
                <td className='crypto_wallet_para1'>0.00</td>
                <td className='crypto_wallet_para1'>0.00</td>
                <td className='crypto_wallet_tabelbox_1'>
                    <Button className='crypto_wallet_tabelbox_btn'>Deposit</Button>
                    <Button className='crypto_wallet_tabelbox_btn'>Deposit</Button>
                    <Button className='crypto_wallet_tabelbox_btn'>Deposit</Button>
                    <Button className='crypto_wallet_tabelbox_btn'>Deposit</Button>
                </td>
                </tr>
                <tr>
                <td>
                    <div className='crypto_wallet_tabelbox_1'>
                    <img src={image1}/>
                   <p className='crypto_wallet_para1'>XPR</p>
                    </div>
                </td>
                {/* <td >0.00</td> */}
                <td className='crypto_wallet_para1'>0.00</td>
                <td className='crypto_wallet_para1'>0.00</td>
                <td className='crypto_wallet_tabelbox_1'>
                    <Button className='crypto_wallet_tabelbox_btn'>Deposit</Button>
                    <Button className='crypto_wallet_tabelbox_btn'>Deposit</Button>
                    <Button className='crypto_wallet_tabelbox_btn'>Deposit</Button>
                    <Button className='crypto_wallet_tabelbox_btn'>Deposit</Button>
                </td>
                </tr>
                <tr>
                <td>
                    <div className='crypto_wallet_tabelbox_1'>
                    <img src={image1}/>
                   <p className='crypto_wallet_para1'>XPR</p>
                    </div>
                </td>
                {/* <td >0.00</td> */}
                <td className='crypto_wallet_para1'>0.00</td>
                <td className='crypto_wallet_para1'>0.00</td>
                <td className='crypto_wallet_tabelbox_1'>
                    <Button className='crypto_wallet_tabelbox_btn'>Deposit</Button>
                    <Button className='crypto_wallet_tabelbox_btn'>Deposit</Button>
                    <Button className='crypto_wallet_tabelbox_btn'>Deposit</Button>
                    <Button className='crypto_wallet_tabelbox_btn'>Deposit</Button>
                </td>
                </tr>
                <tr>
                <td>
                    <div className='crypto_wallet_tabelbox_1'>
                    <img src={image1}/>
                   <p className='crypto_wallet_para1'>XPR</p>
                    </div>
                </td>
                {/* <td >0.00</td> */}
                <td className='crypto_wallet_para1'>0.00</td>
                <td className='crypto_wallet_para1'>0.00</td>
                <td className='crypto_wallet_tabelbox_1'>
                    <Button className='crypto_wallet_tabelbox_btn'>Deposit</Button>
                    <Button className='crypto_wallet_tabelbox_btn'>Deposit</Button>
                    <Button className='crypto_wallet_tabelbox_btn'>Deposit</Button>
                    <Button className='crypto_wallet_tabelbox_btn'>Deposit</Button>
                </td>
                </tr>
            </tbody>
            </Table>
            </div>
  </div>
  )
}

export default Crypto_wallet