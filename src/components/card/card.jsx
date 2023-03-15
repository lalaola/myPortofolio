import React from 'react';

const Card = (props) => {
    return (
        <div className='mt-4 content-porto mb-5 d-flex justify-content-between'>
            <div className='col-7'>
                <h3>{props.nama}</h3>
                <p>Use : {props.use}</p>
                <p>Desc : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, a nihil suscipit eum accusamus rem blanditiis et, perspiciatis mollitia ad reprehenderit? Aut animi nostrum voluptas doloremque dolorem quasi deleniti architecto?</p>
                <div className="d-flex align-items-center justify-content-between">
                    <p>duration :  {props.durasi}</p>
                    <a className='btn btn-warning mb-3 col-3'>Go to</a>
                </div>

            </div>
            <div className='col-4 m-2'>
                <img className='img-fluid' src={props.foto} alt="" />
            </div>
        </div>
    );
}

export default Card;
