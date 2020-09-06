import React from 'react';
import { Navbar, Nav, Button, Container, ThemeProvider } from 'react-bootstrap';
import '../Header/header.css';



const Header = () => {
    return(
        <Navbar bg="light" className="fixed-top shadow" expand="md"> 
            <Container>
                <Navbar.Brand href="#banner-home" className="p-3 font-weight-bold"><span className="header-color-3">JOE </span><span className="header-color-2">WEB DESIGN</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2"/>
                    <Navbar.Collapse  id="basic-navbar-nav">
                        <Nav className="mx-auto font-weight-bold">
                            <Nav.Link href="#banner-home">HOME</Nav.Link>
                            <Nav.Link href="#about">ABOUT</Nav.Link>
                            <Nav.Link href="#skills">SKILLS</Nav.Link>
                            <Nav.Link href="#projects">PROJECTS</Nav.Link>
                        </Nav>
                        <Nav>
                            <ThemeProvider>
                                <Button variant="theme pl-5 pr-5 font-weight-bold" href="#contact">CONTACT</Button>
                            </ThemeProvider>
                        </Nav>
                </Navbar.Collapse> 
            </Container>          
        </Navbar>
    )
}

export default Header;