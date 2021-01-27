import React from 'react';
import image1 from './first.png'
import ServiceDetail from './ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: image1
    },
    {
        name: 'Cavity Filling',
        img: image1
    },
    {
        name: 'Teeth Whitening',
        img: image1
    }
]

const ServiceMain = () => {
    return (
        <div className="mt-5 pt-5">
            <h4 className="our">OUR SERVICES</h4>
            <h1 className="text-center mt-4">Services We Provide</h1>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </div>
    );
};

export default ServiceMain;