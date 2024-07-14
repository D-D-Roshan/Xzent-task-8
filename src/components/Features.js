import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import images
import features from "../assets/images/home/home1-1.png";


AOS.init({
  duration: 1800,
});



const Features = () => {
  return (
    <React.Fragment>
      <section className="section features" id="features">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="sec-hd">
                <span className="heading"></span>
                <h2 className="sec-title">Features for our app</h2>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col lg={4} md={10} data-aos="fade-right" >
              <div className="features-box text-end">
                <div className="features-icon float-end ms-2">
                  <i className="uil uil-users-alt"></i>
                </div>
                <div className="pe-3 me-5">
                  <h5 className="f-15 text-uppercase">AUDIENCE SEGMENTATION</h5>
                  <p className="text-muted mt-3">Segment your audience based on various criteria to deliver personalized marketing messages.</p>
                </div>
              </div>

              <div className="features-box mt-5 text-end">
                <div className="features-icon float-end ms-2">
                  <i className="uil uil-envelope-minus"></i>
                </div>
                <div className="pe-3 me-5">
                  <h5 className="f-15 text-uppercase">SEO OPTIMIZATION</h5>
                  <p className="text-muted mt-3">Improve your search engine rankings with our comprehensive SEO tools.</p>
                </div>
              </div>

              <div className="features-box mt-5 text-end">
                <div className="features-icon float-end ms-2">
                  <i className="uil uil-mobile-android-alt"></i>
                </div>
                <div className="pe-3 me-5">
                  <h5 className="f-15 text-uppercase">SOCIAL MEDIA INTEGRATION</h5>
                  <p className="text-muted mt-3">Manage all your social media channels from one place</p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="text-center">

                <img src={features} className="img-fluid" data-aos="zoom-in" alt="" />
              </div>
            </Col>
            <Col lg={4} md={10} data-aos="fade-left">
              <div className="features-box">
                <div className="features-icon float-start me-2">
                  <i className="uil uil-calender"></i>
                </div>
                <div className="ps-3 ms-5">
                  <h5 className="f-15 text-uppercase">PERFORMANCE TRACKING</h5>
                  <p className="text-muted mt-3">Track the performance of your marketing campaigns with real-time analytics.</p>
                </div>
              </div>
              <div className="features-box mt-5">
                <div className="features-icon float-start me-2">
                  <i className="uil uil-bolt"></i>
                </div>
                <div className="ps-3 ms-5">
                  <h5 className="f-15 text-uppercase">AUTOMATED REPORTING</h5>
                  <p className="text-muted mt-3">
                  Automated reporting feature saves you time and provides detailed insights into your marketing performance.
                  </p>
                </div>
              </div>
              <div className="features-box mt-5">
                <div className="features-icon float-start me-2">
                  <i className="uil uil-feedback"></i>
                </div>
                <div className="ps-3 ms-5">
                  <h5 className="f-15 text-uppercase">CONTENT ANALYSIS
                  </h5>
                  <p className="text-muted mt-3">
                  Leverage our AI-driven tools to analyze the effectiveness of your content.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Features;