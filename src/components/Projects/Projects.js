import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "../Projects/projects.css";

import klickVPN from "../../images/klickvpn.png";
import communifi from "../../images/communifi.png";
import communitalk from "../../images/communitalk.png";
import klickStream from "../../images/klickstreamzone.png";
import amazon from "../../images/amazon.PNG";
import netflix from "../../images/netflix.PNG";
import affinity from "../../images/Affinity-portfolio.PNG";
import gpt3 from "../../images/gpt3-app.png";
import incon from "../../images/incon-website.png";
import meta from "../../images/meta-website.png";

const Projects = () => {
  return (
    <section className="projects my-5 py-5" id="projects">
      <Container>
        <Row className="mb-5">
          <Col lg={12}>
            <h3 className="text-white text-center font-weight-bold">
              PROJECTS
            </h3>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="card-project">
              <Image src={incon} className="card-img img-proj" />
              <Card.ImgOverlay className="overlay-radius bg-secondary-custom">
                <div className="text-center overlay-sm mt-5">
                  <h5 className="text-title text-white mb-5">
                    Incon Industrial Corporation
                  </h5>
                  <a
                    href="https://www.inconindustrial.com/"
                    className="btn btn-info rounded-pill pl-5 pr-5"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="card-project">
              <Image src={meta} className="card-img img-proj" />
              <Card.ImgOverlay className="overlay-radius bg-secondary-custom">
                <div className="text-center overlay-sm mt-5">
                  <h5 className="text-title text-white mb-5">
                    Meta Phil-Tech Corp.
                  </h5>
                  <a
                    href="https://metaphil-tech.com/"
                    className="btn btn-info rounded-pill pl-5 pr-5"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <Card className="card-project">
              <Image src={affinity} className="card-img img-proj" />
              <Card.ImgOverlay className="overlay-radius bg-secondary-custom">
                <div className="text-center overlay-sm mt-5">
                  <h5 className="text-title text-white mb-5">
                    Affinity Capital Corp
                  </h5>
                  <a
                    href="https://affinitycorp.net/"
                    className="btn btn-info rounded-pill pl-5 pr-5"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="card-project">
              <Image src={gpt3} className="card-img img-proj" />
              <Card.ImgOverlay className="overlay-radius bg-secondary-custom">
                <div className="text-center overlay-sm mt-5">
                  <h5 className="text-title text-white mb-5">GPT3 Demo page</h5>
                  <a
                    href="https://gpt3-demo.netlify.app/"
                    className="btn btn-info rounded-pill pl-5 pr-5"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <Card className="card-project card-sm-adjust">
              <Image src={amazon} className="card-img img-proj" />
              <Card.ImgOverlay className="overlay-radius bg-secondary-custom">
                <div className="text-center overlay-sm mt-5">
                  <h5 className="text-title text-white mb-5">Amazon Clone</h5>
                  <a
                    href="https://clone-a6e07.web.app/"
                    className="btn btn-info rounded-pill pl-5 pr-5"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="card-project">
              <Image src={netflix} className="card-img img-proj" />
              <Card.ImgOverlay className="overlay-radius bg-secondary-custom">
                <div className="text-center overlay-sm mt-5">
                  <h5 className="text-title text-white mb-5">Netflix Clone</h5>
                  <a
                    href="https://netflix-clone-697b8.web.app/"
                    className="btn btn-info rounded-pill pl-5 pr-5"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <Card className="card-project card-sm-adjust">
              <Image src={klickVPN} className="card-img img-proj" />
              <Card.ImgOverlay className="overlay-radius bg-secondary-custom">
                <div className="text-center overlay-sm mt-5">
                  <h5 className="text-title text-white mb-5">KlickVPN</h5>
                  <a
                    href="https://klickvpn.netlify.app/"
                    className="btn btn-info rounded-pill pl-5 pr-5"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="card-project">
              <Image src={communifi} className="card-img img-proj" />
              <Card.ImgOverlay className="overlay-radius bg-secondary-custom">
                <div className="text-center overlay-sm mt-5">
                  <h5 className="text-title text-white mb-5">Communifi</h5>
                  <a
                    href="https://communifi.netlify.app/"
                    className="btn btn-info rounded-pill pl-5 pr-5"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <Card className="card-project card-sm-adjust">
              <Image src={communitalk} className="card-img img-proj" />
              <Card.ImgOverlay className="overlay-radius bg-secondary-custom">
                <div className="text-center overlay-sm mt-5">
                  <h5 className="text-title text-white mb-5">Communitalk</h5>
                  <a
                    href="https://communitalk.netlify.app/"
                    className="btn btn-info rounded-pill pl-5 pr-5"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="card-project">
              <Image src={klickStream} className="card-img img-proj" />
              <Card.ImgOverlay className="overlay-radius bg-secondary-custom">
                <div className="text-center overlay-sm mt-5">
                  <h5 className="text-title text-white mb-5">
                    Klick.Streamzones
                  </h5>
                  <a
                    href="https://klickstreamzones.netlify.app/"
                    className="btn btn-info rounded-pill pl-5 pr-5"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
