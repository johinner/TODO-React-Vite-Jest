import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Fecha = ({className}) => {
    const [startDate, setStartDate] = useState(new Date());
    return ( 
        <>
        <DatePicker className={className} selected={startDate} onChange={(date) => setStartDate(date)} />
        </>
        
    );

}




