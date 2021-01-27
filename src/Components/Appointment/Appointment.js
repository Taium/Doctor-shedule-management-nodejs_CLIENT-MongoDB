import React from 'react';
import  { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Foter from '../Footer/Foter';
import TopHeader from '../Header/TopHeader';
import sideimage from '../Header/sideimage.png'
import BookApointment from './BookApointment';

const Appointment = () => {
    const [value, setValue] = useState(new Date().toDateString());
    const handleDate = date => {
        setValue(date.toDateString())
    }
    console.log(value);
    return (
        <div>
            <TopHeader></TopHeader>
            <div className="container middleheader">
            <div className="row">
                <div className="col-md-5 col-xl-5 col-sm-12 col-12">
                    <h1>appointment</h1>
                    <Calendar
                        onChange={handleDate}
                        value={(new Date())}
                    />
                   

                </div>
                <div className="col-md-7 col-xl-7 col-sm-12 col-12">
                    <img src={sideimage} className="sideimage"></img>
                </div>
            </div>
        </div>
         <div className="text-center mt-5">
             <h3>Available appointment on {value}</h3>
             <BookApointment date={value}></BookApointment>
         </div>
            <Foter></Foter>
        </div>
    );
};

export default Appointment;