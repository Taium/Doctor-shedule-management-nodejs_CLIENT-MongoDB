import React from 'react';
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BottomHeader = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-md-4 col-xl-3 col-sm-12 col-12" style={{ backgroundColor: 'green',marginRight:'20px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3" style={{ fontSize:'50px'}}>
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <div className="col-md-9">
                                <p className="text-white">opening Hours</p>
                                <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</small>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-3  col-xl-3  col-sm-12 col-12" style={{ backgroundColor: 'black',marginRight:'20px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3" style={{ fontSize:'50px'}}>
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <div className="col-md-9">
                                <p className="text-white">opening Hours</p>
                                <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, consectetur!</small>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-3  col-xl-3  col-sm-12 col-12" style={{ backgroundColor: 'green' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3" style={{ fontSize:'50px'}}>
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <div className="col-md-9">
                                <p className="text-white">opening Hours</p>
                                <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, consectetur!</small>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default BottomHeader;