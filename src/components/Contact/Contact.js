import React from 'react';
import { Container, Row, Col, Button, ThemeProvider, Image } from 'react-bootstrap';
import '../Contact/contact.css';

// Images
import FB from '../../images/fb-logo-circle.png';
import GMAIL from '../../images/gmail-logo-new.png';
import GITHUB from '../../images/github-logo-new.png';
import LINKEDIN from '../../images/linkedin-logo-new.png';

const Contact = () => {
    return(
        <section className="py-5" id="contact">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h3 className="header-color-2 text-center font-weight-bold">CONTACT</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className="mt-5 text-center">
                        <h2 className="header-color-1 text-center font-weight-bold">LET'S WORK TOGETHER</h2>
                        <h5 className="text-center font-weight-bold">For any inquiries get in touch and contact me</h5>
                        <div className="mt-5">
                            <ThemeProvider>
                                <Button variant="theme pl-5 pr-5 font-weight-bold"  href="mailto:joemari.supan18@gmail.com">
                                    GET STARTED
                                </Button>
                            </ThemeProvider>
                        </div> 
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className="contact-sm py-5">
                        <div className="flex-row text-center">  
                            <a className="adjust-social" href="https://www.facebook.com/siLvercross02/" rel="noopener noreferrer" target="_blank">
                                <Image src={FB} className="social-media-icon"/>
                            </a>
                            <a className="adjust-social" href="mailto: joemari.supan18@gmail.com" rel="noopener noreferrer" target="_blank">
                                <Image src={GMAIL} className="social-media-icon"/>
                            </a>
                            <a className="adjust-social" href="https://github.com/siLvercross02" rel="noopener noreferrer" target="_blank">
                                <Image src={GITHUB} className="social-media-icon"/>
                            </a>
                            <a className="#" href="https://www.linkedin.com/in/joemari-supan/" rel="noopener noreferrer" target="_blank">
                                <Image src={LINKEDIN} className="social-media-icon"/>
                            </a>  
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;