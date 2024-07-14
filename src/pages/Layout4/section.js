// components/Section.js

import { Container, Row, Col, Badge, InputGroup, Button, Form } from 'react-bootstrap';
import Image from 'next/image'; // Adjusted import for Next.js Image component
import home4 from "../../assets/images/home/home-4bg.png";

const Section = () => {
  return (
    <section className="home-4" id="home">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={6}>
            <Image src="/images/vhato.svg" alt="" width={300} height={300} />
            <Badge bg="soft-primary" className="rounded-pill mb-3">IOS Device</Badge>
            <h3 className="text-shadow-title">The Perfect Choice for your Mobile App presentation</h3>
            <p className="text-muted para-desc mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut labore et dolore.</p>
            <div className="search-form">
              <Form>
                <InputGroup>
                  <Form.Control id="email2" type="password" placeholder="Email :" />
                  <Button type="submit" className="btn bg-gradient">Submit
                    <i className="bx bx-send"></i>
                  </Button>
                </InputGroup>
              </Form>
            </div>
          </Col>
          <Col lg={6} className="text-end">
            <Image src={home4} alt="" className="img-fluid" width={600} height={400} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section;
