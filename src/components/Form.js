import React, { useState } from "react";
import POSTButton from "./POSTButton";
import PUTButton from "./PUTButton";


function Form( Params ) {
    const [data, setData]= useState('')

    const handleChange = e => {
        setData(e.target.value)
    }
    

  return (
    <div className="centered-box">
        <input type='text' value={data} onChange={handleChange}></input><POSTButton apiURL={Params.apiURL} Data={data} />
        <PUTButton apiURL={Params.apiURL} Data={data} />
    </div>
  );
}

export default Form;