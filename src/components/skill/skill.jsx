import React from 'react';
import html from '../../asset/image/skill/html.png'
import css from '../../asset/image/skill/css.png'
import js from '../../asset/image/skill/js.png'
import react from '../../asset/image/skill/react.png'

const Skill = () => {
    return (
        <div className='skill mt-5 py-3 '>
            <h1 className='text-center mx-auto'>Advance</h1>
            <div className="d-flex flex-wrap  col-10 mx-auto">
                <div className="col-6 col-md-3  d-flex flex-column align-items-center">
                    <div className="col-10">
                        <img src={html} alt="html" className='img-fluid' />

                    </div>
                    <p>HTML</p>
                </div>
                <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                    <div className="col-9">
                        <img src={css} alt="css" className='img-fluid' />
                    </div>
                    <p>CSS</p>
                </div>
                <div className="col-6 col-md-3  d-flex flex-column align-items-center">
                    <div className="col-10">

                    <img src={js} alt="js" className='img-fluid' />
                    </div>
                    <p>Javascript</p>
                </div>
                <div className="col-6 col-md-3  d-flex flex-column align-items-center">
                    <div className="col-11">
                    <img src={react} alt="react" className='img-fluid' />

                    </div>
                    <p>React.js</p>
                </div>
            </div>
        </div>
    );
}

export default Skill;
