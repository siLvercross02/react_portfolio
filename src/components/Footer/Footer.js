import React from 'react';
import {  Container, Row, Col } from 'react-bootstrap';

import './footer.css';

const Footer = () => {
    return(
        <section>
            <Container fluid className="pl-0 pr-0">
                <Row>
                    <Col lg={12} className="text-center">
                        <footer className="footer">
                            <p className="mt-2">Joe Web Design, Copyright © 2020</p>
                        </footer>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer;