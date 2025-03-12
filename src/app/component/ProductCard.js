import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ProductCard() {
  return (
    <>
      <Row className="justify-content-center g-4">
        <Col lg={4} md={6}>
          <div className='product-card'>
            <div className='product-img '>
              <img src='../../assets/images/product1.png' />
            </div>
            <div className='text-center mt-4'>
              <h5 className='product-name'>Holders & Shank Adaptors</h5>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className='product-card'>
            <div className='product-img1 '>
              <img src='../../assets/images/product2.png' />
            </div>
            <div className='text-center mt-4'>
              <h5 className='product-name'>Gun Arms In Copper
                Alloys</h5>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className='product-card'>
            <div className='product-img '>
              <img src='../../assets/images/product3.png' />
            </div>
            <div className='text-center mt-4'>
              <h5 className='product-name'>Gun Arms In  Aluminium Alloy
                A7075-T651
              </h5>
            </div>
          </div>
        </Col>

        <Col lg={4} md={6}>
          <div className='product-card'>
            <div className='product-img1 '>
              <img src='../../assets/images/product4.png' />
            </div>
            <div className='text-center mt-4'>
              <h5 className='product-name'>Welding Heads For Projection
                & Stud Welding Applications
              </h5>
            </div>
          </div>
        </Col>

        <Col lg={4} md={6}>
          <div className='product-card'>
            <div className='product-img '>
              <img src='../../assets/images/product5.png' />
            </div>
            <div className='text-center mt-4'>
              <h5 className='product-name'>Cold Headed &
                Machined Caps
              </h5>
            </div>
          </div>
        </Col>

        <Col lg={4} md={6}>
          <div className='product-card'>
            <div className='product-img1 '>
              <img src='../../assets/images/product6.png' />
            </div>
            <div className='text-center mt-4'>
              <h5 className='product-name'>Welding Heads For Projection
                & Stud Welding Applications
              </h5>
            </div>
          </div>
        </Col>

      </Row>
    </>
  )
}
