// src/components/Application.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

// import images
import phoneFream from '../../public/assets/images/testi/phone-fream.png';
import img1 from '../../public/assets/images/New folder/img1.png';
import img2 from '../../public/assets/images/New folder/img2.png';
import img3 from '../../public/assets/images/New folder/img3.png';
import img4 from '../../public/assets/images/New folder/img4.png';
import img5 from '../../public/assets/images/New folder/img5.png';
import img6 from '../../public/assets/images/New folder/img6.png';

const Application = () => {
  return (
    <React.Fragment>
      <section className="section app-slider bg-light" id="app">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="sec-hd">
                <span className="heading"></span>
                <h2 className="sec-title">Our App Screenshots</h2>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <div className="swiper swiper-container swiper-container1">
                <div className="fream-phone">
                  <Image src={phoneFream} alt="" fluid />
                </div>
                <div className="swiper-wrapper">
                  <Swiper
                    loop={true}
                    slidesPerView={5}
                    spaceBetween={50}
                    centeredSlides={true}
                    speed={5000}
                    autoplay={{
                      delay: 500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                  >
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <a href={img1.src} className="mfp-image img-fluid" title="" />
                        </div>
                        <div className="screenshot-img mb-4">
                          <a href={img1.src} className="lightbox img-fluid">
                            <Image src={img1} alt="" className="img-fluid" />
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <a href={img2.src} className="mfp-image img-fluid" title="" />
                        </div>
                        <div className="screenshot-img mb-4">
                          <a href={img2.src} className="lightbox img-fluid">
                            <Image src={img2} alt="" className="img-fluid" />
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <a href={img3.src} className="mfp-image img-fluid" title="" />
                        </div>
                        <div className="screenshot-img mb-4">
                          <a href={img3.src} className="lightbox img-fluid">
                            <Image src={img3} alt="" className="img-fluid" />
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <a href={img4.src} className="mfp-image img-fluid" title="" />
                        </div>
                        <div className="screenshot-img mb-4">
                          <a href={img4.src} className="lightbox img-fluid">
                            <Image src={img4} alt="" className="img-fluid" />
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <a href={img5.src} className="mfp-image img-fluid" title="" />
                        </div>
                        <div className="screenshot-img mb-4">
                          <a href={img5.src} className="lightbox img-fluid">
                            <Image src={img5} alt="" className="img-fluid" />
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <a href={img6.src} className="mfp-image img-fluid" title="" />
                        </div>
                        <div className="screenshot-img mb-4">
                          <a href={img6.src} className="lightbox img-fluid">
                            <Image src={img6} alt="" className="img-fluid" />
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Application;
