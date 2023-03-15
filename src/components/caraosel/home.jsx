import React from 'react';

const HomeCara = () => {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="4000">
                    <h3> Hello my name is Islah but if you want make a friend with me you can call me Olla
                    </h3>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <h3> Let's Get To Know Each Otherm and i hope we can be great tim. See You!!! </h3>                
                    </div>
                {/* <div className="carousel-item">
                </div> */}
            </div>
            
        </div>
    );
}

export default HomeCara;
