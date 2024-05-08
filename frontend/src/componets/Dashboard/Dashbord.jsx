import React, { useState,useEffect } from 'react'
import './dashbord.css'
import image1 from '../../asset/images/a31.png'
import image2 from '../../asset/images/a32.png'
import image3 from '../../asset/images/a41.png'
import image4 from '../../asset/images/a46.png'
import image5 from '../../asset/images/a47.png'
import image6 from '../../asset/images/a48.png'
import image7 from '../../asset/images/a49.png'
import image02 from '../../asset/images/a33.png'
import image01 from '../../asset/images/a34.png'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import {useDispatch,useSelector} from 'react-redux'
import Modal from 'react-bootstrap/Modal';
import { getuserprofile, loaduser } from '../../Redux/Action/userAction'
const Dashbord = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const {user,isAuthenticated,error} = useSelector((item)=>item.user);
  // console.log('user',useSelector((item)=>item.user))
  useEffect(()=>{
    dispatch(getuserprofile());
    // dispatch(loaduser());
  },[dispatch])
  return (
    <div className='dashbord_container_box'>
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
          <div className='dashbordbox_1'>
            <div className='dashbordbox_2'>
              <div className='dashbordbox_3'>
                <p className='dashbordheading_1'>Total Balance</p>
                <img src={image2} className='dashbordimg_1' />
              </div>
              <h2 className='dashbordheading_1'>$27.000,48</h2>
            </div>
            <Button variant="outline-primary dashbord_btn_1" onClick={() => {
              handleShow()
            }}>
              <img src={image1} />
              <p className='dashbord_para_1'>
                Top Up
              </p>
            </Button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="dashbord_box3">
          <div className="dashbord_minibox3">
            <div className="dashbord_minibox003">
              <div className="dashbord_minibox03">
                <img src={image4} />
              </div>
              <img src={image3} />
            </div>
            <p className="dashbord_para1_minibox003">Reserved</p>
            <p className="dashbord_heading1_minibox003">$632.000</p>
          </div>
          <div className="dashbord_minibox3">
            <div className="dashbord_minibox003">
              <div className="dashbord_minibox03">
                <img src={image5} />
              </div>
              <img src={image3} />
            </div>
            <p className="dashbord_para1_minibox003">Spend</p>
            <p className="dashbord_heading1_minibox003">$632.000</p>
          </div>
          <div className="dashbord_minibox3">
            <div className="dashbord_minibox003">
              <div className="dashbord_minibox03">
                <img src={image6} />
              </div>
              <img src={image3} />
            </div>
            <p className="dashbord_para1_minibox003">Pending</p>
            <p className="dashbord_heading1_minibox003">$632.000</p>
          </div>
          <div className="dashbord_minibox3">
            <div className="dashbord_minibox003">
              <div className="dashbord_minibox03">
                <img src={image7} />
              </div>
              <img src={image3} />
            </div>
            <p className="dashbord_para1_minibox003">Total Deposit</p>
            <p className="dashbord_heading1_minibox003">$632.000</p>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className="card_table_main">
          <div className="card_table_title">
            <div className='dashbox_04'>
              <div className='cardminibox_4'>
                <p className='cardminibox_4_para_1'>Spending</p>
              </div>
              <div className='table_card_select'>
             <select name="0" id="" className='form-select'>
              <option value="1"><p className='select-span'>10 May - 20 May</p></option>
             </select>
             <img src={image01} alt="" />
              </div>
            </div>
          </div>
          <div className="card_table">
          <Table responsive>
              <thead>
                <tr className='card_table'>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Spend</th>
                  <th>Decline Rate</th>
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
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashbord