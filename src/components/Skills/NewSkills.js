import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

import "../Skills/skills.css";
import { skillData } from "../../contants";

const NewSkills = () => {
  console.log("skillData", skillData);

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
          {skillData?.map((item) => (
            <Col md={3} lg={3} xs={12} key={item?.id}>
              <Card className="shadow border-0 mb-4">
                <Card.Body>
                  <div className="text-center">
                    <Image src={item?.img} className="img-fluid" />
                    <h5 className="mt-3 mb-0">{item?.name}</h5>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewSkills;
