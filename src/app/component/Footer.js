"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CiFacebook } from "react-icons/ci";
import { BsGlobe2, BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="sec-padd-t bg-blue">
        <Container>
          <Row className="g-5">
            <Col lg={3} md={6}>
              <img src="../../assets/images/Logo.png" />
              <p className="white-f mt-4 mb-3 normal-p">
                Weldforce International have commenced operations since 1995 in
                the field of manufacturing Resistance Welding Products.
              </p>
              <div>
                <Link className="footer-facebook" href="/">
                  <CiFacebook />
                </Link>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <h4 className="border-white small-heading orange-f bold-f">
                Usefull Links
              </h4>
              <ul className="footer-link">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <Link href="/">Products</Link>
                </li>
                <li>
                  <Link href="/">CAD Center</Link>
                </li>
                <li>
                  <Link href="/">Contact Us</Link>
                </li>
                <li>
                  <Link href="/">Resources</Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6}>
              <h4 className="border-white small-heading orange-f bold-f">
                Our Products
              </h4>
              <ul className="footer-link">
                <li>
                  <Link href="/">Holders & Shank Adaptors</Link>
                </li>
                <li>
                  <Link href="/">Gun Arms In Copper Alloys</Link>
                </li>
                <li>
                  <Link href="/">Gun Arms In Aluminium Alloy A7075-T651</Link>
                </li>
                <li>
                  <Link href="/">
                    Welding Heads For Projection & Stud Welding Applications
                  </Link>
                </li>
                <li>
                  <Link href="/">Cold Headed & Machined Caps</Link>
                </li>
                <li>
                  <Link href="/">
                    Special Parts For All Kind Of Resistance Welding Equipments
                    & Fixtures
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6}>
              <h4 className="border-white small-heading orange-f bold-f">
                Contact Info
              </h4>
              <ul className="footer-link">
                <li>
                  {" "}
                  <Link className="link-flex" href="/">
                    <span>
                      <IoLocationSharp />
                    </span>{" "}
                    Plot #235, Udyog Vihar, Phase - 1, Gurgram - 122016,
                    Haryana, India.
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="link-flex" href="/">
                    <span>
                      <BsTelephoneFill />
                    </span>{" "}
                    +91-124-4278267
                    <br />
                    +91-124-4278268
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="link-flex" href="/">
                    <span>
                      <GrMail />
                    </span>{" "}
                    contact@weldforce.net
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="link-flex" href="/">
                    <span>
                      <BsGlobe2 />
                    </span>{" "}
                    www.weldforce.net
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <section className="pt-3 pb-3 bg-orange">
          <p className="white-f text-center mb-0 normal-p">
            Copyright © 2023 Weldforce International - All Rights Reserved.
          </p>
        </section>
      </footer>
    </>
  );
}
