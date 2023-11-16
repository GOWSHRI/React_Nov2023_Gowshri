import React , { useState } from "react";
function Toogle()
{
    const [name,setName] = useState("kaioken");
    const [cnt,setCount] = useState(0);
    const transformationHandler = () => {
        let value=cnt;
        setCount(++value);
        if(cnt===3)
        {
        if(name === "Kaioken")
           setName("SuperSaiyan");
        else 
           setName("Kaioken");
           setCount(0);
        }
    };
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={transformationHandler}>Toogle</button>
        </div>
    );
}
export default Toogle;