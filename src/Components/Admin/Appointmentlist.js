import React from 'react';

const Appointmentlist = ({appointment}) => {
    return (
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Time</th>
            <th className="text-secondary" scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {
              appointment.map((appointment, index) => 
                    
                <tr>
                    <td>{appointment.name}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.email}</td>
                </tr>
              
              )}
        </tbody>
    </table>
    );
};

export default Appointmentlist;