import React from 'react';

const Index = (props) => {
    return (
        <div>
            <button className={props.class}>{props.text}</button>
        </div>
    );
}

export default Index;
