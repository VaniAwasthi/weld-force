import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiFacebook } from "react-icons/ci";
import { MdDownload } from "react-icons/md";
import Link from 'next/link';
export default function Header() {
  return (
    <header sticky="top"> 
    <Navbar  collapseOnSelect expand="lg" className='header-custom'>
      <Container>
       
        <Navbar.Brand href="/"> <img src='../../assets/images/Logo.png' />    </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"> 
        <Nav className="ms-auto">                     
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <NavDropdown title="Products" id="navbarScrollingDropdown">
            <Link href="/">Products1</Link>
            <Link href="/">Products2 </Link> 
            <Link href="/">Products3</Link>
          </NavDropdown> 
          <Link href="/">CAD Center</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/" className='download-nav'><span><MdDownload/></span> Resources</Link> 
          <Link href="/"><CiFacebook/> </Link>

        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </header>
  )
}
