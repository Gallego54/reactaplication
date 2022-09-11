import React from "react";


function POSTButton( {apiURL, Data} ) {
    const POSTInfo = () => {
        const requestInit = {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"data":Data})
        }

        fetch(apiURL, requestInit)
        .then(res => res.text())
        .then(res =>  {console.log(res); window.location.reload(false);})
    }


  return (
    <button onClick={() => POSTInfo() }>Enviar</button>
  );
}

export default POSTButton;