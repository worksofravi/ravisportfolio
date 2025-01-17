'use client';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
    return (
        <>
            <Navbar expand={"lg"} fixed='top' className="mb-3 custom-header-style px-2 px-md-0">
                <Container className='cs-container-lg custom-header-container px-3 py-1 px-md-4 py-md-2'>
                    <Navbar.Brand href="#" className='text-color fs-sm-16'>Ravi Bundheliya</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} className='p-0 border-none bg-transparent' />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                        className="bg-color"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`} className='text-color'>
                                Ravi Bundheliya
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 text-color">
                                <Nav.Link href="#about" className="text-color">About</Nav.Link>
                                <Nav.Link href="#skills" className="text-color">Skills</Nav.Link>
                                <Nav.Link href="#projects" className="text-color">Projects</Nav.Link>
                                <Nav.Link href="#contact" className="text-color">Contact</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Header