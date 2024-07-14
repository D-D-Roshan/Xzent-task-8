// components/Section.js

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'; // Adjusted import for Next.js Image component
import Link from 'next/link'; // Adjusted import for Next.js routing
import AOS from 'aos';
import 'aos/dist/aos.css';

// Adjusted import for images in Next.js
import home1 from "../../assets/images/home/home1-1.png";

AOS.init({
  duration: 1800,
});

const Section = () => {
  return (
    <div className="section home-3" id="home">
      <svg style={{ display: "none" }}>
        {/* Your SVG symbols */}
      </svg>
      <div className="stage">
        {/* Your SVG elements */}
      </div>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col md={7}>
            <div className="home-heading">
              <h3 className="text-uppercase">Appspery</h3>
              <h4 className="home-title">The Perfect Choice for your Mobile App Presentation</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut labore et dolore.</p>
              <ul className="list-unstyled mb-0 mt-3 social-icon">
                <li className="list-inline-item">
                  <div className="aos-init aos-animate" data-aos="fade-up" >
                    <div className="icon-text">
                      <div className="icon android">
                        <span> <i className="uil uil-android"> </i></span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="aos-init aos-animate" data-aos="fade-up">
                    <div className="icon-text">
                      <div className="icon apple">
                        <span> <i className="uil uil-apple"> </i></span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="aos-init aos-animate" data-aos="fade-up" >
                    <div className="icon-text">
                      <div className="icon instagram">
                        <span> <i className="uil uil-windows"> </i></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={5}>
            <div className="col-md-5">
              <Image src={home1} alt="" className="img-fluid" width={600} height={400} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section;
