import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Maindata from './Maindata';

const Dashboard = () => {
    const [value, setValue] = useState(new Date());
    const handleDate = date => {
        setValue(date)
    }
    console.log(value);
    return (
        <div className="row">
            <div className="col-md-3 ">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-4 justify middle">
                <h3 className="text-center mb-5">Click on date to know the appointments</h3>
                <Calendar
                    onChange={handleDate}
                    value={(new Date())}
                />
            </div>
            <div className="col-md-5">
                <Maindata date={value}></Maindata>
            </div>
        </div>
    );
};

export default Dashboard;