import { useState } from "react";


function ContadorFuncional() {
    const [calorias, setCalorias] = useState(0);

    return (<div className="text-center m-3 bg-dark p-2">
        <h3 className="text-light">Calorias {calorias}</h3>
        <button className="btn btn-primary" onClick={()=>{
            setCalorias(calorias+1)}
        }>+</button>
        <button className="btn btn-danger" onClick={()=>{setCalorias(calorias-1)}}>-</button>
    </div>);
}

export default ContadorFuncional;