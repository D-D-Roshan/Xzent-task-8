import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import Image from 'next/image';

// import images
import mTop from '../assets/images/about/macbook-top.svg';
import mCover from '../assets/images/about/macbook-cover.svg';
import about from '../assets/images/about/about.mp4';
import mBottom from '../assets/images/about/macbook-bottom.svg';

const AboutUs = () => {
  return (
    <React.Fragment>
      <section className="section about bg-light" id="about">
        <Container>
          <Row className="text-center">
            <Col lg={12}>
              <div className="mockup mockup-macbook loaded opened">
                <div className="part top">
                  <Image src={mTop} alt="Top part of MacBook" className="img-fluid top" />
                  <Image src={mCover} alt="Cover of MacBook" className="img-fluid cover" />
                  <video autoPlay muted controls loop>
                    <source src={about} type="video/mp4" />
                  </video>
                </div>
                <div className="part bottom">
                  <Image src={mCover} alt="Cover of MacBook" className="img-fluid cover" />
                  <Image src={mBottom} alt="Bottom part of MacBook" className="img-fluid bottom" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default AboutUs;
