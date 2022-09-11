import React from "react";


function DELETEButton( {apiURL} ) {
    const DELETEInfo = () => {
        const requestInit = {
            method: 'DELETE',
            mode: 'cors',
        }

        fetch(apiURL, requestInit)
        .then(res => res.text())
        .then(res =>  {console.log(res); window.location.reload(false);})
    }


  return (
    <button className="btn-remove" onClick={() => DELETEInfo() }>Eliminar</button>
  );
}

export default DELETEButton;