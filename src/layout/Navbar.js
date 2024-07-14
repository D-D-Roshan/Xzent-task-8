import { useEffect, useState, useRef } from 'react';
import {
    Navbar,
    Nav,
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';


import logo from '../public/assets/images/logo.png';

const Navbar1 = () => {

    const [activeItem, setActiveItem] = useState('Home');
    const [navClass, setnavClass] = useState("");

  
    useEffect(() => {
        const scrollNavigation = () => {
            var scrollup = document.documentElement.scrollTop;
            if (scrollup > 50) {
                setnavClass("nav-sticky");
            } else {
                setnavClass("");
            }
        };
        window.addEventListener("scroll", scrollNavigation, true);
        return () => {
            window.removeEventListener("scroll", scrollNavigation, true);
        };
    }, []);

   
    const navMenuRef = useRef(null);

    const toggleNavMenu = () => {
        navMenuRef.current.classList.toggle('collapse');
    };

    return (
        <>
            <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="61" data-bs-smooth-scroll="true" className="scrollspy-example-2">
                <section className="tagline d-none d-md-block">
                    <Container fluid>
                        <Row className="align-items-center">
                            <Col md={6}>
                                <div className="d-flex">
                                    <div className="phone">
                                        <i className="mdi mdi-phone"></i>  +91 987654321
                                    </div>
                                    <div className="email ms-3">
                                        <Link href="mailto:support@nexaanalytics.com">
                                            <a className="text-dark">
                                                <i className="mdi mdi-email-open-outline"></i> Support@nexaanalytics.com
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <ul className="top_socials d-flex list-unstyled justify-content-end mb-0">
                                    <li className="entry">
                                        <Link href="#">
                                            <a><i className="bx bxl-facebook-circle"></i></a>
                                        </Link>
                                    </li>
                                    <li className="entry">
                                        <Link href="#">
                                            <a><i className="bx bxl-linkedin"></i></a>
                                        </Link>
                                    </li>
                                    <li className="entry">
                                        <Link href="#">
                                            <a><i className="bx bxl-instagram"></i></a>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <div className="clear"></div>
                    </Container>
                </section>

                <nav className={`navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-light ${navClass}`} id="navbar">
                    <Container fluid>
                        <Navbar.Brand href="index-1.html" className="logo text-uppercase">
                            <Image src={logo} className="logo" alt="Logo" height={50} />
                        </Navbar.Brand>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavMenu}>
                            <span className="mdi mdi-menu"></span>
                        </button>

                        <div ref={navMenuRef} className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ms-auto" id="navbar-navlist">
                                <li className={activeItem === 'Home' ? 'active' : 'nav-item'} onClick={() => setActiveItem('Home')}>
                                    <Link href="#home"><a className="nav-link">Home</a></Link>
                                </li>
                                <li className={activeItem === 'About Us' ? 'active' : 'nav-item'} onClick={() => setActiveItem('About Us')}>
                                    <Link href="#about"><a className="nav-link">About Us</a></Link>
                                </li>
                                <li className={activeItem === 'Features' ? 'active' : 'nav-item'} onClick={() => setActiveItem('Features')}>
                                    <Link href="#features"><a className="nav-link">Features</a></Link>
                                </li>
                                <li className={activeItem === 'Pricing' ? 'active' : 'nav-item'} onClick={() => setActiveItem('Pricing')}>
                                    <Link href="#pricing"><a className="nav-link">Pricing</a></Link>
                                </li>
                                <li className={activeItem === 'Application' ? 'active' : 'nav-item'} onClick={() => setActiveItem('Application')}>
                                    <Link href="#app"><a className="nav-link">Application</a></Link>
                                </li>
                                <li className={activeItem === 'Team' ? 'active' : 'nav-item'} onClick={() => setActiveItem('Testimonial')}>
                                    <Link href="#team"><a className="nav-link">Testimonial</a></Link>
                                </li>
                                <li className={activeItem === 'Contact' ? 'active' : 'nav-item'} onClick={() => setActiveItem('Contact')}>
                                    <Link href="#contact"><a className="nav-link">Contact</a></Link>
                                </li>
                            </ul>
                            <div className="ms-auto">
                                <Link href="#">
                                    <a className="btn bg-gradiant">Login</a>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </nav>
            </div>
        </>
    );
}

export default Navbar1;
