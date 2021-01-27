
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AppointmentForm from './AppointmentForm';

const BookingCard = (props) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5 ">
        <div className="card p-3">
            <div className="card-body text-center">
                <h5 className="card-title text-brand text-danger">{props.booking.subject}</h5>
                <h6>{props.booking.visitingHour}</h6>
                <p>{props.booking.totalSpace} SPACES AVAILABLE</p>
                <Button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</Button>
                <AppointmentForm booking={props.booking} modalIsOpen={modalIsOpen} date={props.date} closeModal={closeModal}></AppointmentForm>
                
                
            </div>
        </div>
    </div>
    );
};

export default BookingCard;