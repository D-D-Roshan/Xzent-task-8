import { useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col,
    Navbar,
    Nav
} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/assets/images/logo.png'; // Update path to reflect Next.js' public directory

const Footer = () => {

    // light-dark mode button 
    useEffect(() => {
        const handleClick = () => {
            let theme = localStorage.getItem("theme");
            if (theme === "light" || theme === "") {
                document.body.setAttribute("data-layout-mode", "dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.body.removeAttribute("data-layout-mode");
                localStorage.setItem("theme", "light");
            }
        };

        const btn = document.getElementById("mode");
        btn.addEventListener("click", handleClick);

        return () => {
            btn.removeEventListener("click", handleClick);
        };
    }, []);

    // Color Switcher

    const setColor = (theme) => {
        const colorOpt = document.getElementById('color-opt');
        colorOpt.href = `/appspery/react/css/colors/${theme}.css`;
    };

    // Switcher

    const [leftPosition, setLeftPosition] = useState('-189px');

    const toggleSwitcher = () => {
        if (leftPosition === '-189px') {
            setLeftPosition('-0px');
        } else {
            setLeftPosition('-189px');
        }
    };

    return (
        <>
            <section className="footer overflow-hidden">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={10} className="text-center">
                            <Navbar.Brand className="logo text-uppercase" href="index-1.html">
                                <Image src={logo} className="logo" alt="Logo" height={80} />
                            </Navbar.Brand>

                            <div className="footer-icon mt-4 d-flex justify-content-center">
                                <div className="d-flex align-items-center">
                                    <Link href="#">
                                        <a className="me-2 avatar-sm text-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook">
                                            <i className="mdi mdi-facebook f-24 align-middle text-primary"></i>
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="mx-2 avatar-sm text-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter">
                                            <i className="mdi mdi-twitter f-24 align-middle text-primary"></i>
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="mx-2 avatar-sm text-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Google Play">
                                            <i className="mdi mdi-google-play f-24 align-middle text-primary"></i>
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="mx-2 avatar-sm text-center">
                                            <i className="mdi mdi-linkedin f-24 align-middle text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="LinkedIn"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <div className="col-lg-8">
                            <Nav className="list-inline d-sm-flex justify-content-between footer-link mb-0">
                                <Nav.Item className="list-inline-item">
                                    <Link href="#home"><a className="nav-link">Home</a></Link>
                                </Nav.Item>
                                <Nav.Item className="list-inline-item">
                                    <Link href="#about"><a className="nav-link">About Us</a></Link>
                                </Nav.Item>
                                <Nav.Item className="list-inline-item">
                                    <Link href="#features"><a className="nav-link">Features</a></Link>
                                </Nav.Item>
                                <Nav.Item className="list-inline-item">
                                    <Link href="#pricing"><a className="nav-link">Pricing</a></Link>
                                </Nav.Item>
                                <Nav.Item className="list-inline-item">
                                    <Link href="#app"><a className="nav-link">Application</a></Link>
                                </Nav.Item>
                                <Nav.Item className="list-inline-item">
                                    <Link href="#team"><a className="nav-link">Testimonial</a></Link>
                                </Nav.Item>
                                <Nav.Item className="list-inline-item">
                                    <Link href="#contact"><a className="nav-link">Contact</a></Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Row>
                </Container>
            </section>

            <hr />

            <section className="bottom-footer py-4">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <p className="mb-0 text-center text-muted">
                                © {new Date().getFullYear()} Appspery. Design with <i className="mdi mdi-heart text-danger"></i> by
                                <Link href="https://themesdesign.in/"><a target="_blank" className="text-muted"> Roshan.</a></Link>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* light-dark mode button */}
            <button id="mode" className="mode-btn text-white rounded-end">
                <i className="uil uil-brightness mode-dark mx-auto"></i>
                <i className="uil uil-moon bx-spin mode-light"></i>
            </button>

            {/* color changer */}
            <div className="style-switcher" id="style-switcher" style={{ left: leftPosition }}>
                <div>
                    <h6>Select your color</h6>
                    <ul className="pattern list-unstyled mb-0">
                        <li>
                            <Link href="#">
                                <a className="color1" onClick={() => { setColor('default'); }}></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="color2" onClick={() => { setColor('blue'); }}></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="color3" onClick={() => { setColor('warning'); }}></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="color4" onClick={() => { setColor('orange'); }}></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="color5" onClick={() => { setColor('purple'); }}></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="color6" onClick={() => { setColor('info'); }}></a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="bottom">
                    <Link href="#">
                        <a className="settings rounded-end" onClick={toggleSwitcher}>
                            <i className="uil uil-setting text-white" style={{ display: "inline", lineHeight: "46px" }}></i>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Footer;
