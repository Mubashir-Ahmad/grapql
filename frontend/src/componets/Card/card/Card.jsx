import React, { useState } from 'react'
import './card.css'
import Modal from 'react-bootstrap/Modal';
import image1 from '../../../asset/images/a31.png'
import image2 from '../../../asset/images/a33.png'
import image3 from '../../../asset/images/a34.png'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
const Card = () => {
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
        <div className='cardbox_1'>
          <div className='cardbox_3'>
            <p className='cardheading_1'>Card</p>
          </div>
          <Button variant="outline-primary card_btn_1"
            onClick={() => handleShow()}
          >
            <img src={image1} />
            <p className='card_para_1'>
              Top Up
            </p>
          </Button>
        </div>
      </div>
      <div className="container-fluid">
        <div className='cardbox_2'>
          <div className="row">
            <div className='col-lg-3 col-md-4 col-sm-12'>
              <div className="cardminibox_2">
                <p className='cardbox_para_2'>Card search.</p>
                <input placeholder='Search via last 4 digits of card'
                  className='cardbox_input1' />
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-12'>
              <div className="cardminibox_2">
                <div className=' transactioncardminibox_2'>
                  <p className='cardbox_para_3'>Bin</p>
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
            <div className='col-lg-3 col-md-4 col-sm-12'>
              <div className="cardminibox_2">
                <div className=' transactioncardminibox_2'>
                  <p className='cardbox_para_3'>Bin</p>
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
            <div className='col-lg-3 col-md-4 col-sm-12'>
              <div className="cardminibox_3">
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
      </div>
      <div className='container-fluid'>
        <div className="card_table_main">
          <div className="card_table_title">
            <div className='cardbox_1 cardbox_04'>
              <div className='cardminibox_4'>
                <p className='cardminibox_4_para_1'>Results</p>
              </div>
              <div className='cardminibox_4'>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className='card_dropdown_1'>
                    <div className="dropdown-content">
                      <div className="left-content">
                        <img src={image3} alt="Image" />
                        <p className='card_dropdown_text_1'>10 May - 20 May</p>
                      </div>
                      <div className="right-content">
                        <img src={image2} alt="Image" />
                      </div>
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="card_table">
            <Table responsive>
              <thead>
                <tr className='card_table'>
                  <th>Bin</th>
                  <th>Card #</th>
                  <th>Card Memo</th>
                  <th>Balance</th>
                  <th>Status</th>
                  <th>Command</th>
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
      </div>
    </div>
  )
}

export default Card