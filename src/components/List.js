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
                HTMLEl.push(<th className="table-cell-header" key={i}>{e}</th>)
            });

            setKeys(HTMLEl)
        }
    }, [list])

        

    return (
        
        <table className="centered-box table-default">
            <thead>
                <tr>
                    {keys}
                </tr>
            </thead>    
            <tbody>
            {list.map(l => (
                <tr key={l.ID}>
                    {/* Acopled... */}
                    <td className="table-cell-default" >{l.ID}</td>
                    <td className="table-cell-default" >{l.data}</td>
                    <td className="table-cell-default table-small-cell"><DELETEButton apiURL={"http://localhost:1000/api/data/"+l.ID}/></td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default List;
