import React from "react";
import {
  Container,
  Row,
  Col,
  Media,
  Image,
  ProgressBar,
  Card,
} from "react-bootstrap";

import "../Skills/skills.css";
// Images
import HTML from "../../images/html-64.png";
import CSS from "../../images/css-64.png";
import JS from "../../images/js-64.png";
import REACT from "../../images/reactjs-64.png";
import BS4 from "../../images/bootstrap.png";
import PHP from "../../images/php-64.png";
import PS from "../../images/ps-64.png";
import XD from "../../images/xd-64.png";
import NODE from "../../images/node.png";
import FIGMA from "../../images/figma.png";
import STRAPI from "../../images/strapi.png";

const NewSkills = () => {
  return (
    <section className="py-5" id="skills">
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="header-color-2 text-center font-weight-bold">
              SKILLS
            </h3>
          </Col>
        </Row>
        <Row className="mb-5 mt-5">
          <Col md={3} lg={3} xs={12}>
            <Card className="shadow border-0">
              <Card.Body>
                <div className="text-center">
                  <Image src={HTML} className="img-fluid" />
                  <h5 className="mt-3 mb-0">HTML</h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} lg={3} xs={12}>
            <Card className="shadow border-0">
              <Card.Body>
                <div className="text-center">
                  <Image src={CSS} className="img-fluid" />
                  <h5 className="mt-3 mb-0">CSS</h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} lg={3} xs={12}>
            <Card className="shadow border-0">
              <Card.Body>
                <div className="text-center">
                  <Image src={JS} className="img-fluid" />
                  <h5 className="mt-3 mb-0">JAVASCRIPT</h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} lg={3} xs={12}>
            <Card className="shadow border-0">
              <Card.Body>
                <div className="text-center">
                  <Image src={REACT} className="img-fluid" />
                  <h5 className="mt-3 mb-0">REACT JS</h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5 mt-5">
          <Col md={3} lg={3} xs={12}>
            <Card className="shadow border-0">
              <Card.Body>
                <div className="text-center">
                  <Image src={REACT} className="img-fluid" />
                  <h5 className="mt-3 mb-0">REACT NATIVE</h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} lg={3} xs={12}>
            <Card className="shadow border-0">
              <Card.Body>
                <div className="text-center">
                  <Image src={NODE} className="img-fluid" />
                  <h5 className="mt-3 mb-0">NODE JS</h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} lg={3} xs={12}>
            <Card className="shadow border-0">
              <Card.Body>
                <div className="text-center">
                  <Image src={PHP} className="img-fluid" />
                  <h5 className="mt-3 mb-0">PHP</h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} lg={3} xs={12}>
            <Card className="shadow border-0">
              <Card.Body>
                <div className="text-center">
                  <Image src={STRAPI} className="img-fluid" />
                  <h5 className="mt-3 mb-0">STRAPI</h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5 mt-5">
          <Col md={3} lg={3} xs={12}>
            <Card className="shadow border-0">
              <Card.Body>
                <div className="text-center">
                  <Image src={BS4} className="img-fluid" />
                  <h5 className="mt-3 mb-0">BOOTSTRAP</h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} lg={3} xs={12}>
            <Card className="shadow border-0">
              <Card.Body>
                <div className="text-center">
                  <Image src={PS} className="img-fluid" />
                  <h5 className="mt-3 mb-0">PHOTOSHOP</h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} lg={3} xs={12}>
            <Card className="shadow border-0">
              <Card.Body>
                <div className="text-center">
                  <Image src={FIGMA} className="img-fluid" />
                  <h5 className="mt-3 mb-0">FIGMA</h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} lg={3} xs={12}>
            <Card className="shadow border-0">
              <Card.Body>
                <div className="text-center">
                  <Image src={XD} className="img-fluid" />
                  <h5 className="mt-3 mb-0">ADOBE XD</h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewSkills;
