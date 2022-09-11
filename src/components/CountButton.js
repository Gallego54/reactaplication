import React, { useEffect, useState } from "react";


function CountButton() {
  const [count, setCount] = useState(0);
  useEffect(()=>{ if(count>10) {setCount(0)} }, [count])


  return (
    <div className="centered-box">
      <button className="button-count" onClick={()=>{setCount(count+1)}}>Count {count}</button>
    </div>
  );
}

export default CountButton;
