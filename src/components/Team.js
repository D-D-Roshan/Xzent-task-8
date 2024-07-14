
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image';
import Link from 'next/link';


import team1 from '../assets/images/team/team-1.jpg';
import team2 from '../assets/images/team/team-2.jpg';
import team3 from '../assets/images/team/team-3.jpg';
import team4 from '../assets/images/team/team-4.jpg';
import appStore from '../assets/images/img-appstore.png';
import googleplay from '../assets/images/img-googleplay.png';

const Team = () => {
  return (
    <React.Fragment>
      <section className="section team" id="team">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="sec-hd">
                <span className="heading"></span>
                <h2 className="sec-title">Testimonial</h2>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={3} md={6}>
              <div className="team-box">
                <Row className="justify-content-end"></Row>
              </div>
            </Col>

            <Col lg={12}>
              <div className="tab-container effectTab-header" id="style_10">
                <div className="wrapper">
                  <Row>
                    <div className="col-12 tab">
                      <Row>
                        <Col lg={3} sm={6} className="box-tab">
                          <div className="effect effect-ten">
                            <Image src={team1} className="img-fluid" alt="team1" />
                            <div className="tab-text">
                              <h2>Perry Farr</h2>
                              <p>
                                Nexa Analytics has completely transformed our
                                digital marketing strategy. The intuitive tools
                                and insightful analytics have helped us optimize
                                our campaigns and drive significant growth. We
                                saw a 30% increase in our online engagement
                                within the first month!
                              </p>
                              <div className="icons-block">
                                <Link href="#" className="social-icon-1">
                                  <i className="mdi mdi-facebook"></i>
                                </Link>
                                <Link href="#" className="social-icon-2">
                                  <i className="mdi mdi-linkedin"></i>
                                </Link>
                                <Link href="#" className="social-icon-3">
                                  <i className="mdi mdi-twitter"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6} className="box-tab hide">
                          <div className="effect effect-ten">
                            <Image src={team2} className="img-fluid" alt="team2" />
                            <div className="tab-text">
                              <h2>Andrew Beeson</h2>
                              <p>Using Nexa Analytics has been a game-changer for our business. The SEO optimization tools are top-notch, and the real-time performance tracking allows us to make quick, data-driven decisions. 
                              I highly recommend this platform to any business looking to enhance their digital marketing efforts.</p>
                              <div className="icons-block">
                                <Link href="#" className="social-icon-1">
                                  <i className="mdi mdi-facebook"></i>
                                </Link>
                                <Link href="#" className="social-icon-2">
                                  <i className="mdi mdi-linkedin"></i>
                                </Link>
                                <Link href="#" className="social-icon-3">
                                  <i className="mdi mdi-twitter"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6} className="box-tab hide">
                          <div className="effect effect-ten">
                            <Image src={team3} className="img-fluid" alt="team3" />
                            <div className="tab-text">
                              <h2>Daniel Cindric</h2>
                              <p>The comprehensive reporting features of Nexa Analytics are incredible. We can easily generate detailed reports that give us clear insights into our marketing performance.
                              This has significantly improved our ability to strategize and execute effective marketing campaigns.</p>
                              <div className="icons-block">
                                <Link href="#" className="social-icon-1">
                                  <i className="mdi mdi-facebook"></i>
                                </Link>
                                <Link href="#" className="social-icon-2">
                                  <i className="mdi mdi-linkedin"></i>
                                </Link>
                                <Link href="#" className="social-icon-3">
                                  <i className="mdi mdi-twitter"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6} className="box-tab hide">
                          <div className="effect effect-ten">
                            <Image src={team4} className="img-fluid" alt="team4" />
                            <div className="tab-text">
                              <h2>Sandra Kraj</h2>
                              <p>Nexa Analytics social media integration feature is fantastic! It has simplified our social media management and helped us increase our follower engagement by 40%.
                              The platform is user-friendly and offers great customer support.</p>
                              <div className="icons-block">
                                <Link href="#" className="social-icon-1">
                                  <i className="mdi mdi-facebook"></i>
                                </Link>
                                <Link href="#" className="social-icon-2">
                                  <i className="mdi mdi-linkedin"></i>
                                </Link>
                                <Link href="#" className="social-icon-3">
                                  <i className="mdi mdi-twitter"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section cta bg-light" id="cta">
        <Container className="position-relative">
          <Row>
            <Col xl={6} lg={10}>
              <div className="py-5">
                <h1 className="display-4">Build Your ideal workspace today.</h1>
                <p className="text-muted mt-3 f-18">
                  Transform your digital marketing strategy with Nexa Analytics. 
                  Our comprehensive tools allow you to analyze, optimize, and streamline your marketing efforts, all from a user-friendly dashboard. 
                  Personalize your workspace to focus on key metrics and insights that drive growth. Start building your perfect marketing environment and achieve unparalleled success today!
                </p>
                <div className="d-flex mt-4">
                  <div className="app-store">
                    <Link href="#">
                      <Image src={appStore} alt="appStore" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="googleplay ms-3">
                    <Link href="#">
                      <Image src={googleplay} alt="googleplay" className="img-fluid" />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="cta-phone-image">
                {/* <img src="images/home/home-4.png" alt="" class=" img-fluid"> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Team;
