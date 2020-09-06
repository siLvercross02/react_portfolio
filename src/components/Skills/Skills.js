import React from 'react';
import { Container, Row, Col, Media, Image, ProgressBar } from 'react-bootstrap';

import '../Skills/skills.css';
// Images
import HTML from '../../images/html-64.png';
import CSS from '../../images/css-64.png';
import JS from '../../images/js-64.png';
import REACT from '../../images/reactjs-64.png';
import BS4 from '../../images/bootstrap.png';
import PHP from '../../images/php-64.png';
import PS from '../../images/ps-64.png';
import XD from '../../images/xd-64.png';


const Skills = () => {
    const htmlScore = 90;
    const cssScore =  89;
    const jsScore = 70;
    const reactScore = 60;
    const bsScore = 90;
    const phpScore = 70;
    const psScore = 70;
    const xdScore = 80;

    return (
        <section className="py-5" id="skills">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h3 className="header-color-2 text-center font-weight-bold">SKILLS</h3>
                    </Col>
                </Row>
                <Row className="mb-5    ">
                    <Col lg={12}>
                        <Media className="mt-3">
                            <Image src={HTML} className="align-self-end mr-3" />
                            <Media.Body>
                                <h5 className="mt-0 mb-0">HTML</h5>
                                <ProgressBar
                                    now={htmlScore}
                                    className="mt-3 mb-0 "
                                    variant="html"
                                    label={`${htmlScore}%`}
                                />
                            </Media.Body>
                        </Media>

                        <Media className="mt-3">
                            <Image src={CSS} className="align-self-end mr-3" />
                            <Media.Body>
                                <h5 className="mt-0 mb-0">CSS</h5>
                                <ProgressBar
                                    now={cssScore}
                                    className="mt-3 mb-0 "
                                    variant="css"
                                    label={`${cssScore}%`}
                                />
                            </Media.Body>
                        </Media>

                        <Media className="mt-3">
                            <Image src={JS} className="align-self-end mr-3" />
                            <Media.Body>
                                <h5 className="mt-0 mb-0">JAVASCRIPT</h5>
                                <ProgressBar
                                    now={jsScore}
                                    className="mt-3 mb-0 "
                                    variant="js"
                                    label={`${jsScore}%`}
                                />
                            </Media.Body>
                        </Media>

                        <Media className="mt-3">
                            <Image src={REACT} className="align-self-end mr-3" />
                            <Media.Body>
                                <h5 className="mt-0 mb-0">REACT JS</h5>
                                <ProgressBar
                                    now={reactScore}
                                    className="mt-3 mb-0 "
                                    variant="react"
                                    label={`${reactScore}%`}
                                />
                            </Media.Body>
                        </Media>

                        <Media className="mt-3">
                            <Image src={BS4} className="align-self-end mr-3" />
                            <Media.Body>
                                <h5 className="mt-0 mb-0">BOOTSTRAP</h5>
                                <ProgressBar
                                    now={bsScore}
                                    className="mt-3 mb-0 "
                                    variant="bootstrap"
                                    label={`${bsScore}%`}
                                />
                            </Media.Body>
                        </Media>

                        <Media className="mt-3">
                            <Image src={PHP} className="align-self-end mr-3" />
                            <Media.Body>
                                <h5 className="mt-0 mb-0">PHP</h5>
                                <ProgressBar
                                    now={phpScore}
                                    className="mt-3 mb-0 "
                                    variant="php"
                                    label={`${phpScore}%`}
                                />
                            </Media.Body>
                        </Media>

                        <Media className="mt-3">
                            <Image src={PS} className="align-self-end mr-3" />
                            <Media.Body>
                                <h5 className="mt-0 mb-0">PHOTOSHOP</h5>
                                <ProgressBar
                                    now={psScore}
                                    className="mt-3 mb-0 "
                                    variant="ps"
                                    label={`${psScore}%`}
                                />
                            </Media.Body>
                        </Media>

                        <Media className="mt-3">
                            <Image src={XD} className="align-self-end mr-3" />
                            <Media.Body>
                                <h5 className="mt-0 mb-0">ADOBE XD</h5>
                                <ProgressBar
                                    now={xdScore}
                                    className="mt-3 mb-0 "
                                    variant="xd"
                                    label={`${xdScore}%`}
                                />
                            </Media.Body>
                        </Media>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills;