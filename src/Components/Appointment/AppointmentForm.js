import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const formdata= new FormData();
        formdata.append("name",data.name)
        formdata.append("phone",data.phone)
        formdata.append("email",data.email)
        formdata.append("gender",data.gender)
        formdata.append("age",data.age)
        formdata.append("weight",data.weight)
        formdata.append("time",props.booking.visitingHour)
        formdata.append("date",props.date)

        fetch('http://localhost:8000/addappointment',{
            method: 'POST',
            body: formdata
        })
        .then(response =>response.json())
        .then(data=>{
            
                window.location.reload();
            
        })

    };
    console.log(props.date);

    return (
        <div>

            <Modal
                isOpen={props.modalIsOpen}

                onRequestClose={props.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >


                <div>{props.booking.subject}</div>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" name="gender" ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;