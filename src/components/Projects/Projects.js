import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "../Projects/projects.css";
import { projectData } from "../../contants";

const Projects = () => {
  return (
    <section className="projects my-5 py-5" id="projects">
      <Container>
        <Row className="mb-5">
          <Col lg={12}>
            <h3 className="text-white text-center font-weight-bold">
              PROJECTS
            </h3>
            <p className="text-white text-center font-weight-bold">
              This projects consist of experience in my previous company,
              freelance work and personal projects.
            </p>
          </Col>
        </Row>
        <Row>
          {projectData?.map((item) => (
            <Col md={6} key={item?.id}>
              <Card className="card-project mb-4">
                <Image src={item?.img} className="card-img img-proj" />
                <Card.ImgOverlay className="overlay-radius bg-secondary-custom">
                  <div className="text-center overlay-sm mt-5">
                    <h5 className="text-title text-white mb-5">{item?.name}</h5>
                    <a
                      href={`${item?.link}`}
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
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
