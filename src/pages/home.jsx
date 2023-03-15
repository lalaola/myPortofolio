import React from 'react';
import frame from '../asset/image/frame/frame.png';
import Index from '../components/button';
import laptop from '../asset/image/foto/laptop.png'
import Navbar from '../components/navbar/navbar';
import HomeCara from '../components/caraosel/home';
import About from '../components/about/about';
import Skill from '../components/skill/skill';
import Porto from '../components/portofolio';
import Contact from './contact';
import Footer from '../components/footer/footer';
const Home = () => {
    return (
        <div className='home'>
            <div className="frame ">
                <Navbar />
            <div className="home__content  d-flex align-items-center col-11 m-auto">
                    <div className="text col-10 col-md-6 ">
                        <h1 className='ps-5'>Frontend <span className='text-white'>Developer</span></h1>
                        <HomeCara/>
                        <div className="btn-content d-flex  justify-content-center">
                            <Index class="btn btn-light" text="Hire Me!" />
                            <Index class="btn ms-4 btn-border" text="Download CV" />
                        </div>
                    </div>
                    <div className="img-laptop col-10 col-md-6 ">
                        <img src={laptop} alt="laptop" className="img-fluid ms-5" />
                    </div>
                </div>
            </div>
            <About/>
            <Skill/>
            <Porto/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Home;
