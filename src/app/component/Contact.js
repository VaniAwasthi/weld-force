import React from 'react'
import contact from '../contact.module.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
 

export default function Contact() {
  return (
    <div>
      <div className='bg-black'>
     
        <section className={contact.header}>
        <Container fluid p-0>
          <Row>
            <Col lg={12} md={12}>

            <div className={contact.slider_text}>
                    <h2 className=' orange-f border-white'>CONTACT US</h2>
                    <p className='white-f'>Home &gt; Contact Us
                    </p>
                  </div>
            </Col>
          </Row>
        </Container>
      </section>

        <section className='mt-5'>
          <Container>
            <Row className="justify-content-center ">
              <Col lg={6} md={12} sm={12}>
                <h5 className={contact.main_header}>OUR CONTACTS</h5>
                <h3 className={contact.main_header1}>Let’s Start Working Together.
                  Get In Touch!</h3>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='mt-5'>
          <Container>
            <Row className="justify-content-center  align-items-center text-center g-3">
              <Col lg={4} md={4} sm={4}>
               <div className={contact.prod}>
               <div className={contact.product}>
                  <div className={contact.product_img}>
                    <Card.Body>
                      <Card.Title className={contact.product_img1}>
                        <Link className={contact.main_header14} href="/"><span><IoLocationSharp /></span></Link>
                      </Card.Title>
                      <Card.Text>
                        <h4 className={contact.main_header4}>Visit Office Address</h4>
                        <p className={contact.main_header5}>Plot #235, Udyog Vihar, Phase - 1,
                          Gurgram - 122016, Haryana, India.</p>
                      </Card.Text>
                    </Card.Body>
                  </div>
                </div>
               </div>
              </Col>
              <Col lg={4} md={4} sm={4}>
                <div className={contact.prod}>
                <div className={contact.product}>
                  <div className={contact.product_img}>
                    <Card.Body>
                      <Card.Title className={contact.product_img1}>
                        <Link className={contact.main_header14} href="/"><span><BsTelephoneFill /></span> </Link>
                      </Card.Title>
                      <Card.Text>
                        <h4 className={contact.main_header4}>Call Anytime</h4>
                        <p className={contact.main_header5}>+91-124-4278267
                          <p className={contact.main_header5}>+91-124-4278267</p>
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </div>
                </div>
                </div>
              </Col>
              <Col lg={4} md={4}>
                <div className={contact.prod}>
                <div className={contact.product}>
                  <div className={contact.product_img}>
                    <Card.Body>
                      <Card.Title className={contact.product_img1}>
                        <Link className={contact.main_header14} href="/"><span><GrMail /></span> </Link>
                      </Card.Title>
                      <Card.Text>
                        <h4 className={contact.main_header4}>Write Email</h4>
                        <p className={contact.main_header5}>contact@weldforce.net</p>
                      </Card.Text>
                    </Card.Body>
                  </div>
                </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='mt-5'>
          <Container fluid p-0>
            <Row>
              <Col md={6} className='p-0'>
                {/* <img src='../../assets/images/Map1.png' ></img> */}
                <iframe className ={contact.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.72022927323!2d76.82493483041476!3d28.423160293840827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1691005788919!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" ></iframe>
              </Col>
              <Col md={6} sm={12} className={contact.main_header7}>
                <Col lg={5} md={12} sm={12}><h3 className={contact.main_header8}>Drop Us A Line</h3></Col>
                <Col lg={7} md={12} sm={12}>
                  <p className={contact.main_header9}>Your email address will not be published.
                    Required fields are marked *</p>
                </Col>
                <div className='pb-3'>
                  <input type='text' placeholder='Your Name' className={contact.main_header15}></input>
                </div>
                <div className='pb-3'>
                  <input type='text' placeholder='Your Email' className={contact.main_header15}></input>
                </div>
                <div className='pb-3'>
                  <input type='text' placeholder='Subject' className={contact.main_header15} ></input>
                </div>
                <div className='pb-3'>
                  <input type='text' placeholder='Your Phone' className={contact.main_header15}></input>
                </div>
                <div className='pb-4'>
                  <textarea type='text' placeholder='Your comment' className={contact.main_header15} rows={3}></textarea>
                </div>
                <div>
                  <button type='button' className={contact.main_header10} >SEND A MESSAGE</button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={contact.main_header13}>
          <Container >
            <Row>
              <Col md={6} sm={12}>
                <Col lg={7} sm={12}>
                  <h3 className={contact.main_header11}>Better yet, see us in person!
                  </h3>
                </Col>
                <Col lg={8}>
                  <p className={contact.main_header12}>We love our customers, so feel free to visit during normal
                    business hours.</p>
                </Col>
              </Col>
              <Col md={6}>
                <img src="../../assets/images/Rectangle9.png" alt="" />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  )
}