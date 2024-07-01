import React from 'react'
import {
  Container,
  Row,
  Col,
  Badge,
  Button
} from 'react-bootstrap';

// import Images
import home1 from "../../assets/images/home/home1-3.png"
import home2 from "../../assets/images/home/home2-3.png"
import img1 from "../../assets/images/user/img-1.jpg"
import img2 from "../../assets/images/user/img-2.jpg"
import img3 from "../../assets/images/user/img-3.jpg"
import img4 from "../../assets/images/user/img-4.jpg"
import img5 from "../../assets/images/user/img-5.jpg"
import { Link } from 'react-router-dom';


const section = () => {
  return (
    <React.Fragment>
      <section className="home-1 bg-home d-flex align-items-center bg-light" id="home" style={{ height: 'auto' }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center mt-0 mt-md-5 pt-0 pt-md-5">
              <div className="home-heading">
                <Badge bg="soft-primary" className="rounded-pill mb-3">Android Version</Badge>
                <h2 className="home-title">Manage everything in one place</h2>
                <p className="text-muted para-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua ut labore et dolore.</p>
                <ul className="mt-4 list-unstyled mb-0 align-items-center">
                  <li className="list-inline-item">
                    <Button className="btn bg-gradiant me-2">
                      <i className="uil uil-envelope me-1"></i>
                      Request a Demo
                    </Button>
                  </li>
                  <li className="list-inline-item text-muted me-2 h6">Or</li>
                  <li className="list-inline-item">
                    <Link to="#" className="text-primary fw-bold">
                      Try it for Free <i className="uil uil-angle-right-b align-middle"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={12}>
              <div className="home-circle">
                <div className="position-relative">
                  <div className="home-img">
                    <img src={home1} className="img-fluid light-img mx-auto" alt="" />
                    <img src={home2} className="img-fluid dark-img mx-auto" alt="" />
                  </div>
                </div>
                <span className="ring1 animate-v2">
                  <img src={img1} className="img-fluid" alt="" />
                </span>
                <span className="ring2 animate-v3">
                  <img src={img2} className="img-fluid" alt="" />
                </span>
                <span className="ring3 animate-v2">
                  <img src={img3} className="img-fluid" alt="" />
                </span>
                <span className="ring4 animate-v3">
                  <img src={img4} className="img-fluid" alt="" />
                </span>
                <span className="ring5 animate-v2">
                  <img src={img5} className="img-fluid" alt="" />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default section;