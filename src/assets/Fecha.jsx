import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Fecha = ({className, obtenerDate }) => {
    const [startDate, setStartDate] = useState('');

    const enviarDate = (date) => {
        obtenerDate(date);
    }
  
    return ( 
        <>
        <DatePicker className={className} selected={startDate} onChange={(date) => {
            setStartDate(date)
            enviarDate(date)
            }} />
        </>
        
    );

}




