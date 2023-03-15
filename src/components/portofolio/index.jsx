import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { data } from '../../data/porto';
import Card from '../card/card';

const Index = () => {
    const [nav, setNav] = useState('react');
    const handleNav = (e) =>{
        console.log("da",e.target.id)
        setNav(e.target.id)
    }
    return (
        <div className='porto col-10 mx-auto  mt-5'>
            <div className='d-flex align-items-center justify-content-between mt-4 '>
                <li>
                    <h1>Portofolio</h1>
                </li>
                <li className=' col-4 d-flex  justify-content-between'>
                    <NavLink id='react' onClick={handleNav}>React.Js</NavLink>
                    <NavLink id='laravel' onClick={handleNav}>Laravel</NavLink>
                    <NavLink id='design' onClick={handleNav}>Web Design</NavLink>
                </li>

            </div>
            <div>
                {data.filter(data => data.katagori.includes(nav)).map((data, index) => {
                    return (
                        <Card key={index} foto={data.foto} nama={data.nama} use={data.use} durasi={data.duration} desc={data.desc}/>
                    );
                })
                }

            </div>
        </div>
    );
}

export default Index;
