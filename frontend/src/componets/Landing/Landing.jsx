import React from 'react'
import './landing.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Accordion from 'react-bootstrap/Accordion';
import { Autoplay } from "swiper/modules";
import Navbar from 'react-bootstrap/Navbar';
import image1 from '../../asset/images/Group.png'
import image2 from '../../asset/images/a1.png'
import image3 from '../../asset/images/a2.png'
import image4 from '../../asset/images/a3.png'
import image5 from '../../asset/images/a4.png'
import image6 from '../../asset/images/a5.png'
import image7 from '../../asset/images/a6.png'
import image8 from '../../asset/images/a7.png'
import image9 from '../../asset/images/a8.png'
import image10 from '../../asset/images/a9.png'
import image11 from '../../asset/images/a10.png'
import image12 from '../../asset/images/a11.png'
import image13 from '../../asset/images/a12.png'
import image14 from '../../asset/images/a58.png'
import image15 from '../../asset/images/a13.png'
import image16 from '../../asset/images/a14.png'
import image17 from '../../asset/images/a16.png'
import image18 from '../../asset/images/a17.png'
import image19 from '../../asset/images/a18.png'
import image20 from '../../asset/images/a19.png'
import image21 from '../../asset/images/a20.png'
import image22 from '../../asset/images/a57.png'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar expand="lg" >
        <Container >
          <Navbar.Brand>
            <img src={image1} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link href="#action1" className='landing_navbar_tabs'>
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className='landing_navbar_tabs'>Feacture</Nav.Link>
              <Nav.Link href="#action3" className='landing_navbar_tabs'>Testimonials</Nav.Link>
              <Nav.Link href="#action4" className='landing_navbar_tabs'>FAQs</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button className='landing_navbar_btn' onClick={() => navigate('/login')}>Get Started </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='container' id='action1' >
        <div className="landing_main_home">
          <div className="row">
            <div className="col-lg-6">
              <div className='landing_box_1'>
                <h4 className='landing_main_heading_1'>Transaction Hub</h4>
                <h3 className='landing_main_heading_2'>
                  Navigating the world of <span>cryptocurrencies</span>
                </h3>
                <p className='landing_main_para_1'>Experience seamless transactions in a single,
                  integrated platform for all your financial needs.</p>
                <div className='landing_minibox_1'>
                  <Button className='landing_navbar_btn' onClick={() => navigate('/login')}>Get Started <img src={image22} /></Button>
                  <div className='landing_minibox_1_imgs'>
                    <img src={image2} />
                    <img src={image3} />
                    <img src={image4} />
                  </div>
                  <p className='landing_main_para_1'>+300K New users</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home_right_img">
                <img src={image5} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className='landing_page_box2'>
              <img src={image7} />
              <img src={image6} />
              <img src={image10} />
              <img src={image9} />
              <img src={image8} />
            </div>
          </div>
        </div>
      </div>
      <div className="home_section_two">
        <div className='container' id='action2'>
          <div className="row">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className='landing_box_3'>
                <h6 className='landing_box_3_heading_1'>Features</h6>
                <h3 className='landing_box_3_heading_2'>
                  Enter a new universe of connected <span>services</span>
                </h3>
                <p className='landing_box_3_para_1'>
                  Discover a comprehensive suite of cutting-edge features meticulously designed to accelerate your business success.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className='col pr_none'>
              <div className="landing_box_4 start_box4">
                <div className='landing_box_4_card'>
                  <img src={image11} />
                  <div className='landing_mini_box_4'>
                    <p className='landing_box_4_para_1'> Cards Management</p>
                    <p className='landing_box_4_para_2'>Manage all tranactions & Returns</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col prl_none'>
              <div className="landing_box_4 centered_box4">
                <div className='landing_box_4_card'>
                  <img src={image13} />
                  <div className='landing_mini_box_4'>
                    <p className='landing_box_4_para_1'> Crytpo Wallet</p>
                    <p className='landing_box_4_para_2'>Swap, Deposit, Withdraw</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col pl_none'>
              <div className="landing_box_4 right_box4">
                <div className='landing_box_4_card'>
                  <img src={image12} />
                  <div className='landing_mini_box_4'>
                    <p className='landing_box_4_para_1'> Insightful Analytics</p>
                    <p className='landing_box_4_para_2'>Access expense reports</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="landing_box_5">
            <div className="row">
              <div className="col-lg-5">
                <div className='landing_mini_box_5'>
                  <img src={image14} />
                </div>
              </div>
              <div className="col-lg-7">
                <div className='landing_mini_box_5_1'>
                  <p className='landing_box_5_para_1'>Cards Management</p>
                  <h5 className='landing_box_5_heading_1' >
                    We specialize in unifying your business applications, creating an integrated ecosystem
                  </h5>
                  <p className='landing_box_5_para_2'>
                    Connect and manage multiple wallets easily, streamlining your transactional experience.
                  </p>
                  <Button className='landing_navbar_btn' onClick={() => navigate('/login')}>Get Started <img src={image22} /></Button>
                </div>
              </div>
            </div>
          </div>
          <div className='landing_box_6'>
            <div className="container">
              <div className="row">
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className='landing_box_1'>
                    <h6 className='landing_box_6_heading_1'>All-in-one Platform</h6>
                    <h3 className='landing_box_6_heading_2'>
                      One account for all your <span>digital assets</span>
                    </h3>
                    <p className='landing_box_6_para_1'>
                      Streamline transactions across various services in a singular, user-friendly platform.
                    </p>
                    <p className='landing_box_6_para_2'>
                      <img src={image15} style={{ paddingRight: '10px' }} />
                      Simplified transaction management
                    </p>
                    <p className='landing_box_6_para_2'>
                      <img src={image15} style={{ paddingRight: '10px' }} />
                      Access to multiple financial services
                    </p>
                    <p className='landing_box_6_para_2'>
                      <img src={image15} style={{ paddingRight: '10px' }} />
                      Seamless integration of wallets
                    </p>
                    <Button className='landing_navbar_btn mt-3' onClick={() => navigate('/login')}>Get Started <img src={image22} /></Button>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className="landing_box_111_img1">
                    <img src={image16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="landing_box_6">
            <div className="row for_direct">
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='landing_box_111_img1'>
                  <img src={image16} />
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='landing_box_11' style={{ marginTop: '16px' }}>
                  <h6 className='landing_box_6_heading_1'>All-in-one Platform</h6>
                  <h3 className='landing_box_6_heading_2'>
                    Secure transaction <span>management</span>
                  </h3>
                  <p className='landing_box_6_para_1'>
                    Streamline transactions across various services in a singular, user-friendly platform.
                  </p>
                  <p className='landing_box_6_para_2'>
                    <img src={image15} style={{ paddingRight: '10px' }} />
                    Simplified transaction management
                  </p>
                  <p className='landing_box_6_para_2'>
                    <img src={image15} style={{ paddingRight: '10px' }} />
                    Access to multiple financial services
                  </p>
                  <p className='landing_box_6_para_2'>
                    <img src={image15} style={{ paddingRight: '10px' }} />
                    Seamless integration of wallets
                  </p>
                  <Button className='landing_navbar_btn' onClick={() => navigate('/login')}>Get Started <img src={image22} /></Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="container_box_3" id='action3'>
        <div className='container'>
          <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
            {/* <div > */}
            <div className='landing_box_3'>
              <h6 className='landing_box_3_heading_1'>12,000+ Happy Clients</h6>
              <h3 className='landing_box_3_heading_2'>
                Join our growing <span>community</span>
              </h3>
              <p className='landing_box_3_para_1'>
                The best way to showcase our commitment is through the experiences and stories of those who have partnered with us.
              </p>
            </div>
            {/* </div> */}
          </div>
          <div className='swiper_main_div' >
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                280: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swiper_content">
                  <div className="swiper_box">
                    <p className="swiper_p3">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                    </p>
                  </div>
                  <div className="swiper_box1">
                    <img src={image17} />
                    <div className="swiper_box2">
                      <p className="swiper_box2_para">Steve Mark</p>
                      <p className="swiper_box2_para1">Found & Leader</p>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper_content">
                  <div className="swiper_box">
                    <p className="swiper_p3">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                    </p>
                  </div>
                  <div className="swiper_box1">
                    <img src={image17} />
                    <div className="swiper_box2">
                      <p className="swiper_box2_para">Steve Mark</p>
                      <p className="swiper_box2_para1">Found & Leader</p>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper_content">
                  <div className="swiper_box">
                    <p className="swiper_p3">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                    </p>
                  </div>
                  <div className="swiper_box1">
                    <img src={image17} />
                    <div className="swiper_box2">
                      <p className="swiper_box2_para">Steve Mark</p>
                      <p className="swiper_box2_para1">Found & Leader</p>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper_content">
                  <div className="swiper_box">
                    <p className="swiper_p3">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                    </p>
                  </div>
                  <div className="swiper_box1">
                    <img src={image17} />
                    <div className="swiper_box2">
                      <p className="swiper_box2_para">Steve Mark</p>
                      <p className="swiper_box2_para1">Found & Leader</p>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper_content">
                  <div className="swiper_box">
                    <p className="swiper_p3">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                    </p>
                  </div>
                  <div className="swiper_box1">
                    <img src={image17} />
                    <div className="swiper_box2">
                      <p className="swiper_box2_para">Steve Mark</p>
                      <p className="swiper_box2_para1">Found & Leader</p>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper_content">
                  <div className="swiper_box">
                    <p className="swiper_p3">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                    </p>
                  </div>
                  <div className="swiper_box1">
                    <img src={image17} />
                    <div className="swiper_box2">
                      <p className="swiper_box2_para">Steve Mark</p>
                      <p className="swiper_box2_para1">Found & Leader</p>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper_content">
                  <div className="swiper_box">
                    <p className="swiper_p3">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                    </p>
                  </div>
                  <div className="swiper_box1">
                    <img src={image17} />
                    <div className="swiper_box2">
                      <p className="swiper_box2_para">Steve Mark</p>
                      <p className="swiper_box2_para1">Found & Leader</p>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper_content">
                  <div className="swiper_box">
                    <p className="swiper_p3">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                    </p>
                  </div>
                  <div className="swiper_box1">
                    <img src={image17} />
                    <div className="swiper_box2">
                      <p className="swiper_box2_para">Steve Mark</p>
                      <p className="swiper_box2_para1">Found & Leader</p>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper_content">
                  <div className="swiper_box">
                    <p className="swiper_p3">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                    </p>
                  </div>
                  <div className="swiper_box1">
                    <img src={image17} />
                    <div className="swiper_box2">
                      <p className="swiper_box2_para">Steve Mark</p>
                      <p className="swiper_box2_para1">Found & Leader</p>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="home_last_section" id='action4'>
        <div className='container'>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className='landing_box_1'>
                <div>
                  <h4 className='landing_main_heading_1'>Help Center</h4>
                  <h3 className='landing_main_heading_2'>Have a question?</h3>
                  <h3 className='landing_main_heading_2'>Find <span> your answer</span></h3>
                </div>
                <p className='landing_main_para_1'>
                  We understand that you may have some queries, and we are here to provide you with all the answers you need.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="container_box_6">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Is there a free trial available?</Accordion.Header>
                    <Accordion.Body>
                      Yes, you can try us for free for 30 days. If you want, we'll provide you
                      with a free 30-minute onboarding call to get you up and running.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Is there a free trial available?</Accordion.Header>
                    <Accordion.Body>
                      Yes, you can try us for free for 30 days. If you want, we'll provide you
                      with a free 30-minute onboarding call to get you up and running.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Is there a free trial available?</Accordion.Header>
                    <Accordion.Body>
                      Yes, you can try us for free for 30 days. If you want, we'll provide you
                      with a free 30-minute onboarding call to get you up and running.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Is there a free trial available?</Accordion.Header>
                    <Accordion.Body>
                      Yes, you can try us for free for 30 days. If you want, we'll provide you
                      with a free 30-minute onboarding call to get you up and running.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_footer">
        <div className='container'>
          <div className='row'>
            <div className="col-lg-8">
              <div className='landing_box_001'>
                <div className='landing_box_0001'>
                {/* <img src={image1} /> */}
                  <div>
                    <Nav className="me-auto my-2 my-lg-0 landing_box_00011" navbarScroll>
                      <Nav.Link href="#action1" className='landing_navbar_tabs'>
                        Home
                      </Nav.Link>
                      <Nav.Link href="#action2" className='landing_navbar_tabs'>Feacture</Nav.Link>
                      <Nav.Link href="#action3" className='landing_navbar_tabs'>Testimonials</Nav.Link>
                      <Nav.Link href="#action4" className='landing_navbar_tabs'>FAQs</Nav.Link>
                    </Nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className='footer_icons'>
                <img src={image19} style={{ margin: '10px' }} />
                <img src={image20} style={{ margin: '10px' }} />
                <img src={image21} style={{ margin: '10px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Landing

