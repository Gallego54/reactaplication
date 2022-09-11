import React, { useEffect,  useState } from "react";
import DELETEButton from "./DELETEButton";



function List( {apiURL, flag} ) {
    const [list, setList] = useState ([])
    const [keys, setKeys] = useState ([])

    

    useEffect(()=>{
      
        fetch(apiURL, { method: 'GET' })
        .then(res => res.json())
        .then(res => setList(res))
    },  [apiURL])



    useEffect(()=>{
        if (list.length > 0) {
            const HTMLEl = [];
            Object.keys(list[0]).forEach((e, i) => {
                HTMLEl.push(<th key={i}>{e}</th>)
            });

            setKeys(HTMLEl)
        }
    }, [list])

        

    return (
        
        <table className="centered-box">
            <thead>
                <tr>
                    {keys}
                </tr>
            </thead>    
            <tbody>
            {list.map(l => (
                <tr key={l.ID}>
                    {/* Acopled... */}
                    <td>{l.ID}</td>
                    <td>{l.data}</td>
                    <td><DELETEButton apiURL={"http://localhost:1000/api/data/"+l.ID}/></td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default List;
