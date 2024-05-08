import React, { useState } from 'react'
import './sidebar.css';
import image1 from '../../asset/images/Group.png';
import image2 from '../../asset/images/a23.png';
import image3 from '../../asset/images/a24.png';
import image4 from '../../asset/images/a25.png';
import image5 from '../../asset/images/a26.png';
import image6 from '../../asset/images/a27.png';
import image7 from '../../asset/images/a28.png';
import image8 from '../../asset/images/a29.png';
import image9 from '../../asset/images/a30.png';
import image10 from '../../asset/images/a50.png';
import image11 from '../../asset/images/a51.png';
import image12 from '../../asset/images/a52.png';
import image13 from '../../asset/images/a53.png';
import image14 from '../../asset/images/a54.png';
import image15 from '../../asset/images/a55.png';
import image16 from '../../asset/images/a56.png';
import { NavLink } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
  const [username, setUsername] = useState(localStorage.getItem('isauthenticated'));
  return (
    <div className='sidebarcontainer_1'>
      <div className='sidebarbox1'>
        <img src={image1} className='image_1' />
        <div className="sidebar-item">
          <NavLink
            exact
            to="/dashbord"
            className="sidebar-item-links"
          // activeClassName="active"
          >
            <img src={image3} className='image_2' />
            <p className="sidebar-item-text_0">Dashboard</p>
          </NavLink>
          <Accordion className='sidebar_accordin'>
            <Accordion.Item eventKey="0" className='sidebar_accordin_box1' >
              <Accordion.Header className='sidebarcontainer_2'>
                <NavLink
                  exact
                  to="/card"
                  className="sidebar-item-linkk"
                // activeClassName="active"
                >
                  <img src={image4} className='image_accordin' />
                  <p className="sidebar-item-text"> Cards</p>
                </NavLink>
              </Accordion.Header>
              <Accordion.Body>
                <div className='sidebarcontainer_03'>
                  <div className='sidebarcontainer_3'>
                    <NavLink
                      exact
                      to="/balanceactivity"
                      className="sidebar-item-link"
                      activeClassName="active"
                    >
                      <img src={image5} className='image_3' />
                      <p className="sidebar-item-text_1">Balance Activity</p>
                    </NavLink>
                  </div>
                  <div className='sidebarcontainer_3'>
                    <NavLink
                      exact
                      to="/issuecard"
                      className="sidebar-item-link"
                      activeClassName="active"
                    >
                      <img src={image7} className='image_3' />
                      <p className="sidebar-item-text_1">Issue Card</p>
                    </NavLink>
                  </div>
                  <div className='sidebarcontainer_3'>
                    <NavLink
                      exact
                      to="/transaction"
                      className="sidebar-item-link"
                      activeClassName="active"
                    >
                      <img src={image6} className='image_3' />
                      <p className="sidebar-item-text_1">Transactions</p>
                    </NavLink>

                  </div>
                  <div className='sidebarcontainer_3'>
                    <NavLink
                      exact
                      to="/return"
                      className="sidebar-item-link"
                      activeClassName="active"
                    >
                      <img src={image8} className='image_3' />
                      <p className="sidebar-item-text_1">Returns</p>
                    </NavLink>

                  </div>
                  <div className='sidebarcontainer_3'>
                    <NavLink
                      exact
                      to="/"
                      className="sidebar-item-link"
                      activeClassName="active"
                    >
                      <img src={image9} />
                      <p className="sidebar-item-text_1">Travy Card</p>
                    </NavLink>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='sidebar_accordin_box1'>
              <Accordion.Header className='sidebarcontainer_2'>
                <NavLink
                  exact
                  to="/crypto"
                  className="sidebar-item-linkk"
                  activeClassName="active"
                >
                  <img src={image10} />
                  <p className="sidebar-item-text">Crypto Wallet</p>
                </NavLink>
              </Accordion.Header>
              <Accordion.Body>
                <div className='sidebarcontainer_03'>
                  <div className='sidebarcontainer_3'>
                    <NavLink
                      exact
                      to="/swap"
                      className="sidebar-item-link"
                      activeClassName="active"
                    >
                      <img src={image11} className='image_3' />
                      <p className="sidebar-item-text_1">Swap</p>
                    </NavLink>
                  </div>
                  <div className='sidebarcontainer_3'>
                    <NavLink
                      exact
                      to="/deposit"
                      className="sidebar-item-link"
                      activeClassName="active"
                    >
                      <img src={image12} className='image_3' />
                      <p className="sidebar-item-text_1">Deposit</p>
                    </NavLink>
                  </div>
                  <div className='sidebarcontainer_3'>
                    <NavLink
                      exact
                      to="/withdrawal"
                      className="sidebar-item-link"
                      activeClassName="active"
                    >
                      <img src={image13} className='image_3' />
                      <p className="sidebar-item-text_1">Withdrawal</p>
                    </NavLink>

                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className='sidebar_accordin_box1'>
              <button className='commingsoon_btn' disabled>

              <Accordion.Header className='sidebarcontainer_2' >
                {/* <button className='sidebarcontainer_2' disabled> */}
                <img src={image6} />
                <p className="sidebar-item-text">IBAN<span className='navbar_spanlink'>(Coming soon)</span></p>
                {/* </button> */}
              </Accordion.Header>
              </button>
              <Accordion.Body>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className='sidebar_accordin_box1'>
            <button className='commingsoon_btn' disabled>
              <Accordion.Header className='sidebarcontainer_2'>
                <img src={image6} />
                <p className="sidebar-item-text">Payouts<span className='navbar_spanlink'>(Coming soon)</span></p>
              </Accordion.Header>
              </button>
                    <Accordion.Body>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className='sidebar_accordin_box1'>
            <button className='commingsoon_btn' disabled>
              <Accordion.Header className='sidebarcontainer_2'>
                <img src={image6} />
                <p className="sidebar-item-text">Deposits<span className='navbar_spanlink'>(Coming soon)</span></p>
              </Accordion.Header>
              </button>
              <Accordion.Body>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className='sidebar_accordin_box1'>
            <button className='commingsoon_btn' disabled>
              <Accordion.Header className='sidebarcontainer_2'>
                <img src={image6} />
                <p className="sidebar-item-text">Lendings<span className='navbar_spanlink'>(Coming soon)</span></p>
              </Accordion.Header>
              </button>
              <Accordion.Body>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <NavLink
            exact
            to="/account"
            className="sidebar-item-links"
            activeClassName="active"
          >
            <img src={image14} />
            <p className="sidebar-item-text_0">Account</p>
          </NavLink>
          <NavLink
            exact
            to="/pricing"
            className="sidebar-item-links"
            activeClassName="active"
          >
            <img src={image15} />
            <p className="sidebar-item-text_0">Pricing Plan</p>
          </NavLink>
        </div>

      </div>
      <div className='sidebarbox1' >
        <NavLink
          exact
          to="/login"
          className="sidebar-item-linkss"
          activeClassName="active"
          onClick={() => {
            localStorage.setItem('isauthenticated', 'false');
            setUsername(localStorage.getItem('isauthenticated'));
            console.log(username)
          }}
        >
          <img src={image16} />
          <p className="sidebar-item-text_0">Logout</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar