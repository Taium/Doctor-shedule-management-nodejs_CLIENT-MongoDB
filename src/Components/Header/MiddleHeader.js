import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sideimage from './sideimage.png';

const MiddleHeader = () => {
    return (
        <div className="container middleheader">
            <div className="row">
                <div className="col-md-5 col-xl-5 col-sm-12 col-12">
                    <h1>Your New Smile Starts Here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quia adipisci quam nam, at assumenda!</p>
                   <Link to = "/appointment"> <Button>GET APPOINTMENT</Button></Link>

                </div>
                <div className="col-md-7 col-xl-7 col-sm-12 col-12">
                    <img src={sideimage} className="sideimage"></img>
                </div>
            </div>
        </div>
    );
};

export default MiddleHeader;