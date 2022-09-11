import React, { Fragment, useState } from "react";


function PUTButton( {apiURL, Data} ) {
    const [id, setId] = useState(0);

    

    const handleChange = e => {
        setId(e.target.value)
    }

    const PUTInfo = () => {
        const requestInit = {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"data":Data})
        }

        const apiPUTURL = apiURL+'/'+id;

        fetch(apiPUTURL, requestInit)
        .then(res => res.text())
        .then(res =>  {console.log(res); window.location.reload(false);})
    }


  return (
    <div className="btn-edit-box">
        <input className="btn-edit-text" type="number" value={id} onChange={handleChange}/>
        <button className="btn-edit" onClick={() => PUTInfo() }>Editar</button>
    </div>

  );
}

export default PUTButton;