import React from 'react';
import profil from '../../asset/image/foto/profil.png'

const About = () => {
    return (
        <div className='about d-flex justify-content-center col-8 mt-5'>
            <div className="foto col-3">
                <img src={profil} alt="profil olla" className="img-fluid" />
            </div>
            <div className="text col-10 col-md-6 ms-5 ps-5 ">
                <h2>About Me </h2>
                <h3>Let me introduce myself</h3>
                <p>I'Am - Islah, I am a current semester 4 student of State Islamic University Syarif Hidayahtullag Jakarta majoring in Computer Science. I am very interested in Web Developer especially in the field of Frontend Developer.</p>
            </div>
        </div>
    );
}

export default About;
