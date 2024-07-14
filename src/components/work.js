
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';


import home5 from '../assets/images/home/home-5.png';
import img1 from '../assets/images/user/img-1.jpg';
import img2 from '../assets/images/user/img-2.jpg';
import img3 from '../assets/images/user/img-3.jpg';
import img4 from '../assets/images/user/img-4.jpg';
import img5 from '../assets/images/user/img-5.jpg';

const Work = () => {
  useEffect(() => {
    AOS.init({ duration: 1800 });
  }, []);

  return (
    <React.Fragment>
      <section className="section work bg-light">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="sec-hd">
                <span className="heading"></span>
                <h2 className="sec-title">How It Works</h2>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="work-pra">
                <p className="text-muted">
                  Welcome to Nexa Analytics! Our digital marketing platform is designed to be intuitive and powerful, helping you enhance your online presence and drive business growth. Here's a step-by-step guide on how to get started and make the most out of our features.
                </p>
                <h4 className="my-4">BENEFITS OF APP</h4>
                <ul className="inline-item">
                  <li className="list-inline-item">
                    <i className="uil uil-signin"></i>
                    <p className="text-muted">
                      Create your account and complete the onboarding process to customize your experience.
                    </p>
                  </li>
                  <li className="list-inline-item">
                    <i className="uil uil-envelope-minus"></i>
                    <p className="text-muted">
                      Integrate your website, social media accounts, and other marketing channels.
                    </p>
                  </li>
                  <li className="list-inline-item">
                    <i className="uil uil-star"></i>
                    <p className="text-muted">
                      Use our tools to analyze content, optimize SEO, and manage social media.
                    </p>
                  </li>
                  <li className="list-inline-item">
                    <i className="uil uil-heart-alt"></i>
                    <p className="text-muted">
                      Monitor your campaigns in real-time and generate reports to measure success.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-right">
              <div className="testimonial-content">
                <div className="testimonial-right">
                  <div className="testimonial-circle">
                    <div className="media">
                      <Image src={home5} className="img-fluid" alt="home" />
                    </div>
                    <span className="ring1 animate-v2">
                      <Image src={img1} className="img-fluid" alt="user1" />
                    </span>
                    <span className="ring2 animate-v3">
                      <Image src={img2} className="img-fluid" alt="user2" />
                    </span>
                    <span className="ring3 animate-v2">
                      <Image src={img3} className="img-fluid" alt="user3" />
                    </span>
                    <span className="ring4 animate-v3">
                      <Image src={img4} className="img-fluid" alt="user4" />
                    </span>
                    <span className="ring5 animate-v2">
                      <Image src={img5} className="img-fluid" alt="user5" />
                    </span>
                    <span className="ring6 animate-v3"></span>
                    <span className="ring7 animate-v2"></span>
                    <span className="ring8 animate-v3"></span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Work;
