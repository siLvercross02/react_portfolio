import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ImageAbout1 from '../../images/univ.png';
import ImageAbout2 from '../../images/about-2.jpg';

import '../About/about.css';

const About = () => {
    return(
        <section className="py-5" id="about">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h3 className="header-color-2 text-center font-weight-bold">ABOUT</h3>
                    </Col>
                </Row>
                <Row className="sm-bot-adjust mt-5">
                    <Col md={6}>
                        <Card className="shadow w-75 mx-auto">
                            <Card.Body className="text-center">
                                <Card.Img src={ImageAbout1} className="educImg"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="p-5 mx-auto" md={6}>
                        <div className="ml-5">
                            <h4 className="mb-5 font-weight-bold">EDUCATIONAL ATTAINMENT</h4>
                            <p className="font-weight-bold">UNIVERSITY OF RIZAL SYSTEM</p>
                            <p className="font-weight-bold">BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</p>
                            <p className="font-weight-bold">SY: 2014 - 2018</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="p-5 mx-auto" md={6}>
                        <div className="ml-5">
                            <h4 className="mb-5 font-weight-bold">SEMINAR ATTENDED</h4>
                            <p className="font-weight-bold">FIRST URS IT CONVERGENCE</p>
                            <p className="font-weight-bold">FIRST RIZAL IT CONVERGENCE</p>
                            <p className="font-weight-bold">MOZILLA FIREFOX AT URS</p>
                            <p className="font-weight-bold">BUSINESS SUMMIT</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Card className="shadow w-75 mx-auto">
                            <Card.Body className="text-center">
                                <Card.Img src={ImageAbout2} className="educImg"/>
                            </Card.Body>
                        </Card>  
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;