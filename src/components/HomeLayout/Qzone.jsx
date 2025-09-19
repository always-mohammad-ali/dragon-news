import React from 'react';
import swimmming from './../../assets/swimming.png';
import playground from './../../assets/playground.png';
import classImg from './../../assets/class.png';


const Qzone = () => {
    return (
        <div>
            <div>
                <img src={swimmming} alt="" />

            </div>
            <div>
                <img src={playground} className='my-4' alt="" />
            </div>
            <div>
                <img src={classImg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;