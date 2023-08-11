import { useState } from "react";


function Fun() {
    const handleAdd=()=>{
        setNum(num+1)
    }
    const handleSub = () => {
      setNum(num - 1);
    };
    const [num, setNum] = useState(0);
    
    return ( 
        <div className="fun">
            <h1>{num}</h1>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
           
        </div>
     );
}

export default Fun;