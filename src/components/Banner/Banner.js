import React from 'react'; 
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import '../Banner/banner.css';
import profile from '../../images/profile.jpg';

const Banner = () => {
    return(
        <div id="banner-home">
            <section className="bg-profile">
                <Container fluid>
                    <Row>
                        <Col className="py-5">
                            <Image className="profile rounded-pill image-adjust" src={profile} />
                            <div className="text-white mt-2">
                                <h3 className="profile-name mb-2">Joemari H. Supan</h3>
                                <p className="mb-5 pos-font">Front End Developer</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="card-top-adjust position-relative">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Card className="shadow">
                                <Card.Body>
                                    <h3 className="header-color-1 text-center font-weight-bold">OBJECTIVE</h3>
                                    <h6 className="text-center">TO SEEK AND GAIN A MEANINGFUL LEARNING EXPERIENCE WHICH WILL DEVELOP MY SKILLS AND ABILITIES</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
        
       
    )
}

export default Banner;