import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import Link from 'next/link'; 

import home4 from "../assets/images/home/home-4bg.png";

const Section = () => {
  return (
    <section className="home-1 bg-home d-flex align-items-center bg-light" id="home" style={{ height: 'auto' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center mt-0 mt-md-5 pt-0 pt-md-5">
            <div className="home-heading">
              <Badge bg="soft-primary" className="rounded-pill mb-3">Android Version</Badge>
              <h2 className="home-title">Boost Your Business with Our Digital Marketing Tools</h2>
              <p className="text-muted para-desc">Analyze, Optimize, and Grow Your Online Presence.</p>
              <ul className="mt-4 list-unstyled mb-0 align-items-center">
                <li className="list-inline-item">
                  <Button className="btn bg-gradiant me-2">
                    <i className="uil uil-envelope me-1"></i>
                    Start a Free Trial
                  </Button>
                </li>
                <li className="list-inline-item text-muted me-2 h6">Or</li>
                <li className="list-inline-item">
                  <Link href="#">
                    <a className="text-primary fw-bold">
                      Get Started <i className="uil uil-angle-right-b align-middle"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={12}>
            <div className="home-circle">
              <div className="position-relative">
                <div className="home-img">
                  <img src={home4} className="img-fluid light-img mx-auto" alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section;
