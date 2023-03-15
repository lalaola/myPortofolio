import React from 'react';
import html from '../../asset/image/skill/html.png'
import css from '../../asset/image/skill/css.png'
import js from '../../asset/image/skill/js.png'
import react from '../../asset/image/skill/react.png'

const Skill = () => {
    return (
        <div className='skill mt-5 '>
            <h1 className='text-center'>Advance</h1>
            <div className="d-flex flex-wrap justify-content-between col-10 mx-auto">
                <div className="col-6 col-md-3 ">
                    <img src={html} alt="html" className='img-fluid' />
                </div>
                <div className="col-6 col-md-3 ">
                    <img src={css} alt="css" className='img-fluid' />
                </div>
                <div className="col-6 col-md-3 ">
                    <img src={js} alt="js" className='img-fluid' />
                </div>
                <div className="col-6 col-md-3 ">
                    <img src={react} alt="react" className='img-fluid' />
                </div>
            </div>
        </div>
    );
}

export default Skill;
