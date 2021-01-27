import React, { useEffect, useState } from 'react';
import Appointmentlist from './Appointmentlist';

const Maindata = (props) => {
    const [all , setAll]= useState([])
   
    useEffect(()=>{
        const formdata = new FormData();
        formdata.append("date",props.date.toDateString())
        fetch(`http://localhost:8000/singlecountry`,{
            method:'POST',
            body: formdata
        })
        .then(response => response.json())
        .then(data=>{
            setAll(data)
        })
    },[props.date.toDateString()])
   
    console.log(all);
    return (
        <div>
            
               <Appointmentlist appointment={all}></Appointmentlist>)
                
        </div>
    );
};

export default Maindata;