import React,{useState} from 'react'
import './issuecard.css'
import Modal from 'react-bootstrap/Modal';
import image2 from '../../../../asset/images/a33.png'
import image3 from '../../../../asset/images/a41.png'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import image1 from '../../../../asset/images/a31.png'
import image4 from '../../../../asset/images/a58.png'
import image5 from '../../../../asset/images/a42.png'
const Issuecard=()=>{
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
            <p className='cardheading_1'>Issue Card</p>
              </div>
            <Button variant="outline-primary card_btn_1" onClick={()=>handleShow()}>
              <img src={image1} />
              <p className='card_para_1'>
              Top Up
              </p>
              </Button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
            <div className="col-xl-8"  >
              <div className='issuecard_box1' >
              <p className='issuecard_para1'>Bin</p>
            <select name="cars" id="cars" className='issuecard_dropdown_1'>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
                <p className='issuecard_para1'>Card Memo (Optional)</p>
                <input
                type='text'
                placeholder='Enter Card Memo'
                className='issuecard_input1'
                />
                <p className='issuecard_para1'>Card Memo (Optional)</p>
                <input
                type='text'
                placeholder='Enter Card Memo'
                className='issuecard_input1'
                />
                <div className='issuecard_minibox_1'>
                <input
                type='radio'
                placeholder='Enter Card Memo'
                className='issuecard_input2'
                />
                <p className='issuecard_para2'>Max Transaction amount = Card Balance</p>
                <img src={image3}/>
                </div>
                <div className='issuecard_minibox_1'>
                <Button variant="outline-primary issuecard_btn">Primary</Button>
                <Button variant="primary issuecard_btn" style={{background:'#1b88ca'}}>Primary</Button>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
            <div className='issuecard_box2' >
            <p className='issuecard_para1'>Credit Card</p>
            <img src={image4} className='issuecard_image'/>
            <div className='issueminicard_box2'>
            <p className='issuecard_para1'>Credit Details</p>
            <p className='issuecard_para1'>Total: 4</p>
            </div>
            <div className='issueminicard_box3'>
              <div className='issueminicardbox3_container1'>
                <p className='issueminicardbox3container1_para1'>Active: 0</p>
              </div>
              <div className='issueminicardbox3_container2'>
                <p
              className='issueminicardbox3container2_para2'
                >Freeze: 0</p>
              </div>
              <div 
              className='issueminicardbox3_container3'>
                <p
                className='issueminicardbox3container3_para3'
                >Closed: 0</p>
              </div>
            </div>
            <Button variant="primary issuecard_btnn" style={{background:'#1b88ca'}}>
            <img src={image5} />
             New Card
            </Button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Issuecard