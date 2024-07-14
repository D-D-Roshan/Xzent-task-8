// src/components/Contact.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <React.Fragment>
      <section className="contact overflow-hidden" id="contact">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="sec-hd">
                <span className="heading"></span>
                <h2 className="sec-title">Contact Us!</h2>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col lg={8}>
              <div className="contact-box">
                <div className="custom-form mt-4">
                  <form method="post" name="myForm" action="https://api.web3forms.com/submit">
                    <input type="hidden" name="access_key" value="49ccfb43-3cae-41aa-9705-8fbe14fb5c80"/>
                    <p id="error-msg" style={{ opacity: 1 }}></p>
                    <div id="simple-msg"></div>
                    <Row>
                      <Col lg={12}>
                        <div className="form-group">
                          <input name="name" id="name" type="text"
                            className="form-control contact-form" placeholder="Your name"/>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="form-group">
                          <input name="email" id="email" type="email"
                            className="form-control contact-form" placeholder="Your email"/>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="form-group">
                          <input type="text" className="form-control contact-form" id="subject"
                            placeholder="Your Subject.."/>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="form-group">
                          <textarea name="comments" id="comments" rows="6"
                            className="form-control contact-form h-auto"
                            placeholder="Your message..."></textarea>
                        </div>
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <div className="col-lg-6">
                        <div className="text-center">
                          <input type="submit" id="submit" name="send"
                            className="submitBnt btn btn-rounded bg-gradiant" value="Send Message"/>
                        </div>
                      </div>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="my-5 py-4 justify-content-center text-center">
            <Col md={4}>
              <div>
                <i className="mdi mdi-google-maps f-50 text-primary"></i>
                <h5 className="mb-1">Location</h5>
                <p className="f-14 mb-0 text-muted">Chennai, India</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="mt-4 mt-lg-0">
                <i className="mdi mdi-email f-50 text-primary"></i>
                <h5 className="mb-1">Email</h5>
                <p className="f-14 mb-0 text-muted">Email: Support@nexaanalysis.com</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="mt-4 mt-lg-0">
                <i className="mdi mdi-phone f-50 text-primary"></i>
                <h5 className="mb-1">Phone</h5>
                <p className="f-14 mb-0 text-muted">+91 987654321</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Contact;
