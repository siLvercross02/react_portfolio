import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import WorkingImg from '../../images/working-exp.png';

import '../About/about.css';

const WorkingExp = () => {
    return(
        <section>
            <Container fluid>
                <Row className="shadow my-5">
                    <Col md={6} sm={12}>
                        <Image src={WorkingImg} className="w-100"/>
                    </Col>
                    <Col md={6} sm={12} className="bg-color-green">
                        <div className="p-5 text-white">
                            <h4 className="mb-5 font-weight-bold text-center">WORKING EXPERIENCE</h4>
                            <div className="pt-5 pb-3">
                                <p className="exp-text mb-0">Vasavah Consultancy: Web Designer</p>
                                <p className="exp-text">November 05, 2018 - January 29, 2019</p>
                            </div>
                            <div className="pb-4">
                                <p className="exp-text mb-0">Gfoxx International: Web Designer</p>
                                <p className="exp-text">February 26, 2019 - September 14, 2019</p>
                            </div>
                            <div className="pb-4">
                                <p className="exp-text mb-0">Pil-Chi Telecoms Inc. : Web Designer</p>
                                <p className="exp-text">October 21, 2019 - April 30, 2020</p>
                            </div>
                            <div className="pb-4">
                                <p className="exp-text mb-0">Affinity Capital Corp: Front End Developer</p>
                                <p className="exp-text">May 01, 2020 - Present</p>
                            </div>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WorkingExp;