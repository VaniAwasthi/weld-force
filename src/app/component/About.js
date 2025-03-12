import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import about from "../about.module.css";
import ClientsSlider from "../component/ClientsSlider";

export default function About() {
  return (
    <div className="bg-black">
      <section className={about.header}>
        <Container fluid p-0>
          <Row>
            <Col lg={12} md={12}>
              <div className={about.slider_text}>
                <h4 className=" orange-f border-white">ABOUT US</h4>
                <p className="white-f">Home &gt; About Us</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mt-5">
        <Container>
          <Row className="justify-content-center  ">
            <Col lg={9} md={9}>
              <div className={about.men_img}>
                <img src="../../assets/images/Layer26.png "></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sec-padd border-bottomf0 mt-5">
        <Container>
          <Row>
            <Col lg={12} md={12}>
              <h5 className={about.main_header}>ABOUT US</h5>
              <Col lg={5} md={12}>
                <p className={about.main_header1}>
                  Get To Know More About Us And Why You’re In Good Hands
                </p>
              </Col>
            </Col>
            <Col lg={8} md={8}>
              <p className={about.main_header2}>
                Weldforce International have commenced operations since 1995 in
                the field of manufacturing Resistance Welding Products. Over the
                years we have progressively continued providing quality products
                range and graduated to become one of the leading manufacturing
                companies of Resistance Welding Products in India. When it comes
                to Auto Industries our brand "Weldforce" is the name to reckon
                with firmly etched in the minds of the customers not only in
                India but all over the world. Our clientele expands the globe
                and today Weldforce exports its wide range of products in
                countries like USA, UK, France, Spain, Germany , UAE.
              </p>
            </Col>
            <Col lg={4} md={4}>
              <div className={about.product}>
                <div className={about.product_img}>
                  <Card.Body>
                    <Card.Text>
                      <p className={about.main_header5}>
                        We’re Committed To Quality
                      </p>
                      <h4 className={about.main_header6}>
                        Leader in the industry since
                      </h4>
                      <h2 className={about.main_header7}>1995</h2>
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={about.bluebg}>
        <Container fluid p-0>
          <Row>
            <Col md={6} className="p-0">
              <img
                src="../../assets/images/weldingmachine.png"
                className={about.middle_img}
              ></img>
            </Col>
            <Col md={6} className={about.main_header10}>
              <Col lg={8} md={12}>
                <h3 className={about.main_header8}>Why Choose Us</h3>
              </Col>
              <Col md={12} className="pt-4">
                <div className="pb-2">
                  <div className={about.high}>
                    <img
                      src="../../assets/images/high.png"
                      className={about.high1}
                    ></img>
                    <span className={about.IoLocationSharp2}>
                      {" "}
                      Highest Quality Products
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="pb-2">
                  <div className={about.high}>
                    <img
                      src="../../assets/images/house.png"
                      className={about.high1}
                    ></img>
                    <span className={about.IoLocationSharp2}>
                      {" "}
                      In House manufacturing & Urgencies Delivered
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="pb-2">
                  <div className={about.high}>
                    <img
                      src="../../assets/images/Excellence.png"
                      className={about.high1}
                    ></img>
                    <span className={about.IoLocationSharp2}>
                      Excellence In Resistance Welding
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="pb-2">
                  <div className={about.high}>
                    <img
                      src="../../assets/images/Resistence.png"
                      className={about.high1}
                    ></img>
                    <span className={about.IoLocationSharp2}>
                      {" "}
                      Resistance Welding Application Solutions
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="pb-2">
                  <div className={about.high}>
                    <img
                      src="../../assets/images/Exporting.png"
                      className={about.high1}
                    ></img>
                    <span className={about.IoLocationSharp2}>
                      {" "}
                      Exporting To Clients In Over 30 Countries
                    </span>
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={about.main_header9}>
        <Container>
          <ClientsSlider />
        </Container>
      </section>
    </div>
  );
}
