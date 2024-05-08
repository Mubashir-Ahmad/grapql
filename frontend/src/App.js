import React,{useState,useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate
} from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion'
import image1 from './asset/images/a36.png'
import image2 from './asset/images/a37.png'
import image3 from './asset/images/a38.png'
import image4 from './asset/images/a39.png'
import image5 from './asset/images/a40.png'
import image6 from './asset/images/a33.png'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import Login from './componets/Login/Login';
import Landing from './componets/Landing/Landing';
import Register from './componets/Login/Register';
import Sidebar from './componets/Sidebar/Sidebar';
import Dashbord from './componets/Dashboard/Dashbord';
import Card from './componets/Card/card/Card';
import Balanceactivity from './componets/Card/card/Balance_Activity/Balanceactivity';
import Issuecard from './componets/Card/card/Issue_card/Issuecard';
import Transaction from './componets/Card/card/Transaction/Transaction';
import Return from './componets/Card/card/Return/Return';
import Crypto_wallet from './componets/Crypto_Wallet/Crypto_wallet';
import Swap from './componets/Crypto_Wallet/Swap/Swap';
import Deposit from './componets/Crypto_Wallet/Deposit/Deposit';
import Withdrawal from './componets/Crypto_Wallet/Withdrawal/Withdrawal';
import Account from './componets/Account/Account';
import Pricing_plan from './componets/Pricing_plan/Pricing_plan';
import image01 from './asset/images/Group.png';
import image02 from './asset/images/a23.png';
import image03 from './asset/images/a24.png';
import image04 from './asset/images/a25.png';
import image05 from './asset/images/a26.png';
import image06 from './asset/images/a27.png';
import image7 from './asset/images/a28.png';
import image8 from './asset/images/a29.png';
import image9 from './asset/images/a30.png';
import image10 from './asset/images/a50.png';
import image11 from './asset/images/a51.png';
import image12 from './asset/images/a52.png';
import image13 from './asset/images/a53.png';
import image14 from './asset/images/a54.png';
import image15 from './asset/images/a55.png';
import MayBeShowNav from './maybeshow.js'
import Forget from './componets/Login/Forget.jsx';
import Otp from './componets/Login/Otp.jsx';
import Resetpassword from './componets/Login/Resetpassword.jsx';
function App() {
  const [isauthenticated, setisauthenticated] = useState(true);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem('isauthenticated'));
  useEffect(() => {
    setUsername(localStorage.getItem('isauthenticated') === 'true');
  }, [username]);
  console.log(username)
  const handleCloseNavMenu = () => {
    setOpen(false);
  };
  const handleOpenNavMenu = (event) => {
    setOpen(true);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/' element={<Landing/>} />
          <Route path='/forgot' element={<Forget/>} />
          <Route path='/otp' element={<Otp/>} />
          <Route path='/resetpassword' element={<Resetpassword/>} />
        </Routes>
       
        <div style={{ display: "flex"}}>
          {isauthenticated  && (
            <MayBeShowNav>
              <Sidebar />
            </MayBeShowNav>
          )
          }
            <div className='dashboard_content_main'>
            {isauthenticated && (
              <MayBeShowNav>
              <div className='container-fluid'>
             
            <div className="menu-icon">
            <button onClick={handleOpenNavMenu} className="icon">
              <MenuIcon sx={{ fontSize: "40px" }} />
                </button>
                <div className='appbox_1'>
                  <h3 className='appbox1_heading1'>Hello Ali</h3>
                   <div className='appboxmini_1'>
                    <img src={image1} />
                    <p className='appbox1_para1'>May 19, 2023</p>
                    </div>
                  </div>
                  <div className='appbox_2'>
                  <div className='appboxmini_2'>
                    <div className='appboxmini_02'>
                      <img src={image2} />
                      <p className='appboxmini2_para1'>$23.00</p>
                    </div>
                    <div className='appboxmini_002'>
                      <img src={image3} />
                      {/* 
                      if notification is true then show below image
                      <img src={image4} /> */}
                    </div>
                    <div className='appboxmini_022'>
                      <img src={image5} />
                      <img src={image6} />
                    </div>
                  {/* <h3>hello ali</h3> */}
                  </div>
                  </div>
                </div>
              {/* <button onClick={handleOpenNavMenu} className="icon">
              <MenuIcon sx={{ fontSize: "40px" }} />
                </button> */}
             </div>
             </MayBeShowNav>
            )
          }
        <Routes>

      <Route path='/dashbord' element={<Dashbord/>} />
      <Route path='/card' element={<Card/>} />
      <Route path='/balanceactivity' element={<Balanceactivity/>} />
      <Route path='/issuecard' element={<Issuecard/>} />
      <Route path='/transaction' element={<Transaction />} />
      <Route path='/return' element={<Return/>} />
      <Route path='/crypto' element={<Crypto_wallet/>} />
      <Route path='/swap' element={<Swap/>} />
      <Route path='/deposit' element={<Deposit/>} />
      <Route path='/withdrawal' element={<Withdrawal/>} />
      <Route path='/account' element={<Account/>} />
      <Route path='/pricing' element={<Pricing_plan/>} />
      </Routes>
        </div>
      </div>
      <Drawer
        open={open}
        anchor={"left"}
        onClose={handleCloseNavMenu}
        PaperProps={{
          sx: {
            backgroundColor: "#fff",
            width: { sm: "30%", xs: "100%" },
          },
          
        }}
        
        // sx={{ background: "transparent" }}
      >
        <div className="drawer" onClick={() => setOpen(false)}>
          <button
            onClick={handleCloseNavMenu}
            style={{ position: "absolute", top: "15px", right: "0" }}
            className="icon"
          >
            <CloseIcon sx={{ fontSize: "40px" }} />
          </button>
          <div className='sidebar-containerr'>
      <img src={image01} className='image_1' />
      <div className="sidebar-item">
      <NavLink
          exact
          to="/dashbord"
          className="sidebar-item-links"
          // activeClassName="active"
        >
          <img src={image03}  className='image_2'/>
          <p className="sidebar-item-text_0">Dashbord</p>
        </NavLink>
        <Accordion flush className='sidebar_accordin' >
      <Accordion.Item eventKey="0" className='sidebar_accordin_box1' >
        <Accordion.Header className='sidebarcontainer_2' onClick={(e) => e.stopPropagation()}>
        <NavLink
          exact
          to="/card"
          className="sidebar-item-linkk"
          // activeClassName="active"
        >
         <img src={image04} className='image_accordin'/>
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
          <img src={image05} className='image_3'/>
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
          <img src={image7} className='image_3'/>
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
          <img src={image06} className='image_3'/>
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
          <img src={image8} className='image_3'/>
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
          <img src={image9}/>
          <p className="sidebar-item-text_1">Travy Card</p>
        </NavLink>
        </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='sidebar_accordin_box1' >
      <Accordion.Header className='sidebarcontainer_2' onClick={(e) => e.stopPropagation()}>
      <NavLink
          exact
          to="/crypto"
          className="sidebar-item-linkk"
          activeClassName="active"
        >
         <img src={image10}/>
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
          <img src={image11} className='image_3'/>
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
          <img src={image12} className='image_3'/>
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
          <img src={image13} className='image_3'/>
          <p className="sidebar-item-text_1">Withdrawal</p>
        </NavLink>
        
          </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='sidebar_accordin_box1'>
      <button className='commingsoon_btn' disabled>
      <Accordion.Header className='sidebarcontainer_2'>
         <img src={image06}/>
         <p className="sidebar-item-text">IBAN<span className='navbar_spanlink'>(Coming soon)</span></p>
        </Accordion.Header>
        </button>
        <Accordion.Body>
</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className='sidebar_accordin_box1'>
      <button className='commingsoon_btn' disabled>
      <Accordion.Header className='sidebarcontainer_2'>
         <img src={image06}/>
         <p className="sidebar-item-text">Payouts<span className='navbar_spanlink'>(Coming soon)</span></p>
        </Accordion.Header>
        </button>
        <Accordion.Body>
</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className='sidebar_accordin_box1'>
      <button className='commingsoon_btn' disabled>
      <Accordion.Header className='sidebarcontainer_2'>
         <img src={image06}/>
         <p className="sidebar-item-text">Deposits<span className='navbar_spanlink'>(Coming soon)</span></p>
        </Accordion.Header>
        </button>
        <Accordion.Body>
</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" className='sidebar_accordin_box1'>
      <button className='commingsoon_btn' disabled>
      <Accordion.Header className='sidebarcontainer_2'>
         <img src={image06}/>
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
          <img src={image15}  />
          <p className="sidebar-item-text_0">Pricing Plan</p>
        </NavLink>
        <NavLink
          exact
          to="/login"
          className="sidebar-item-links"
          activeClassName="active"
        >
          <img src={image15}  />
          <p className="sidebar-item-text_0">Logout</p>
        </NavLink>
      </div>
      </div>
          </div>
        </Drawer>
      </Router>
    </div>
  );
}

export default App;

