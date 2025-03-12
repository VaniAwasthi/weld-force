'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { LiaPlaySolid } from "react-icons/lia";
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './component/ProductCard';
import ClientsSlider from './component/ClientsSlider';

export default function Home() {
  return (
    <main>

      <div className='home-slider'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src="../../assets/images/slider-img.webp" alt="" />
            <div className='slider-text'>
              <h3 className='heading2 white-f'>Excellence In</h3>
              <h2 className='heading1 orange-f border-white'>Resistance Welding</h2>
              <p className='white-f normal-text'>
                Copper and aluminum machining. World leader in resistance welding
                consummables production. Special machinery design and manufacture.
              </p>
              <div className='flex-gap'>
                <Link href="/" className='orange-button'>Explore Products</Link>
                <Link href="/" className='blue-button-icon'><LiaPlaySolid /> </Link>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide> 
          <video src="../../assets/images/EVS_start_video.mp4" muted autoPlay={1} loop={1}  ></video> 
          </SwiperSlide> */}
          <SwiperSlide>
            <img src="../../assets/images/slider-img.webp" />
            <div className='slider-text'>
              <h3 className='heading2 white-f'>Excellence In</h3>
              <h2 className='heading1 orange-f border-white'>Resistance Welding</h2>
              <p className='white-f normal-text'>
                Copper and aluminum machining. World leader in resistance welding
                consummables production. Special machinery design and manufacture.
              </p>
              <div className='flex-gap'>
                <Link href="/" className='orange-button'>Explore Products</Link>
                <Link href="/" className='blue-button-icon'><LiaPlaySolid /> </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../assets/images/slider-img.webp" />
            <div className='slider-text'>
              <h3 className='heading2 white-f'>Excellence In</h3>
              <h2 className='heading1 orange-f border-white'>Resistance Welding</h2>
              <p className='white-f normal-text'>
                Copper and aluminum machining. World leader in resistance welding
                consummables production. Special machinery design and manufacture.
              </p>
              <div className='flex-gap'>
                <Link href="/" className='orange-button'>Explore Products</Link>
                <Link href="/" className='blue-button-icon'><LiaPlaySolid /></Link>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>

      <section className='sec-padd bg-black'>
        <Container>
          <Row className="justify-content-center">
            <Col lg={7} md={12}>
              <h5 className='s-heading white-f text-center pb-3'>What We Offer</h5>
              <h3 className='orange-f heading8 text-center border-white'>We Have Been Processing
                Copper & Aluminium For Our 28 Years</h3>


            </Col>
            <Col md={12}>
              <div className="sec-padd-t">
                <ProductCard />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='sec-padd bg-banner1 border-bottomf'>
        <Container>

          <Row className="g-5">
            <Col md={12}><h5 className='s-heading white-f  '>How We Work</h5></Col>
            <Col md={6}>
              <h3 className='orange-f heading7 border-white'>Design & Detailing Center</h3>
              <p className='m-heading orange-f pt-4 pb-2'>In addition to the manufacturing,</p>
              <p className='white-f normal-text'>
                We are having dedicated CAD division having command over CAD softwares like AutoCAD Inventor, CREO , SOLID WORKS etc to support  our present domestic & overseas customers for their detailing & design services requirements.
              </p>
              <div className="containe-img border-righto" >

              </div>

            </Col>
            <Col md={6}>
              <h3 className='heading6 text-center orange-f pb-5'>Our Engineering Services</h3>
              <Row className="g-3">
                <Col md={6}>
                  <div className='overlay-box overlay-img1'>
                    <h4 className='bold-f white-f'>3D Modeling & Drafting</h4>
                  </div>
                </Col>
                <Col md={6}>
                  <div className='overlay-box overlay-img2'>
                    <h4 className='bold-f white-f'>Engineering Change
                      Notification</h4>
                  </div>
                </Col>
                <Col md={6}>
                  <div className='overlay-box overlay-img3'>
                    <h4 className='bold-f white-f'>CAD Drafting</h4>
                  </div>
                </Col>
                <Col md={6}>
                  <div className='overlay-box overlay-img4'>
                    <h4 className='bold-f white-f'>BIW Fixture
                      Design</h4>
                  </div>
                </Col>
                <Col md={6}>
                  <div className='overlay-box overlay-img5'>
                    <h4 className='bold-f white-f'>Documentation</h4>
                  </div>
                </Col>
                <Col md={6}>
                  <div className='overlay-box overlay-img6'>
                    <h4 className='bold-f white-f'>Reverse Engineering</h4>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

        </Container>

      </section>

      <section className='sec-padd bg-black'>
        <Container>
          <Row className="justify-content-center ">
            <Col lg={7} md={12}>
              <h5 className='s-heading white-f text-center pb-3'>About us</h5>
              <h3 className='orange-f heading5 text-center border-white'>Get To Know More About Us
                And Why You’re In Good Hands</h3>
            </Col>
            <Col md={12}>
              <p className='white-f normal-text heading4 mt-4 text-center semi-bold'>
                Our company WELDFORCE INTERNATIONAL manufactures complete range of resistance welding consumables like Gun arms, cold formed caps & electrodes, shanks & adaptors,  weld heads for projection & stud welding applications & seam welding wheels.
              </p>
            </Col>

          </Row>
        </Container>
      </section>
      <section className=' bg-blue'>
        <Container fluid className='p-0'>
          <Row className="text-center g-0 align-items-center">


            <Col lg={4} md="12">
              <div className='img-common-bg img-bg1'>

              </div>
            </Col>
            <Col lg={4} md="12">
              <div className="p-5 text-center">
                <p className='white-f m-heading1 semi-bold'>State-of-the-art machinery
                  with</p>
                <h3 className="heading9   orange-f pb-5">Well-Trained And
                  Skilled Manpower</h3>
                <a className="orange-button white-hover" href="/">Explore Products</a>
              </div>
            </Col>
            <Col lg={4} md="12">
              <div className='img-common-bg img-bg2'>

              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='sec-padd sec-padd1'>
        <Container >
          <Row className="g-5 justify-content-between">
            <Col md={6}  >
              <h5 className="s-heading white-f pb-4">Our Clientele</h5>
              <h3 className="orange-f heading10 border-white">Our Components Are Used
                In Worldwide Industrials</h3>
            </Col>
            <Col md={6}>
              <img src="../../assets/images/map.png" alt="" className='img-height' />
            </Col>


          </Row>

          
        </Container>
      </section>

      <section className='sec-padd-b sec-padd1'>
            <Container>
              <ClientsSlider />
            </Container>
          </section>
    </main>
  )
}
