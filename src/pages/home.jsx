import React from 'react';
import laptop from '../asset/image/foto/laptop.png'
import Navbar from '../components/navbar/navbar';
import HomeCara from '../components/caraosel/home';
import About from '../components/about/about';
import Skill from '../components/skill/skill';
import Porto from '../components/portofolio';
import Contact from './contact';
import Footer from '../components/footer/footer';
import cv from '../asset/file/islah-cv.pdf'
import { Link } from 'react-scroll';
const Home = () => {
    return (
        <div className='home'>
            <div className="frame ">
                <Navbar />
                <div className="home__content  d-flex align-items-center col-11 m-auto">
                    <div className="text col-11 col-md-6 ">
                        <h1 className='text-center'>Frontend <span className='text-white'>Developer</span></h1>
                        <HomeCara />
                        <div className="btn-content d-flex  justify-content-center">
                            <Link className="btn btn-light" activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} >
                            Hire Me!
                            </Link>
                            <a download="" href={cv} className="btn ms-4 btn-border">Download CV</a>
                        </div>
                    </div>
                    <div className="img-laptop col-10 col-md-6 ">
                        <img src={laptop} alt="laptop" className="img-fluid ms-5" />
                    </div>
                </div>
            </div>
            <About />
            <Skill />
            <Porto />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
